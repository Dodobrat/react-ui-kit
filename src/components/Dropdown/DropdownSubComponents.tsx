import React, { forwardRef, useRef } from "react";
import cn from "classnames";
import {
	DropdownBodySubComponentProps,
	DropdownHeaderSubComponentProps,
	DropdownItemSubComponentProps,
	DropdownMenuSubComponentProps,
	DropdownSeparatorSubComponentProps,
	DropdownToggleSubComponentProps,
} from "./DropdownSubComponents.types";
import { addElementAttributes, mergeRefs } from "../../helpers/functions";

export const DropdownToggle = forwardRef<unknown, DropdownToggleSubComponentProps>((props, ref) => {
	const { className, as = "div", isToggled, onKeyboardToggle, onKeyDown, children, ...rest } = props;

	const toggleRef = useRef(null);

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (onKeyDown) {
			onKeyDown(e);
		}
		if (toggleRef.current === document.activeElement && (e.code === "Space" || e.code === "ArrowDown")) {
			e.preventDefault();
			onKeyboardToggle(isToggled);
		}
		if (toggleRef.current === document.activeElement && e.code === "Escape") {
			e.preventDefault();
			onKeyboardToggle(false);
		}
	};

	const ParsedComponent: React.ElementType = addElementAttributes(as, rest);

	return (
		<ParsedComponent
			className={cn("dui__dropdown__toggle", className)}
			aria-expanded={!isToggled}
			tabIndex={rest["disabled"] ? -1 : 0}
			onKeyDown={handleKeyDown}
			{...rest}
			ref={mergeRefs([toggleRef, ref])}>
			{children}
		</ParsedComponent>
	);
});

DropdownToggle.displayName = "DropdownToggle";

export const DropdownMenu = forwardRef<unknown, DropdownMenuSubComponentProps>((props, ref) => {
	const { className, as = "div", isToggled, children, ...rest } = props;

	const ParsedComponent: React.ElementType = addElementAttributes(as, rest);

	if (isToggled) {
		return (
			<ParsedComponent className={cn("dui__dropdown__menu", className)} {...rest} ref={ref}>
				{children}
			</ParsedComponent>
		);
	}
	return null;
});

DropdownMenu.displayName = "DropdownMenu";

export const DropdownHeader = forwardRef<unknown, DropdownHeaderSubComponentProps>((props, ref) => {
	const { className, as = "div", children, ...rest } = props;

	const ParsedComponent: React.ElementType = addElementAttributes(as, rest);

	return (
		<ParsedComponent className={cn("dui__dropdown__header", className)} {...rest} ref={ref}>
			{children}
		</ParsedComponent>
	);
});

DropdownHeader.displayName = "DropdownHeader";

export const DropdownItem = forwardRef<unknown, DropdownItemSubComponentProps>((props, ref) => {
	const { className, as = "div", children, ...rest } = props;

	const ParsedComponent: React.ElementType = addElementAttributes(as, rest);

	return (
		<ParsedComponent className={cn("dui__dropdown__item", className)} {...rest} ref={ref}>
			{children}
		</ParsedComponent>
	);
});

DropdownItem.displayName = "DropdownItem";

export const DropdownSeparator = forwardRef<unknown, DropdownSeparatorSubComponentProps>((props, ref) => {
	const { className, as = "div", children, ...rest } = props;

	const ParsedComponent: React.ElementType = addElementAttributes(as, rest);

	return <ParsedComponent className={cn("dui__dropdown__separator", className)} {...rest} ref={ref} tabIndex={-1} />;
});

DropdownSeparator.displayName = "DropdownSeparator";

export const DropdownBody = forwardRef<unknown, DropdownBodySubComponentProps>((props, ref) => {
	const { className, as = "div", isToggled, children, ...rest } = props;

	const ParsedComponent: React.ElementType = addElementAttributes(as, rest);

	if (isToggled) {
		return (
			<ParsedComponent className={cn("dui__dropdown__body", className)} {...rest} ref={ref}>
				{children}
			</ParsedComponent>
		);
	}
	return null;
});

DropdownBody.displayName = "DropdownBody";
