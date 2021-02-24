// Auto-Generated
import React from "react";
import cn from "classnames";

import { SkeletonProps } from "./Skeleton.types";
import { PigmentOptions } from "../../helpers/global";

const Skeleton: React.ForwardRefRenderFunction<HTMLDivElement, SkeletonProps> = (props, ref) => {
	const { className, pigment = null, contrast = false, rounded = false, flat = false, children, ...rest } = props;

	return (
		<div
			data-testid='Skeleton'
			className={cn(
				"dui__skeleton",
				{
					"dui__skeleton--contrast": contrast,
					"dui__skeleton--rounded": rounded,
					"dui__skeleton--flat": flat,
				},
				{
					[`dui__skeleton--${pigment}`]: PigmentOptions.includes(pigment),
				},
				className
			)}
			{...rest}
			ref={ref}
		/>
	);
};

export default React.forwardRef<HTMLDivElement, SkeletonProps>(Skeleton);
