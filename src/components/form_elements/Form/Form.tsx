// Auto-Generated
import React from "react";
import cn from "classnames";

import { FormProps } from "./Form.types";

const Form: React.ForwardRefRenderFunction<HTMLFormElement, FormProps> = (props, ref) => {
	const { className, onFormSubmit, onSubmit, children, ...rest } = props;

	const handleOnSubmit = (e: any) => {
		if (onSubmit) {
			return onSubmit(e);
		}

		e.preventDefault();

		const validInputs = [];

		for (const input of e.target.elements) {
			if (input.getAttribute("name")) {
				validInputs.push(input);
			}
		}

		const parsedValues = validInputs.reduce(
			(acc, curr) => ({
				...acc,
				[`${curr.getAttribute("name")}`]: curr.value,
			}),
			{}
		);

		return onFormSubmit({
			event: e,
			values: parsedValues,
		});
	};

	return (
		<form data-testid='Form' className={cn("dui__form", className)} onSubmit={handleOnSubmit} {...rest} ref={ref}>
			{children}
		</form>
	);
};

export default React.forwardRef<HTMLFormElement, FormProps>(Form);
