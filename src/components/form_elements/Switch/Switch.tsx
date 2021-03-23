// Auto-Generated
import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import { SwitchComponentProps, SwitchProps } from "./Switch.types";
import { generateInputClasses, generateInputWrapperClasses, mergeRefs } from "../../../helpers/functions";
import SpinnerLoader from "../../SpinnerLoader/SpinnerLoader";

const Switch: React.ForwardRefRenderFunction<HTMLDivElement, SwitchProps> = (props, ref) => {
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

	const switchRef = useRef(null);

	const [inputChecked, setInputChecked] = useState(checked);
	const [isFocused, setIsFocused] = useState(false);

	const handleOnFocus = (e: any) => {
		setIsFocused(() => true);

		if (scrollOnFocus && switchRef.current) {
			switchRef.current.scrollIntoView({ block: "center" });
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
				"dui__input__wrapper--switch",
				{
					"dui__input__wrapper--focused": isFocused,
				},
				generateInputWrapperClasses(wrapperClassDefaults),
				className
			)}
			tabIndex={-1}
			ref={mergeRefs([ref])}>
			{preffix && <div className='dui__input__wrapper__attachment dui__input__wrapper__preffix'>{preffix}</div>}
			<SwitchComponent
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
				disabled={(isLoading && disableWhileLoading) || disabled}
				children={children}
				{...rest}
				ref={mergeRefs([switchRef, innerRef])}
			/>
			{isLoading && <div className='dui__input__wrapper__attachment dui__input__wrapper__loader'>{loadingComponent}</div>}
			{suffix && <div className='dui__input__wrapper__attachment dui__input__wrapper__suffix'>{suffix}</div>}
		</div>
	);
};

export const SwitchComponent = React.forwardRef<HTMLInputElement, SwitchComponentProps>((props, ref) => {
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

	const switchComponentRef = useRef(null);

	const handleOnFocus = (e: any) => {
		if (scrollOnFocus && switchComponentRef.current) {
			switchComponentRef.current.scrollIntoView({ block: "center" });
		}
		if (onFocus) {
			onFocus(e);
		}
	};

	return (
		<label htmlFor={id} className={cn("dui__input__switch", generateInputClasses(classDefaults, true), className)}>
			<input
				type='checkbox'
				name={name}
				id={id}
				className={cn("dui__input__switch__input")}
				checked={checked}
				onFocus={handleOnFocus}
				onChange={onChange}
				disabled={disabled}
				{...rest}
				ref={mergeRefs([switchComponentRef, ref])}
			/>
			<div className='dui__input__switch__value' />
			{children}
		</label>
	);
});

export default React.forwardRef<HTMLDivElement, SwitchProps>(Switch);
