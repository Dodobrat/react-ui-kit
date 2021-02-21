// Auto-Generated
import React from "react";
import cn from "classnames";

import { BadgeProps } from "./Badge.types";
import { PigmentOptions, SizeOptions } from "../../helpers/global";

const Badge: React.ForwardRefRenderFunction<unknown, BadgeProps> = (props, ref) => {
	const {
		className,
		as = "span",
		contrast = false,
		pigment = "primary",
		size = "md",
		flat = false,
		rounded = false,
		children,
		...rest
	} = props;

	let ParsedComponent: React.ElementType = as;

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
