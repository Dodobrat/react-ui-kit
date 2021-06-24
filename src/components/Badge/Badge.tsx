// Auto-Generated
import React, { useRef } from "react";
import cn from "classnames";

import { BadgeProps } from "./Badge.types";
import { addElementAttributes, createRipple, mergeRefs } from "../../helpers/functions";
import { useConfig } from "../../context/ConfigContext";
import { generateStyleClasses } from "../../helpers/classnameGenerator";

const Badge: React.ForwardRefRenderFunction<unknown, BadgeProps> = (props, ref) => {
	const {
		appConfig: { config },
	} = useConfig();

	const {
		className,
		as = "span",
		pigment = config.badgePigment ?? "primary",
		pigmentColor = config.badgePigmentColor ?? null,
		elevation = config.badgeElevation ?? "none",
		flavor = config.flavor ?? "default",
		sizing = config.sizing ?? "md",
		children,
		onClick,
		withRipple = config.withRipple ?? !!onClick,
		onPointerDown,
		onKeyDown,
		...rest
	} = props;

	const classDefaults = {
		pigment,
		pigmentColor,
		elevation,
		flavor,
		sizing,
	};

	const classBase = "dui__badge";

	const badgeRef = useRef(null);

	const handleKeyDown = (e: any) => {
		if (onKeyDown) {
			onKeyDown(e);
		}
		if (badgeRef.current === document.activeElement && e.code === "Space") {
			e.preventDefault();
			if (onClick) {
				onClick(e);
			}
		}
	};

	const handleOnPointerDown: (e: React.PointerEvent) => void = (e) => {
		if (withRipple) {
			createRipple({ e, elem: badgeRef });
		}

		if (onPointerDown) {
			onPointerDown(e);
		}
	};

	const ParsedComponent: React.ElementType = addElementAttributes(as, rest);

	return (
		<ParsedComponent
			data-testid='Badge'
			className={cn(
				classBase,
				{
					clickable: onClick,
				},
				generateStyleClasses(classDefaults),
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
