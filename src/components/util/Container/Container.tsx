// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { ContainerProps } from "./Container.types";
import { generateStyleClasses } from "../../../helpers/classnameGenerator";

const Container = forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
	const { fluid = false, size = "lg", className, children, ...rest } = props;

	const classDefaults = {
		containerSize: size,
	};

	const classBase = "dui__container";

	return (
		<div
			data-testid='Container'
			className={cn(
				classBase,
				{
					[`${classBase}--fluid`]: fluid,
				},
				generateStyleClasses(classDefaults),
				className
			)}
			{...rest}
			ref={ref}>
			{children}
		</div>
	);
});

export default Container;
