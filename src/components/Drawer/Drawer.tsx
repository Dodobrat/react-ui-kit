// Auto-Generated
import React, { useEffect } from "react";
import cn from "classnames";

import { DrawerProps } from "./Drawer.types";
import PortalWrapper from "../util/PortalWrapper/PortalWrapper";
import FocusTrap from "focus-trap-react";
import SlideIn from "../util/animations/SlideIn";
import { ElevationOptions, SizeOptions } from "../../helpers/global";
import { useKeyPress } from "../../hooks/useKeyPress";
import { disableScrollAndScrollBar } from "../../helpers/functions";

const Drawer: React.ForwardRefRenderFunction<HTMLDivElement, DrawerProps> = (props, ref) => {
	const {
		className,
		innerClassName,
		onClose,
		elevation = "interstellar",
		withFocusLock = false,
		keyboard = true,
		backdrop = true,
		size = "md",
		position = "left",
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

	useEffect(() => {
		if (backdrop !== "static") {
			const detectClicked = (e: any) => {
				if (e.target.classList.contains("dui__drawer") || e.target.classList.contains("dui__drawer__inner")) {
					return onClose?.();
				}
			};
			document.addEventListener("click", detectClicked);
			return () => {
				document.removeEventListener("click", detectClicked);
			};
		}
	});

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

	if (position) {
		return (
			<SlideIn position={position} in={isOpen}>
				<DrawerContent />
			</SlideIn>
		);
	}
	return <DrawerContent />;
};

export default React.forwardRef<HTMLDivElement, DrawerProps>(Drawer);
