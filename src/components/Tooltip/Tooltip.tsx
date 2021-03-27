// Auto-Generated
import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import cn from "classnames";

import { TooltipProps } from "./Tooltip.types";
import { GlobalContext } from "../../context/GlobalContext/GlobalContext";
import PortalWrapper from "../util/PortalWrapper/PortalWrapper";
import { generateCustomizationClasses, generateSeamlessClasses } from "../../helpers/classnameGenerator";
import { mergeRefs } from "../../helpers/functions";
import { useEventListener } from "../../hooks/useEventListener";

const Tooltip: React.ForwardRefRenderFunction<HTMLDivElement, TooltipProps> = (props, ref) => {
	const {
		appConfig: { config },
	} = useContext(GlobalContext);

	const {
		className,
		content,
		position = "top",
		adjustToViewport = true,
		showOnFocus = true,
		showOnClick = false,
		showOnHover = true,
		elevation = config.tooltipElevation ?? "interstellar",
		pigment = config.tooltipPigment ?? null,
		size = config.tooltipSize ?? "md",
		rounded = config.tooltipRounded ?? false,
		flat = config.tooltipFlat ?? false,
		seamless = config.tooltipSeamless ?? false,
		triggerElement = null,
		tooltipSpacing = 5,
		isVisible = null,
		onToggle,
		children,
		...rest
	} = props;

	const classDefaults = {
		elevation,
		pigment,
		size,
		rounded,
		flat,
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
	}, [tooltipTrigger]);

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

			const tooltipTopPosition = element.offsetTop - (tooltipRect.height + tooltipSpacing);
			const tooltipBottomPosition = element.offsetTop + childRect.height + tooltipSpacing;
			const tooltipLeftPosition = element.offsetLeft - (tooltipRect.width + tooltipSpacing);
			const tooltipRightPosition = element.offsetLeft + childRect.width + tooltipSpacing;

			const tooltipTBLeftPosition = element.offsetLeft + childRect.width / 2 - tooltipRect.width / 2;
			const tooltipLRTopPosition = element.offsetTop + childRect.height / 2 - tooltipRect.height / 2;

			switch (position) {
				case "bottom": {
					const bottomTop = tooltipBottomPosition;
					const bottomLeft = tooltipTBLeftPosition;

					const flipTreshold = element.offsetTop - window.innerHeight + childRect.height + (tooltipRect.height + tooltipSpacing);

					const adjustedBottomTop = window.scrollY < flipTreshold ? tooltipTopPosition : bottomTop;
					const adjustedBottomLeft = Math.max(bottomLeft, tooltipSpacing);

					setTooltipPosition({
						top: adjustToViewport ? adjustedBottomTop : bottomTop,
						left: adjustToViewport ? adjustedBottomLeft : bottomLeft,
					});
					break;
				}
				case "left": {
					const leftTop = tooltipLRTopPosition;
					const leftLeft = tooltipLeftPosition;

					const adjustedLeftLeft = window.scrollX > leftLeft ? tooltipRightPosition : leftLeft;

					setTooltipPosition({
						top: leftTop,
						left: adjustToViewport ? adjustedLeftLeft : leftLeft,
					});
					break;
				}
				case "right": {
					const rightTop = tooltipLRTopPosition;
					const rightLeft = tooltipRightPosition;

					const flipTreshhold = rightLeft + (tooltipRect.width + tooltipSpacing);

					const adjustedRightLeft =
						window.scrollX > flipTreshhold || window.innerWidth < flipTreshhold ? tooltipLeftPosition : rightLeft;

					setTooltipPosition({
						top: rightTop,
						left: adjustToViewport ? adjustedRightLeft : rightLeft,
					});
					break;
				}
				default: {
					const topTop = tooltipTopPosition;
					const topLeft = tooltipTBLeftPosition;

					const adjustedTopTop = window.scrollY > topTop ? tooltipBottomPosition : topTop;
					const adjustedTopLeft = Math.max(topLeft, tooltipSpacing);

					setTooltipPosition({
						top: adjustToViewport ? adjustedTopTop : topTop,
						left: adjustToViewport ? adjustedTopLeft : topLeft,
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
		console.error("Invalid Tooltip child! Please use a valid React child / component.");
		return child;
	});

	return (
		<>
			{tooltipVisible && (
				<PortalWrapper>
					<div
						data-testid='Tooltip'
						className={cn(
							classBase,
							generateCustomizationClasses(classBase, classDefaults),
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
