// Auto-Generated
import React, { forwardRef, useState } from "react";
import cn from "classnames";

import { CollapseProps } from "./Collapse.types";
import { ElevationOptions, PigmentOptions } from "../../helpers/global";
import {
	CollapseContentSubComponentProps,
	CollapseLoaderSubComponentProps,
	CollapseSubComponentProps,
	CollapseToggleSubComponentProps,
} from "./CollapseSubComponents.types";
import { CollapseContent, CollapseLoader, CollapseToggle } from "./CollapseSubComponents";

interface CollapseComponent extends React.ForwardRefExoticComponent<CollapseSubComponentProps & React.RefAttributes<HTMLDivElement>> {
	Loader: React.ForwardRefExoticComponent<CollapseLoaderSubComponentProps & React.RefAttributes<HTMLDivElement>>;
	Toggle: React.ForwardRefExoticComponent<CollapseToggleSubComponentProps & React.RefAttributes<HTMLDivElement>>;
	Content: React.ForwardRefExoticComponent<CollapseContentSubComponentProps & React.RefAttributes<HTMLDivElement>>;
}

const Collapse = forwardRef<HTMLDivElement, CollapseProps>((props, ref) => {
	const {
		className,
		onToggle,
		isCollapsed = true,
		pigment = null,
		contrast = false,
		flat = false,
		elevation = "subtle",
		allowOverflow = true,
		disableWhileLoading = true,
		loading = false,
		children,
		...rest
	} = props;

	const [collapseState, setCollapseState] = useState<boolean>(isCollapsed);

	const onCollapseToggle = () => {
		setCollapseState((prev) => !prev);
		if (onToggle) onToggle(!collapseState);
	};

	const collapseChildren: JSX.Element[] = React.Children.map(children, (child: JSX.Element) => {
		if (child.type?.displayName === "CollapseToggle") {
			return {
				...child,
				props: {
					...child.props,
					isCollapsed: collapseState,
					onToggle: child.props.onClick ?? onCollapseToggle,
				},
			};
		}

		if (child.type?.displayName === "CollapseContent") {
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

	const loader: JSX.Element[] = React.Children.map(children, (child: JSX.Element) =>
		child?.type?.displayName === "CollapseLoader" ? child : null
	);

	return (
		<div
			data-testid='Collapse'
			className={cn(
				"dui__collapse",
				{
					"dui__collapse--contrast": contrast,
					"dui__collapse--flat": flat,
					"dui__collapse--collapsed": collapseState,
					"dui__collapse--loading": loading,
					"dui__collapse--loading-disabled": loading && disableWhileLoading,
					"no-overflow": !allowOverflow,
				},
				{
					[`dui__collapse--${pigment}`]: PigmentOptions.includes(pigment),
					[`dui__elevation--${elevation}`]: ElevationOptions.includes(elevation) && elevation !== "none",
				},
				className
			)}
			{...rest}
			ref={ref}>
			{loading && loader.length === 0 && <CollapseLoader />}
			{collapseChildren}
		</div>
	);
}) as CollapseComponent;

Collapse.Loader = CollapseLoader;
Collapse.Toggle = CollapseToggle;
Collapse.Content = CollapseContent;
Collapse.displayName = "Collapse";

export default Collapse;
