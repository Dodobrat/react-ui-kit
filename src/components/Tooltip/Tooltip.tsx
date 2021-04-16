// Auto-Generated
import React, { useCallback, useEffect, useRef, useState } from "react";
import cn from "classnames";

import { TooltipProps } from "./Tooltip.types";
import { useConfig } from "../../context/ConfigContext";
import PortalWrapper from "../util/PortalWrapper/PortalWrapper";
import { generateSeamlessClasses, generateStyleClasses } from "../../helpers/classnameGenerator";
import { mergeRefs } from "../../helpers/functions";
import { useEventListener } from "../../hooks/useEventListener";

const Tooltip: React.ForwardRefRenderFunction<HTMLDivElement, TooltipProps> = (props, ref) => {
	const {
		appConfig: { config },
	} = useConfig();

	const {
		className,
		content,
		position = "top",
		adjustToViewport = true,
		showOnFocus = true,
		showOnClick = false,
		showOnHover = true,
		elevation = config.tooltipElevation ?? "subtle",
		pigment = config.tooltipPigment ?? "default",
		size = config.tooltipSize ?? "md",
		flavor = config.tooltipFlavor ?? "default",
		seamless = config.tooltipSeamless ?? false,
		triggerElement = null,
		spacing = 5,
		isVisible = null,
		onToggle,
		children,
		...rest
	} = props;

	const classDefaults = {
		elevation,
		pigment,
		size,
		flavor,
		seamless,
	};

	const classBase = "dui__tooltip";

	const tooltipRef = useRef(null);
	const [forceUpdate, setForceUpdate] = useState(0);
	const [tooltipVisible, setTooltipVisible] = useState(isVisible);
	const [tooltipTrigger, setTooltipTrigger] = useState(null);
	const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

	const handler = useCallback(() => {
		if (adjustToViewport && tooltipTrigger) {
			calculatePosition(tooltipTrigger);
		}
	}, [tooltipTrigger, tooltipPosition]);

	useEventListener("scroll", handler, { passive: true });
	useEventListener("resize", handler);

	useEffect(() => {
		if (isVisible !== null) {
			setTooltipVisible(isVisible);
			setForceUpdate((prev) => prev + 1);
		}
	}, [isVisible]);

	useEffect(() => {
		if (tooltipTrigger) {
			calculatePosition(tooltipTrigger);
		}
	}, [tooltipTrigger, forceUpdate]);

	useEffect(() => {
		if (triggerElement?.current) {
			setTooltipTrigger(triggerElement.current);
		}
	}, [triggerElement]);

	useEffect(() => {
		if (onToggle) {
			onToggle(tooltipVisible);
		}
	}, [tooltipVisible]);

	useEffect(() => {
		const tooltipEl = tooltipRef.current;

		const { top, left } = tooltipPosition;

		if (tooltipEl) {
			tooltipEl.style.top = `${top}px`;
			tooltipEl.style.left = `${left}px`;
		}
	}, [tooltipPosition]);

	const calculatePosition: (element: HTMLElement | React.MutableRefObject<any> | any) => void = (element) => {
		const childRect = tooltipVisible ? element?.getBoundingClientRect?.() : null;
		const tooltipEl = tooltipRef.current;

		if (tooltipVisible && tooltipEl && element) {
			const tooltipRect = tooltipEl.getBoundingClientRect();

			const tooltipTopPosition = element.offsetTop - (tooltipRect.height + spacing);
			const tooltipBottomPosition = element.offsetTop + childRect.height + spacing;
			const tooltipLeftPosition = element.offsetLeft - (tooltipRect.width + spacing);
			const tooltipRightPosition = element.offsetLeft + childRect.width + spacing;

			const tooltipTBLeftPosition = element.offsetLeft + childRect.width / 2 - tooltipRect.width / 2;
			const tooltipLRTopPosition = element.offsetTop + childRect.height / 2 - tooltipRect.height / 2;

			switch (position) {
				case "bottom": {
					const flipTreshold = element.offsetTop - window.innerHeight + childRect.height + (tooltipRect.height + spacing);

					const adjustedBottomTop = window.scrollY < flipTreshold ? tooltipTopPosition : tooltipBottomPosition;
					const adjustedBottomLeft = Math.max(tooltipTBLeftPosition, spacing);

					setTooltipPosition({
						top: adjustToViewport ? adjustedBottomTop : tooltipBottomPosition,
						left: adjustToViewport ? adjustedBottomLeft : tooltipTBLeftPosition,
					});
					break;
				}
				case "left": {
					const adjustedLeftLeft = window.scrollX > tooltipLeftPosition ? tooltipRightPosition : tooltipLeftPosition;

					setTooltipPosition({
						top: tooltipLRTopPosition,
						left: adjustToViewport ? adjustedLeftLeft : tooltipLeftPosition,
					});
					break;
				}
				case "right": {
					const flipTreshhold = tooltipRightPosition + (tooltipRect.width + spacing);

					const adjustedRightLeft =
						window.scrollX > flipTreshhold || window.innerWidth < flipTreshhold ? tooltipLeftPosition : tooltipRightPosition;

					setTooltipPosition({
						top: tooltipLRTopPosition,
						left: adjustToViewport ? adjustedRightLeft : tooltipRightPosition,
					});
					break;
				}
				default: {
					const adjustedTopTop = window.scrollY > tooltipTopPosition ? tooltipBottomPosition : tooltipTopPosition;
					const adjustedTopLeft = Math.max(tooltipTBLeftPosition, spacing);

					setTooltipPosition({
						top: adjustToViewport ? adjustedTopTop : tooltipTopPosition,
						left: adjustToViewport ? adjustedTopLeft : tooltipTBLeftPosition,
					});
					break;
				}
			}
		}
	};

	const passThroughEvent: (handler: Function, e: Event) => void = (handler, e) => {
		if (handler) {
			handler(e);
		}
	};

	const extraChildProps: (props: any) => any = (props) => {
		return {
			...props,
			onPointerOver: (e: PointerEvent) => {
				if (showOnHover) {
					setTooltipTrigger(e.currentTarget);
					setTooltipVisible(true);
				}
				passThroughEvent(props.onPointerOver, e);
			},
			onPointerLeave: (e: PointerEvent) => {
				if (showOnHover) {
					setTooltipTrigger(null);
					setTooltipVisible(false);
				}
				passThroughEvent(props.onPointerLeave, e);
			},
			onFocus: (e: FocusEvent) => {
				if (showOnFocus) {
					setTooltipTrigger(e.currentTarget);
					setTooltipVisible(true);
				}
				passThroughEvent(props.onFocus, e);
			},
			onBlur: (e: FocusEvent) => {
				if (showOnFocus) {
					setTooltipTrigger(null);
					setTooltipVisible(false);
				}
				passThroughEvent(props.onBlur, e);
			},
			onClick: (e: Event) => {
				if (showOnClick) {
					setTooltipTrigger(e.currentTarget);
					setTooltipVisible((prev) => !prev);
					setForceUpdate((prev) => prev + 1);
				}
				passThroughEvent(props.onClick, e);
			},
		};
	};

	const childrenListeners = React.Children.map(children, (child: JSX.Element) => {
		const validEl = React.isValidElement(child);
		if (validEl) {
			return {
				...child,
				props: extraChildProps(child.props),
			};
		}
		console.error("Invalid Tooltip trigger element! Please use a valid React child / component.");
		return child;
	});

	return (
		<>
			{tooltipVisible && (
				<PortalWrapper>
					<div
						data-testid='Tooltip'
						role='tooltip'
						className={cn(
							classBase,
							generateStyleClasses(classDefaults),
							generateSeamlessClasses(classBase, classDefaults),
							className
						)}
						{...rest}
						ref={mergeRefs([tooltipRef, ref])}>
						{content}
					</div>
				</PortalWrapper>
			)}

			{childrenListeners}
		</>
	);
};

export default React.forwardRef<HTMLDivElement, TooltipProps>(Tooltip);
