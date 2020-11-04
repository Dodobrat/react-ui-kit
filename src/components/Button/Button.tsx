// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { ButtonProps } from "./Button.types";
import { pigmentOptions } from "../../helpers/pigments";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			type = "button",
			ariaLabel = "button",
			size = "default",
			outlined = false,
			rounded = false,
			wide = false,
			flex = false,
			unWrapText = false,
			leftAlignContent = false,
			pigment = "none",
			hoverPigment = "none",
			focusPigment = "none",
			children,
			...rest
		},
		ref
	) => {
		return (
			<button
				data-testid='Button'
				type={type}
				aria-label={ariaLabel}
				className={cn(
					"dodo-ui__btn",
					{
						"dodo-ui__btn--sm": size === "sm",
						"dodo-ui__btn--lg": size === "lg",
						"dodo-ui__btn--xl": size === "xl",
					},
					{
						"dodo-ui__btn--outlined": outlined,
						"dodo-ui__btn--round": rounded,
						"dodo-ui__btn--wide": wide,
						"dodo-ui__btn--flex": flex,
						"dodo-ui__btn--no-wrap": unWrapText,
						"dodo-ui__btn--left-align": leftAlignContent,
					},
					{
						[`dodo-ui__btn--${pigment}`]: pigmentOptions.includes(pigment),
						[`dodo-ui__btn--hover-${pigment}`]: pigmentOptions.includes(pigment),
						[`dodo-ui__btn--focus-${pigment}`]: pigmentOptions.includes(pigment),
					},
					className
				)}
				{...rest}
				ref={ref}>
				{children}
			</button>
		);
	}
);

export default Button;
