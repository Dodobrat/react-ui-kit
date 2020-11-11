// Auto-Generated
import React from "react";
import cn from "classnames";

import { SpinnerLoaderProps } from "./SpinnerLoader.types";
import { pigmentOptions } from "../../../helpers/pigments";

const SpinnerLoader: React.FC<SpinnerLoaderProps> = ({ size = "md", pigment = "primary" }) => {
	return (
		<div
			data-testid='SpinnerLoader'
			className={cn("dodo-ui__spinner", {
				[`dodo-ui__spinner--${size}`]: size !== "md",
				[`dodo-ui__spinner--pigment-${pigment}`]: pigmentOptions.includes(pigment),
			})}
		/>
	);
};

export default SpinnerLoader;
