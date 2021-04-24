// Auto-Generated
import React, { useCallback, useEffect, useRef } from "react";
import cn from "classnames";

import { DrawerProps } from "./Drawer.types";
import PortalWrapper from "../util/PortalWrapper/PortalWrapper";
import FocusTrap from "focus-trap-react";
import SlideIn from "../util/animations/SlideIn";
import { useKeyPress } from "../../hooks/useKeyPress";
import { disableScrollAndScrollBar } from "../../helpers/functions";
import { useEventListener } from "../../hooks/useEventListener";
import { useConfig } from "../../context/ConfigContext";
import { generateStyleClasses } from "../../helpers/classnameGenerator";

let drawerCount = 0;

const Drawer: React.ForwardRefRenderFunction<HTMLDivElement, DrawerProps> = (props, ref) => {
	const {
		appConfig: { config },
	} = useConfig();

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

	const classDefaults = {
		elevation,
		drawerSize: size,
	};

	const drawerInstance = useRef(0);

	const classBase = "dui__drawer";
	const innerClassBase = "dui__drawer__inner";
	const drawerId = `${classBase}__${drawerInstance.current}`;

	useKeyPress("Escape", keyboard && backdrop !== "static" ? () => onClose?.() : () => null);

	useEffect(() => {
		drawerCount += 1;
		drawerInstance.current = drawerCount;
		return () => {
			drawerCount -= 1;
		};
	}, []);

	useEffect(() => {
		if (bodyScrollDisable) {
			if (drawerCount > 0) {
				disableScrollAndScrollBar(isOpen);
			}
		}
	}, [isOpen]);

	const handler = useCallback(
		(e) => {
			if (backdrop !== "static") {
				if (e.target.classList.contains(classBase) && e.target.getAttribute("id") === drawerId) {
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
						id={drawerId}
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
									[`${innerClassBase}--position-${position}`]: position,
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
