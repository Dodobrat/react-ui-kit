// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { ContainerProps } from "./Container.types";
import { generateStyleClasses } from "../../../helpers/classnameGenerator";
import { useConfig } from "../../../context/ConfigContext";

const Container = forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
	const {
		appConfig: { config },
	} = useConfig();

	const { sizing = config.containerSize ?? "lg", className, children, ...rest } = props;

	const classDefaults = {
		containerSize: sizing,
	};

	const classBase = "dui__container";

	return (
		<div data-testid='Container' className={cn(classBase, generateStyleClasses(classDefaults), className)} {...rest} ref={ref}>
			{children}
		</div>
	);
});

export default Container;
