import React from "react";
import cn from "classnames";
import { FlexSubComponentProps } from "./FlexSubcomponents.types";

export const FlexCol: React.FC<FlexSubComponentProps> = ({ className, children, ...rest }) => (
	<div className={cn("dui__flex__col", className)} {...rest}>
		{children}
	</div>
);

FlexCol.displayName = "FlexCol";
