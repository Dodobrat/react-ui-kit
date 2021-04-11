import React from "react";

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

//TODO: Remove
export const configError: (prop: string, supports: Object) => void = (prop, supports) => {
	console.warn(`Unsupported (${prop}) config passed to component! Please use one of the following:`);
	console.table(supports);
};
//---------------

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

export const canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);

//TODO: Export some of the more useful functions to index
