// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { BreadcrumbsProps } from "./Breadcrumbs.types";
import { BreadcrumbsSubComponentProps } from "./BreadcrumbsSubcomponents.types";
import { BreadcrumbItem } from "./BreadcrumbsSubcomponents";
import { useConfig } from "../../context/ConfigContext";
import { generateStyleClasses } from "../../helpers/classnameGenerator";

export interface BreadcrumbComponent extends React.ForwardRefExoticComponent<BreadcrumbsProps & React.RefAttributes<HTMLOListElement>> {
	Item: React.ForwardRefExoticComponent<BreadcrumbsSubComponentProps & React.RefAttributes<HTMLLIElement>>;
}

const Breadcrumbs = forwardRef<HTMLOListElement, BreadcrumbsProps>((props, ref) => {
	const {
		appConfig: { config },
	} = useConfig();

	const {
		className,
		pigment = config.breadcrumbsPigment ?? "none",
		elevation = config.breadcrumbsElevation ?? "none",
		flavor = config.flavor ?? "default",
		sizing = config.sizing ?? "md",
		separator = config.breadcrumbsSeparator ?? "/",
		children,
		...rest
	} = props;

	const classDefaults = {
		pigment,
		elevation,
		flavor,
		sizing,
	};

	const classBase = "dui__breadcrumbs";

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
		<ol data-testid='Breadcrumbs' className={cn(classBase, generateStyleClasses(classDefaults), className)} {...rest} ref={ref}>
			{item}
		</ol>
	);
}) as BreadcrumbComponent;

Breadcrumbs.Item = BreadcrumbItem;

export default Breadcrumbs;
