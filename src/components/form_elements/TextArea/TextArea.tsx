// Auto-Generated
import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import { TextAreaProps, TextAreaComponentProps } from "./TextArea.types";
import { generateInputClasses, generateInputWrapperClasses, mergeRefs } from "../../../helpers/functions";
import SpinnerLoader from "../../SpinnerLoader/SpinnerLoader";
import { CloseOutlined } from "../../icons";

const TextArea: React.ForwardRefRenderFunction<HTMLDivElement, TextAreaProps> = (props, ref) => {
	const {
		className,
		inputClassName,
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
		isClearable = false,
		clearableComponent = null,
		clearableComponentLabel = "Clear",
		scrollOnFocus = false,
		value,
		onChange,
		onFocus,
		onBlur,
		disabled = false,
		withCharacterCount = true,
		charactersComponent = (length: number, maxLength: number) => (
			<span>
				{length}
				{`${maxLength ? ` / ${maxLength}` : ""}`}
			</span>
		),
		innerRef,
		children,
		...rest
	} = props;

	const wrapperClassDefaults = {
		size,
		rounded,
		flat,
		pigment,
		elevation,
		isLoading,
		disableWhileLoading,
		disabled,
	};

	const textAreaRef = useRef(null);

	const [inputValue, setInputValue] = useState(value);
	const [isFocused, setIsFocused] = useState(false);
	const [showClearIndicator, setShowClearIndicator] = useState(false);
	const [showCharacterCount, setCharacterCount] = useState(false);

	const handleOnFocus = (e: any) => {
		setIsFocused(() => true);

		if (scrollOnFocus && textAreaRef.current) {
			textAreaRef.current.scrollIntoView();
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
		if (value || onChange || withCharacterCount) {
			setInputValue("");
			textAreaRef.current.focus();
			return setShowClearIndicator(false);
		}
		textAreaRef.current.value = "";
		textAreaRef.current.focus();
		return setShowClearIndicator(false);
	};

	const onUncontrolledChange = (e: any) => {
		const newestValue = e.currentTarget.value;
		if (withCharacterCount) {
			setInputValue(newestValue);
		}
		setShowClearIndicator(newestValue.length > 0);
	};

	useEffect(() => {
		if ((!value || !onChange) && textAreaRef.current) {
			if (withCharacterCount) {
				setCharacterCount(true);
			}
			if (isClearable && textAreaRef.current.value.length > 0) {
				setShowClearIndicator(true);
			}
		}
		return () => {
			setCharacterCount(false);
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
				"dui__input__wrapper--textarea",
				{
					"dui__input__wrapper--focused": isFocused,
				},
				generateInputWrapperClasses(wrapperClassDefaults),
				className
			)}
			tabIndex={-1}
			ref={mergeRefs([ref])}>
			<TextAreaComponent
				className={inputClassName}
				name={name}
				id={id}
				flat={flat}
				size={size}
				rounded={rounded}
				pigment={pigment}
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
				ref={mergeRefs([textAreaRef, innerRef])}
			/>
			<div className='dui__input__wrapper__attachment__container'>
				{isLoading && <div className='dui__input__wrapper__attachment dui__input__wrapper__loader'>{loadingComponent}</div>}
				{isClearable && (inputValue?.length > 0 || showClearIndicator) && (
					<div className='dui__input__wrapper__attachment dui__input__wrapper__clear' onClick={resetInput}>
						{clearableComponent ?? (
							<>
								<span>{clearableComponentLabel}</span> <CloseOutlined className='dui__icon' />
							</>
						)}
					</div>
				)}
				{withCharacterCount && showCharacterCount && (
					<div className='dui__input__wrapper__attachment dui__input__wrapper__characters'>
						{charactersComponent(inputValue?.length ?? textAreaRef.current?.value?.length, Number(rest["maxLength"]))}
					</div>
				)}
			</div>
		</div>
	);
};

export const TextAreaComponent = React.forwardRef<HTMLTextAreaElement, TextAreaComponentProps>((props, ref) => {
	const {
		className,
		name,
		id = name,
		value,
		size = "md",
		rounded = false,
		flat = false,
		pigment = "primary",
		elevation = "none",
		seamless = false,
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

	const textAreaComponentRef = useRef(null);

	const handleOnChange = (e: any) => {
		if (onChange) {
			onChange(e);
		}
	};

	const handleOnFocus = (e: any) => {
		if (scrollOnFocus && textAreaComponentRef.current) {
			textAreaComponentRef.current.scrollIntoView();
		}
		if (onFocus) {
			onFocus(e);
		}
	};

	return (
		<textarea
			name={name}
			id={id}
			className={cn("dui__input__textarea", generateInputClasses(classDefaults), className)}
			value={value}
			onChange={handleOnChange}
			onFocus={handleOnFocus}
			disabled={disabled}
			{...rest}
			ref={mergeRefs([textAreaComponentRef, ref])}></textarea>
	);
});

export default React.forwardRef<HTMLDivElement, TextAreaProps>(TextArea);
