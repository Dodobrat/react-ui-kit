// Auto-Generated
import React from "react";
import cn from "classnames";

import { LineLoaderProps } from "./LineLoader.types";
import { pigmentOptions } from "../../helpers/pigments";

const LineLoader: React.FC<LineLoaderProps> = ({ className, pigment = "primary", ...rest }) => {
	return (
		<div
			data-testid='LineLoader'
			className={cn("dui__line-loader", { [`dui__line-loader--pigment-${pigment}`]: pigmentOptions.includes(pigment) }, className)}
			{...rest}>
			<div className='dui__line-loader__line' />
		</div>
	);
};

export default LineLoader;
