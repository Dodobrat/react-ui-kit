// Auto-Generated
import React from "react";
import cn from "classnames";

import { LineLoaderProps } from "./LineLoader.types";
import { PigmentOptions } from "../../helpers/global";

const LineLoader: React.ForwardRefRenderFunction<HTMLDivElement, LineLoaderProps> = (props, ref) => {
	const { className, contrast = false, pigment = "primary", ...rest } = props;

	return (
		<div
			data-testid='LineLoader'
			className={cn(
				"dui__line-loader",
				{
					"dui__line-loader--contrast": contrast,
				},
				{
					[`dui__line-loader--${pigment}`]: PigmentOptions.includes(pigment),
				},
				className
			)}
			{...rest}
			ref={ref}>
			<div className='dui__line-loader__line' />
		</div>
	);
};

export default React.forwardRef<HTMLDivElement, LineLoaderProps>(LineLoader);
