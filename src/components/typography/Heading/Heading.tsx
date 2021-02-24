// Auto-Generated
import React from "react";
import cn from "classnames";

import { HeadingProps } from "./Heading.types";
import { addElementAttributes } from "../../../helpers/functions";

const Heading: React.ForwardRefRenderFunction<HTMLDivElement, HeadingProps> = (props, ref) => {
	const { className, as = "h1", children, ...rest } = props;

	let ParsedComponent: React.ElementType = addElementAttributes(as, rest);

	return (
		<ParsedComponent data-testid='Heading' className={cn("dui__heading", className)} {...rest} ref={ref}>
			{children}
		</ParsedComponent>
	);
};

export default React.forwardRef<HTMLDivElement, HeadingProps>(Heading);
