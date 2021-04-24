// Auto-Generated
import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import { SelectComponentProps, SelectProps } from "./Select.types";
import SpinnerLoader from "../../SpinnerLoader/SpinnerLoader";
import { IconCloseOutlined } from "../../icons";
import { mergeRefs } from "../../../helpers/functions";
import { useConfig } from "../../../context/ConfigContext";
import {
	generateDisabledClasses,
	generateLoadingClasses,
	generateSeamlessClasses,
	generateStyleClasses,
} from "../../../helpers/classnameGenerator";

const Select: React.ForwardRefRenderFunction<HTMLDivElement, SelectProps> = (props, ref) => {
	const {
		appConfig: { config },
	} = useConfig();

	const {
		className,
		inputClassName,
		name,
		id = name,
		size = config.size ?? "md",
		seamless = false,
		flavor = config.flavor ?? "default",
		pigment = config.primary ?? "primary",
		elevation = "none",
		disableWhileLoading = true,
		isLoading = false,
		loadingComponent = <SpinnerLoader size={size} pigment={null} pigmentColor={pigment} componentLoader />,
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

	const classDefaults = {
		size,
		flavor,
		pigment,
		seamless,
		elevation,
		isLoading,
		disableWhileLoading,
		disabled,
	};

	const classBase = "dui__input__wrapper";

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
	}, []);

	useEffect(() => {
		setSelectValue(value);
	}, [value]);

	return (
		<div
			className={cn(
				classBase,
				`${classBase}--select`,
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
			<SelectComponent
				className={inputClassName}
				name={name}
				id={id}
				flavor={flavor}
				size={size}
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
			{isLoading && <div className={cn(`${classBase}__attachment`, `${classBase}__loader`)}>{loadingComponent}</div>}
			{isClearable && (selectValue?.length > 0 || showClearIndicator) && (
				<div className={cn(`${classBase}__attachment`, `${classBase}__clear`)} onClick={resetInput}>
					{clearableComponent ?? <IconCloseOutlined className='dui__icon' />}
				</div>
			)}
			{suffix && <div className={cn(`${classBase}__attachment`, `${classBase}__suffix`)}>{suffix}</div>}
		</div>
	);
};

export const SelectComponent = React.forwardRef<HTMLSelectElement, SelectComponentProps>((props, ref) => {
	const {
		appConfig: { config },
	} = useConfig();

	const {
		className,
		name,
		id = name,
		value,
		size = config.size ?? "md",
		flavor = config.flavor ?? "default",
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
		<div className={cn(`${classBase}__select__wrapper`)} tabIndex={-1}>
			<select
				name={name}
				id={id}
				className={cn(
					classBase,
					`${classBase}__select`,
					generateStyleClasses(classDefaults),
					generateSeamlessClasses(classBase, classDefaults),
					className
				)}
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
