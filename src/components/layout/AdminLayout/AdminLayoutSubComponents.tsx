import React, { useRef } from "react";
import { forwardRef } from "react";
import { useConfig } from "../../../context/ConfigContext";
import cn from "classnames";
import LineLoader from "../../LineLoader/LineLoader";
import {
	AdminLayoutContentSubComponentProps,
	AdminLayoutFooterSubComponentProps,
	AdminLayoutLoaderSubComponentProps,
	AdminLayoutSidebarItemSubComponentProps,
	AdminLayoutSidebarSubComponentProps,
	AdminLayoutTopbarSubComponentProps,
} from "./AdminLayoutSubComponents.types";
import Flex from "../../util/Flex/Flex";
import { useAdminLayout } from "../../../context/AdminLayoutContext";
import { useWindowResize } from "../../../hooks/useWindowResize";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import { addElementAttributes, mergeRefs } from "../../../helpers/functions";

const { Col } = Flex;

export const AdminLayoutLoader = forwardRef<HTMLDivElement, AdminLayoutLoaderSubComponentProps>((props, ref) => {
	const {
		appConfig: { config },
	} = useConfig();

	const { className, pigment = config.pigment ?? "primary", children, ...rest } = props;

	return (
		<div className={cn("dui__admin__loader", className)} {...rest} ref={ref}>
			{!!children ? children : <LineLoader pigment={pigment} />}
		</div>
	);
});

AdminLayoutLoader.displayName = "AdminLayoutLoader";

export const AdminLayoutSidebarItem = forwardRef<unknown, AdminLayoutSidebarItemSubComponentProps>((props, ref) => {
	const {
		className,
		as = "div",
		mainAs = "div",
		mainClassName,
		extendedClassName,
		extendedAs = "div",
		main,
		extended,
		children,
		...rest
	} = props;

	const classBase = "dui__admin__sidebar__item";

	const ParsedComponent: React.ElementType = addElementAttributes(as, rest);
	const ParsedMainComponent: React.ElementType = addElementAttributes(mainAs, rest);
	const ParsedExtendedComponent: React.ElementType = addElementAttributes(extendedAs, rest);

	return (
		<ParsedComponent className={cn(classBase, className)} {...rest} ref={ref}>
			<ParsedMainComponent className={cn(`${classBase}__main`, mainClassName)}>{main}</ParsedMainComponent>
			<ParsedExtendedComponent className={cn(`${classBase}__extended`, extendedClassName)}>{extended}</ParsedExtendedComponent>
		</ParsedComponent>
	);
});

AdminLayoutSidebarItem.displayName = "AdminLayoutSidebarItem";

export interface AdminLayoutSidebarComponent
	extends React.ForwardRefExoticComponent<AdminLayoutSidebarSubComponentProps & React.RefAttributes<unknown>> {
	Item: React.ForwardRefExoticComponent<AdminLayoutSidebarItemSubComponentProps & React.RefAttributes<unknown>>;
}

export const AdminLayoutSidebar = forwardRef<HTMLDivElement, AdminLayoutSidebarSubComponentProps>((props, ref) => {
	const { width } = useWindowResize(250);

	const {
		sidebarValue: { sidebarState, setSidebarState },
		sidebarTemporaryValue: { sidebarTemporaryState, setSidebarTemporaryState },
		sidebarBreakpointValue: { sidebarBreakpointState },
	} = useAdminLayout();

	const {
		className,
		children,
		isExpandedBreakpoint = sidebarBreakpointState,
		isExpanded = sidebarState,
		innerRef,
		expandOnHover = true,
		...rest
	} = props;

	const sidebarRef = useRef(null);

	let timer: any;

	const sidebarPointerEnter = () => {
		if (width >= sidebarBreakpointState && !sidebarState && expandOnHover) {
			timer = setTimeout(() => {
				setSidebarTemporaryState(true);
			}, 200);
		}
	};

	const sidebarPointerLeave = () => {
		if (width >= sidebarBreakpointState && !sidebarState && expandOnHover) {
			clearTimeout(timer);
			setSidebarTemporaryState(false);
		}
	};

	useOnClickOutside(sidebarRef, () => sidebarState && width < sidebarBreakpointState && setSidebarState(false));

	return (
		<Col
			col='auto'
			as='aside'
			className={cn(
				"dui__admin__sidebar",
				{
					"dui__admin__sidebar--expanded": isExpanded,
					"dui__admin__sidebar--expanded-hover": sidebarTemporaryState,
				},
				className
			)}
			{...rest}
			ref={ref}>
			<div
				className='dui__admin__sidebar__inner'
				onPointerEnter={sidebarPointerEnter}
				onPointerLeave={sidebarPointerLeave}
				ref={mergeRefs([sidebarRef, innerRef])}>
				{children}
			</div>
		</Col>
	);
}) as AdminLayoutSidebarComponent;

AdminLayoutSidebar.Item = AdminLayoutSidebarItem;
AdminLayoutSidebar.displayName = "AdminLayoutSidebar";

export const AdminLayoutTopbar = forwardRef<HTMLDivElement, AdminLayoutTopbarSubComponentProps>((props, ref) => {
	const { className, children, ...rest } = props;

	return (
		<Col col='auto' as='header' className={cn("dui__admin__topbar", className)} {...rest} ref={ref}>
			{children}
		</Col>
	);
});

AdminLayoutTopbar.displayName = "AdminLayoutTopbar";

export const AdminLayoutContent = forwardRef<HTMLDivElement, AdminLayoutContentSubComponentProps>((props, ref) => {
	const { className, children, ...rest } = props;

	return (
		<Col as='article' className={cn("dui__admin__content", className)} {...rest} ref={ref}>
			{children}
		</Col>
	);
});

AdminLayoutContent.displayName = "AdminLayoutContent";

export const AdminLayoutFooter = forwardRef<HTMLDivElement, AdminLayoutFooterSubComponentProps>((props, ref) => {
	const { className, children, ...rest } = props;

	return (
		<Col col='auto' as='footer' className={cn("dui__admin__footer", className)} {...rest} ref={ref}>
			{children}
		</Col>
	);
});

AdminLayoutFooter.displayName = "AdminLayoutFooter";
