// Auto-Generated
import React, { useRef } from "react";
import cn from "classnames";

import { BadgeProps } from "./Badge.types";
import { addElementAttributes, createRipple, mergeRefs } from "../../helpers/functions";
import { useConfig } from "../../context/ConfigContext";
import { generateCustomizationClasses } from "../../helpers/classnameGenerator";

const Badge: React.ForwardRefRenderFunction<unknown, BadgeProps> = (props, ref) => {
	const {
		appConfig: { config },
	} = useConfig();

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

	const classDefaults = {
		pigment,
		size,
		flat,
		rounded,
		elevation,
	};

	const classBase = "dui__badge";

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
				classBase,
				{
					[`${classBase}--clickable`]: onClick,
				},
				generateCustomizationClasses(classBase, classDefaults),
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
