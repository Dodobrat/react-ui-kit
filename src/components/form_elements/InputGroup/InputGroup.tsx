// Auto-Generated
import React, { forwardRef } from "react";
import cn from 'classnames';

import { InputGroupProps } from "./InputGroup.types";

const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>(({ className, children, ...rest }, ref) => {
    return(
        <div data-testid="InputGroup" className={cn("", className)} {...rest} ref={ref}>{children}</div>
    )
});

export default InputGroup;

