// Auto-Generated
import React, { forwardRef } from "react";
import cn from 'classnames';

import { ListItemProps } from "./ListItem.types";

const ListItem = forwardRef<HTMLDivElement, ListItemProps>(({ className, children, ...rest }, ref) => {
    return(
        <div data-testid="ListItem" className={cn("", className)} {...rest} ref={ref}>{children}</div>
    )
});

export default ListItem;

