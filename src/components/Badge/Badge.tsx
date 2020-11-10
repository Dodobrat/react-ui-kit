// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { BadgeProps } from "./Badge.types";
import { pigmentOptions } from "../../helpers/pigments";

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
	({ className, pigment = "primary", size = "md", pill = false, modern = false, children, ...rest }, ref) => {
		return (
			<div
				data-testid='Badge'
				className={cn(
					"dodo-ui__badge",
					{
						[`dodo-ui__badge--${size}`]: size !== "md",
					},
					{
						"dodo-ui__badge--pill": pill,
						"dodo-ui__badge--modern": modern,
					},
					{
						[`dodo-ui__badge--pigment-${pigment}`]: pigmentOptions.includes(pigment),
					},
					className
				)}
				{...rest}
				ref={ref}>
				{children}
			</div>
		);
	}
);

export default Badge;
