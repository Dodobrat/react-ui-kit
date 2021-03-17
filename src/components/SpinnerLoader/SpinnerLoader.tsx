// Auto-Generated
import React from "react";
import cn from "classnames";

import { SpinnerLoaderProps } from "./SpinnerLoader.types";
import { PigmentOptions, SizeOptions } from "../../helpers/global";

const SpinnerLoader: React.ForwardRefRenderFunction<HTMLDivElement, SpinnerLoaderProps> = (props, ref) => {
	const { size = "md", btnLoader = false, pigment = "primary", pigmentColor, ...rest } = props;

	return (
		<div
			data-testid='SpinnerLoader'
			className={cn(
				"dui__spinner",
				{
					"dui__spinner--btn": btnLoader,
				},
				{
					[`dui__spinner--${size}`]: SizeOptions.includes(size),
					[`dui__spinner--${pigment}`]: PigmentOptions.includes(pigment),
					[`dui__spinner--color-${pigmentColor}`]: PigmentOptions.includes(pigmentColor),
				}
			)}
			{...rest}
			ref={ref}
		/>
	);
};

export default React.forwardRef<HTMLDivElement, SpinnerLoaderProps>(SpinnerLoader);
