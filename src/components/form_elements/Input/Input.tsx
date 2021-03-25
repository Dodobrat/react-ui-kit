// Auto-Generated
import React, { useContext, useEffect, useRef, useState } from "react";
import cn from "classnames";

import { InputComponentProps, InputProps } from "./Input.types";
import SpinnerLoader from "../../SpinnerLoader/SpinnerLoader";
import { CloseOutlined, Eye, EyeCrossed } from "../../icons";
import { generateInputClasses, generateInputWrapperClasses, mergeRefs } from "../../../helpers/functions";
import { GlobalContext } from "../../../context/GlobalContext/GlobalContext";

const Input: React.ForwardRefRenderFunction<HTMLDivElement, InputProps> = (props, ref) => {
	const {
		appConfig: { config },
	} = useContext(GlobalContext);

	const {
		className,
		inputClassName,
		type = "text",
		name,
		id = name,
		size = config.size ?? "md",
		rounded = config.rounded ?? false,
		seamless = false,
		flat = config.flat ?? false,
		pigment = config.pigment ?? "primary",
		elevation = "none",
		disableWhileLoading = true,
		isLoading = false,
		loadingComponent = <SpinnerLoader size={size} pigment={pigment} inputLoader />,
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
		innerRef,
		withPasswordReveal = type === "password",
		passwordRevealComponent = (visible = type === "text") =>
			visible ? <EyeCrossed className='dui__icon' /> : <Eye className='dui__icon' />,
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
		return () => {
			setShowClearIndicator(false);
		};
	}, []);

	useEffect(() => {
		setInputValue(value);
		return () => {
			setInputValue("");
		};
	}, [value]);

	return (
		<div
			className={cn(
				{
					"dui__input__wrapper--focused": isFocused,
				},
				generateInputWrapperClasses(wrapperClassDefaults),
				className
			)}
			tabIndex={-1}
			ref={mergeRefs([ref])}>
			{preffix && <div className='dui__input__wrapper__attachment dui__input__wrapper__preffix'>{preffix}</div>}
			<InputComponent
				className={inputClassName}
				type={inputType}
				name={name}
				id={id}
				flat={flat}
				size={size}
				rounded={rounded}
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
				{...rest}
				ref={mergeRefs([inputRef, innerRef])}
			/>
			{isLoading && <div className='dui__input__wrapper__attachment dui__input__wrapper__loader'>{loadingComponent}</div>}
			{isClearable && (inputValue?.length > 0 || showClearIndicator) && (
				<div className='dui__input__wrapper__attachment dui__input__wrapper__clear' onClick={resetInput}>
					{clearableComponent ?? <CloseOutlined className='dui__icon' />}
				</div>
			)}
			{withPasswordReveal && (
				<div className='dui__input__wrapper__attachment dui__input__wrapper__password' onClick={changeInputType}>
					{passwordRevealComponent(inputType === "text")}
				</div>
			)}
			{suffix && <div className='dui__input__wrapper__attachment dui__input__wrapper__suffix'>{suffix}</div>}
		</div>
	);
};

export const InputComponent = React.forwardRef<HTMLInputElement, InputComponentProps>((props, ref) => {
	const {
		appConfig: { config },
	} = useContext(GlobalContext);

	const {
		className,
		type,
		name,
		id = name,
		value,
		size = config.size ?? "md",
		rounded = config.rounded ?? false,
		flat = config.flat ?? false,
		pigment = config.pigment ?? "primary",
		elevation = "none",
		seamless = type === "range",
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
			className={cn(generateInputClasses(classDefaults, true), className)}
			value={value}
			onChange={onChange}
			onFocus={handleOnFocus}
			disabled={disabled}
			{...rest}
			ref={mergeRefs([inputComponentRef, ref])}
		/>
	);
});

export default React.forwardRef<HTMLDivElement, InputProps>(Input);
