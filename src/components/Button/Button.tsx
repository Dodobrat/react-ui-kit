// Auto-Generated
import React, { useRef } from "react";
import cn from "classnames";

import { ButtonProps } from "./Button.types";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";
import { addElementAttributes, createRipple, mergeRefs } from "../../helpers/functions";
import { useConfig } from "../../context/ConfigContext";
import { generateBtnClasses, generateLoadingClasses, generateStyleClasses } from "../../helpers/classnameGenerator";

const Button: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {
	const {
		appConfig: { config },
	} = useConfig();

	const {
		className,
		type = "button",
		as = "button",
		pigment = config.pigment ?? "primary",
		pigmentColor = config.pigmentColor ?? null,
		hoverPigment = null,
		elevation = config.btnElevation ?? "none",
		flavor = config.flavor ?? "default",
		size = config.size ?? "md",
		iconStart = null,
		iconEnd = null,
		leftAlignContent = false,
		unWrapText = false,
		keyboardOnlyFocusRing = config.btnKeyboardOnlyFocusRing ?? true,
		spongy = config.btnSpongy ?? false,
		wide = false,
		active = false,
		disableWhileLoading = true,
		isLoading = false,
		loadingComponent = <SpinnerLoader size={size} pigment={pigment} pigmentColor={pigmentColor} componentLoader />,
		withRipple = config.withRipple ?? true,
		onPointerDown,
		children,
		...rest
	} = props;

	const utilClassDefaults = {
		iconStart,
		iconEnd,
		wide,
		unWrapText,
		leftAlignContent,
		active,
		keyboardOnlyFocusRing,
		spongy,
	};

	const classDefaults = {
		pigment,
		pigmentColor,
		hoverPigment,
		elevation,
		flavor,
		size,
		isLoading,
		disableWhileLoading,
	};

	const classBase = "dui__btn";

	const btnRef = useRef(null);

	const handleOnPointerDown: (e: React.PointerEvent) => void = (e) => {
		if (withRipple) {
			createRipple({ e, elem: btnRef });
		}

		if (onPointerDown) {
			onPointerDown(e);
		}
	};

	let ParsedComponent: React.ElementType = addElementAttributes(as, rest);

	return (
		<ParsedComponent
			data-testid='Button'
			tabIndex={rest["disabled"] ? -1 : 0}
			className={cn(
				classBase,
				generateBtnClasses(classBase, utilClassDefaults),
				generateStyleClasses(classDefaults),
				generateLoadingClasses(classBase, classDefaults),
				className
			)}
			onPointerDown={handleOnPointerDown}
			{...rest}
			ref={mergeRefs([btnRef, ref])}>
			{iconStart && iconStart}
			{children}
			{iconEnd && iconEnd}
			{isLoading && <div className={cn(`${classBase}--loading__overlay`)}>{loadingComponent}</div>}
		</ParsedComponent>
	);
};

export default React.forwardRef<unknown, ButtonProps>(Button);
