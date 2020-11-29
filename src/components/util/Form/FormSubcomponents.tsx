import React, { forwardRef } from "react";
import cn from "classnames";
import { FormControlSubComponentProps, FormFooterSubComponentProps } from "./FormSubcomponents.types";

export const FormControl = forwardRef<HTMLDivElement, FormControlSubComponentProps>(({ className, children, ...rest }, ref) => (
	<div className={cn("dui__form__control", className)} {...rest} ref={ref}>
		{children}
	</div>
));

FormControl.displayName = "FormControl";

export const FormFooter = forwardRef<HTMLDivElement, FormFooterSubComponentProps>(({ className, children, ...rest }, ref) => (
	<div className={cn("dui__form__footer", className)} {...rest} ref={ref}>
		{children}
	</div>
));

FormFooter.displayName = "FormFooter";
