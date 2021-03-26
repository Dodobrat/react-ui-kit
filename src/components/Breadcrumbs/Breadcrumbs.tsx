// Auto-Generated
import React, { forwardRef, useContext } from "react";
import cn from "classnames";

import { BreadcrumbsProps } from "./Breadcrumbs.types";
import { BreadcrumbsSubComponentProps } from "./BreadcrumbsSubcomponents.types";
import { BreadcrumbItem } from "./BreadcrumbsSubcomponents";
import { GlobalContext } from "../../context/GlobalContext/GlobalContext";
import { generateCustomizationClasses } from "../../helpers/classnameGenerator";

interface BreadcrumbComponent extends React.ForwardRefExoticComponent<BreadcrumbsProps & React.RefAttributes<HTMLOListElement>> {
	Item: React.ForwardRefExoticComponent<BreadcrumbsSubComponentProps & React.RefAttributes<HTMLLIElement>>;
}

const Breadcrumbs = forwardRef<HTMLOListElement, BreadcrumbsProps>((props, ref) => {
	const {
		appConfig: { config },
	} = useContext(GlobalContext);

	const {
		className,
		contained = config.breadcrumbsContained ?? false,
		flat = config.flat ?? false,
		rounded = config.rounded ?? false,
		elevation = config.breadcrumbsElevation ?? "none",
		pigment = config.breadcrumbsPigment ?? null,
		size = config.size ?? "md",
		separator = config.breadcrumbsSeparator ?? "/",
		children,
		...rest
	} = props;

	const breadcrumbsClassDefaults = {
		pigment,
		size,
		flat,
		rounded,
		elevation,
	};

	const breadcrumbsClassBase = "dui__breadcrumbs";

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
				breadcrumbsClassBase,
				{
					[`${breadcrumbsClassBase}--contained`]: contained,
				},
				generateCustomizationClasses(breadcrumbsClassBase, breadcrumbsClassDefaults),
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
