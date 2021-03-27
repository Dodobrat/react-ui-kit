// Auto-Generated
import React, { useCallback, useContext, useEffect } from "react";
import cn from "classnames";

import { DrawerProps } from "./Drawer.types";
import PortalWrapper from "../util/PortalWrapper/PortalWrapper";
import FocusTrap from "focus-trap-react";
import SlideIn from "../util/animations/SlideIn";
import { ElevationOptions, SizeOptions } from "../../helpers/global";
import { useKeyPress } from "../../hooks/useKeyPress";
import { disableScrollAndScrollBar } from "../../helpers/functions";
import { useEventListener } from "../../hooks/useEventListener";
import { GlobalContext } from "../../context/GlobalContext/GlobalContext";

const Drawer: React.ForwardRefRenderFunction<HTMLDivElement, DrawerProps> = (props, ref) => {
	const {
		appConfig: { config },
	} = useContext(GlobalContext);

	const {
		className,
		innerClassName,
		onClose,
		elevation = config.drawerElevation ?? "interstellar",
		withFocusLock = false,
		keyboard = config.drawerKeyboard ?? true,
		backdrop = true,
		size = config.size ?? "md",
		position = config.drawerPosition ?? "left",
		bodyScrollDisable = config.drawerBodyScrollDisable ?? true,
		isOpen = false,
		animation = "slide",
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
				if (e.target.classList.contains("dui__drawer") || e.target.classList.contains("dui__drawer__inner")) {
					return onClose?.();
				}
			}
		},
		[onClose]
	);

	useEventListener("click", handler);

	const DrawerContent = () => {
		return (
			<PortalWrapper>
				<FocusTrap active={withFocusLock}>
					<div
						data-testid='Drawer'
						className={cn(
							"dui__drawer",
							{
								"dui__drawer--backdrop": backdrop,
							},
							className
						)}
						{...rest}
						ref={ref}>
						<div
							className={cn(
								"dui__drawer__inner",
								{
									[`dui__drawer__inner--position-${position}`]: position,
									[`dui__drawer__inner--${size}`]: SizeOptions.includes(size),
									[`dui__elevation--${elevation}`]: ElevationOptions.includes(elevation) && elevation !== "none",
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
		case "slide":
			return (
				<SlideIn position={position} in={isOpen}>
					<DrawerContent />
				</SlideIn>
			);
		default:
			return isOpen && <DrawerContent />;
	}
};

export default React.forwardRef<HTMLDivElement, DrawerProps>(Drawer);
