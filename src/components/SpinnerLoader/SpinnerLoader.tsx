// Auto-Generated
import React from "react";
import cn from "classnames";

import { SpinnerLoaderProps } from "./SpinnerLoader.types";
import { pigmentOptions } from "../../helpers/pigments";

const SpinnerLoader: React.FC<SpinnerLoaderProps> = ({ size = "md", pigment = "primary", ...rest }) => {
	return (
		<div
			data-testid='SpinnerLoader'
			className={cn("dui__spinner", {
				[`dui__spinner--${size}`]: size !== "md",
				[`dui__spinner--pigment-${pigment}`]: pigmentOptions.includes(pigment),
			})}
			{...rest}
		/>
	);
};

export default SpinnerLoader;
