// Auto-Generated
import React, { useContext, useRef } from "react";
import cn from "classnames";

import { BadgeProps } from "./Badge.types";
import { ElevationOptions, PigmentOptions, SizeOptions } from "../../helpers/global";
import { addElementAttributes, createRipple, mergeRefs } from "../../helpers/functions";
import { GlobalContext } from "../../context/GlobalContext/GlobalContext";

const Badge: React.ForwardRefRenderFunction<unknown, BadgeProps> = (props, ref) => {
	const {
		appConfig: { config },
	} = useContext(GlobalContext);

	const {
		className,
		as = "span",
		elevation = config.badgeElevation ?? "none",
		pigment = config.pigment ?? "primary",
		size = config.size ?? "md",
		flat = config.flat ?? false,
		rounded = config.rounded ?? false,
		children,
		onClick,
		withRipple = config.withRipple ?? !!onClick,
		onPointerDown,
		onKeyDown,
		...rest
	} = props;

	const badgeRef = useRef(null);

	const handleKeyDown = (e: any) => {
		if (onKeyDown) {
			onKeyDown(e);
		}
		if (badgeRef.current === document.activeElement && e.code === "Space") {
			e.preventDefault();
			onClick(e);
		}
	};

	const handleOnPointerDown: (e: React.PointerEvent) => void = (e) => {
		if (withRipple) {
			createRipple({ e, elem: badgeRef, pigment });
		}

		if (onPointerDown) {
			onPointerDown(e);
		}
	};

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
					"dui__badge--rounded": rounded,
					"dui__badge--flat": flat,
					"dui__badge--clickable": onClick,
				},
				{
					[`dui__badge--${pigment}`]: PigmentOptions.includes(pigment),
					[`dui__elevation--${elevation}`]: ElevationOptions.includes(elevation) && elevation !== "none",
				},
				className
			)}
			tabIndex={onClick && !rest["disabled"] ? 0 : -1}
			onKeyDown={handleKeyDown}
			onPointerDown={handleOnPointerDown}
			{...rest}
			ref={mergeRefs([badgeRef, ref])}>
			{children}
		</ParsedComponent>
	);
};

export default React.forwardRef<unknown, BadgeProps>(Badge);
