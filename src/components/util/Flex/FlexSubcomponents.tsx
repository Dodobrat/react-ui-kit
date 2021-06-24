import React, { forwardRef } from "react";
import cn from "classnames";
import { FlexSubComponentProps } from "./FlexSubcomponents.types";
import { generateStyleClasses } from "../../../helpers/classnameGenerator";
import { addElementAttributes } from "../../../helpers/functions";

export const FlexCol = forwardRef<HTMLDivElement, FlexSubComponentProps>((props, ref) => {
	const { className, as = "div", order, col, offset, offsetRight, children, style, ...rest } = props;

	const classDefaults = {
		col,
		offset,
		offsetRight,
	};

	const classBase = "dui__flex__col";

	const ParsedComponent: React.ElementType = addElementAttributes(as, rest);

	return (
		<ParsedComponent
			className={cn(classBase, generateStyleClasses(classDefaults), className)}
			style={{ ...style, order }}
			{...rest}
			ref={ref}>
			{children}
		</ParsedComponent>
	);
});

FlexCol.displayName = "FlexCol";
