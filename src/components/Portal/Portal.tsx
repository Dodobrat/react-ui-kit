import React, { useCallback, useEffect } from "react";
import cn from "classnames";
import FocusTrap from "focus-trap-react";
import { useKeyPress } from "../../hooks/useKeyPress";
import PortalWrapper from "../util/PortalWrapper/PortalWrapper";
import FadePortal from "../util/animations/FadePortal";
import ZoomPortal from "../util/animations/ZoomPortal";
import { disableScrollAndScrollBar } from "../../helpers/functions";

import { PortalProps } from "./Portal.types";
import { useEventListener } from "../../hooks/useEventListener";
import { useConfig } from "../../context/ConfigContext";
import { generateStyleClasses } from "../../helpers/classnameGenerator";

const Portal: React.ForwardRefRenderFunction<HTMLDivElement, PortalProps> = (props, ref) => {
	const {
		appConfig: { config },
	} = useConfig();

	const {
		className,
		innerClassName,
		onClose,
		withFocusLock = false,
		keyboard = config.portalKeyboard ?? true,
		backdrop = true,
		size = config.size ?? "md",
		safeZoneSize = config.portalSafeZoneSize ?? "md",
		verticalAlign = config.portalVerticalAlign ?? "center",
		animation = config.portalAnimation ?? "default",
		bodyScrollDisable = config.portalBodyScrollDisable ?? true,
		isOpen = false,
		children,
		...rest
	} = props;

	const classDefaults = {
		portalSize: size,
	};

	const classBase = "dui__portal";
	const innerClassBase = "dui__portal__inner";

	useKeyPress("Escape", keyboard && backdrop !== "static" ? () => onClose?.() : () => null);

	useEffect(() => {
		if (bodyScrollDisable) {
			const noScroll = document.body.classList.contains("no-scroll");

			if (!noScroll) {
				disableScrollAndScrollBar(isOpen);
			}
		}
	}, [isOpen]);

	const handler = useCallback(
		(e) => {
			if (backdrop !== "static") {
				if (e.target.classList.contains("dui__portal") || e.target.classList.contains("dui__portal__inner")) {
					return onClose?.();
				}
			}
		},
		[onClose]
	);

	useEventListener("click", handler);

	const PortalContent = () => {
		return (
			<PortalWrapper>
				<FocusTrap active={withFocusLock}>
					<div
						data-testid='Portal'
						className={cn(
							classBase,
							{
								[`${classBase}--backdrop`]: backdrop,
							},
							className
						)}
						{...rest}
						ref={ref}>
						<div
							className={cn(
								innerClassBase,
								{
									[`${innerClassBase}--vertical-${verticalAlign}`]: !!verticalAlign,
								},
								generateStyleClasses(classDefaults),
								innerClassName
							)}>
							{children}
						</div>
					</div>
				</FocusTrap>
			</PortalWrapper>
		);
	};

	switch (animation) {
		case "default":
			return (
				<FadePortal in={isOpen}>
					<PortalContent />
				</FadePortal>
			);
		case "zoom":
			return (
				<ZoomPortal in={isOpen}>
					<PortalContent />
				</ZoomPortal>
			);
		default:
			return isOpen && <PortalContent />;
	}
};

export default React.forwardRef<HTMLDivElement, PortalProps>(Portal);
