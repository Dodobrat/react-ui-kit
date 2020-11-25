// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { BreadcrumbsProps } from "./Breadcrumbs.types";
import { BreadcrumbsSubComponentProps } from "./BreadcrumbsSubcomponents.types";
import { BreadcrumbItem } from "./BreadcrumbsSubcomponents";

interface BreadcrumbComponent extends React.ForwardRefExoticComponent<BreadcrumbsProps & React.RefAttributes<HTMLOListElement>> {
	Item: React.ForwardRefExoticComponent<BreadcrumbsSubComponentProps & React.RefAttributes<HTMLLIElement>>;
}

const Breadcrumbs = forwardRef<HTMLOListElement, BreadcrumbsProps>(({ className, separator = "/", children, ...rest }, ref) => {
	const item: JSX.Element[] = React.Children.map(children, (child: JSX.Element, index: number) => {
		if (child.type.displayName === "BreadcrumbItem" && index === React.Children.count(children) - 1) {
			return child;
		} else if (child.type.displayName === "BreadcrumbItem") {
			if (child.props.separator) {
				return child;
			}
			return {
				...child,
				props: {
					...child.props,
					separator,
				},
			};
		}
		return null;
	});

	return (
		<ol data-testid='Breadcrumbs' className={cn("dodo-ui__breadcrumbs", className)} {...rest} ref={ref}>
			{item}
		</ol>
	);
}) as BreadcrumbComponent;

Breadcrumbs.Item = BreadcrumbItem;

export default Breadcrumbs;
