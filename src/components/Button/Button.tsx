// Auto-Generated
import React from "react";
import cn from "classnames";

import { ButtonProps } from "./Button.types";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";
import { ElevationOptions, PigmentOptions, SizeOptions } from "../../helpers/global";

const Button: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {
	const {
		className,
		type = "button",
		as = "button",
		elevation = "none",
		iconStart = null,
		iconEnd = null,
		leftAlignContent = false,
		unWrapText = false,
		pigment = "primary",
		pigmentColor = null,
		keyboardOnlyFocusRing = true,
		spongy = true,
		contrast = false,
		size = "md",
		rounded = false,
		round = false,
		flat = false,
		wide = false,
		active = false,
		disableWhileLoading = true,
		loading = false,
		loadingComponent = <SpinnerLoader size={size} pigment={pigment ?? pigmentColor} contrast={contrast} btnLoader />,
		children,
		...rest
	} = props;

	let ParsedComponent: React.ElementType = as;

	if (ParsedComponent === "button") {
		if (rest["href"]) {
			rest["target"] = "_blank";
			rest["rel"] = "noopener";
			rest["role"] = "button";
			ParsedComponent = "a";
		}
	} else {
		rest["role"] = "button";
		if (ParsedComponent === "a" && rest["href"]) {
			rest["target"] = "_blank";
			rest["rel"] = "noopener";
		}
	}

	return (
		<ParsedComponent
			data-testid='Button'
			tabIndex={rest["disabled"] ? -1 : 0}
			className={cn(
				"dui__btn",
				{
					[`dui__btn--${size}`]: SizeOptions.includes(size) && size !== "md",
				},
				{
					"dui__btn--icon-start": iconStart,
					"dui__btn--icon-end": iconEnd,
					"dui__btn--contrast": contrast,
					"dui__btn--rounded": rounded,
					"dui__btn--round": round,
					"dui__btn--flat": flat,
					"dui__btn--wide": wide,
					"dui__btn--no-wrap": unWrapText,
					"dui__btn--left-align": leftAlignContent,
					"dui__btn--focus-ring": !keyboardOnlyFocusRing,
					"dui__btn--still": !spongy,
				},
				{
					[`dui__btn--${pigment}`]: PigmentOptions.includes(pigment),
					[`dui__btn--color-${pigmentColor}`]: pigmentColor && PigmentOptions.includes(pigmentColor),
					[`dui__elevation--${elevation}`]: ElevationOptions.includes(elevation) && elevation !== "none",
				},
				{
					"dui__btn--loading": loading,
					"dui__btn--loading-disabled": loading && disableWhileLoading,
					"dui__btn--active": active,
				},
				className
			)}
			{...rest}
			ref={ref}>
			{iconStart && iconStart}
			{children}
			{iconEnd && iconEnd}
			{loading && <div className='dui__btn--loading__overlay'>{loadingComponent}</div>}
		</ParsedComponent>
	);
};

export default React.forwardRef<unknown, ButtonProps>(Button);
