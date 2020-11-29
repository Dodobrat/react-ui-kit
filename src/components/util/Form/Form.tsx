// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { FormProps } from "./Form.types";
import { FormControlSubComponentProps, FormFooterSubComponentProps } from "./FormSubcomponents.types";

interface FormComponent extends React.ForwardRefExoticComponent<FormProps & React.RefAttributes<HTMLFormElement>> {
	Control: React.ForwardRefExoticComponent<FormControlSubComponentProps & React.RefAttributes<HTMLDivElement>>;
	Footer: React.ForwardRefExoticComponent<FormFooterSubComponentProps & React.RefAttributes<HTMLDivElement>>;
}

const Form = forwardRef<HTMLFormElement, FormProps>(({ className, children, ...rest }, ref) => {
	return (
		<form data-testid='Form' className={cn("dui__form", className)} {...rest} ref={ref}>
			{children}
		</form>
	);
}) as FormComponent;

export default Form;
