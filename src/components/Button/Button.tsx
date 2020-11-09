// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { ButtonProps } from "./Button.types";
import { pigmentOptions } from "../../helpers/pigments";
import Icon from "../Icon/Icon";

const ButtonLoader: React.FC<{ size: number }> = ({ size }) => {
	const strokeWidth = Math.max(2, size * 0.1);
	return (
		<svg viewBox={`0 0 ${size * 2} ${size * 2}`}>
			<circle cx={size} cy={size} r={size - Math.max(5, strokeWidth)} strokeWidth={strokeWidth} />
		</svg>
	);
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			type = "button",
			ariaLabel = "button",
			size = "md",
			outlined = false,
			round = false,
			wide = false,
			flex = false,
			unWrapText = false,
			leftAlignContent = false,
			pigment = "none",
			modern = false,
			iconLeft = null,
			iconRight = null,
			loading = false,
			active = false,
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
				tabIndex={rest?.disabled ? -1 : 0}
				className={cn(
					"dodo-ui__btn",
					{
						"dodo-ui__btn--sm": size === "sm",
						"dodo-ui__btn--lg": size === "lg",
						"dodo-ui__btn--xl": size === "xl",
					},
					{
						"dodo-ui__btn--outlined": outlined,
						"dodo-ui__btn--modern": modern,
						"dodo-ui__btn--round": round,
						"dodo-ui__btn--wide": wide,
						"dodo-ui__btn--flex": flex,
						"dodo-ui__btn--no-wrap": unWrapText,
						"dodo-ui__btn--left-align": leftAlignContent,
					},
					{
						"dodo-ui__btn--icon-left": !!iconLeft,
						"dodo-ui__btn--icon-right": !!iconRight,
					},
					{
						[`dodo-ui__btn--pigment-${pigment}`]: pigmentOptions.includes(pigment),
					},
					{
						"dodo-ui__btn--loading": loading,
						"dodo-ui__btn--active": active,
					},
					className
				)}
				{...rest}
				ref={ref}>
				{typeof iconLeft !== "string" ? iconLeft : <Icon>{iconLeft}</Icon>}
				{children}
				{typeof iconRight !== "string" ? iconRight : <Icon>{iconRight}</Icon>}
				{loading && <ButtonLoader size={10} />}
			</button>
		);
	}
);

export default Button;
