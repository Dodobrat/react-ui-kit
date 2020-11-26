// Auto-Generated
import React, { forwardRef } from "react";
import cn from 'classnames';

import { TextAreaProps } from "./TextArea.types";

const TextArea = forwardRef<HTMLDivElement, TextAreaProps>(({ className, children, ...rest }, ref) => {
    return(
        <div data-testid="TextArea" className={cn("", className)} {...rest} ref={ref}>{children}</div>
    )
});

export default TextArea;

