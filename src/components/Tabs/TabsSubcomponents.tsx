import React, { forwardRef } from "react";
import cn from "classnames";

import { TabsItemSubComponentProps, TabsPanelSubComponentProps } from "./TabsSubcomponents.types";

export const TabsItem = forwardRef<HTMLDivElement, TabsItemSubComponentProps>((props, ref) => {
	const { className, children, ...rest } = props;

	return (
		<div className={cn("dui__tabs__item", className)} {...rest} ref={ref}>
			{children}
		</div>
	);
});

TabsItem.displayName = "TabsItem";

export const TabsPanel = forwardRef<HTMLDivElement, TabsPanelSubComponentProps>((props, ref) => {
	const { className, tab, tabProps, children, ...rest } = props;

	return (
		<div className={cn("dui__tabs__panel", className)} {...rest} ref={ref}>
			{children}
		</div>
	);
});

TabsPanel.displayName = "TabsPanel";
