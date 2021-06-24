// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { FlexProps } from "./Flex.types";
import { FlexCol } from "./FlexSubcomponents";
import { generateSpacingClasses, generateStyleClasses } from "../../../helpers/classnameGenerator";
import { FlexSubComponentProps } from "./FlexSubcomponents.types";
import { useConfig } from "../../../context/ConfigContext";
import { addElementAttributes } from "../../../helpers/functions";

export interface FlexComponent extends React.ForwardRefExoticComponent<FlexProps & React.RefAttributes<HTMLDivElement>> {
	Col: React.ForwardRefExoticComponent<FlexSubComponentProps & React.RefAttributes<HTMLDivElement>>;
}

const Flex = forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
	const {
		appConfig: { config },
	} = useConfig();

	const {
		className,
		as = "div",
		spacingX = config.flexSpacingX ?? "sm",
		spacingY = config.flexSpacingY ?? "sm",
		align = "flex-start",
		justify = "flex-start",
		direction = "row",
		wrap = "wrap",
		disableNegativeSpace = false,
		children,
		...rest
	} = props;

	const classDefaults = {
		align,
		justify,
		direction,
		wrap,
	};

	const ParsedComponent: React.ElementType = addElementAttributes(as, rest);

	return (
		<ParsedComponent
			data-testid='Flex'
			className={cn(
				"dui__flex",
				{
					"dui__flex--no-negative": disableNegativeSpace,
				},
				generateSpacingClasses(spacingX, "sx"),
				generateSpacingClasses(spacingY, "sy"),
				generateStyleClasses(classDefaults),
				className
			)}
			{...rest}
			ref={ref}>
			{children}
		</ParsedComponent>
	);
}) as FlexComponent;

Flex.Col = FlexCol;

export default Flex;
