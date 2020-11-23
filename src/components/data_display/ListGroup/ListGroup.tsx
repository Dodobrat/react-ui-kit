// Auto-Generated
import React, { forwardRef } from "react";
import cn from 'classnames';

import { ListGroupProps } from "./ListGroup.types";

const ListGroup = forwardRef<HTMLDivElement, ListGroupProps>(({ className, children, ...rest }, ref) => {
    return(
        <div data-testid="ListGroup" className={cn("", className)} {...rest} ref={ref}>{children}</div>
    )
});

export default ListGroup;

