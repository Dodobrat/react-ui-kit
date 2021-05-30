// Auto-Generated
import React, {
	forwardRef,
	// useCallback,
	useEffect,
	//  useRef,
	useState,
} from "react";
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
// import { useEventListener } from "../../hooks/useEventListener";

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
		position = "bottom-left",
		elevation = config.dropdownElevation ?? "subtle",
		pigment = config.dropdownPigment ?? "default",
		sizing = config.dropdownSize ?? "md",
		flavor = config.dropdownFlavor ?? "default",
		seamless = config.dropdownSeamless ?? false,
		spacing = config.dropdownSpacing ?? 5,
		showOnFocus = config.dropdownShowOnFocus ?? false,
		animation = config.dropdownAnimation ?? "zoom",
		triggerElement = null,
		disabled,
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
		sizing,
		seamless,
	};

	const classBase = "dui__dropdown";

	// const dropdownRef = useRef(null);
	const [dropdownToggled, setDropdownToggled] = useState(isToggled);
	// const [triggerEl, setTriggerEl] = useState(triggerElement?.current);

	const onDropdownToggle = () => setDropdownToggled((prev) => !prev);

	useEffect(() => {
		if (onToggle) {
			onToggle(dropdownToggled);
		}
	}, [dropdownToggled]);

	useEffect(() => {
		setDropdownToggled(isToggled);
	}, [isToggled]);

	// useEffect(() => {
	// 	setTriggerEl(triggerElement?.current);
	// }, [triggerElement]);

	// useEffect(() => {
	// 	if (triggerEl && dropdownToggled) {
	// 		positionDropdown(triggerEl, dropdownRef.current, position, spacing);
	// 	}
	// }, [triggerEl, dropdownToggled, position]);

	// const handler = useCallback(() => {
	// 	if (triggerEl && dropdownToggled) {
	// 		positionDropdown(triggerEl, dropdownRef.current, position, spacing);
	// 	}
	// }, [triggerEl, dropdownToggled, position]);

	// useEventListener("scroll", handler, { passive: true });
	// useEventListener("resize", handler);

	const triggerLevelChildren: JSX.Element[] = React.Children.map(children, (child: JSX.Element) => {
		if (child?.type?.displayName === "DropdownToggle") {
			return {
				...child,
				props: {
					...child.props,
					isToggled: dropdownToggled,
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
					isToggled: dropdownToggled,
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
