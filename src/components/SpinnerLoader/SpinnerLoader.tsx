// Auto-Generated
import React from "react";
import cn from "classnames";

import { SpinnerLoaderProps } from "./SpinnerLoader.types";
import { useConfig } from "../../context/ConfigContext";
import { generateStyleClasses } from "../../helpers/classnameGenerator";

const SpinnerLoader: React.ForwardRefRenderFunction<HTMLDivElement, SpinnerLoaderProps> = (props, ref) => {
	const {
		appConfig: { config },
	} = useConfig();

	const {
		size = config.size ?? "md",
		componentLoader = false,
		pigment = config.pigment ?? "primary",
		pigmentColor = config.pigmentColor ?? null,
		className,
		...rest
	} = props;

	const classDefaults = {
		size,
		pigment,
		pigmentColor,
	};

	const classBase = "dui__spinner";

	return (
		<div
			data-testid='SpinnerLoader'
			className={cn(
				classBase,
				{
					[`${classBase}--component`]: componentLoader,
				},
				generateStyleClasses(classDefaults),
				className
			)}
			{...rest}
			ref={ref}
		/>
	);
};

export default React.forwardRef<HTMLDivElement, SpinnerLoaderProps>(SpinnerLoader);
