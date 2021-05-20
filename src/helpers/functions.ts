import React from "react";
import { AllPositions } from "./global.types";

export const parseValueToPercent: (min: number, max: number, value: number, decimals?: number) => number | string = (
	min,
	max,
	value,
	decimals
) => {
	const range: number = max - min;
	const correctedStartValue: number = value - min;
	const percentage: number = (correctedStartValue * 100) / range;
	if (decimals !== 0) {
		return Math.min(percentage, 100).toFixed(decimals);
	}
	return Math.min(percentage, 100).toFixed(0);
};

export const disableScrollAndScrollBar: (active: boolean) => void = (active) => {
	if (active) {
		document.body.classList.add("no-scroll");
		const viewportWidth = document.documentElement.clientWidth;
		const windowWidth = window.innerWidth;
		const scrollBarWidth = windowWidth - viewportWidth;

		document.body.style.paddingRight = `${scrollBarWidth}px`;
		document.body.style.overflow = "hidden";
	} else {
		document.body.classList.remove("no-scroll");
		document.body.style.paddingRight = `0px`;
		document.body.style.overflow = "auto";
	}
};

export const addElementAttributes: (component: React.ElementType, props: Object) => React.ElementType = (component, props) => {
	if (component === "button") {
		if (props["href"]) {
			props["target"] = "_blank";
			props["rel"] = "noopener";
			props["role"] = "button";
			return "a";
		}
		return component;
	} else {
		if (props?.["onClick"] || props?.["to"]) {
			props["role"] = "button";
			return component;
		}
		if (props?.["href"]) {
			props["target"] = "_blank";
			props["rel"] = "noopener";
			return "a";
		}
		return component;
	}
};

export const addElementAttributesInObj: (props: Object) => Object = (props) => {
	const extraProps = { ...props };
	if (extraProps?.["as"] === "button") {
		if (extraProps["href"]) {
			extraProps["target"] = "_blank";
			extraProps["rel"] = "noopener";
			extraProps["role"] = "button";
			extraProps["as"] = "a";
		}
	} else {
		if (extraProps?.["onClick"] || extraProps?.["to"]) {
			extraProps["role"] = "button";
		}
		if (extraProps?.["href"]) {
			extraProps["target"] = "_blank";
			extraProps["rel"] = "noopener";
			extraProps["as"] = "a";
		}
	}
	return extraProps;
};

export const configError: (prop: string, supports: Object) => void = (prop, supports) => {
	console.warn(`Unsupported (${prop}) config passed to component! Please use one of the following:`);
	console.table(supports);
};

export const isTouchDevice: () => boolean = () => {
	return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
};

export const mergeRefs: (refs: Array<React.MutableRefObject<any> | React.LegacyRef<any>>) => React.RefCallback<any> = (refs) => {
	return (value) => {
		refs.forEach((ref) => {
			if (typeof ref === "function") {
				ref(value);
			} else if (ref != null) {
				(ref as React.MutableRefObject<any | null>).current = value;
			}
		});
	};
};

export const debounce: (func: any, wait: number) => (...args: any[]) => void = (func, wait) => {
	let timeout: any;

	return (...args) => {
		const later = () => {
			clearTimeout(timeout);
			func(...args);
		};

		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
};

export const createRipple: ({ e, elem }: { e: React.PointerEvent; elem: HTMLElement | React.MutableRefObject<any> | any }) => void = ({
	e,
	elem,
}) => {
	const element = elem.current ?? elem;

	if (element) {
		e.stopPropagation();
		const rect = element.getBoundingClientRect();

		const circle = document.createElement("div");
		const diameter = Math.max(element.clientWidth, element.clientHeight);
		const radius = diameter / 2;
		const x = e.clientX - rect.left - radius;
		const y = e.clientY - rect.top - radius;

		element.style.overflow = "hidden";
		circle.style.width = circle.style.height = `${diameter}px`;
		circle.style.left = `${x}px`;
		circle.style.top = `${y}px`;
		circle.classList.add("dui__ripple");

		const ripple = element.getElementsByClassName("dui__ripple")[0];

		if (ripple) {
			ripple.remove();
		}

		element.appendChild(circle);
	}
};

export const positionTooltip: (trigger: HTMLElement, tooltip: HTMLElement, position: AllPositions, spacing: number) => void = (
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

	const oppositePosition = () => {
		if (mainPosition === "top") return "bottom";
		if (mainPosition === "bottom") return "top";
		if (mainPosition === "left") return "right";
		if (mainPosition === "right") return "left";
	};

	let tranformOrigin = oppositePosition();

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
			tranformOrigin = "top";
		}
		if (mainPosition === "bottom" && tooltipCoords.y > constraints.bottom) {
			tooltipCoords.y = triggerRect.top - (tooltip.offsetHeight + spacing);
			tranformOrigin = "bottom";
		}
		if (mainPosition === "left" && tooltipCoords.x < constraints.left) {
			tooltipCoords.x = triggerRect.right + spacing;
			tranformOrigin = "left";
		}
		if (mainPosition === "right" && tooltipCoords.x > constraints.right) {
			tooltipCoords.x = triggerRect.left - (tooltip.offsetWidth + spacing);
			tranformOrigin = "right";
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
		tooltip.style.transformOrigin = `${tranformOrigin}`;
	}
};

export const canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
