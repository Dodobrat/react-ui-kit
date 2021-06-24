import React from "react";
import { CnCh, ElemType } from "../../../helpers/global.types";
import { LineLoaderProps } from "../../LineLoader/LineLoader.types";

// LOADER
type ExtraAdminLayoutLoaderProps = CnCh & LineLoaderProps;
export interface AdminLayoutLoaderSubComponentProps extends ExtraAdminLayoutLoaderProps {}

// SIDEBAR ITEM
type ExtraAdminLayoutSidebarItemSubComponentProps = CnCh & ElemType;
export interface AdminLayoutSidebarItemSubComponentProps extends ExtraAdminLayoutSidebarItemSubComponentProps {
	main: React.ReactNode;
	extended: React.ReactNode;
	mainAs?: React.ElementType;
	extendedAs?: React.ElementType;
	mainClassName?: string;
	extendedClassName?: string;
}

// SIDEBAR
type ExtraAdminLayoutSidebarSubComponentProps = CnCh;
export interface AdminLayoutSidebarSubComponentProps extends ExtraAdminLayoutSidebarSubComponentProps {
	isExpandedBreakpoint?: number;
	isExpanded?: boolean;
	expandOnHover?: boolean;
	innerRef?: React.MutableRefObject<any>;
}
// TOPBAR
export interface AdminLayoutTopbarSubComponentProps extends CnCh {}
// CONTENT
export interface AdminLayoutContentSubComponentProps extends CnCh {}
// FOOTER
export interface AdminLayoutFooterSubComponentProps extends CnCh {}
