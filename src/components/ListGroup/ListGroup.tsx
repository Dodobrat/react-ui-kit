// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { ListGroupProps } from "./ListGroup.types";
import {
	ListGroupCollapseSubComponentProps,
	ListGroupHeaderSubComponentProps,
	ListGroupItemSubComponentProps,
	ListGroupLoaderSubComponentProps,
} from "./ListGroupSubcomponents.types";
import { ListGroupCollapse, ListGroupHeader, ListGroupItem, ListGroupLoader } from "./ListGroupSubcomponents";
import { addElementAttributes, addElementAttributesInObj } from "../../helpers/functions";
import { useConfig } from "../../context/ConfigContext";
import { generateLoadingClasses, generateStyleClasses } from "../../helpers/classnameGenerator";

export interface ListGroupComponent extends React.ForwardRefExoticComponent<ListGroupProps & React.RefAttributes<unknown>> {
	Loader: React.ForwardRefExoticComponent<ListGroupLoaderSubComponentProps & React.RefAttributes<HTMLDivElement>>;
	Header: React.ForwardRefExoticComponent<ListGroupHeaderSubComponentProps & React.RefAttributes<unknown>>;
	Item: React.ForwardRefExoticComponent<ListGroupItemSubComponentProps & React.RefAttributes<unknown>>;
	Collapse: React.ForwardRefExoticComponent<ListGroupCollapseSubComponentProps & React.RefAttributes<unknown>>;
}

const isSubComponentOfListGroup: (child: JSX.Element) => boolean = (child) => {
	let isSubComponent: boolean = false;
	if (
		child.type?.displayName === "ListGroupHeader" ||
		child.type?.displayName === "ListGroupItem" ||
		child.type?.displayName === "ListGroupCollapse"
	) {
		isSubComponent = true;
	}
	return isSubComponent;
};

const ListGroup = forwardRef<unknown, ListGroupProps>((props, ref) => {
	const {
		appConfig: { config },
	} = useConfig();

	const {
		className,
		pigment = "default",
		elevation = config.elevation ?? "subtle",
		flavor = config.flavor ?? "default",
		disableWhileLoading = true,
		isLoading = false,
		as = "ul",
		children,
		...rest
	} = props;

	const classDefaults = {
		elevation,
		pigment,
		flavor,
		isLoading,
		disableWhileLoading,
	};

	const classBase = "dui__list__group";

	const childElementType: (props: Object) => Object = (props) => {
		const modifiedProps = { ...props };

		if (as === "ul" || as === "ol") {
			if (modifiedProps["as"]) {
				return addElementAttributesInObj(modifiedProps);
			}
			modifiedProps["as"] = "li";
			return addElementAttributesInObj(modifiedProps);
		}
		if (modifiedProps["as"]) {
			return addElementAttributesInObj(modifiedProps);
		}
		modifiedProps["as"] = "div";
		return addElementAttributesInObj(modifiedProps);
	};

	const listGroupChildren: JSX.Element[] = React.Children.map(children, (child: JSX.Element) =>
		isSubComponentOfListGroup(child)
			? {
					...child,
					props: {
						...child.props,
						...childElementType(child.props),
						pigment: child.props.pigment ?? pigment,
					},
			  }
			: child
	);

	const loader: JSX.Element[] = React.Children.map(children, (child: JSX.Element) =>
		child?.type?.displayName === "ListGroupLoader" ? child : null
	);

	const ParsedComponent: React.ElementType = addElementAttributes(as, rest);

	return (
		<ParsedComponent
			data-testid='ListGroup'
			className={cn(classBase, generateStyleClasses(classDefaults), generateLoadingClasses(classBase, classDefaults), className)}
			{...rest}
			ref={ref}>
			{isLoading && loader.length === 0 && <ListGroupLoader />}
			{listGroupChildren}
		</ParsedComponent>
	);
}) as ListGroupComponent;

ListGroup.Loader = ListGroupLoader;
ListGroup.Header = ListGroupHeader;
ListGroup.Item = ListGroupItem;
ListGroup.Collapse = ListGroupCollapse;

export default ListGroup;
