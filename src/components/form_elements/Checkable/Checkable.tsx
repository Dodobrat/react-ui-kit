// Auto-Generated
import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import { CheckableComponentProps, CheckableProps } from "./Checkable.types";
import { mergeRefs } from "../../../helpers/functions";
import SpinnerLoader from "../../SpinnerLoader/SpinnerLoader";
import { useConfig } from "../../../context/ConfigContext";
import {
	generateLoadingClasses,
	generateDisabledClasses,
	generateSeamlessClasses,
	generateStyleClasses,
} from "../../../helpers/classnameGenerator";

const Checkable: React.ForwardRefRenderFunction<HTMLDivElement, CheckableProps> = (props, ref) => {
	const {
		appConfig: { config },
	} = useConfig();

	const {
		className,
		inputClassName,
		type = "checkbox",
		typeClass = "checkbox",
		name = `${type}_${Math.random().toString(36).substr(2, 10)}`,
		id = name,
		size = config.size ?? "md",
		flavor = config.flavor ?? "default",
		seamless = false,
		pigment = config.pigment ?? "primary",
		elevation = "none",
		scrollOnFocus = false,
		disableWhileLoading = true,
		isLoading = false,
		loadingComponent = <SpinnerLoader size={size} pigment={null} pigmentColor={pigment} componentLoader />,
		preffix,
		suffix,
		checked,
		onFocus,
		onBlur,
		disabled = false,
		innerRef,
		children,
		...rest
	} = props;

	const classDefaults = {
		size,
		flavor,
		pigment,
		elevation,
		seamless,
		isLoading,
		disableWhileLoading,
		disabled,
	};

	const classBase = "dui__input__wrapper";

	const checkRef = useRef(null);

	const [inputChecked, setInputChecked] = useState(checked);
	const [isFocused, setIsFocused] = useState(false);

	const handleOnFocus = (e: any) => {
		setIsFocused(() => true);

		if (scrollOnFocus && checkRef.current) {
			checkRef.current.scrollIntoView({ block: "center" });
		}

		if (onFocus) {
			onFocus(e);
		}
	};

	const handleOnBlur = (e: any) => {
		setIsFocused(() => false);

		if (onBlur) {
			onBlur(e);
		}
	};

	useEffect(() => {
		setInputChecked(checked);
		return () => {
			setInputChecked(false);
		};
	}, [checked]);

	return (
		<div
			className={cn(
				classBase,
				`${classBase}__checkable`,
				{
					[`${classBase}--${typeClass}`]: typeClass,
					[`${classBase}--focused`]: isFocused,
				},
				generateStyleClasses(classDefaults),
				generateLoadingClasses(classBase, classDefaults),
				generateDisabledClasses(classBase, classDefaults),
				generateSeamlessClasses(classBase, classDefaults),
				className
			)}
			tabIndex={-1}
			ref={mergeRefs([ref])}>
			{preffix && <div className={cn(`${classBase}__attachment`, `${classBase}__preffix`)}>{preffix}</div>}
			<CheckableComponent
				className={inputClassName}
				type={type}
				typeClass={typeClass}
				name={name}
				id={id}
				flavor={flavor}
				size={size}
				seamless={seamless}
				pigment={pigment}
				elevation={elevation}
				checked={inputChecked}
				onFocus={handleOnFocus}
				onBlur={handleOnBlur}
				disabled={(isLoading && disableWhileLoading) || disabled}
				children={children}
				{...rest}
				ref={mergeRefs([checkRef, innerRef])}
			/>
			{isLoading && <div className={cn(`${classBase}__attachment`, `${classBase}__loader`)}>{loadingComponent}</div>}
			{suffix && <div className={cn(`${classBase}__attachment`, `${classBase}__suffix`)}>{suffix}</div>}
		</div>
	);
};

export const CheckableComponent = React.forwardRef<HTMLInputElement, CheckableComponentProps>((props, ref) => {
	const {
		appConfig: { config },
	} = useConfig();

	const {
		className,
		type,
		typeClass,
		name,
		id = name,
		checked,
		size = config.size ?? "md",
		flavor = config.flavor ?? "default",
		pigment = config.pigment ?? "primary",
		elevation = "none",
		seamless = true,
		onFocus,
		scrollOnFocus = false,
		disabled,
		children,
		...rest
	} = props;

	const classDefaults = {
		size,
		flavor,
		pigment,
		elevation,
		seamless,
	};

	const classBase = "dui__input";

	const checkComponentRef = useRef(null);

	const handleOnFocus = (e: any) => {
		if (scrollOnFocus && checkComponentRef.current) {
			checkComponentRef.current.scrollIntoView({ block: "center" });
		}
		if (onFocus) {
			onFocus(e);
		}
	};

	return (
		<label
			htmlFor={id}
			className={cn(
				classBase,
				`${classBase}__checkable`,
				{
					[`${classBase}__${typeClass}`]: typeClass,
				},
				generateStyleClasses(classDefaults),
				generateSeamlessClasses(classBase, classDefaults),
				className
			)}>
			<input
				type={type}
				name={name}
				id={id}
				className={cn(`${classBase}__checkable__input`, {
					[`${classBase}__${typeClass}__input`]: typeClass,
				})}
				checked={checked}
				onFocus={handleOnFocus}
				disabled={disabled}
				{...rest}
				ref={mergeRefs([checkComponentRef, ref])}
			/>
			<div
				className={cn(`${classBase}__checkable__value`, {
					[`${classBase}__${typeClass}__value`]: typeClass,
				})}
			/>
			{children}
		</label>
	);
});

export default React.forwardRef<HTMLDivElement, CheckableProps>(Checkable);
