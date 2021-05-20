// Auto-Generated
import React, { useCallback, useEffect, useRef, useState } from "react";
import cn from "classnames";

import { TooltipProps } from "./Tooltip.types";
import { useConfig } from "../../context/ConfigContext";
import PortalWrapper from "../util/PortalWrapper/PortalWrapper";
import { generateSeamlessClasses, generateStyleClasses } from "../../helpers/classnameGenerator";
import { mergeRefs } from "../../helpers/functions";
import Fade from "../util/animations/Fade";
import { useEventListener } from "../../hooks/useEventListener";
import { AllPositions } from "../../helpers/global.types";

const positionTooltip: (trigger: HTMLElement, tooltip: HTMLElement, position: AllPositions, spacing: number) => void = (
	trigger,
	tooltip,
	position,
	spacing
) => {
	// I know this code is not great but at least it works.
	// It will be refactored in the future with a more robust solution.

	const triggerRect = trigger.getBoundingClientRect();
	const tooltipCoords = { x: 0, y: 0 };
	const mainPosition = position.split("-")[0];
	const secondaryPosition = position.split("-")[1];
	const isVertical = mainPosition === "top" || mainPosition === "bottom";
	const isHorizontal = mainPosition === "left" || mainPosition === "right";

	if (tooltip) {
		const constraints = {
			top: spacing,
			right: document.body.clientWidth - (tooltip.offsetWidth + spacing),
			bottom: window.innerHeight - (tooltip.offsetHeight + spacing),
			left: spacing,
		};

		switch (mainPosition) {
			case "left":
				tooltipCoords.x = triggerRect.left - (tooltip.offsetWidth + spacing);
				tooltipCoords.y = triggerRect.top + (trigger.offsetHeight - tooltip.offsetHeight) / 2;
				break;
			case "right":
				tooltipCoords.x = triggerRect.right + spacing;
				tooltipCoords.y = triggerRect.top + (trigger.offsetHeight - tooltip.offsetHeight) / 2;
				break;
			case "bottom":
				tooltipCoords.x = triggerRect.left + (trigger.offsetWidth - tooltip.offsetWidth) / 2;
				tooltipCoords.y = triggerRect.bottom + spacing;
				break;
			default:
				tooltipCoords.x = triggerRect.left + (trigger.offsetWidth - tooltip.offsetWidth) / 2;
				tooltipCoords.y = triggerRect.top - (tooltip.offsetHeight + spacing);
				break;
		}

		switch (secondaryPosition) {
			case "left":
				tooltipCoords.x = triggerRect.left;
				break;
			case "right":
				tooltipCoords.x = triggerRect.left + trigger.offsetWidth - tooltip.offsetWidth;
				break;
			case "top":
				tooltipCoords.y = triggerRect.top;
				break;
			case "bottom":
				tooltipCoords.y = triggerRect.top + trigger.offsetHeight - tooltip.offsetHeight;
				break;
			default:
				break;
		}

		if (mainPosition === "top" && tooltipCoords.y < constraints.top) {
			tooltipCoords.y = triggerRect.bottom + spacing;
		}
		if (mainPosition === "bottom" && tooltipCoords.y > constraints.bottom) {
			tooltipCoords.y = triggerRect.top - (tooltip.offsetHeight + spacing);
		}
		if (mainPosition === "left" && tooltipCoords.x < constraints.left) {
			tooltipCoords.x = triggerRect.right + spacing;
		}
		if (mainPosition === "right" && tooltipCoords.x > constraints.right) {
			tooltipCoords.x = triggerRect.left - (tooltip.offsetWidth + spacing);
		}

		if (isVertical) {
			if (tooltipCoords.x < constraints.left) {
				tooltipCoords.x = Math.min(constraints.left, triggerRect.right);
			}
			if (tooltipCoords.x > constraints.right) {
				tooltipCoords.x = Math.max(constraints.right, triggerRect.left - tooltip.offsetWidth + spacing);
			}
		}

		if (isHorizontal) {
			if (tooltipCoords.y < constraints.top) {
				tooltipCoords.y = Math.min(constraints.top, triggerRect.bottom);
			}
			if (tooltipCoords.y > constraints.bottom) {
				tooltipCoords.y = Math.max(constraints.bottom, triggerRect.top - tooltip.offsetHeight + spacing);
			}
		}

		tooltip.style.top = `${tooltipCoords.y}px`;
		tooltip.style.left = `${tooltipCoords.x}px`;
	}
};

const Tooltip: React.ForwardRefRenderFunction<HTMLDivElement, TooltipProps> = (props, ref) => {
	const {
		appConfig: { config },
	} = useConfig();

	const {
		className,
		content,
		position = config.tooltipPosition ?? "top-center",
		showOnFocus = config.tooltipShowOnFocus ?? true,
		showOnClick = config.tooltipShowOnClick ?? false,
		showOnHover = config.tooltipShowOnHover ?? true,
		elevation = config.tooltipElevation ?? "subtle",
		pigment = config.tooltipPigment ?? "default",
		size = config.tooltipSize ?? "md",
		flavor = config.tooltipFlavor ?? "default",
		seamless = config.tooltipSeamless ?? false,
		animation = config.tooltipAnimation ?? "fade",
		triggerElement = null,
		disabled,
		spacing = config.tooltipSpacing ?? 5,
		isVisible = false,
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
	const [tooltipVisible, setTooltipVisible] = useState(isVisible);
	const [triggerEl, setTriggerEl] = useState(triggerElement?.current);

	useEffect(() => {
		if (onToggle) {
			onToggle(tooltipVisible);
		}
	}, [tooltipVisible]);

	useEffect(() => {
		setTooltipVisible(isVisible);
	}, [isVisible]);

	useEffect(() => {
		setTriggerEl(triggerElement?.current);
	}, [triggerElement]);

	useEffect(() => {
		if (triggerEl) {
			positionTooltip(triggerEl, tooltipRef.current, position, spacing);
		}
	}, [triggerEl, tooltipVisible, position]);

	const handler = useCallback(() => {
		if (triggerEl && tooltipVisible) {
			positionTooltip(triggerEl, tooltipRef.current, position, spacing);
		}
	}, [triggerEl, tooltipVisible, position]);

	useEventListener("scroll", handler, { passive: true });
	useEventListener("resize", handler);

	const passThroughEvent: (handler: Function, e: Event) => void = (handler, e) => {
		if (handler) {
			handler(e);
		}
	};

	const initTooltip: (showCondition: boolean, handler: Function, e: Event) => void = (showCondition, handler, e) => {
		if (showCondition) {
			setTriggerEl(e.currentTarget);
			setTooltipVisible(true);
		}
		passThroughEvent(handler, e);
	};

	const destroyTooltip: (showCondition: boolean, handler: Function, e: Event) => void = (showCondition, handler, e) => {
		if (showCondition) {
			setTooltipVisible(false);
		}
		passThroughEvent(handler, e);
	};

	const extraChildProps: (props: any) => any = (props) => {
		return {
			...props,
			onMouseEnter: (e: MouseEvent) => initTooltip(showOnHover, props.onMouseEnter, e),
			onMouseLeave: (e: MouseEvent) => destroyTooltip(showOnHover, props.onMouseLeave, e),
			onTouchStart: (e: TouchEvent) => initTooltip(showOnHover, props.onTouchStart, e),
			onTouchEnd: (e: TouchEvent) => destroyTooltip(showOnHover, props.onTouchEnd, e),
			onFocus: (e: FocusEvent) => initTooltip(showOnFocus, props.onFocus, e),
			onBlur: (e: FocusEvent) => destroyTooltip(showOnFocus, props.onBlur, e),
			onClick: (e: Event) => {
				if (showOnClick) {
					if (!tooltipVisible) {
						setTriggerEl(e.currentTarget);
					}
					setTooltipVisible((prev) => !prev);
				}
				passThroughEvent(props.onClick, e);
			},
		};
	};

	const validChildren = React.Children.map(children, (child: JSX.Element) => {
		const validEl = React.isValidElement(child);

		if (validEl) {
			if (disabled) {
				return child;
			} else {
				return React.cloneElement(child, extraChildProps(child.props));
			}
		}

		console.error("Invalid Tooltip trigger element! Please use a valid React child / component.");
		return child;
	});

	const TooltipComponent = () => (
		<PortalWrapper>
			<div
				data-testid='Tooltip'
				role='tooltip'
				className={cn(classBase, generateStyleClasses(classDefaults), generateSeamlessClasses(classBase, classDefaults), className)}
				{...rest}
				ref={mergeRefs([tooltipRef, ref])}>
				{content}
			</div>
		</PortalWrapper>
	);

	switch (animation) {
		case "fade":
			return (
				<>
					<Fade in={tooltipVisible}>
						<TooltipComponent />
					</Fade>
					{validChildren}
				</>
			);
		default:
			return (
				<>
					{tooltipVisible && <TooltipComponent />}
					{validChildren}
				</>
			);
	}
};

export default React.forwardRef<HTMLDivElement, TooltipProps>(Tooltip);
