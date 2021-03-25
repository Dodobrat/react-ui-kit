// Auto-Generated
import React from "react";
import cn from 'classnames';

import { SwitchGroupProps } from "./SwitchGroup.types";

const SwitchGroup: React.ForwardRefRenderFunction<HTMLDivElement, SwitchGroupProps> = (props, ref) => {
    const { className, children, ...rest } = props;
    
    return(
        <div data-testid="SwitchGroup" className={cn("", className)} {...rest} ref={ref}>{children}</div>
    )
};

export default React.forwardRef<HTMLDivElement, SwitchGroupProps>(SwitchGroup);

