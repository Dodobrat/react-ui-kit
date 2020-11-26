// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { ContainerProps } from "./Container.types";

const Container = forwardRef<HTMLDivElement, ContainerProps>(({ fluid = false, className, children, ...rest }, ref) => {
	return (
		<div data-testid='Container' className={cn("dui__container", { "dui__container--fluid": fluid }, className)} {...rest} ref={ref}>
			{children}
		</div>
	);
});

export default Container;
