// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { ListProps } from "./List.types";

const List = forwardRef<HTMLDivElement, ListProps>(({ className, children, ...rest }, ref) => {
	return (
		<div data-testid='List' className={cn("", className)} {...rest} ref={ref}>
			{children}
		</div>
	);
});

export default List;
