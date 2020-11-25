import React, { forwardRef } from "react";
import cn from "classnames";
import { BreadcrumbsSubComponentProps } from "./BreadcrumbsSubcomponents.types";

export const BreadcrumbItem = forwardRef<HTMLLIElement, BreadcrumbsSubComponentProps>(
	({ className, separator, children, ...rest }, ref) => (
		<li className={cn("dodo-ui__breadcrumbs__item", className)} {...rest} ref={ref}>
			{children}
			{separator && <span aria-hidden>{separator}</span>}
		</li>
	)
);

BreadcrumbItem.displayName = "BreadcrumbItem";
