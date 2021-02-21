import React, { forwardRef } from "react";
import cn from "classnames";
import { BreadcrumbsSubComponentProps } from "./BreadcrumbsSubcomponents.types";

export const BreadcrumbItem = forwardRef<HTMLLIElement, BreadcrumbsSubComponentProps>((props, ref) => {
	const { className, separator, children, ...rest } = props;

	return (
		<li className={cn("dui__breadcrumbs__item", className)} {...rest} ref={ref}>
			{children}
			{separator && <span aria-hidden>{separator}</span>}
		</li>
	);
});

BreadcrumbItem.displayName = "BreadcrumbItem";
