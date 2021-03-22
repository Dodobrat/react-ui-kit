// Auto-Generated
import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import { CheckboxComponentProps, CheckboxProps } from "./Checkbox.types";
import { generateInputClasses, generateInputWrapperClasses, mergeRefs } from "../../../helpers/functions";
import SpinnerLoader from "../../SpinnerLoader/SpinnerLoader";

const Checkbox: React.ForwardRefRenderFunction<HTMLDivElement, CheckboxProps> = (props, ref) => {
	const {
		className,
		inputClassName,
		name = Math.random().toString(36).substr(2, 10),
		id = name,
		size = "md",
		rounded = false,
		flat = false,
		seamless = false,
		pigment = "primary",
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
		onChange,
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

	const checkboxRef = useRef(null);

	const [inputChecked, setInputChecked] = useState(checked);
	const [isFocused, setIsFocused] = useState(false);

	const handleOnFocus = (e: any) => {
		setIsFocused(() => true);

		if (scrollOnFocus && checkboxRef.current) {
			checkboxRef.current.scrollIntoView({ block: "center" });
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
				"dui__input__wrapper--checkbox",
				{
					"dui__input__wrapper--focused": isFocused,
				},
				generateInputWrapperClasses(wrapperClassDefaults),
				className
			)}
			tabIndex={-1}
			ref={mergeRefs([ref])}>
			{preffix && <div className='dui__input__wrapper__attachment dui__input__wrapper__preffix'>{preffix}</div>}
			<CheckboxComponent
				className={inputClassName}
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
				onChange={onChange}
				disabled={(isLoading && disableWhileLoading) || disabled}
				children={children}
				{...rest}
				ref={mergeRefs([checkboxRef, innerRef])}
			/>
			{isLoading && <div className='dui__input__wrapper__attachment dui__input__wrapper__loader'>{loadingComponent}</div>}
			{suffix && <div className='dui__input__wrapper__attachment dui__input__wrapper__suffix'>{suffix}</div>}
		</div>
	);
};

export const CheckboxComponent = React.forwardRef<HTMLInputElement, CheckboxComponentProps>((props, ref) => {
	const {
		className,
		type,
		name,
		id = name,
		checked,
		size = "md",
		rounded = false,
		flat = false,
		pigment = "primary",
		elevation = "none",
		seamless = true,
		onChange,
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

	const checkboxComponentRef = useRef(null);

	const handleOnFocus = (e: any) => {
		if (scrollOnFocus && checkboxComponentRef.current) {
			checkboxComponentRef.current.scrollIntoView({ block: "center" });
		}
		if (onFocus) {
			onFocus(e);
		}
	};

	return (
		<label htmlFor={id} className={cn("dui__input__checkbox", generateInputClasses(classDefaults, true), className)}>
			<input
				type='checkbox'
				name={name}
				id={id}
				className={cn("dui__input__checkbox__input")}
				checked={checked}
				onFocus={handleOnFocus}
				onChange={onChange}
				disabled={disabled}
				{...rest}
				ref={mergeRefs([checkboxComponentRef, ref])}
			/>
			<div className='dui__input__checkbox__value' />
			{children}
		</label>
	);
});

export default React.forwardRef<HTMLDivElement, CheckboxProps>(Checkbox);
