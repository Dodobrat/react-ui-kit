// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { InputProps } from "./Input.types";
import { PigmentOptions } from "../../../helpers/global";

const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			className,
			labelClassName,
			fieldClassName,
			hintClassName,
			label = null,
			invisibleLabel = false,
			hintMsg = null,
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
		// const [populated, setPopulated] = useState(rest.value ? true : false);
		return (
			<div
				className={cn(
					"dui__input",
					// {
					// 	"dui__input--populated": populated,
					// },
					className
				)}>
				{label && (
					<label htmlFor={id} className={cn("dui__input__label", labelClassName)}>
						{label}
					</label>
				)}
				<input
					data-testid='Input'
					type={type}
					name={id}
					id={id}
					className={cn(
						"dui__input__field",
						{
							[`dui__input__field--${fieldSize}`]: fieldSize !== "md",
						},
						{
							"dui__input__field--round": round,
							"dui__input__field--modern": modern,
							"dui__input__field--loading": loading,
						},
						{
							[`dui__input__field--valid-${valid}`]: valid,
							[`dui__input__field--pigment-${pigment}`]: PigmentOptions.includes(pigment),
						},
						fieldClassName
					)}
					{...rest}
					ref={ref}
				/>
				{hintMsg && <small className={cn("dui__input__hint", hintClassName)}>{hintMsg}</small>}
			</div>
		);
	}
);

export default Input;
