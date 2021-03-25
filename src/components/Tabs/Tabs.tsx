// Auto-Generated
import React, { forwardRef, useContext, useEffect, useState } from "react";
import cn from "classnames";

import { TabsProps } from "./Tabs.types";
import { TabContent, TabsItems, TabsPanel } from "./TabsSubcomponents";
import { TabItemType, TabPanelType, TabsPanelSubComponentProps } from "./TabsSubcomponents.types";
import { ElevationOptions, PigmentOptions } from "../../helpers/global";
import { GlobalContext } from "../../context/GlobalContext/GlobalContext";

interface TabsComponent extends React.ForwardRefExoticComponent<TabsProps & React.RefAttributes<HTMLDivElement>> {
	Panel: React.ForwardRefExoticComponent<TabsPanelSubComponentProps & React.RefAttributes<HTMLDivElement>>;
}

const Tabs = forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
	const {
		appConfig: { config },
	} = useContext(GlobalContext);

	const {
		className,
		elevation = config.elevation ?? "subtle",
		pigment = null,
		flat = config.flat ?? false,
		allowOverflow = true,
		disableWhileLoading = true,
		isLoading = false,
		activeTab = 0,
		onTabSelect,
		orientation = "horizontal",
		withRipple = config.withRipple ?? true,
		onTabPointerDown,
		children,
		...rest
	} = props;

	const [activeTabIndex, setActiveTabIndex] = useState(activeTab);

	useEffect(() => {
		setActiveTabIndex(activeTab);
		return () => {
			setActiveTabIndex(0);
		};
	}, [activeTab]);

	const tabs: TabItemType[] = React.Children.map(children, (child: JSX.Element, idx: number) =>
		child?.type?.displayName === "TabsPanel" && child?.props?.tab
			? {
					isSelected: idx === activeTabIndex,
					tabIndex: idx,
					disabled: child?.props?.disabled,
					component: child?.props?.tab,
					componentProps: {
						...child?.props?.tabProps,
						onClick: (e: any) => {
							if (!child?.props?.disabled) {
								if (onTabSelect) {
									onTabSelect(idx);
								} else {
									setActiveTabIndex(idx);
								}

								if (child?.props?.tabProps?.onClick) {
									child?.props?.tabProps?.onClick?.(e);
								}
							}
						},
					},
			  }
			: null
	);

	const panels: TabPanelType[] = React.Children.map(children, (child: JSX.Element, idx: number) =>
		child?.type?.displayName === "TabsPanel" && child?.props?.tab
			? {
					isActive: idx === activeTabIndex,
					component: child,
					componentProps: child?.props,
			  }
			: null
	);

	const handleKeyPress = (e: any) => {
		const availableTabs = tabs.filter((tab) => !tab.disabled);

		if (availableTabs.length > 0) {
			if (e.code === "Space") {
				e.preventDefault();

				setActiveTabIndex(Number(e.target.getAttribute("data-tabindex")));
			}
			if (e.key === "ArrowLeft") {
				const prevTab = availableTabs.reverse().find((tab) => tab.tabIndex < activeTabIndex)?.tabIndex ?? availableTabs[0].tabIndex;

				setActiveTabIndex(prevTab);
			}
			if (e.key === "ArrowRight") {
				const nextTab = availableTabs.find((tab) => tab.tabIndex > activeTabIndex)?.tabIndex ?? availableTabs[0].tabIndex;

				setActiveTabIndex(nextTab);
			}
		}
	};

	return (
		<div
			data-testid='Tabs'
			className={cn(
				"dui__tabs",
				{
					"dui__tabs--vertical": orientation === "vertical",
					"dui__tabs--flat": flat,
					"dui__tabs--loading": isLoading,
					"dui__tabs--loading-disabled": isLoading && disableWhileLoading,
					"no-overflow": !allowOverflow,
				},
				{
					[`dui__tabs--${pigment}`]: PigmentOptions.includes(pigment),
					[`dui__elevation--${elevation}`]: ElevationOptions.includes(elevation) && elevation !== "none",
				},
				className
			)}
			{...rest}
			ref={ref}>
			<TabsItems
				options={tabs}
				withRipple={withRipple}
				onPointerDown={onTabPointerDown}
				pigment={pigment}
				orientation={orientation}
				activeOption={activeTabIndex}
				onKeyDown={handleKeyPress}
			/>
			<TabContent options={panels} />
		</div>
	);
}) as TabsComponent;

Tabs.Panel = TabsPanel;

export default Tabs;
