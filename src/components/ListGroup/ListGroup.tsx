// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";
import { pigmentOptions } from "../../helpers/pigments";

import { ListGroupProps } from "./ListGroup.types";
import {
	ListGroupCollapseSubComponentProps,
	ListGroupHeaderSubComponentProps,
	ListGroupItemSubComponentProps,
} from "./ListGroupSubcomponents.types";
import { ListGroupCollapse, ListGroupHeader, ListGroupItem } from "./ListGroupSubcomponents";

interface ListGroupComponent extends React.ForwardRefExoticComponent<ListGroupProps & React.RefAttributes<HTMLDivElement>> {
	Header: React.ForwardRefExoticComponent<ListGroupHeaderSubComponentProps & React.RefAttributes<HTMLDivElement>>;
	Item: React.ForwardRefExoticComponent<ListGroupItemSubComponentProps & React.RefAttributes<HTMLDivElement>>;
	Collapse: React.ForwardRefExoticComponent<ListGroupCollapseSubComponentProps & React.RefAttributes<HTMLDivElement>>;
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

const ListGroup = forwardRef<HTMLDivElement, ListGroupProps>(
	({ className, as = "ul", modern = false, pigment, children, ...rest }, ref) => {
		const childElementType: () => string = () => {
			let childType = "div";
			if (as === "ul" || as === "ol") {
				childType = "li";
			}
			return childType;
		};

		const listGroupChildren: JSX.Element[] = React.Children.map(children, (child: JSX.Element) =>
			isSubComponentOfListGroup(child)
				? {
						...child,
						props: {
							...child.props,
							pigment: child.props.pigment ?? pigment,
							as: child.props.as ?? childElementType(),
						},
				  }
				: child
		);

		const ElementType: any = as;

		return (
			<ElementType
				data-testid='ListGroup'
				className={cn(
					"dui__list__group",
					{
						"dui__list__group--modern": modern,
					},
					{
						[`dui__list__group--pigment-${pigment}`]: pigmentOptions.includes(pigment),
					},
					className
				)}
				{...rest}
				ref={ref}>
				{listGroupChildren}
			</ElementType>
		);
	}
) as ListGroupComponent;

ListGroup.Header = ListGroupHeader;
ListGroup.Item = ListGroupItem;
ListGroup.Collapse = ListGroupCollapse;

export default ListGroup;
