// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { InputProps } from "./Input.types";
import { pigmentOptions } from "../../../helpers/pigments";

const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			className,
			type = "text",
			name,
			id = name,
			valid = null,
			fieldSize = "md",
			round = false,
			pigment,
			modern = false,
			loading,
			children,
			...rest
		},
		ref
	) => {
		return (
			<input
				data-testid='Input'
				type={type}
				name={id}
				id={id}
				className={cn(
					"dui__input",
					{
						[`dui__input--${fieldSize}`]: fieldSize !== "md",
					},
					{
						"dui__input--round": round,
						"dui__input--modern": modern,
						"dui__input--loading": loading,
					},
					{
						[`dui__input--valid-${valid}`]: valid,
						[`dui__input--pigment-${pigment}`]: pigmentOptions.includes(pigment),
					},
					className
				)}
				{...rest}
				ref={ref}
			/>
		);
	}
);

export default Input;
