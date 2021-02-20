// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { BadgeProps } from "./Badge.types";
import { PigmentOptions } from "../../helpers/global";

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
	({ className, pigment = "primary", size = "md", pill = false, modern = false, onClick = null, children, ...rest }, ref) => {
		return (
			<div
				data-testid='Badge'
				className={cn(
					"dui__badge",
					{
						[`dui__badge--${size}`]: size !== "md",
					},
					{
						"dui__badge--pill": pill,
						"dui__badge--modern": modern,
						"dui__badge--clickable": onClick,
					},
					{
						[`dui__badge--pigment-${pigment}`]: PigmentOptions.includes(pigment),
					},
					className
				)}
				onClick={onClick}
				{...rest}
				ref={ref}>
				{children}
			</div>
		);
	}
);

export default Badge;
