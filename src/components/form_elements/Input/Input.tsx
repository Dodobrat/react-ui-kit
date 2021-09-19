// Auto-Generated
import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import { InputComponentProps, InputProps } from "./Input.types";
import SpinnerLoader from "../../SpinnerLoader/SpinnerLoader";
import { mergeRefs } from "../../../helpers/functions";
import { useConfig } from "../../../context/ConfigContext";
import {
	generateDisabledClasses,
	generateLoadingClasses,
	generateSeamlessClasses,
	generateStyleClasses,
} from "../../../helpers/classnameGenerator";

const Input: React.ForwardRefRenderFunction<HTMLDivElement, InputProps> = (props, ref) => {
	const {
		appConfig: { config },
	} = useConfig();

	const {
		className,
		inputClassName,
		type = "text",
		name,
		id = name,
		sizing = config.sizing ?? "md",
		seamless = false,
		flavor = config.flavor ?? "default",
		pigment = config.pigment ?? "primary",
		elevation = "none",
		disableWhileLoading = true,
		isLoading = false,
		loadingComponent = <SpinnerLoader sizing={sizing} pigment={null} pigmentColor={pigment} componentLoader />,
		preffix,
		suffix,
		isClearable = false,
		clearableComponent = null,
		scrollOnFocus = false,
		value,
		onChange,
		onFocus,
		onBlur,
		disabled = false,
		spellCheck = false,
		innerRef,
		withPasswordReveal = type === "password",
		passwordRevealComponent = (visible = type === "text") => (visible ? <span>Hide</span> : <span>Show</span>),
		children,
		...rest
	} = props;

	const classDefaults = {
		sizing,
		flavor,
		pigment,
		seamless,
		elevation,
		isLoading,
		disableWhileLoading,
		disabled,
	};

	const classBase = "dui__input__wrapper";

	const inputRef = useRef(null);

	const [inputValue, setInputValue] = useState(value);
	const [isFocused, setIsFocused] = useState(false);
	const [showClearIndicator, setShowClearIndicator] = useState(false);
	const [inputType, setInputType] = useState(type);

	const changeInputType = () => {
		inputRef.current.focus();
		if (inputType === "password") {
			return setInputType("text");
		} else {
			return setInputType("password");
		}
	};

	const handleOnFocus = (e: any) => {
		setIsFocused(() => true);

		if (scrollOnFocus && inputRef.current) {
			inputRef.current.scrollIntoView({ block: "center" });
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

	const resetInput = () => {
		if (value || onChange) {
			setInputValue("");
			inputRef.current.focus();
			return setShowClearIndicator(false);
		}
		inputRef.current.value = "";
		inputRef.current.focus();
		return setShowClearIndicator(false);
	};

	const onUncontrolledChange = (e: any) => {
		const newestValue = e.currentTarget.value;
		setShowClearIndicator(newestValue.length > 0);
	};

	useEffect(() => {
		if (isClearable && (!value || !onChange) && inputRef.current) {
			if (inputRef.current.value.length > 0) {
				setShowClearIndicator(true);
			}
		}
	}, []);

	useEffect(() => {
		setInputValue(value);
	}, [value]);

	return (
		<div
			className={cn(
				classBase,
				{
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
			<InputComponent
				className={inputClassName}
				type={inputType}
				name={name}
				id={id}
				flavor={flavor}
				sizing={sizing}
				pigment={pigment}
				seamless={seamless}
				elevation={elevation}
				value={inputValue}
				onFocus={handleOnFocus}
				onBlur={handleOnBlur}
				onChange={(e: any) => {
					if (onChange) {
						return onChange(e);
					}
					return onUncontrolledChange(e);
				}}
				disabled={(isLoading && disableWhileLoading) || disabled}
				spellCheck={spellCheck}
				{...rest}
				ref={mergeRefs([inputRef, innerRef])}
			/>
			{isLoading && <div className={cn(`${classBase}__attachment`, `${classBase}__loader`)}>{loadingComponent}</div>}
			{isClearable && (inputValue?.length > 0 || showClearIndicator) && (
				<div className={cn(`${classBase}__attachment`, `${classBase}__clear`)} onClick={resetInput}>
					{clearableComponent ?? <span>Clear</span>}
				</div>
			)}
			{withPasswordReveal && (
				<div className={cn(`${classBase}__attachment`, `${classBase}__password`)} onClick={changeInputType}>
					{passwordRevealComponent(inputType === "text")}
				</div>
			)}
			{suffix && <div className={cn(`${classBase}__attachment`, `${classBase}__suffix`)}>{suffix}</div>}
		</div>
	);
};

export const InputComponent = React.forwardRef<HTMLInputElement, InputComponentProps>((props, ref) => {
	const {
		appConfig: { config },
	} = useConfig();

	const {
		className,
		type,
		name,
		id = name,
		value,
		sizing = config.sizing ?? "md",
		flavor = config.flavor ?? "default",
		pigment = config.pigment ?? "primary",
		elevation = "none",
		seamless = type === "range",
		onChange,
		onFocus,
		scrollOnFocus = false,
		disabled,
		spellCheck,
		children,
		...rest
	} = props;

	const classDefaults = {
		sizing,
		flavor,
		pigment,
		elevation,
		seamless,
	};

	const classBase = "dui__input";

	const inputComponentRef = useRef(null);

	const handleOnFocus = (e: any) => {
		if (scrollOnFocus && inputComponentRef.current) {
			inputComponentRef.current.scrollIntoView({ block: "center" });
		}
		if (onFocus) {
			onFocus(e);
		}
	};

	return (
		<input
			type={type}
			name={name}
			id={id}
			className={cn(classBase, generateStyleClasses(classDefaults), generateSeamlessClasses(classBase, classDefaults), className)}
			value={value}
			onChange={onChange}
			onFocus={handleOnFocus}
			disabled={disabled}
			spellCheck={spellCheck}
			{...rest}
			ref={mergeRefs([inputComponentRef, ref])}
		/>
	);
});

export default React.forwardRef<HTMLDivElement, InputProps>(Input);
