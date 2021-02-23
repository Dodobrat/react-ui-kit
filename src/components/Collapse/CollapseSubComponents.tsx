import React, { forwardRef } from "react";
import cn from "classnames";
import CollapseFade from "../util/animations/CollapseFade";
import CollapseShow from "../util/animations/CollapseShow";
import {
	CollapseContentSubComponentProps,
	CollapseLoaderSubComponentProps,
	CollapseToggleSubComponentProps,
} from "./CollapseSubComponents.types";
import LineLoader from "../LineLoader/LineLoader";

export const CollapseLoader = forwardRef<HTMLDivElement, CollapseLoaderSubComponentProps>((props, ref) => {
	const { className, pigment, contrast, children, ...rest } = props;

	return (
		<div className={cn("dui__collapse__loader", className)} {...rest} ref={ref}>
			{!!children ? children : <LineLoader pigment={pigment} contrast={contrast} />}
		</div>
	);
});

CollapseLoader.displayName = "CollapseLoader";

export const CollapseToggle = forwardRef<HTMLDivElement, CollapseToggleSubComponentProps>((props, ref) => {
	const { className, onToggle, isCollapsed, collapseIndicator = true, collapseIndicatorComponent, children, ...rest } = props;

	return (
		<div
			className={cn(
				"dui__collapse__toggle",
				{
					"dui__collapse__toggle--indicated": collapseIndicator,
				},
				className
			)}
			{...rest}
			onClick={() => onToggle(!isCollapsed)}
			ref={ref}>
			{collapseIndicator ? (
				<>
					<div className='dui__collapse__toggle__title'>{children}</div>
					{!!collapseIndicatorComponent ? collapseIndicatorComponent : "loll"}
				</>
			) : (
				children
			)}
		</div>
	);
});

CollapseToggle.displayName = "CollapseToggle";

export const CollapseContent = forwardRef<HTMLDivElement, CollapseContentSubComponentProps>((props, ref) => {
	const { className, isCollapsed, animation = "collapse-n-fade", children, ...rest } = props;

	const CollapseContent = () => {
		return (
			<div>
				<div className={cn("dui__collapse__content", className)} {...rest} ref={ref}>
					{children}
				</div>
			</div>
		);
	};

	switch (animation) {
		case "collapse-n-fade":
			return (
				<CollapseFade in={!isCollapsed}>
					<CollapseContent />
				</CollapseFade>
			);
		case "collapse":
			return (
				<CollapseShow in={!isCollapsed}>
					<CollapseContent />
				</CollapseShow>
			);
		default:
			return <>{!isCollapsed && <CollapseContent />}</>;
	}
});

CollapseContent.displayName = "CollapseContent";
