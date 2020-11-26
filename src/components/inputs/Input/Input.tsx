// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { InputProps } from "./Input.types";

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, children, ...rest }, ref) => {
	return <input data-testid='Input' className={cn("", className)} {...rest} ref={ref} />;
});

export default Input;
