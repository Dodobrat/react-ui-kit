import cn from "classnames";
import { configError } from "./functions";
import {
	ElevationOptions,
	PigmentOptions,
	SizeOptions,
	ContainerSizeOptions,
	Breakpoints,
	FlavorOptions,
	PortalSizeOptions,
	FlexAlignOptions,
	FlexJustifyOptions,
	FlexDirectionOptions,
	FlexWrapOptions,
	FlexColOptions,
} from "./global";

type ClassnameGeneratorFunc = (props: Object | string) => string;
type DefaultClassnameGeneratorFunc = (baseClass: string, props: any) => string;
type FlexSpacingClassnameGeneratorFunc = (prop: any, prefix: string) => string;

export const generateCustomizationClasses: DefaultClassnameGeneratorFunc = (baseClass, props) => {
	const { size, rounded, flat, seamless, pigment, elevation } = props;

	return cn({
		[`${baseClass}--rounded`]: rounded,
		[`${baseClass}--flat`]: flat,
		[`${baseClass}--${size}`]: SizeOptions.includes(size) && size !== "md",
		[`${baseClass}--${pigment}`]: PigmentOptions.includes(pigment),
		[`dui__elevation--${elevation}`]: ElevationOptions.includes(elevation) && elevation !== "none" && !seamless,
	});
};

export const generateLoadingClasses: DefaultClassnameGeneratorFunc = (baseClass, props) => {
	const { isLoading, disableWhileLoading } = props;

	return cn({
		[`${baseClass}--loading`]: isLoading,
		[`${baseClass}--loading-disabled`]: isLoading && disableWhileLoading,
	});
};

export const generateDisabledClasses: DefaultClassnameGeneratorFunc = (baseClass, props) => {
	const { disabled } = props;

	return cn({
		[`${baseClass}--disabled`]: disabled,
	});
};

export const generateSeamlessClasses: DefaultClassnameGeneratorFunc = (baseClass, props) => {
	const { seamless } = props;

	return cn({
		[`${baseClass}--seamless`]: seamless,
	});
};

export const generateStyleClasses: ClassnameGeneratorFunc = (props = {}) => {
	const warn: (prop: any) => void = (prop) =>
		console.warn(`Invalid prop "${prop[0]}" with value ${JSON.stringify(prop[1])} supplied to component.`);

	const allowedClassnameValues = new Map([
		["pigment", PigmentOptions],
		["pigmentColor", PigmentOptions],
		["elevation", ElevationOptions],
		["flavor", FlavorOptions],
		["size", SizeOptions],
		["containerSize", ContainerSizeOptions],
		["drawerSize", SizeOptions],
		["portalSize", PortalSizeOptions],
		["align", FlexAlignOptions],
		["justify", FlexJustifyOptions],
		["direction", FlexDirectionOptions],
		["wrap", FlexWrapOptions],
		["col", FlexColOptions],
		["offset", FlexColOptions],
		["offsetRight", FlexColOptions],
	]);

	const propsEntries = Object.entries(props);
	let validClassnames = [];

	for (const prop of propsEntries) {
		if (prop[1] && typeof prop[1] === "string") {
			if (allowedClassnameValues.get(prop[0])?.includes(prop[1])) {
				validClassnames.push(`${prop[0]}--${prop[1]}`);
			} else {
				warn(prop);
			}
		}
		if (prop[1] && typeof prop[1] === "object") {
			const propEntries = Object.entries(prop[1]);
			for (const entry of propEntries) {
				if (Breakpoints.includes(entry[0])) {
					if (entry[1] && typeof entry[1] === "string" && allowedClassnameValues.get(prop[0])?.includes(entry[1])) {
						validClassnames.push(`${prop[0]}--${entry[0]}--${entry[1]}`);
					}
				} else {
					warn(prop);
				}
			}
		}
	}

	return validClassnames.join(" ");
};

//Component Specific
export const generateBtnClasses: DefaultClassnameGeneratorFunc = (baseClass, props) => {
	const { iconStart, iconEnd, wide, unWrapText, leftAlignContent, active, keyboardOnlyFocusRing, spongy, vertical } = props;

	return cn({
		[`${baseClass}--icon-start`]: iconStart,
		[`${baseClass}--icon-end`]: iconEnd,
		[`${baseClass}--wide`]: wide,
		[`${baseClass}--no-wrap`]: unWrapText,
		[`${baseClass}--left-align`]: leftAlignContent,
		[`${baseClass}--active`]: active,
		[`${baseClass}--focus-ring`]: !keyboardOnlyFocusRing,
		[`${baseClass}--still`]: !spongy,
		[`${baseClass}--vertical`]: vertical,
	});
};

//Util Generators
export const generateSpacingClasses: FlexSpacingClassnameGeneratorFunc = (prop, prefix) => {
	if (prop) {
		if (typeof prop === "object") {
			return Object.entries?.(prop)
				.map((item) => {
					if (SizeOptions.includes(item?.[1]?.toString())) {
						return `dui__flex--${prefix}-${item[0]}-${item[1]}`;
					}
					configError(prefix, {
						object: `{xs: 'sm', sm: 'md', md: 'xl' ....}`,
						string: `xs, sm, md, none ...`,
					});
					return "";
				})
				.join(" ");
		}
		if (typeof prop === "string" && (SizeOptions.includes(prop) || prop === "none")) {
			return `dui__flex--${prefix}-${prop}`;
		}

		configError(prefix, {
			object: `{xs: 'sm', sm: 'md', md: 'xl' ....}`,
			string: `xs, sm, md, none ...`,
		});
		return "";
	}
};
