// Auto-Generated
import React from "react";
import cn from "classnames";

import { LineLoaderProps } from "./LineLoader.types";
import { useConfig } from "../../context/ConfigContext";
import { generateStyleClasses } from "../../helpers/classnameGenerator";

const LineLoader: React.ForwardRefRenderFunction<HTMLDivElement, LineLoaderProps> = (props, ref) => {
	const {
		appConfig: { config },
	} = useConfig();

	const { className, pigment = config.pigment ?? "primary", ...rest } = props;

	const classDefaults = {
		pigment,
	};

	const classBase = "dui__line-loader";

	return (
		<div data-testid='LineLoader' className={cn(classBase, generateStyleClasses(classDefaults), className)} {...rest} ref={ref}>
			<div className='dui__line-loader__line' />
		</div>
	);
};

export default React.forwardRef<HTMLDivElement, LineLoaderProps>(LineLoader);
