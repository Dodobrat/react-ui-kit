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
import { addElementAttributes, createRipple, mergeRefs } from "../../helpers/functions";
import LineLoader from "../LineLoader/LineLoader";
import CollapseFade from "../util/animations/CollapseFade";
import CollapseShow from "../util/animations/CollapseShow";
import { CaretDown } from "../icons";
import { useConfig } from "../../context/ConfigContext";

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
		appConfig: { config },
	} = useConfig();

	const {
		className,
		pigment,
		collapseIndicator = config.listGroupCollapseIndicator ?? true,
		collapseIndicatorComponent = config.listGroupCollapseIndicatorComponent ?? null,
		isCollapsed,
		onKeyboardToggle,
		onKeyDown,
		withRipple = config.withRipple ?? true,
		onPointerDown,
		children,
		...rest
	} = props;

	const listGroupCollapseToggleRef = useRef(null);

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (onKeyDown) {
			onKeyDown(e);
		}
		if (listGroupCollapseToggleRef.current === document.activeElement && e.code === "Space") {
			e.preventDefault();
			onKeyboardToggle(isCollapsed);
		}
	};

	const handleOnPointerDown: (e: React.PointerEvent) => void = (e) => {
		if (withRipple) {
			createRipple({ e, elem: listGroupCollapseToggleRef, pigment });
		}

		if (onPointerDown) {
			onPointerDown(e);
		}
	};

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
			onKeyDown={handleKeyDown}
			onPointerDown={handleOnPointerDown}
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
	const {
		appConfig: { config },
	} = useConfig();

	const { className, isCollapsed, animation = (config.listGroupAnimation = "collapse"), children, ...rest } = props;

	const CollapseContent = () => {
		return (
			<div className={cn("dui__list__group__collapse__content", className)} {...rest} ref={ref}>
				{children}
			</div>
		);
	};

	switch (animation) {
		case "collapse-n-fade":
			return (
				<CollapseFade in={!isCollapsed}>
					<div>
						<CollapseContent />
					</div>
				</CollapseFade>
			);
		case "collapse":
			return (
				<CollapseShow in={!isCollapsed}>
					<div>
						<CollapseContent />
					</div>
				</CollapseShow>
			);
		default:
			return !isCollapsed && <CollapseContent />;
	}
});

ListGroupCollapseContent.displayName = "ListGroupCollapseContent";

interface ListGroupCollapseComponent
	extends React.ForwardRefExoticComponent<ListGroupCollapseSubComponentProps & React.RefAttributes<unknown>> {
	Toggle: React.ForwardRefExoticComponent<ListGroupCollapseToggleSubComponentProps & React.RefAttributes<HTMLDivElement>>;
	Content: React.ForwardRefExoticComponent<ListGroupCollapseContentSubComponentProps & React.RefAttributes<HTMLDivElement>>;
}

export const ListGroupCollapse = forwardRef<unknown, ListGroupCollapseSubComponentProps>((props, ref) => {
	const {
		appConfig: { config },
	} = useConfig();

	const {
		className,
		as = "div",
		onToggle,
		isCollapsed = true,
		nestedCollapseIndent = config.listGroupNestedCollapseIndent ?? true,
		pigment,
		children,
		...rest
	} = props;

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
					pigment,
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
