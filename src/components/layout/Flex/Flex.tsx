// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { FlexProps } from "./Flex.types";
import { FlexCol } from "./FlexSubcomponents";

interface FlexComponent extends React.ForwardRefExoticComponent<FlexProps & React.RefAttributes<HTMLDivElement>> {
	Col: React.FC;
}

const Flex = forwardRef<HTMLDivElement, FlexProps>(({ className, children }, ref) => {
	const col: JSX.Element[] = React.Children.map(children, (child: JSX.Element) => (child.type.displayName === "FlexCol" ? child : null));
	return (
		<div data-testid='Flex' className={cn("dui__flex", className)} ref={ref}>
			{col}
		</div>
	);
}) as FlexComponent;

Flex.Col = FlexCol;

export default Flex;
