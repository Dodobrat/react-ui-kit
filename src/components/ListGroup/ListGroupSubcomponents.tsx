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
import { addElementAttributes, createRipple, mergeRefs } from "../../helpers/functions";
import LineLoader from "../LineLoader/LineLoader";
import CollapseFade from "../util/animations/CollapseFade";
import CollapseShow from "../util/animations/CollapseShow";
import { CaretDown } from "../icons";
import { useConfig } from "../../context/ConfigContext";
import { generateStyleClasses } from "../../helpers/classnameGenerator";

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
	const { className, as, pigment, children, ...rest } = props;

	const classDefaults = {
		pigment,
	};

	const classBase = "dui__list__group__header";

	const ParsedComponent: React.ElementType = addElementAttributes(as, rest);

	return (
		<ParsedComponent className={cn(classBase, generateStyleClasses(classDefaults), className)} {...rest} ref={ref}>
			{children}
		</ParsedComponent>
	);
});

ListGroupHeader.displayName = "ListGroupHeader";

export const ListGroupItem = forwardRef<unknown, ListGroupItemSubComponentProps>((props, ref) => {
	const { className, as, active = false, pigment, children, ...rest } = props;

	const classDefaults = {
		pigment,
	};

	const classBase = "dui__list__group__item";

	const ParsedComponent: React.ElementType = addElementAttributes(as, rest);

	return (
		<ParsedComponent
			className={cn(
				classBase,
				{
					[`${classBase}--active`]: active,
				},
				generateStyleClasses(classDefaults),
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

	const classBase = "dui__list__group__collapse__toggle";

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
			createRipple({ e, elem: listGroupCollapseToggleRef });
		}

		if (onPointerDown) {
			onPointerDown(e);
		}
	};

	return (
		<div
			className={cn(
				classBase,
				{
					[`${classBase}--collapsed`]: isCollapsed,
					[`${classBase}--indicated`]: collapseIndicator,
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
					<div className={`${classBase}__title`}>{children}</div>
					{!!collapseIndicatorComponent ? collapseIndicatorComponent : <CaretDown className={`${classBase}__indicator`} />}
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

	const classDefaults = {
		pigment,
	};

	const classBase = "dui__list__group__collapse";

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
				classBase,
				{
					[`${classBase}--no-indent`]: !nestedCollapseIndent,
					[`${classBase}--collapsed`]: collapseState,
				},
				generateStyleClasses(classDefaults),
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
