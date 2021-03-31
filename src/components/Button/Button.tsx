// Auto-Generated
import React, { useRef } from "react";
import cn from "classnames";

import { ButtonProps } from "./Button.types";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";
import { addElementAttributes, createRipple, mergeRefs } from "../../helpers/functions";
import { useConfig } from "../../context/ConfigContext";
import {
	generateBtnClasses,
	generateCustomizationClasses,
	generateLoadingClasses,
	generatePigmentColorClasses,
} from "../../helpers/classnameGenerator";

const Button: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {
	const {
		appConfig: { config },
	} = useConfig();

	const {
		className,
		type = "button",
		as = "button",
		elevation = config.btnElevation ?? "none",
		iconStart = null,
		iconEnd = null,
		leftAlignContent = false,
		unWrapText = false,
		pigment = config.pigment ?? "primary",
		pigmentColor = config.pigmentColor ?? null,
		keyboardOnlyFocusRing = config.btnKeyboardOnlyFocusRing ?? true,
		spongy = config.btnSpongy ?? false,
		size = config.size ?? "md",
		rounded = config.rounded ?? false,
		round = false,
		flat = config.flat ?? false,
		wide = false,
		active = false,
		disableWhileLoading = true,
		isLoading = false,
		loadingComponent = <SpinnerLoader size={size} pigment={pigment} pigmentColor={pigmentColor} btnLoader />,
		withRipple = config.withRipple ?? true,
		onPointerDown,
		children,
		...rest
	} = props;

	const utilClassDefaults = {
		iconStart,
		iconEnd,
		round,
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
		size,
		flat,
		rounded,
		elevation,
		isLoading,
		disableWhileLoading,
	};

	const classBase = "dui__btn";

	const btnRef = useRef(null);

	const handleOnPointerDown: (e: React.PointerEvent) => void = (e) => {
		if (withRipple) {
			createRipple({ e, elem: btnRef, pigment });
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
				generateCustomizationClasses(classBase, classDefaults),
				generatePigmentColorClasses(classBase, classDefaults),
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
