import React, { forwardRef } from "react";
import cn from "classnames";
import { FlexSubComponentProps } from "./FlexSubcomponents.types";
import { generateStyleClasses } from "../../../helpers/classnameGenerator";

export const FlexCol = forwardRef<HTMLDivElement, FlexSubComponentProps>((props, ref) => {
	const { className, order, col, offset, offsetRight, children, style, ...rest } = props;

	const classDefaults = {
		col,
		offset,
		offsetRight,
	};

	const classBase = "dui__flex__col";

	return (
		<div className={cn(classBase, generateStyleClasses(classDefaults), className)} style={{ ...style, order }} {...rest} ref={ref}>
			{children}
		</div>
	);
});

FlexCol.displayName = "FlexCol";
