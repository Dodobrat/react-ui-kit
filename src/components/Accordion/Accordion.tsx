// Auto-Generated
import React from "react";
import cn from 'classnames';

import { AccordionProps } from "./Accordion.types";

const Accordion: React.ForwardRefRenderFunction<HTMLDivElement, AccordionProps> = (props, ref) => {
    const { className, children, ...rest } = props;
    
    return(
        <div data-testid="Accordion" className={cn("", className)} {...rest} ref={ref}>{children}</div>
    )
};

export default React.forwardRef<HTMLDivElement, AccordionProps>(Accordion);

