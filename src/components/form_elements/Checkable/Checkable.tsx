// Auto-Generated
import React, { useContext, useEffect, useRef, useState } from "react";
import cn from "classnames";

import { CheckableComponentProps, CheckableProps } from "./Checkable.types";
import { generateInputClasses, generateInputWrapperClasses, mergeRefs } from "../../../helpers/functions";
import SpinnerLoader from "../../SpinnerLoader/SpinnerLoader";
import { GlobalContext } from "../../../context/GlobalContext/GlobalContext";

const Checkable: React.ForwardRefRenderFunction<HTMLDivElement, CheckableProps> = (props, ref) => {
	const {
		appConfig: { config },
	} = useContext(GlobalContext);

	const {
		className,
		inputClassName,
		type = "checkbox",
		typeClass = "checkbox",
		name = Math.random().toString(36).substr(2, 10),
		id = name,
		size = config.size ?? "md",
		rounded = config.rounded ?? false,
		flat = config.flat ?? false,
		seamless = false,
		pigment = config.pigment ?? "primary",
		elevation = "none",
		scrollOnFocus = false,
		disableWhileLoading = true,
		isLoading = false,
		loadingComponent = <SpinnerLoader size={size} pigment={pigment} inputLoader />,
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

	const wrapperClassDefaults = {
		size,
		rounded,
		flat,
		pigment,
		seamless,
		elevation,
		isLoading,
		disableWhileLoading,
		disabled,
	};

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
				"dui__input__wrapper__checkable",
				{
					[`dui__input__wrapper--${typeClass}`]: typeClass,
				},
				{
					"dui__input__wrapper--focused": isFocused,
				},
				generateInputWrapperClasses(wrapperClassDefaults),
				className
			)}
			tabIndex={-1}
			ref={mergeRefs([ref])}>
			{preffix && <div className='dui__input__wrapper__attachment dui__input__wrapper__preffix'>{preffix}</div>}
			<CheckableComponent
				className={inputClassName}
				type={type}
				typeClass={typeClass}
				name={name}
				id={id}
				flat={flat}
				size={size}
				seamless={seamless}
				rounded={rounded}
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
			{isLoading && <div className='dui__input__wrapper__attachment dui__input__wrapper__loader'>{loadingComponent}</div>}
			{suffix && <div className='dui__input__wrapper__attachment dui__input__wrapper__suffix'>{suffix}</div>}
		</div>
	);
};

export const CheckableComponent = React.forwardRef<HTMLInputElement, CheckableComponentProps>((props, ref) => {
	const {
		appConfig: { config },
	} = useContext(GlobalContext);

	const {
		className,
		type,
		typeClass,
		name,
		id = name,
		checked,
		size = config.size ?? "md",
		rounded = config.rounded ?? false,
		flat = config.flat ?? false,
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
		rounded,
		flat,
		pigment,
		elevation,
		seamless,
	};

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
				"dui__input__checkable",
				{
					[`dui__input__${typeClass}`]: typeClass,
				},
				generateInputClasses(classDefaults, true),
				className
			)}>
			<input
				type={type}
				name={name}
				id={id}
				className={cn("dui__input__checkable__input", {
					[`dui__input__${typeClass}__input`]: typeClass,
				})}
				checked={checked}
				onFocus={handleOnFocus}
				disabled={disabled}
				{...rest}
				ref={mergeRefs([checkComponentRef, ref])}
			/>
			<div
				className={cn("dui__input__checkable__value", {
					[`dui__input__${typeClass}__value`]: typeClass,
				})}
			/>
			{children}
		</label>
	);
});

export default React.forwardRef<HTMLDivElement, CheckableProps>(Checkable);
