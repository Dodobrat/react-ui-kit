// Auto-Generated
import React from "react";
import cn from "classnames";

import { LineLoaderProps } from "./LineLoader.types";
import { PigmentOptions } from "../../helpers/global";
import { useConfig } from "../../context/ConfigContext";

const LineLoader: React.ForwardRefRenderFunction<HTMLDivElement, LineLoaderProps> = (props, ref) => {
	const {
		appConfig: { config },
	} = useConfig();

	const { className, pigment = config.pigment ?? "primary", ...rest } = props;

	return (
		<div
			data-testid='LineLoader'
			className={cn(
				"dui__line-loader",
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
