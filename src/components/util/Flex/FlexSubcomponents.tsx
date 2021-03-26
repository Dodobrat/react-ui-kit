import React, { forwardRef } from "react";
import cn from "classnames";
import { FlexSubComponentProps } from "./FlexSubcomponents.types";
import { generateColClasses, generateHideClasses, generateOffsetClasses } from "../../../helpers/classnameGenerator";

export const FlexCol = forwardRef<HTMLDivElement, FlexSubComponentProps>((props, ref) => {
	const { className, order, col, keepGridOnSmallest = !!col, offset, hide, children, style, ...rest } = props;

	return (
		<div
			className={cn(
				"dui__flex__col",
				{
					"dui__flex__col--contain": keepGridOnSmallest,
				},
				generateColClasses(col),
				generateOffsetClasses(offset),
				generateHideClasses(hide),
				className
			)}
			style={{ ...style, order }}
			{...rest}
			ref={ref}>
			{children}
		</div>
	);
});

FlexCol.displayName = "FlexCol";
