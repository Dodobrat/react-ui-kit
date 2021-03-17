import React, { forwardRef, useEffect, useRef, useState } from "react";
import cn from "classnames";
import {
	ListGroupCollapseSubComponentProps,
	ListGroupHeaderSubComponentProps,
	ListGroupCollapseToggleSubComponentProps,
	ListGroupCollapseContentSubComponentProps,
	ListGroupItemSubComponentProps,
	ListGroupLoaderSubComponentProps,
} from "./ListGroupSubcomponents.types";
import { PigmentOptions } from "../../helpers/global";
import { addElementAttributes, mergeRefs } from "../../helpers/functions";
import LineLoader from "../LineLoader/LineLoader";
import CollapseFade from "../util/animations/CollapseFade";
import CollapseShow from "../util/animations/CollapseShow";
import { CaretDown } from "../icons";

export const ListGroupLoader = forwardRef<HTMLDivElement, ListGroupLoaderSubComponentProps>((props, ref) => {
	const { className, pigment, children, ...rest } = props;

	return (
		<div className={cn("dui__list__group__loader", className)} {...rest} ref={ref}>
			{!!children ? children : <LineLoader pigment={pigment} />}
		</div>
	);
});

ListGroupLoader.displayName = "ListGroupLoader";

export const ListGroupHeader = forwardRef<unknown, ListGroupHeaderSubComponentProps>((props, ref) => {
	const { className, as, align = "left", pigment, children, ...rest } = props;

	const ParsedComponent: React.ElementType = addElementAttributes(as, rest);

	return (
		<ParsedComponent
			className={cn(
				"dui__list__group__header",
				{},
				{
					[`dui__list__group__header--align-${align}`]: align !== "left",
					[`dui__list__group__header--${pigment}`]: PigmentOptions.includes(pigment),
				},
				className
			)}
			{...rest}
			ref={ref}>
			{children}
		</ParsedComponent>
	);
});

ListGroupHeader.displayName = "ListGroupHeader";

export const ListGroupItem = forwardRef<unknown, ListGroupItemSubComponentProps>((props, ref) => {
	const { className, as, active = false, pigment, children, ...rest } = props;

	const ParsedComponent: React.ElementType = addElementAttributes(as, rest);

	return (
		<ParsedComponent
			className={cn(
				"dui__list__group__item",
				{
					"dui__list__group__item--active": active,
				},
				{
					[`dui__list__group__item--${pigment}`]: PigmentOptions.includes(pigment),
				},
				className
			)}
			{...rest}
			ref={ref}>
			{children}
		</ParsedComponent>
	);
});

ListGroupItem.displayName = "ListGroupItem";

export const ListGroupCollapseToggle = forwardRef<HTMLDivElement, ListGroupCollapseToggleSubComponentProps>((props, ref) => {
	const {
		className,
		collapseIndicator = true,
		isCollapsed,
		onKeyboardToggle,
		collapseIndicatorComponent,
		onKeyDown,
		children,
		...rest
	} = props;

	const listGroupCollapseToggleRef = useRef(null);

	return (
		<div
			className={cn(
				"dui__list__group__collapse__toggle",
				{
					"dui__list__group__collapse__toggle--collapsed": isCollapsed,
					"dui__list__group__collapse__toggle--indicated": collapseIndicator,
				},
				className
			)}
			aria-expanded={!isCollapsed}
			tabIndex={rest["disabled"] ? -1 : 0}
			onKeyDown={(e) => {
				if (onKeyDown) {
					onKeyDown(e);
				}
				if (listGroupCollapseToggleRef.current === document.activeElement && e.code === "Space") {
					e.preventDefault();
					onKeyboardToggle(isCollapsed);
				}
			}}
			{...rest}
			ref={mergeRefs([listGroupCollapseToggleRef, ref])}>
			{collapseIndicator ? (
				<>
					<div className='dui__list__group__collapse__toggle__title'>{children}</div>
					{!!collapseIndicatorComponent ? (
						collapseIndicatorComponent
					) : (
						<CaretDown className='dui__list__group__collapse__toggle__indicator' />
					)}
				</>
			) : (
				children
			)}
		</div>
	);
});

ListGroupCollapseToggle.displayName = "ListGroupCollapseToggle";

export const ListGroupCollapseContent = forwardRef<HTMLDivElement, ListGroupCollapseContentSubComponentProps>((props, ref) => {
	const { className, isCollapsed, animation = "collapse", children, ...rest } = props;

	const CollapseContent = () => {
		return (
			<div>
				<div className={cn("dui__list__group__collapse__content", className)} {...rest} ref={ref}>
					{children}
				</div>
			</div>
		);
	};

	switch (animation) {
		case "collapse-n-fade":
			return (
				<CollapseFade in={!isCollapsed}>
					<CollapseContent />
				</CollapseFade>
			);
		case "collapse":
			return (
				<CollapseShow in={!isCollapsed}>
					<CollapseContent />
				</CollapseShow>
			);
		default:
			return <>{!isCollapsed && <CollapseContent />}</>;
	}
});

ListGroupCollapseContent.displayName = "ListGroupCollapseContent";

interface ListGroupCollapseComponent
	extends React.ForwardRefExoticComponent<ListGroupCollapseSubComponentProps & React.RefAttributes<unknown>> {
	Toggle: React.ForwardRefExoticComponent<ListGroupCollapseToggleSubComponentProps & React.RefAttributes<HTMLDivElement>>;
	Content: React.ForwardRefExoticComponent<ListGroupCollapseContentSubComponentProps & React.RefAttributes<HTMLDivElement>>;
}

export const ListGroupCollapse = forwardRef<unknown, ListGroupCollapseSubComponentProps>((props, ref) => {
	const { className, as = "div", onToggle, isCollapsed = true, nestedCollapseIndent = true, pigment, children, ...rest } = props;

	const [collapseState, setCollapseState] = useState<boolean>(isCollapsed);

	const onCollapseToggle = () => setCollapseState((prev) => !prev);

	useEffect(() => {
		setCollapseState(isCollapsed);
		return () => setCollapseState(true);
	}, [isCollapsed]);

	const listGroupCollapseChildren: JSX.Element[] = React.Children.map(children, (child: JSX.Element) => {
		if (child.type?.displayName === "ListGroupCollapseToggle") {
			return {
				...child,
				props: {
					...child.props,
					isCollapsed: collapseState,
					onKeyboardToggle: onToggle ? () => onToggle(isCollapsed) : onCollapseToggle,
					onClick: onToggle ? () => onToggle(isCollapsed) : onCollapseToggle,
				},
			};
		}

		if (child.type?.displayName === "ListGroupCollapseContent") {
			return {
				...child,
				props: {
					...child.props,
					isCollapsed: collapseState,
				},
			};
		}

		return child;
	});

	const ParsedComponent: React.ElementType = addElementAttributes(as, rest);

	return (
		<ParsedComponent
			className={cn(
				"dui__list__group__collapse",
				{
					"dui__list__group__collapse--no-indent": !nestedCollapseIndent,
					"dui__list__group__collapse--collapsed": collapseState,
				},
				{
					[`dui__list__group__collapse--${pigment}`]: PigmentOptions.includes(pigment),
				},
				className
			)}
			{...rest}
			ref={ref}>
			{listGroupCollapseChildren}
		</ParsedComponent>
	);
}) as ListGroupCollapseComponent;

ListGroupCollapse.Toggle = ListGroupCollapseToggle;
ListGroupCollapse.Content = ListGroupCollapseContent;
ListGroupCollapse.displayName = "ListGroupCollapse";
