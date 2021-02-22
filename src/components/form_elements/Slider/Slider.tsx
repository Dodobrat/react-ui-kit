// Auto-Generated
import React, { forwardRef } from "react";
import cn from 'classnames';

import { SliderProps } from "./Slider.types";

const Slider = forwardRef<HTMLDivElement, SliderProps>(({ className, children, ...rest }, ref) => {
    return(
        <div data-testid="Slider" className={cn("", className)} {...rest} ref={ref}>{children}</div>
    )
});

export default Slider;

