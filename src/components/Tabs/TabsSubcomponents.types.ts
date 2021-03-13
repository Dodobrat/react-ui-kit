import React from "react";
import { CnCh, SyntheticKeyboardControls } from "../../helpers/global.types";

export interface TabsPanelSubComponentProps extends CnCh {
	tabProps?: Object;
	tab?: React.ReactNode;
}

export type TabItemType = {
	isSelected: boolean;
	tabIndex: number;
	disabled: boolean;
	component: React.ReactNode;
	componentProps: Object;
};

export type TabPanelType = {
	isActive: boolean;
	component: React.ReactNode;
	componentProps: Object;
};

type ExtraTabsItemsSubComponentProps = CnCh & SyntheticKeyboardControls;

export interface TabsItemsSubComponentProps extends ExtraTabsItemsSubComponentProps {
	activeOption?: number;
	orientation?: "horizontal" | "vertical";
	tabActions?: React.ReactNode;
	options: Array<TabItemType>;
}
export interface TabContentSubComponentProps extends CnCh {
	options: Array<TabPanelType>;
}
