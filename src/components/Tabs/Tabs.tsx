// Auto-Generated
import React, { forwardRef, useEffect, useState } from "react";
import cn from "classnames";

import { TabsProps } from "./Tabs.types";
import { TabsItem, TabsPanel } from "./TabsSubcomponents";
import { TabsPanelSubComponentProps } from "./TabsSubcomponents.types";

interface TabsComponent extends React.ForwardRefExoticComponent<TabsProps & React.RefAttributes<HTMLDivElement>> {
	Panel: React.ForwardRefExoticComponent<TabsPanelSubComponentProps & React.RefAttributes<HTMLDivElement>>;
}

const Tabs = forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
	const { className, activeTab = 0, onTabSelect, children, ...rest } = props;

	const [activeTabIndex, setActiveTabIndex] = useState(activeTab);

	useEffect(() => {
		setActiveTabIndex(activeTab);

		if (onTabSelect) {
			onTabSelect(activeTab);
		}
	}, [activeTab, onTabSelect]);

	const tabs: JSX.Element[] = React.Children.map(children, (child: JSX.Element) =>
		child?.type?.displayName === "TabsPanel" && child?.props?.tab ? (
			<TabsItem {...child?.props?.tabProps}>{child?.props?.tab}</TabsItem>
		) : null
	);

	const panels: JSX.Element[] = React.Children.map(children, (child: JSX.Element) =>
		child?.type?.displayName === "TabsPanel" && child?.props?.tab ? child : null
	);

	const otherChildren: JSX.Element[] = React.Children.map(children, (child: JSX.Element) =>
		child?.type?.displayName !== "TabsPanel" ? child : null
	);

	return (
		<div data-testid='Tabs' className={cn("dui__tabs", className)} {...rest} ref={ref}>
			<div className='dui__tabs__items'>
				{tabs.map((tab: JSX.Element, idx: number) => {
					const tabWithProps = {
						...tab,
						props: {
							...tab.props,
							className: cn(tab.props?.className, "dui__tabs__item--active"),
							onClick: (e: any) => {
								if (tab.props?.onClick) {
									tab.props?.onClick?.(e);
								}
								setActiveTabIndex(idx);
							},
						},
					};

					return tabWithProps;
				})}
			</div>
			<div className='dui__tabs__content'>
				{panels.map((panel, idx) => {
					if (idx === activeTabIndex) {
						const panelWithProps = {
							...panel,
							props: {
								...panel.props,
								className: cn(panel.props?.className, "dui__tabs__panel--active"),
							},
						};

						return panelWithProps;
					}
					return null;
				})}
			</div>
			{otherChildren}
		</div>
	);
}) as TabsComponent;

Tabs.Panel = TabsPanel;

export default Tabs;
