// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { FlexProps } from "./Flex.types";
import { FlexCol } from "./FlexSubcomponents";
import { FlexAlign, FlexDirection, FlexJustify, FlexWrap } from "../../../helpers/global";
import { generateOtherClasses, generateSpacingClasses } from "../../../helpers/classnameGenerator";

interface FlexComponent extends React.ForwardRefExoticComponent<FlexProps & React.RefAttributes<HTMLDivElement>> {
	Col: React.FC;
}

const Flex = forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
	const {
		className,
		spacingX = "sm",
		spacingY = "sm",
		align = "flex-start",
		justify = "flex-start",
		direction = "row",
		wrap = "wrap",
		disableNegativeSpace = false,
		children,
		...rest
	} = props;

	return (
		<div
			data-testid='Flex'
			className={cn(
				"dui__flex",
				{
					"dui__flex--no-negative": disableNegativeSpace,
				},
				generateSpacingClasses(spacingX, "sx"),
				generateSpacingClasses(spacingY, "sy"),
				generateOtherClasses(align, "align", FlexAlign, "flex-start"),
				generateOtherClasses(justify, "justify", FlexJustify, "flex-start"),
				generateOtherClasses(direction, "direction", FlexDirection, "row"),
				generateOtherClasses(wrap, "wrap", FlexWrap, "wrap"),
				className
			)}
			{...rest}
			ref={ref}>
			{children}
		</div>
	);
}) as FlexComponent;

Flex.Col = FlexCol;

export default Flex;
