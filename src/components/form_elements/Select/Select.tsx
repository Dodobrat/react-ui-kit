// Auto-Generated
import React, { useContext, useEffect, useRef, useState } from "react";
import cn from "classnames";

import { SelectComponentProps, SelectProps } from "./Select.types";
import SpinnerLoader from "../../SpinnerLoader/SpinnerLoader";
import { CloseOutlined } from "../../icons";
import { generateInputClasses, generateInputWrapperClasses, mergeRefs } from "../../../helpers/functions";
import { GlobalContext } from "../../../context/GlobalContext/GlobalContext";

const Select: React.ForwardRefRenderFunction<HTMLDivElement, SelectProps> = (props, ref) => {
	const {
		appConfig: { config },
	} = useContext(GlobalContext);

	const {
		className,
		inputClassName,
		name,
		id = name,
		size = config.size ?? "md",
		rounded = config.rounded ?? false,
		seamless = false,
		flat = config.flat ?? false,
		pigment = config.primary ?? "primary",
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

	const selectRef = useRef(null);

	const [selectValue, setSelectValue] = useState(value);
	const [isFocused, setIsFocused] = useState(false);
	const [showClearIndicator, setShowClearIndicator] = useState(false);

	const handleOnFocus = (e: any) => {
		setIsFocused(() => true);

		if (scrollOnFocus && selectRef.current) {
			selectRef.current.scrollIntoView({ block: "center" });
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
			setSelectValue("");
			selectRef.current.focus();
			return setShowClearIndicator(false);
		}
		selectRef.current.value = "";
		selectRef.current.focus();
		return setShowClearIndicator(false);
	};

	const onUncontrolledChange = (e: any) => {
		const newestValue = e.currentTarget.value;
		setShowClearIndicator(newestValue.length > 0);
	};

	useEffect(() => {
		if (isClearable && (!value || !onChange) && selectRef.current) {
			if (selectRef.current.value.length > 0) {
				setShowClearIndicator(true);
			}
		}
		return () => {
			setShowClearIndicator(false);
		};
	}, []);

	useEffect(() => {
		setSelectValue(value);
		return () => {
			setSelectValue("");
		};
	}, [value]);

	return (
		<div
			className={cn(
				"dui__input__wrapper--select",
				{
					"dui__input__wrapper--focused": isFocused,
				},
				generateInputWrapperClasses(wrapperClassDefaults),
				className
			)}
			tabIndex={-1}
			ref={mergeRefs([ref])}>
			{preffix && <div className='dui__input__wrapper__attachment dui__input__wrapper__preffix'>{preffix}</div>}
			<SelectComponent
				className={inputClassName}
				name={name}
				id={id}
				flat={flat}
				size={size}
				rounded={rounded}
				pigment={pigment}
				seamless={seamless}
				elevation={elevation}
				value={selectValue}
				onFocus={handleOnFocus}
				onBlur={handleOnBlur}
				onChange={(e: any) => {
					if (onChange) {
						return onChange(e);
					}
					return onUncontrolledChange(e);
				}}
				disabled={(isLoading && disableWhileLoading) || disabled}
				children={children}
				{...rest}
				ref={mergeRefs([selectRef, innerRef])}
			/>
			{isLoading && <div className='dui__input__wrapper__attachment dui__input__wrapper__loader'>{loadingComponent}</div>}
			{isClearable && (selectValue?.length > 0 || showClearIndicator) && (
				<div className='dui__input__wrapper__attachment dui__input__wrapper__clear' onClick={resetInput}>
					{clearableComponent ?? <CloseOutlined className='dui__icon' />}
				</div>
			)}
			{suffix && <div className='dui__input__wrapper__attachment dui__input__wrapper__suffix'>{suffix}</div>}
		</div>
	);
};

export const SelectComponent = React.forwardRef<HTMLSelectElement, SelectComponentProps>((props, ref) => {
	const {
		appConfig: { config },
	} = useContext(GlobalContext);

	const {
		className,
		name,
		id = name,
		value,
		size = config.size ?? "md",
		rounded = config.rounded ?? false,
		flat = config.flat ?? false,
		pigment = config.pigment ?? "primary",
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
		<div className='dui__input__select__wrapper' tabIndex={-1}>
			<select
				name={name}
				id={id}
				className={cn("dui__input__select", generateInputClasses(classDefaults, true), className)}
				value={value}
				onChange={onChange}
				onFocus={handleOnFocus}
				disabled={disabled}
				{...rest}
				ref={mergeRefs([inputComponentRef, ref])}>
				{children}
			</select>
		</div>
	);
});

export default React.forwardRef<HTMLDivElement, SelectProps>(Select);
