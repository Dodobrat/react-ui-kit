import React from "react";
import cn from "classnames";
import { BreadcrumbsSubComponentProps } from "./BreadcrumbsSubcomponents.types";

export const BreadcrumbItem: React.FC<BreadcrumbsSubComponentProps> = ({ className, separator, children, ...rest }) => (
	<li className={cn("dodo-ui__breadcrumbs__item", className)} {...rest}>
		{children}
		{separator && <span aria-hidden>{separator}</span>}
	</li>
);

BreadcrumbItem.displayName = "BreadcrumbItem";
