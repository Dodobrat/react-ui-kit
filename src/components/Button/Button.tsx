// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { ButtonProps } from "./Button.types";
import { pigmentOptions } from "../../helpers/pigments";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			type = "button",
			renderAs = "button",
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
			loading = false,
			loadingComponent = <SpinnerLoader />,
			children,
			...rest
		},
		ref
	) => {
		let ParsedComponent: any = renderAs;

		if (ParsedComponent === "button" && rest["href"]) {
			ParsedComponent = "a";
		}

		if (ParsedComponent === "button") {
			rest["type"] = type;
			rest["disabled"] = rest["disabled"];
		} else {
			if (ParsedComponent !== "a" || !rest["href"]) {
				rest["role"] = "button";
			}
			rest["target"] = "_blank";
			rest["rel"] = "noopener";
			rest["aria-disabled"] = rest["disabled"];
		}

		return (
			<ParsedComponent
				data-testid='Button'
				tabIndex={rest["disabled"] ? -1 : 0}
				className={cn(
					"dui__btn",
					{
						[`dui__btn--${size}`]: size !== "md",
					},
					{
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
						[`dui__btn--${pigment}`]: pigmentOptions.includes(pigment),
						[`dui__btn--color-${pigmentColor}`]: pigmentColor && pigmentOptions.includes(pigmentColor),
					},
					{
						"dui__btn--loading": loading,
						"dui__btn--active": active,
					},
					className
				)}
				{...rest}
				ref={ref}>
				{children}
				{loading && loadingComponent}
			</ParsedComponent>
		);
	}
);

export default Button;
