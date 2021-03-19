// Auto-Generated
import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import { InputComponentProps, InputProps } from "./Input.types";
import { ElevationOptions, PigmentOptions, SizeOptions } from "../../../helpers/global";
import SpinnerLoader from "../../SpinnerLoader/SpinnerLoader";
import { Close, Eye, EyeCrossed } from "../../icons";
import { mergeRefs } from "../../../helpers/functions";

const Input: React.ForwardRefRenderFunction<HTMLDivElement, InputProps> = (props, ref) => {
	const {
		className,
		inputClassName,
		type = "text",
		name,
		id = name,
		size = "md",
		rounded = false,
		flat = false,
		pigment = "primary",
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
		disabled = false,
		innerRef,
		withPasswordReveal = type === "password",
		passwordRevealComponent = (visible = type === "text") =>
			visible ? <EyeCrossed className='dui__icon' /> : <Eye className='dui__icon' />,
		children,
		...rest
	} = props;

	const inputRef = useRef(null);

	const [inputValue, setInputValue] = useState(value);
	const [isFocused, setIsFocused] = useState(false);
	const [showClearIndicator, setShowClearIndicator] = useState(false);
	const [inputType, setInputType] = useState(type);

	const changeInputType = () => (inputType === "password" ? setInputType("text") : setInputType("password"));

	const onFocus = (e: any) => {
		if (!e.currentTarget.contains(e.relatedTarget)) {
			inputRef.current.focus();
			if (scrollOnFocus && inputRef.current) {
				inputRef.current.scrollIntoView();
			}
			setIsFocused(() => true);
		}
	};

	const onBlur = (e: any) => {
		if (!e.currentTarget.contains(e.relatedTarget)) {
			setIsFocused(() => false);
		}
	};

	const resetInput = () => {
		if (value || onChange) {
			return setInputValue("");
		}
		inputRef.current.value = "";
		inputRef.current.focus();
		return setShowClearIndicator(false);
	};

	const onUncontrolledChange = (e: React.FormEvent<HTMLInputElement>) => {
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
				"dui__input__wrapper",
				{
					"dui__input__wrapper--focused": isFocused,
					"dui__input__wrapper--rounded": rounded,
					"dui__input__wrapper--flat": flat,
				},
				{
					[`dui__input__wrapper--${size}`]: SizeOptions.includes(size) && size !== "md",
					[`dui__input__wrapper--${pigment}`]: PigmentOptions.includes(pigment),
					[`dui__elevation--${elevation}`]: ElevationOptions.includes(elevation) && elevation !== "none",
				},
				{
					"dui__input__wrapper--disabled": disabled,
					"dui__input__wrapper--loading": isLoading,
					"dui__input__wrapper--loading-disabled": isLoading && disableWhileLoading,
				},
				className
			)}
			tabIndex={-1}
			onFocus={onFocus}
			onBlur={onBlur}
			ref={mergeRefs([ref])}>
			{preffix && <span className='dui__input__wrapper__attachment dui__input__wrapper__preffix'>{preffix}</span>}
			<InputComponent
				type={inputType}
				name={id}
				id={id}
				flat={flat}
				size={size}
				rounded={rounded}
				pigment={pigment}
				elevation={elevation}
				value={inputValue}
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
			{isLoading && <span className='dui__input__wrapper__attachment dui__input__wrapper__loader'>{loadingComponent}</span>}
			{isClearable && (inputValue?.length > 0 || showClearIndicator) && (
				<span className='dui__input__wrapper__attachment dui__input__wrapper__clear' onClick={resetInput}>
					{clearableComponent ?? <Close className='dui__icon' />}
				</span>
			)}
			{withPasswordReveal && (
				<span className='dui__input__wrapper__attachment dui__input__wrapper__password' onClick={changeInputType}>
					{passwordRevealComponent(inputType === "text")}
				</span>
			)}
			{suffix && <span className='dui__input__wrapper__attachment dui__input__wrapper__suffix'>{suffix}</span>}
		</div>
	);
};

export const InputComponent = React.forwardRef<HTMLInputElement, InputComponentProps>((props, ref) => {
	const {
		className,
		type,
		id,
		value,
		size = "md",
		rounded = false,
		flat = false,
		pigment = "primary",
		elevation = "none",
		onChange,
		onFocus,
		scrollOnFocus = false,
		disabled,
		...rest
	} = props;

	const inputComponentRef = useRef(null);

	const handleOnFocus = (e: any) => {
		if (scrollOnFocus && inputComponentRef.current) {
			inputComponentRef.current.scrollIntoView();
		}
		if (onFocus) {
			onFocus(e);
		}
	};

	return (
		<input
			data-testid='Input'
			type={type}
			name={id}
			id={id}
			className={cn(
				"dui__input",
				{
					"dui__input--rounded": rounded,
					"dui__input--flat": flat,
				},
				{
					[`dui__input--${size}`]: SizeOptions.includes(size) && size !== "md",
					[`dui__input--${pigment}`]: PigmentOptions.includes(pigment),
					[`dui__elevation--${elevation}`]: ElevationOptions.includes(elevation) && elevation !== "none",
				},
				className
			)}
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
