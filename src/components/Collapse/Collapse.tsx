// Auto-Generated
import React, { forwardRef, useContext, useEffect, useRef, useState } from "react";
import cn from "classnames";

import { CollapseProps } from "./Collapse.types";
import {
	CollapseContentSubComponentProps,
	CollapseLoaderSubComponentProps,
	CollapseToggleSubComponentProps,
} from "./CollapseSubComponents.types";
import { CollapseContent, CollapseLoader, CollapseToggle } from "./CollapseSubComponents";
import { CnCh } from "../../helpers/global.types";
import { mergeRefs } from "../../helpers/functions";
import { GlobalContext } from "../../context/GlobalContext/GlobalContext";
import { generateEssentialCustomizationClasses, generateLoadingClasses } from "../../helpers/classnameGenerator";
interface CollapseComponent extends React.ForwardRefExoticComponent<CnCh & React.RefAttributes<HTMLDivElement>> {
	Loader: React.ForwardRefExoticComponent<CollapseLoaderSubComponentProps & React.RefAttributes<HTMLDivElement>>;
	Toggle: React.ForwardRefExoticComponent<CollapseToggleSubComponentProps & React.RefAttributes<HTMLDivElement>>;
	Content: React.ForwardRefExoticComponent<CollapseContentSubComponentProps & React.RefAttributes<HTMLDivElement>>;
}

const Collapse = forwardRef<HTMLDivElement, CollapseProps>((props, ref) => {
	const {
		appConfig: { config },
	} = useContext(GlobalContext);

	const {
		className,
		onToggle,
		isCollapsed = true,
		pigment = null,
		flat = config.flat ?? false,
		elevation = config.elevation ?? "subtle",
		allowOverflow = true,
		disableWhileLoading = true,
		isLoading = false,
		scrollIntoViewOnToggle = config.collapseScrollIntoViewOnToggle ?? false,
		children,
		...rest
	} = props;

	const collapseClassDefaults = {
		elevation,
		pigment,
		flat,
		isLoading,
		disableWhileLoading,
	};

	const collapseClassBase = "dui__collapse";

	const collapseRef = useRef(null);
	const [collapseState, setCollapseState] = useState<boolean>(isCollapsed);

	const onCollapseToggle = () => setCollapseState((prev) => !prev);

	useEffect(() => {
		setCollapseState(isCollapsed);

		return () => setCollapseState(true);
	}, [isCollapsed]);

	const isAccordionChild = collapseRef.current?.parentElement?.classList?.contains?.("dui__accordion");

	const collapseChildren: JSX.Element[] = React.Children.map(children, (child: JSX.Element) => {
		if (child.type?.displayName === "CollapseToggle") {
			return {
				...child,
				props: {
					...child.props,
					pigment,
					isAccordionChild,
					scrollIntoViewOnToggle,
					isCollapsed: collapseState,
					disabled: (disableWhileLoading && isLoading) || rest["disabled"],
					onKeyboardToggle: onToggle ? () => onToggle(isCollapsed) : onCollapseToggle,
					onClick: onToggle ? () => onToggle(isCollapsed) : onCollapseToggle,
				},
			};
		}

		if (child.type?.displayName === "CollapseContent") {
			return {
				...child,
				props: {
					...child.props,
					isCollapsed: child.props?.isCollapsed ?? collapseState,
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
				collapseClassBase,
				{
					[`${collapseClassBase}--collapsed`]: collapseState,
					"no-overflow": !allowOverflow,
				},
				generateLoadingClasses(collapseClassBase, collapseClassDefaults),
				generateEssentialCustomizationClasses(collapseClassBase, collapseClassDefaults),
				className
			)}
			{...rest}
			ref={mergeRefs([collapseRef, ref])}>
			{isLoading && loader.length === 0 && <CollapseLoader />}
			{collapseChildren}
		</div>
	);
}) as CollapseComponent;

Collapse.Loader = CollapseLoader;
Collapse.Toggle = CollapseToggle;
Collapse.Content = CollapseContent;
Collapse.displayName = "Collapse";

export default Collapse;
