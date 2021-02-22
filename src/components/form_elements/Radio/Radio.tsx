// Auto-Generated
import React, { forwardRef } from "react";
import cn from 'classnames';

import { RadioProps } from "./Radio.types";

const Radio = forwardRef<HTMLDivElement, RadioProps>(({ className, children, ...rest }, ref) => {
    return(
        <div data-testid="Radio" className={cn("", className)} {...rest} ref={ref}>{children}</div>
    )
});

export default Radio;

