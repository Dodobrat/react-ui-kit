// Auto-Generated
import React from "react";
import cn from 'classnames';

import { AlertProps } from "./Alert.types";

const Alert: React.ForwardRefRenderFunction<HTMLDivElement, AlertProps> = (props, ref) => {
    const { className, children, ...rest } = props;
    
    return(
        <div data-testid="Alert" className={cn("", className)} {...rest} ref={ref}>{children}</div>
    )
};

export default React.forwardRef<HTMLDivElement, AlertProps>(Alert);

