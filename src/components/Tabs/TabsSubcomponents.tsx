import React, { forwardRef, useEffect, useRef } from "react";
import cn from "classnames";

import { TabsItemsSubComponentProps, TabsPanelSubComponentProps, TabContentSubComponentProps } from "./TabsSubcomponents.types";
import DragScroll from "../util/DragScroll/DragScroll";
import { useWindowResize } from "../../hooks/useWindowResize";

export const TabsItems = forwardRef<HTMLDivElement, TabsItemsSubComponentProps>((props, ref) => {
	const { className, activeOption, orientation, options = [], children, onKeyDown, innerRef, ...rest } = props;

	const { width } = useWindowResize(500);

	const tabIndicatorRef = useRef(null);
	const tabListRef = useRef(null);

	useEffect(() => {
		const indicator = tabIndicatorRef.current;
		const tabs = [...tabListRef.current?.children].filter((child) => !child.classList.contains("dui__tabs__items__indicator"));

		for (const tab of tabs) {
			if (tab.getAttribute("aria-selected") === "true") {
				const { width, height } = tab.getBoundingClientRect();

				if (orientation === "horizontal") {
					const left = tab.offsetLeft;
					tab.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
					indicator.style.top = "unset";
					indicator.style.height = "0.125rem";
					indicator.style.left = `${left}px`;
					indicator.style.width = `${width}px`;
				}
				if (orientation === "vertical") {
					const top = tab.offsetTop;
					indicator.style.left = "unset";
					indicator.style.width = "0.125rem";
					indicator.style.top = `${top}px`;
					indicator.style.height = `${height}px`;
				}

				tab.focus();
			}
		}
	}, [activeOption, width, orientation]);

	return (
		<DragScroll vertical={orientation === "vertical"} horizontal={orientation === "horizontal"} innerRef={innerRef} ref={ref}>
			<div role='tablist' aria-orientation={orientation} className={cn("dui__tabs__items", className)} {...rest} ref={tabListRef}>
				{options.map((option, idx) => {
					const { component, componentProps, disabled, isSelected } = option;

					return (
						<div
							key={idx}
							data-tabindex={idx}
							role='tab'
							aria-disabled={disabled}
							aria-selected={isSelected}
							tabIndex={!disabled ? 0 : -1}
							onKeyDown={onKeyDown}
							{...componentProps}>
							{component}
						</div>
					);
				})}
				<div
					className={cn("dui__tabs__items__indicator", {
						"dui__tabs__items__indicator--vertical": orientation === "vertical",
					})}
					tabIndex={-1}
					ref={tabIndicatorRef}
				/>
			</div>
		</DragScroll>
	);
});

TabsItems.displayName = "TabsItems";

export const TabsPanel = forwardRef<HTMLDivElement, TabsPanelSubComponentProps>((props, ref) => {
	const { className, tab, tabProps, children, ...rest } = props;

	return (
		<div className={cn("dui__tabs__panel", className)} {...rest} ref={ref}>
			{children}
		</div>
	);
});

TabsPanel.displayName = "TabsPanel";

export const TabContent = forwardRef<HTMLDivElement, TabContentSubComponentProps>((props, ref) => {
	const { className, options = [], children, ...rest } = props;

	return (
		<div className={cn("dui__tabs__content", className)} {...rest} ref={ref}>
			{options.map((option, idx) => {
				const { component, componentProps, isActive } = option;

				if (isActive) {
					return (
						<div key={idx} role='tabpanel' aria-hidden={isActive} {...componentProps}>
							{component}
						</div>
					);
				}

				return null;
			})}
		</div>
	);
});

TabContent.displayName = "TabContent";
