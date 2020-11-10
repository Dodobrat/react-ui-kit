// Auto-Generated
import React from "react";
import cn from "classnames";

import { LineLoaderProps } from "./LineLoader.types";
import { pigmentOptions } from "../../helpers/pigments";

const LineLoader: React.FC<LineLoaderProps> = ({ className, pigment = "primary" }) => {
	return (
		<div
			data-testid='LineLoader'
			className={cn(
				"dodo-ui__line-loader",
				{ [`dodo-ui__line-loader--pigment-${pigment}`]: pigmentOptions.includes(pigment) },
				className
			)}>
			<div className='dodo-ui__line-loader__line' />
		</div>
	);
};

export default LineLoader;
