// Auto-Generated
import React, { forwardRef } from "react";
import cn from 'classnames';

import { CheckboxProps } from "./Checkbox.types";

const Checkbox = forwardRef<HTMLDivElement, CheckboxProps>(({ className, children, ...rest }, ref) => {
    return(
        <div data-testid="Checkbox" className={cn("", className)} {...rest} ref={ref}>{children}</div>
    )
});

export default Checkbox;

