// Auto-Generated
import React, { useRef } from "react";
import cn from "classnames";

import { ButtonProps } from "./Button.types";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";
import { ElevationOptions, PigmentOptions, SizeOptions } from "../../helpers/global";
import { addElementAttributes, createRipple, mergeRefs } from "../../helpers/functions";

const Button: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {
	const {
		className,
		type = "button",
		as = "button",
		elevation = "none",
		iconStart = null,
		iconEnd = null,
		leftAlignContent = false,
		unWrapText = false,
		pigment = "primary",
		pigmentColor = null,
		keyboardOnlyFocusRing = true,
		spongy = true,
		size = "md",
		rounded = false,
		round = false,
		flat = false,
		wide = false,
		active = false,
		disableWhileLoading = true,
		isLoading = false,
		loadingComponent = <SpinnerLoader size={size} pigment={pigment} pigmentColor={pigmentColor} btnLoader />,
		withRipple = true,
		onPointerDown,
		children,
		...rest
	} = props;

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
				"dui__btn",
				{
					"dui__btn--icon-start": iconStart,
					"dui__btn--icon-end": iconEnd,
					"dui__btn--rounded": rounded,
					"dui__btn--round": round,
					"dui__btn--flat": flat,
					"dui__btn--wide": wide,
					"dui__btn--no-wrap": unWrapText,
					"dui__btn--left-align": leftAlignContent,
					"dui__btn--focus-ring": !keyboardOnlyFocusRing,
					"dui__btn--still": !spongy,
				},
				{
					[`dui__btn--${size}`]: SizeOptions.includes(size) && size !== "md",
					[`dui__btn--${pigment}`]: PigmentOptions.includes(pigment),
					[`dui__btn--color-${pigmentColor}`]: pigmentColor && PigmentOptions.includes(pigmentColor),
					[`dui__elevation--${elevation}`]: ElevationOptions.includes(elevation) && elevation !== "none",
				},
				{
					"dui__btn--loading": isLoading,
					"dui__btn--loading-disabled": isLoading && disableWhileLoading,
					"dui__btn--active": active,
				},
				className
			)}
			onPointerDown={handleOnPointerDown}
			{...rest}
			ref={mergeRefs([btnRef, ref])}>
			{iconStart && iconStart}
			{children}
			{iconEnd && iconEnd}
			{isLoading && <div className='dui__btn--loading__overlay'>{loadingComponent}</div>}
		</ParsedComponent>
	);
};

export default React.forwardRef<unknown, ButtonProps>(Button);
