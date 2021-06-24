// Auto-Generated
import React from "react";
import cn from "classnames";

import { TextProps } from "./Text.types";
import { addElementAttributes } from "../../../helpers/functions";
import { useConfig } from "../../../context/ConfigContext";

const Text: React.ForwardRefRenderFunction<HTMLDivElement, TextProps> = (props, ref) => {
	const {
		appConfig: { config },
	} = useConfig();

	const { className, as = config.textAs ?? "p", children, ...rest } = props;

	const ParsedComponent: React.ElementType = addElementAttributes(as, rest);

	return (
		<ParsedComponent data-testid='Text' className={cn("dui__text", className)} {...rest} ref={ref}>
			{children}
		</ParsedComponent>
	);
};

export default React.forwardRef<HTMLDivElement, TextProps>(Text);
