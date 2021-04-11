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
import { createRipple, mergeRefs } from "../../helpers/functions";
import { CaretDown } from "../icons";
import { useConfig } from "../../context/ConfigContext";

export const CollapseLoader = forwardRef<HTMLDivElement, CollapseLoaderSubComponentProps>((props, ref) => {
	const { className, pigment, children, ...rest } = props;

	return (
		<div className={cn("dui__collapse__loader", className)} {...rest} ref={ref}>
			{!!children ? children : <LineLoader pigment={pigment} />}
		</div>
	);
});

CollapseLoader.displayName = "CollapseLoader";

export const CollapseToggle = forwardRef<HTMLDivElement, CollapseToggleSubComponentProps>((props, ref) => {
	const {
		appConfig: { config },
	} = useConfig();

	const {
		className,
		pigment,
		isAccordionChild,
		isCollapsed,
		scrollIntoViewOnToggle,
		collapseIndicator = config.collapseIndicator ?? true,
		collapseIndicatorComponent = config.collapseIndicatorComponent ?? null,
		children,
		onKeyDown,
		onKeyboardToggle,
		withRipple = config.withRipple ?? true,
		onPointerDown,
		...rest
	} = props;

	const toggleRef = useRef(null);

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (onKeyDown) {
			onKeyDown(e);
		}
		if (toggleRef.current === document.activeElement && e.code === "Space") {
			e.preventDefault();
			onKeyboardToggle(isCollapsed);
		}
	};

	const handleOnPointerDown: (e: React.PointerEvent) => void = (e) => {
		if (withRipple) {
			createRipple({ e, elem: toggleRef });
		}

		if (onPointerDown) {
			onPointerDown(e);
		}
	};

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
			aria-expanded={!isCollapsed}
			tabIndex={rest["disabled"] ? -1 : 0}
			onKeyDown={handleKeyDown}
			onPointerDown={handleOnPointerDown}
			{...rest}
			ref={mergeRefs([toggleRef, ref])}>
			{collapseIndicator ? (
				<>
					<div className='dui__collapse__toggle__title'>{children}</div>
					{!!collapseIndicatorComponent ? collapseIndicatorComponent : <CaretDown className='dui__collapse__toggle__indicator' />}
				</>
			) : (
				children
			)}
		</div>
	);
});

CollapseToggle.displayName = "CollapseToggle";

export const CollapseContent = forwardRef<HTMLDivElement, CollapseContentSubComponentProps>((props, ref) => {
	const { className, isCollapsed, animation = "collapse", children, ...rest } = props;

	const CollapseContent = () => {
		return (
			<div className={cn("dui__collapse__content", className)} {...rest} ref={ref}>
				{children}
			</div>
		);
	};

	switch (animation) {
		case "collapse-n-fade":
			return (
				<CollapseFade in={!isCollapsed}>
					<div>
						<CollapseContent />
					</div>
				</CollapseFade>
			);
		case "collapse":
			return (
				<CollapseShow in={!isCollapsed}>
					<div>
						<CollapseContent />
					</div>
				</CollapseShow>
			);
		default:
			return !isCollapsed && <CollapseContent />;
	}
});

CollapseContent.displayName = "CollapseContent";
