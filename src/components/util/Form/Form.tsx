// Auto-Generated
import React, { forwardRef } from "react";
import cn from 'classnames';

import { FormProps } from "./Form.types";

const Form = forwardRef<HTMLDivElement, FormProps>(({ className, children, ...rest }, ref) => {
    return(
        <div data-testid="Form" className={cn("", className)} {...rest} ref={ref}>{children}</div>
    )
});

export default Form;

