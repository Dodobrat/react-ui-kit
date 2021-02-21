// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { BreadcrumbsProps } from "./Breadcrumbs.types";
import { BreadcrumbsSubComponentProps } from "./BreadcrumbsSubcomponents.types";
import { BreadcrumbItem } from "./BreadcrumbsSubcomponents";
import { ElevationOptions, PigmentOptions } from "../../helpers/global";

interface BreadcrumbComponent extends React.ForwardRefExoticComponent<BreadcrumbsProps & React.RefAttributes<HTMLOListElement>> {
	Item: React.ForwardRefExoticComponent<BreadcrumbsSubComponentProps & React.RefAttributes<HTMLLIElement>>;
}

const Breadcrumbs = forwardRef<HTMLOListElement, BreadcrumbsProps>((props, ref) => {
	const {
		className,
		contained = false,
		flat = false,
		elevation = "none",
		pigment = null,
		contrast = false,
		separator = "/",
		children,
		...rest
	} = props;

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
		<ol
			data-testid='Breadcrumbs'
			className={cn(
				"dui__breadcrumbs",
				{
					"dui__breadcrumbs--contained": contained,
					"dui__breadcrumbs--flat": flat,
					"dui__breadcrumbs--contrast": contrast,
				},
				{
					[`dui__breadcrumbs--${pigment}`]: PigmentOptions.includes(pigment),
					[`dui__elevation--${elevation}`]: ElevationOptions.includes(elevation) && elevation !== "none" && contained,
				},
				className
			)}
			{...rest}
			ref={ref}>
			{item}
		</ol>
	);
}) as BreadcrumbComponent;

Breadcrumbs.Item = BreadcrumbItem;

export default Breadcrumbs;
