// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { ContainerProps } from "./Container.types";
import { AllSizeOptions, SizeOptions } from "../../../helpers/global";

const Container = forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
	const { fluid = false, size = "lg", paddingSize = "sm", className, children, ...rest } = props;

	return (
		<div
			data-testid='Container'
			className={cn(
				"dui__container",
				{
					"dui__container--fluid": fluid,
				},
				{
					[`dui__container--${size}`]: AllSizeOptions.includes(size) && size !== "md" && !fluid,
					[`dui__container--pad-${paddingSize}`]: SizeOptions.includes(paddingSize),
				},
				className
			)}
			{...rest}
			ref={ref}>
			{children}
		</div>
	);
});

export default Container;
