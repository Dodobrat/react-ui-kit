// Auto-Generated
import React, { forwardRef } from "react";
import cn from 'classnames';

import { FileProps } from "./File.types";

const File = forwardRef<HTMLDivElement, FileProps>(({ className, children, ...rest }, ref) => {
    return(
        <div data-testid="File" className={cn("", className)} {...rest} ref={ref}>{children}</div>
    )
});

export default File;

