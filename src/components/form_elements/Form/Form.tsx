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

		const parsedValues = validInputs.reduce((acc, curr) => {
			const extractValue = (curr: any) => {
				switch (curr.getAttribute("type")) {
					case "checkbox":
					case "radio": {
						return curr.checked;
					}
					case "file": {
						return curr.files;
					}
					default: {
						return curr.value;
					}
				}
			};

			return {
				...acc,
				[`${curr.getAttribute("name")}`]: extractValue(curr),
			};
		}, {});

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
