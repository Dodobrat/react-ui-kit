// Auto-Generated
import React, { forwardRef } from "react";
import cn from 'classnames';

import { SwitchProps } from "./Switch.types";

const Switch = forwardRef<HTMLDivElement, SwitchProps>(({ className, children, ...rest }, ref) => {
    return(
        <div data-testid="Switch" className={cn("", className)} {...rest} ref={ref}>{children}</div>
    )
});

export default Switch;

