// Auto-Generated
import React, { useContext } from "react";
import cn from "classnames";

import { HeadingProps } from "./Heading.types";
import { addElementAttributes } from "../../../helpers/functions";
import { GlobalContext } from "../../../context/GlobalContext/GlobalContext";

const Heading: React.ForwardRefRenderFunction<HTMLDivElement, HeadingProps> = (props, ref) => {
	const {
		appConfig: { config },
	} = useContext(GlobalContext);

	const { className, as = config.headingAs ?? "h1", centered = false, children, ...rest } = props;

	let ParsedComponent: React.ElementType = addElementAttributes(as, rest);

	return (
		<ParsedComponent
			data-testid='Heading'
			className={cn(
				"dui__heading",
				{
					"dui__heading--centered": centered,
				},
				className
			)}
			{...rest}
			ref={ref}>
			{children}
		</ParsedComponent>
	);
};

export default React.forwardRef<HTMLDivElement, HeadingProps>(Heading);
