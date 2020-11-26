// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { ButtonProps } from "./Button.types";
import { pigmentOptions } from "../../../helpers/pigments";

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
			size = "md",
			outlined = false,
			round = false,
			wide = false,
			flex = false,
			unWrapText = false,
			leftAlignContent = false,
			pigment = "primary",
			modern = false,
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
				tabIndex={rest["disabled"] ? -1 : 0}
				className={cn(
					"dui__btn",
					{
						[`dui__btn--${size}`]: size !== "md",
					},
					{
						"dui__btn--outlined": outlined,
						"dui__btn--modern": modern,
						"dui__btn--round": round,
						"dui__btn--wide": wide,
						"dui__btn--flex": flex,
						"dui__btn--no-wrap": unWrapText,
						"dui__btn--left-align": leftAlignContent,
					},
					{
						[`dui__btn--pigment-${pigment}`]: pigmentOptions.includes(pigment),
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
				{loading && <ButtonLoader size={10} />}
			</button>
		);
	}
);

export default Button;
