import React, { forwardRef, useEffect, useRef } from "react";
import cn from "classnames";
import CollapseFade from "../util/animations/CollapseFade";
import CollapseShow from "../util/animations/CollapseShow";
import {
	CollapseContentSubComponentProps,
	CollapseLoaderSubComponentProps,
	CollapseToggleSubComponentProps,
} from "./CollapseSubComponents.types";
import LineLoader from "../LineLoader/LineLoader";
import { mergeRefs } from "../../helpers/functions";

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
	const {
		className,
		isAccordionChild,
		isCollapsed,
		scrollIntoViewOnToggle,
		collapseIndicator = true,
		collapseIndicatorComponent,
		children,
		onKeyDown,
		onKeyboardToggle,
		...rest
	} = props;

	const toggleRef = useRef(null);

	useEffect(() => {
		const handler = setTimeout(
			() => {
				if (!isCollapsed && toggleRef.current && scrollIntoViewOnToggle) {
					toggleRef.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
				}
			},
			isAccordionChild ? 500 : 1
		);

		return () => {
			clearTimeout(handler);
		};
	}, [isCollapsed, scrollIntoViewOnToggle, isAccordionChild]);

	return (
		<div
			className={cn(
				"dui__collapse__toggle",
				{
					"dui__collapse__toggle--indicated": collapseIndicator,
					"dui__collapse__toggle--collapsed": isCollapsed,
				},
				className
			)}
			role='collapse'
			aria-hidden={isCollapsed}
			tabIndex={rest["disabled"] ? -1 : 0}
			onKeyDown={(e) => {
				if (onKeyDown) {
					onKeyDown(e);
				}
				if (toggleRef.current === document.activeElement && e.code === "Space") {
					e.preventDefault();
					onKeyboardToggle(isCollapsed);
				}
			}}
			{...rest}
			ref={mergeRefs([toggleRef, ref])}>
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
