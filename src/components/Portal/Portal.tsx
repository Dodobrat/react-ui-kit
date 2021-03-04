import React, { useCallback, useEffect } from "react";
import cn from "classnames";
import FocusTrap from "focus-trap-react";
import { useKeyPress } from "../../hooks/useKeyPress";
import { SizeOptions } from "../../helpers/global";
import PortalWrapper from "../util/PortalWrapper/PortalWrapper";
import FadePortal from "../util/animations/FadePortal";
import ZoomPortal from "../util/animations/ZoomPortal";
import { disableScrollAndScrollBar } from "../../helpers/functions";

import { PortalProps } from "./Portal.types";
import { useEventListener } from "../../hooks/useEventListener";

const Portal: React.ForwardRefRenderFunction<HTMLDivElement, PortalProps> = (props, ref) => {
	const {
		className,
		innerClassName,
		onClose,
		withFocusLock = false,
		keyboard = true,
		backdrop = true,
		size = "md",
		safeZoneSize = "md",
		verticalAlign = "center",
		animation = "default",
		bodyScrollDisable = true,
		isOpen = false,
		children,
		...rest
	} = props;

	useKeyPress("Escape", keyboard && backdrop !== "static" ? () => onClose?.() : () => null);

	useEffect(() => {
		if (bodyScrollDisable) {
			const noScroll = document.body.classList.contains("no-scroll");

			if (!noScroll) {
				disableScrollAndScrollBar(isOpen);
			}
			return () => disableScrollAndScrollBar(false);
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
							"dui__portal",
							{
								"dui__portal--backdrop": backdrop,
							},
							className
						)}
						{...rest}
						ref={ref}>
						<div
							className={cn(
								"dui__portal__inner",
								{
									[`dui__portal__inner--vertical-${verticalAlign}`]: !!verticalAlign,
									[`dui__portal__inner--safe-${safeZoneSize}`]: SizeOptions.includes(safeZoneSize),
									[`dui__portal__inner--${size}`]: SizeOptions.includes(size),
								},
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
			return <PortalContent />;
	}
};

export default React.forwardRef<HTMLDivElement, PortalProps>(Portal);
