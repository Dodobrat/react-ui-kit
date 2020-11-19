// Auto-Generated
import React, { forwardRef } from "react";
import cn from 'classnames';

import { IconProps } from "./Icon.types";

const Icon = forwardRef<HTMLDivElement, IconProps>(({ className, children, ...rest }, ref) => {
    return(
        <div data-testid="Icon" className={cn("", className)} {...rest} ref={ref}>{children}</div>
    )
});

export default Icon;

