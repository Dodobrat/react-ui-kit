// Auto-Generated
import React, { useRef } from "react";
import cn from "classnames";

import { BadgeProps } from "./Badge.types";
import { ElevationOptions, PigmentOptions, SizeOptions } from "../../helpers/global";
import { addElementAttributes, mergeRefs } from "../../helpers/functions";

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
		onKeyDown,
		...rest
	} = props;

	const badgeRef = useRef(null);

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
			tabIndex={rest["onClick"] && !rest["disabled"] ? 0 : -1}
			onKeyDown={(e: any) => {
				if (onKeyDown) {
					onKeyDown(e);
				}
				if (badgeRef.current === document.activeElement && e.code === "Space") {
					e.preventDefault();
					rest["onClick"](e);
				}
			}}
			{...rest}
			ref={mergeRefs([badgeRef, ref])}>
			{children}
		</ParsedComponent>
	);
};

export default React.forwardRef<unknown, BadgeProps>(Badge);
