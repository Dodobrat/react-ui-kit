// Auto-Generated
import React, { forwardRef } from "react";
import cn from 'classnames';

import { NavbarProps } from "./Navbar.types";

const Navbar = forwardRef<HTMLDivElement, NavbarProps>(({ className, children, ...rest }, ref) => {
    return(
        <div data-testid="Navbar" className={cn("", className)} {...rest} ref={ref}>{children}</div>
    )
});

export default Navbar;

