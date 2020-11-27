// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { ExpandIndicatorProps } from "./ExpandIndicator.types";

const ExpandIndicator = forwardRef<HTMLDivElement, ExpandIndicatorProps>(({ className, active, children, ...rest }, ref) => {
	return (
		<div
			data-testid='ExpandIndicator'
			className={cn(
				"dui__expand__indicator",
				{
					"dui__expand__indicator--active": active,
				},
				className
			)}
			{...rest}
			ref={ref}
		/>
	);
});

export default ExpandIndicator;
