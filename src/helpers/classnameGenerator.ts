import cn from "classnames";
import { configError } from "./functions";
import { ElevationOptions, PigmentOptions, SizeOptions } from "./global";

type DefaultClassnameGeneratorFunc = (baseClass: string, props: any) => string;
type FlexSpacingClassnameGeneratorFunc = (prop: any, prefix: string) => string;
type FlexClassnameGeneratorFunc = (prop: any, prefix: string, allowedNames: Array<string>, initial: string) => string;
type FlexColClassnameGeneratorFunc = (prop: any) => string;

export const generateEssentialCustomizationClasses: DefaultClassnameGeneratorFunc = (baseClass, props) => {
	const { flat, seamless, pigment, elevation } = props;

	return cn({
		[`${baseClass}--flat`]: flat,
		[`${baseClass}--${pigment}`]: PigmentOptions.includes(pigment),
		[`dui__elevation--${elevation}`]: ElevationOptions.includes(elevation) && elevation !== "none" && !seamless,
	});
};

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

export const generatePigmentColorClasses: DefaultClassnameGeneratorFunc = (baseClass, props) => {
	const { pigmentColor } = props;

	return cn({
		[`${baseClass}--color-${pigmentColor}`]: pigmentColor && PigmentOptions.includes(pigmentColor),
	});
};

//Component Specific
export const generateBtnClasses: DefaultClassnameGeneratorFunc = (baseClass, props) => {
	const { iconStart, iconEnd, round, wide, unWrapText, leftAlignContent, active, keyboardOnlyFocusRing, spongy } = props;

	return cn({
		[`${baseClass}--icon-start`]: iconStart,
		[`${baseClass}--icon-end`]: iconEnd,
		[`${baseClass}--round`]: round,
		[`${baseClass}--wide`]: wide,
		[`${baseClass}--no-wrap`]: unWrapText,
		[`${baseClass}--left-align`]: leftAlignContent,
		[`${baseClass}--active`]: active,
		[`${baseClass}--focus-ring`]: !keyboardOnlyFocusRing,
		[`${baseClass}--still`]: !spongy,
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

export const generateOtherClasses: FlexClassnameGeneratorFunc = (prop, prefix, allowedNames, initial) => {
	if (prop) {
		if (typeof prop === "object") {
			return Object.entries?.(prop)
				.map((item) => {
					if (allowedNames.includes(item?.[1]?.toString())) {
						return `dui__flex--${prefix}-${item[0]}-${item[1]}`;
					}
					configError(prefix, {
						object: `{xs: ${allowedNames}, sm: ...}`,
						string: allowedNames.toString(),
					});
					return "";
				})
				.join(" ");
		}
		if (typeof prop === "string" && allowedNames.includes(prop)) {
			if (prop !== initial) {
				return `dui__flex--${prefix}-${prop}`;
			} else {
				return "";
			}
		}

		configError(prefix, {
			object: `{xs: ${allowedNames}, sm: ...}`,
			string: allowedNames.toString(),
		});
		return "";
	}
};

export const generateColClasses: FlexColClassnameGeneratorFunc = (col) => {
	if (col) {
		if (typeof col === "object") {
			return Object.entries?.(col)
				.map((item) => `dui__flex__col-${item[0]}-${item[1]}`)
				.join(" ");
		}
		if (typeof col === "number") {
			return `dui__flex__col-${col}`;
		}
		if (typeof col === "string" && col === "auto") {
			return `dui__flex__col-${col}`;
		}

		configError("col", {
			object: `{xs: 12, sm: 8, md: 6 ....}`,
			number: `1 ... 12`,
			string: `auto`,
		});
		return "";
	}
};

export const generateOffsetClasses: FlexColClassnameGeneratorFunc = (offset) => {
	if (offset) {
		if (typeof offset === "object") {
			return Object.entries?.(offset)
				.map((item) => `dui__flex__col--offset-${item[0]}-${item[1]}`)
				.join(" ");
		}
		if (typeof offset === "number") {
			return `dui__flex__col--offset-${offset}`;
		}

		configError("offset", {
			object: `{xs: 12, sm: 8, md: 6 ....}`,
			number: `1 ... 12`,
		});
		return "";
	}
};

export const generateHideClasses: FlexColClassnameGeneratorFunc = (hide) => {
	if (hide) {
		if (typeof hide === "boolean") {
			return `dui__flex__col--hide`;
		}
		if (typeof hide === "string" && SizeOptions.includes(hide)) {
			return `dui__flex__col--hide-${hide}`;
		}

		configError("hide", {
			boolean: `true / false`,
			string: `xs / sm / md ...`,
		});
		return "";
	}
};
