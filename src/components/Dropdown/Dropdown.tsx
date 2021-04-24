// Auto-Generated
import React, { forwardRef, useEffect, useState } from "react";
import cn from "classnames";

import { DropdownProps } from "./Dropdown.types";
import { useConfig } from "../../context/ConfigContext";
import { DropdownBody, DropdownHeader, DropdownItem, DropdownMenu, DropdownSeparator, DropdownToggle } from "./DropdownSubComponents";
import {
	DropdownBodySubComponentProps,
	DropdownHeaderSubComponentProps,
	DropdownItemSubComponentProps,
	DropdownMenuSubComponentProps,
	DropdownSeparatorSubComponentProps,
	DropdownToggleSubComponentProps,
} from "./DropdownSubComponents.types";
import { generateStyleClasses } from "../../helpers/classnameGenerator";

export interface DropdownComponent extends React.ForwardRefExoticComponent<DropdownProps & React.RefAttributes<HTMLDivElement>> {
	Toggle: React.ForwardRefExoticComponent<DropdownToggleSubComponentProps & React.RefAttributes<unknown>>;
	Menu: React.ForwardRefExoticComponent<DropdownMenuSubComponentProps & React.RefAttributes<unknown>>;
	Header: React.ForwardRefExoticComponent<DropdownHeaderSubComponentProps & React.RefAttributes<unknown>>;
	Item: React.ForwardRefExoticComponent<DropdownItemSubComponentProps & React.RefAttributes<unknown>>;
	Separator: React.ForwardRefExoticComponent<DropdownSeparatorSubComponentProps & React.RefAttributes<unknown>>;
	Body: React.ForwardRefExoticComponent<DropdownBodySubComponentProps & React.RefAttributes<unknown>>;
}

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>((props, ref) => {
	const {
		appConfig: { config },
	} = useConfig();

	const {
		position = "bottom",
		alignment = "start",
		adjustToViewport = true,
		elevation = config.dropdownElevation ?? "subtle",
		pigment = "default",
		size = config.size ?? "md",
		flavor = config.flavor ?? "deafult",
		seamless = false,
		spacing = 5,
		onToggle,
		isToggled = false,
		className,
		children,
		...rest
	} = props;

	const classDefaults = {
		elevation,
		pigment,
		flavor,
		size,
		seamless,
	};

	const classBase = "dui__dropdown";

	const [dropdownState, setDropdownState] = useState<boolean>(isToggled);

	const onDropdownToggle = () => setDropdownState((prev) => !prev);

	useEffect(() => {
		setDropdownState(isToggled);
	}, [isToggled]);

	const triggerLevelChildren: JSX.Element[] = React.Children.map(children, (child: JSX.Element) => {
		if (child?.type?.displayName === "DropdownToggle") {
			return {
				...child,
				props: {
					...child.props,
					isToggled: dropdownState,
					onKeyboardToggle: onToggle ? () => onToggle(isToggled) : onDropdownToggle,
					onClick: onToggle ? () => onToggle(isToggled) : onDropdownToggle,
				},
			};
		}
		return null;
	});

	const popupChildren: JSX.Element[] = React.Children.map(children, (child: JSX.Element) => {
		if (child?.type?.displayName === "DropdownMenu" || child?.type?.displayName === "DropdownBody") {
			return {
				...child,
				props: {
					...child.props,
					isToggled: dropdownState,
					className: child.type.displayName === "DropdownMenu" ? generateStyleClasses(classDefaults) : "",
				},
			};
		}
		return null;
	});

	return (
		<div data-testid='Dropdown' className={cn(classBase, className)} {...rest} ref={ref}>
			{triggerLevelChildren}
			{popupChildren}
		</div>
	);
}) as DropdownComponent;

Dropdown.Toggle = DropdownToggle;
Dropdown.Menu = DropdownMenu;
Dropdown.Header = DropdownHeader;
Dropdown.Item = DropdownItem;
Dropdown.Separator = DropdownSeparator;
Dropdown.Body = DropdownBody;

export default Dropdown;
