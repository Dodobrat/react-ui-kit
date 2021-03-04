// Auto-Generated
import React from "react";
import cn from "classnames";

import { BadgeProps } from "./Badge.types";
import { ElevationOptions, PigmentOptions, SizeOptions } from "../../helpers/global";
import { addElementAttributes } from "../../helpers/functions";

const Badge: React.ForwardRefRenderFunction<unknown, BadgeProps> = (props, ref) => {
	const {
		className,
		as = "span",
		elevation = "none",
		contrast = false,
		pigment = "primary",
		size = "md",
		flat = false,
		rounded = false,
		children,
		...rest
	} = props;

	let ParsedComponent: React.ElementType = addElementAttributes(as, rest);

	return (
		<ParsedComponent
			data-testid='Badge'
			className={cn(
				"dui__badge",
				{
					[`dui__badge--${size}`]: SizeOptions.includes(size),
				},
				{
					"dui__badge--contrast": contrast,
					"dui__badge--rounded": rounded,
					"dui__badge--flat": flat,
					"dui__badge--clickable": rest["onClick"],
				},
				{
					[`dui__badge--${pigment}`]: PigmentOptions.includes(pigment),
					[`dui__elevation--${elevation}`]: ElevationOptions.includes(elevation) && elevation !== "none",
				},
				className
			)}
			{...rest}
			ref={ref}>
			{children}
		</ParsedComponent>
	);
};

export default React.forwardRef<unknown, BadgeProps>(Badge);
