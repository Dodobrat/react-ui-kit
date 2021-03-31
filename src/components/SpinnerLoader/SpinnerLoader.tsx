// Auto-Generated
import React from "react";
import cn from "classnames";

import { SpinnerLoaderProps } from "./SpinnerLoader.types";
import { PigmentOptions, SizeOptions } from "../../helpers/global";
import { useConfig } from "../../context/ConfigContext";

const SpinnerLoader: React.ForwardRefRenderFunction<HTMLDivElement, SpinnerLoaderProps> = (props, ref) => {
	const {
		appConfig: { config },
	} = useConfig();

	const {
		size = config.size ?? "md",
		btnLoader = false,
		inputLoader = false,
		pigment = config.pigment ?? "primary",
		pigmentColor = config.pigmentColor ?? null,
		...rest
	} = props;

	return (
		<div
			data-testid='SpinnerLoader'
			className={cn(
				"dui__spinner",
				{
					"dui__spinner--btn": btnLoader,
					"dui__spinner--input": inputLoader,
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
