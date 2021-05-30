// Auto-Generated
import React, { useCallback, useEffect, useRef, useState } from "react";
import cn from "classnames";

import { TooltipProps } from "./Tooltip.types";
import { useConfig } from "../../context/ConfigContext";
import PortalWrapper from "../util/PortalWrapper/PortalWrapper";
import { generateSeamlessClasses, generateStyleClasses } from "../../helpers/classnameGenerator";
import { mergeRefs, positionTooltip } from "../../helpers/functions";
import Fade from "../util/animations/Fade";
import { useEventListener } from "../../hooks/useEventListener";
import Zoom from "../util/animations/Zoom";

const Tooltip: React.ForwardRefRenderFunction<HTMLDivElement, TooltipProps> = (props, ref) => {
	const tooltipId = `tooltip_${new Date().getTime().toString()}_${Math.random().toString(36).substr(2, 5)}`;

	const {
		appConfig: { config },
	} = useConfig();

	const {
		className,
		content,
		position = config.tooltipPosition ?? "top-center",
		showOnFocus = config.tooltipShowOnFocus ?? true,
		showOnClick = config.tooltipShowOnClick ?? false,
		showOnHover = config.tooltipShowOnHover ?? true,
		elevation = config.tooltipElevation ?? "subtle",
		pigment = config.tooltipPigment ?? "default",
		sizing = config.tooltipSize ?? "md",
		flavor = config.tooltipFlavor ?? "default",
		seamless = config.tooltipSeamless ?? false,
		animation = config.tooltipAnimation ?? "zoom",
		triggerElement = null,
		disabled,
		spacing = config.tooltipSpacing ?? 5,
		isToggled = false,
		onToggle,
		children,
		...rest
	} = props;

	const classDefaults = {
		elevation,
		pigment,
		sizing,
		flavor,
		seamless,
	};

	const classBase = "dui__tooltip";

	const tooltipRef = useRef(null);
	const [tooltipToggled, setTooltipToggled] = useState(isToggled);
	const [triggerEl, setTriggerEl] = useState(triggerElement?.current);

	useEffect(() => {
		if (onToggle) {
			onToggle(tooltipToggled);
		}
	}, [tooltipToggled]);

	useEffect(() => {
		setTooltipToggled(isToggled);
	}, [isToggled]);

	useEffect(() => {
		setTriggerEl(triggerElement?.current);
	}, [triggerElement]);

	useEffect(() => {
		if (triggerEl && tooltipToggled) {
			positionTooltip(triggerEl, tooltipRef.current, position, spacing);
		}
	}, [triggerEl, tooltipToggled, position]);

	const handler = useCallback(() => {
		if (triggerEl && tooltipToggled) {
			positionTooltip(triggerEl, tooltipRef.current, position, spacing);
		}
	}, [triggerEl, tooltipToggled, position]);

	useEventListener("scroll", handler, { passive: true });
	useEventListener("resize", handler);

	const passThroughEvent: (handler: Function, e: Event) => void = (handler, e) => {
		if (handler) {
			handler(e);
		}
	};

	const initTooltip: (showCondition: boolean, handler: Function, e: Event) => void = (showCondition, handler, e) => {
		if (showCondition) {
			setTriggerEl(e.currentTarget);
			setTooltipToggled(true);
		}
		passThroughEvent(handler, e);
	};

	const destroyTooltip: (showCondition: boolean, handler: Function, e: Event) => void = (showCondition, handler, e) => {
		if (showCondition) {
			setTooltipToggled(false);
		}
		passThroughEvent(handler, e);
	};

	const extraChildProps: (props: any) => any = (props) => {
		return {
			...props,
			onMouseEnter: (e: MouseEvent) => initTooltip(showOnHover, props.onMouseEnter, e),
			onTouchStart: (e: TouchEvent) => initTooltip(showOnHover, props.onTouchStart, e),
			onFocus: (e: FocusEvent) => initTooltip(showOnFocus, props.onFocus, e),
			onMouseLeave: (e: MouseEvent) => destroyTooltip(showOnHover, props.onMouseLeave, e),
			onTouchEnd: (e: TouchEvent) => destroyTooltip(showOnHover, props.onTouchEnd, e),
			onBlur: (e: FocusEvent) => destroyTooltip(showOnFocus, props.onBlur, e),
			onClick: (e: Event) => {
				if (showOnClick) {
					if (!tooltipToggled) {
						setTriggerEl(e.currentTarget);
					}
					setTooltipToggled((prev) => !prev);
				}
				passThroughEvent(props.onClick, e);
			},
			["aria-haspopup"]: true,
			["id"]: tooltipId,
		};
	};

	const validChildren = React.Children.map(children, (child: JSX.Element) => {
		const validEl = React.isValidElement(child);

		if (validEl) {
			if (disabled) {
				return child;
			} else {
				return React.cloneElement(child, extraChildProps(child.props));
			}
		}

		console.error("Invalid Tooltip trigger element! Please use a valid React child / component.");
		return child;
	});

	const TooltipComponent = () => (
		<PortalWrapper>
			<div
				data-testid='Tooltip'
				role='tooltip'
				aria-describedby={tooltipId}
				aria-hidden={!tooltipToggled}
				className={cn(classBase, generateStyleClasses(classDefaults), generateSeamlessClasses(classBase, classDefaults), className)}
				{...rest}
				ref={mergeRefs([tooltipRef, ref])}>
				{content}
			</div>
		</PortalWrapper>
	);

	switch (animation) {
		case "fade":
			return (
				<>
					<Fade in={tooltipToggled}>
						<TooltipComponent />
					</Fade>
					{validChildren}
				</>
			);
		case "zoom":
			return (
				<>
					<Zoom in={tooltipToggled}>
						<TooltipComponent />
					</Zoom>
					{validChildren}
				</>
			);
		default:
			return (
				<>
					{tooltipToggled && <TooltipComponent />}
					{validChildren}
				</>
			);
	}
};

export default React.forwardRef<HTMLDivElement, TooltipProps>(Tooltip);
