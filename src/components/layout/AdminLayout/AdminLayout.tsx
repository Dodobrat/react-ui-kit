// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { AdminLayoutProps } from "./AdminLayout.types";
import { useConfig } from "../../../context/ConfigContext";
import {
	AdminLayoutContentSubComponentProps,
	AdminLayoutFooterSubComponentProps,
	AdminLayoutLoaderSubComponentProps,
	AdminLayoutSidebarSubComponentProps,
	AdminLayoutTopbarSubComponentProps,
} from "./AdminLayoutSubComponents.types";
import {
	AdminLayoutContent,
	AdminLayoutFooter,
	AdminLayoutLoader,
	AdminLayoutSidebar,
	AdminLayoutTopbar,
} from "./AdminLayoutSubComponents";
import Flex from "../../util/Flex/Flex";
import { generateLoadingClasses } from "../../../helpers/classnameGenerator";

export interface AdminLayoutComponent extends React.ForwardRefExoticComponent<AdminLayoutProps & React.RefAttributes<HTMLDivElement>> {
	Loader: React.ForwardRefExoticComponent<AdminLayoutLoaderSubComponentProps & React.RefAttributes<HTMLDivElement>>;
	Sidebar: React.ForwardRefExoticComponent<AdminLayoutSidebarSubComponentProps & React.RefAttributes<unknown>>;
	Topbar: React.ForwardRefExoticComponent<AdminLayoutTopbarSubComponentProps & React.RefAttributes<unknown>>;
	Content: React.ForwardRefExoticComponent<AdminLayoutContentSubComponentProps & React.RefAttributes<unknown>>;
	Footer: React.ForwardRefExoticComponent<AdminLayoutFooterSubComponentProps & React.RefAttributes<unknown>>;
}

const AdminLayout = forwardRef<HTMLDivElement, AdminLayoutProps>((props, ref) => {
	const {
		appConfig: { config },
	} = useConfig();

	const {
		sidebarPosition = config.adminLayoutSidebarPosition ?? "left",
		pigment = config.elevation ?? "default",
		elevation = config.elevation ?? "subtle",
		flavor = config.flavor ?? "default",
		disableWhileLoading = true,
		isLoading = false,
		className,
		children,
		...rest
	} = props;

	const classDefaults = {
		elevation,
		pigment,
		flavor,
		isLoading,
		disableWhileLoading,
	};

	const classBase = "dui__admin";

	const loader: JSX.Element[] = React.Children.map(children, (child: JSX.Element) =>
		child?.type?.displayName === "AdminLayoutLoader" ? child : null
	);

	const sidebar: JSX.Element[] = React.Children.map(children, (child: JSX.Element) =>
		child?.type?.displayName === "AdminLayoutSidebar" ? child : null
	);

	const topbar: JSX.Element[] = React.Children.map(children, (child: JSX.Element) =>
		child?.type?.displayName === "AdminLayoutTopbar" ? child : null
	);

	const content: JSX.Element[] = React.Children.map(children, (child: JSX.Element) =>
		child?.type?.displayName === "AdminLayoutContent" ? child : null
	);

	const footer: JSX.Element[] = React.Children.map(children, (child: JSX.Element) =>
		child?.type?.displayName === "AdminLayoutFooter" ? child : null
	);

	return (
		<Flex
			data-testid='AdminLayout'
			className={cn(classBase, generateLoadingClasses(classBase, classDefaults), className)}
			{...rest}
			spacingX={null}
			spacingY={null}
			align='stretch'
			wrap='nowrap'
			as='main'
			ref={ref}>
			{isLoading && loader.length === 0 && <AdminLayoutLoader />}
			{sidebar}
			<Flex direction='column' spacingX={null} spacingY={null} className='dui__admin__inner' as='section'>
				{topbar}
				{content}
				{footer}
			</Flex>
		</Flex>
	);
}) as AdminLayoutComponent;

AdminLayout.Loader = AdminLayoutLoader;
AdminLayout.Sidebar = AdminLayoutSidebar;
AdminLayout.Topbar = AdminLayoutTopbar;
AdminLayout.Content = AdminLayoutContent;
AdminLayout.Footer = AdminLayoutFooter;

export default AdminLayout;
