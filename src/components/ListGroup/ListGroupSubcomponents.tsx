import React, { forwardRef, useState } from "react";
import cn from "classnames";
import {
	ListGroupCollapseSubComponentProps,
	ListGroupHeaderSubComponentProps,
	ListGroupCollapseToggleSubComponentProps,
	ListGroupCollapseContentSubComponentProps,
	ListGroupItemSubComponentProps,
} from "./ListGroupSubcomponents.types";
import { pigmentOptions } from "../../helpers/pigments";
import ExpandIndicator from "../ExpandIndicator/ExpandIndicator";

export const ListGroupHeader = forwardRef<HTMLDivElement, ListGroupHeaderSubComponentProps>(
	({ className, as, pigment, align = "left", children, ...rest }, ref) => {
		const ElementType: any = as;

		return (
			<ElementType
				className={cn(
					"dui__list__group__header",
					{
						[`dui__list__group__header--align-${align}`]: align !== "left",
						[`dui__list__group__header--pigment-${pigment}`]: pigmentOptions.includes(pigment),
					},
					className
				)}
				{...rest}
				ref={ref}>
				{children}
			</ElementType>
		);
	}
);

ListGroupHeader.displayName = "ListGroupHeader";

export const ListGroupItem = forwardRef<HTMLDivElement, ListGroupItemSubComponentProps>(
	({ className, as, active = false, pigment, children, ...rest }, ref) => {
		const ElementType: any = as;

		return (
			<ElementType
				className={cn(
					"dui__list__group__item",
					{
						"dui__list__group__item--active": active,
					},
					{
						[`dui__list__group__item--pigment-${pigment}`]: pigmentOptions.includes(pigment),
					},
					className
				)}
				{...rest}
				ref={ref}>
				{children}
			</ElementType>
		);
	}
);

ListGroupItem.displayName = "ListGroupItem";

export const ListGroupCollapseToggle = forwardRef<HTMLDivElement, ListGroupCollapseToggleSubComponentProps>(
	({ className, onToggle, collapsed, collapseIndicator = true, collapseIndicatorComponent, children, ...rest }, ref) => {
		return (
			<div
				className={cn(
					"dui__list__group__collapse__toggle",
					{
						"dui__list__group__collapse__toggle--indicated": collapseIndicator,
					},
					className
				)}
				{...rest}
				onClick={onToggle}
				ref={ref}>
				{collapseIndicator ? (
					<>
						<div className='dui__list__group__collapse__toggle__title'>{children}</div>
						{!!collapseIndicatorComponent ? collapseIndicatorComponent : <ExpandIndicator active={!collapsed} />}
					</>
				) : (
					children
				)}
			</div>
		);
	}
);

ListGroupCollapseToggle.displayName = "ListGroupCollapseToggle";

export const ListGroupCollapseContent = forwardRef<HTMLDivElement, ListGroupCollapseContentSubComponentProps>(
	({ className, collapsed, children, ...rest }, ref) => {
		if (collapsed) return null;

		return (
			<div className={cn("dui__list__group__collapse__content", className)} {...rest} ref={ref}>
				{children}
			</div>
		);
	}
);

ListGroupCollapseContent.displayName = "ListGroupCollapseContent";

interface ListGroupCollapseComponent
	extends React.ForwardRefExoticComponent<ListGroupCollapseSubComponentProps & React.RefAttributes<HTMLDivElement>> {
	Toggle: React.ForwardRefExoticComponent<ListGroupCollapseToggleSubComponentProps & React.RefAttributes<HTMLDivElement>>;
	Content: React.ForwardRefExoticComponent<ListGroupCollapseContentSubComponentProps & React.RefAttributes<HTMLDivElement>>;
}

export const ListGroupCollapse = forwardRef<HTMLDivElement, ListGroupCollapseSubComponentProps>(
	({ className, as = "div", onToggle, initial = true, nestedCollapseIndent = true, pigment, children, ...rest }, ref) => {
		const [collapseState, setCollapseState] = useState<boolean>(initial);

		const onCollapseToggle = () => {
			setCollapseState((prev) => !prev);
			if (onToggle) onToggle(collapseState);
		};

		const collapseChildren: JSX.Element[] = React.Children.map(children, (child: JSX.Element) => {
			if (child.type?.displayName === "ListGroupCollapseToggle") {
				return {
					...child,
					props: {
						...child.props,
						collapsed: collapseState,
						onToggle: child.props.onClick ?? onCollapseToggle,
					},
				};
			}

			if (child.type?.displayName === "ListGroupCollapseContent") {
				return {
					...child,
					props: {
						...child.props,
						collapsed: collapseState,
					},
				};
			}

			return child;
		});

		const ElementType: any = as;

		return (
			<ElementType
				className={cn(
					"dui__list__group__collapse",
					{
						"dui__list__group__collapse--no-indent": !nestedCollapseIndent,
					},
					{
						[`dui__list__group__collapse--pigment-${pigment}`]: pigmentOptions.includes(pigment),
					},
					className
				)}
				{...rest}
				ref={ref}>
				{collapseChildren}
			</ElementType>
		);
	}
) as ListGroupCollapseComponent;

ListGroupCollapse.Toggle = ListGroupCollapseToggle;
ListGroupCollapse.Content = ListGroupCollapseContent;
ListGroupCollapse.displayName = "ListGroupCollapse";
