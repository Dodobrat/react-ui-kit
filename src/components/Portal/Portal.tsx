import React, { forwardRef, useEffect, useRef } from "react";
import cn from "classnames";
import FocusTrap from "focus-trap-react";
import { useKeyPress } from "../../hooks/useKeyPress";
import PortalWrapper from "../util/PortalWrapper/PortalWrapper";
import FadePortal from "../util/animations/FadePortal";
import ZoomPortal from "../util/animations/ZoomPortal";
import { disableScrollAndScrollBar } from "../../helpers/functions";

import { PortalContentProps, PortalProps } from "./Portal.types";
import { useConfig } from "../../context/ConfigContext";
import { generateStyleClasses } from "../../helpers/classnameGenerator";

let portalCount = 0;

const usePortalClose = (callback) => {
	const ref = useRef();
	const onPointerUp = ({ target }) => {
		if (target === ref.current) {
			callback?.();
		}
	};
	return { ref, onPointerUp };
};

const PortalContent = forwardRef<HTMLDivElement, PortalContentProps>((props, ref) => {
	const {
		withFocusLock,
		classBase,
		backdrop,
		className,
		classDefaults,
		innerClassName,
		children,
		isOpen,
		element,
		portalId,
		portalInnerId,
		verticalAlign,
		safeZoneSize,
		onClose,
		innerProps: { classBase: innerClassBase, ...innerProps },
		...rest
	} = props;

	return (
		<PortalWrapper element={element}>
			<FocusTrap active={withFocusLock}>
				<div
					data-testid='Portal'
					id={portalId}
					className={cn(
						classBase,
						{
							[`${classBase}--backdrop`]: backdrop,
						},
						className
					)}
					{...rest}
					ref={ref}>
					<div
						id={portalInnerId}
						className={cn(
							innerClassBase,
							{
								[`${innerClassBase}--vertical-${verticalAlign}`]: !!verticalAlign,
							},
							innerClassName
						)}
						{...innerProps}>
						<div className={cn(generateStyleClasses(classDefaults))}>{children}</div>
					</div>
				</div>
			</FocusTrap>
		</PortalWrapper>
	);
});

const Portal: React.ForwardRefRenderFunction<HTMLDivElement, PortalProps> = (props, ref) => {
	const {
		appConfig: { config },
	} = useConfig();

	const {
		onClose,
		onOutsideClick,
		withFocusLock = false,
		keyboard = config.portalKeyboard ?? true,
		backdrop = true,
		sizing = config.sizing ?? "md",
		safeZoneSize = config.portalSafeZoneSize ?? "md",
		verticalAlign = config.portalVerticalAlign ?? "center",
		animation = config.portalAnimation ?? "default",
		bodyScrollDisable = config.portalBodyScrollDisable ?? true,
		isOpen = false,
		element,
		...rest
	} = props;

	const classDefaults = {
		portalSize: sizing,
	};

	const portalInstance = useRef(0);

	const classBase = "dui__portal";
	const innerClassBase = "dui__portal__inner";
	const portalId = `${classBase}__${portalInstance.current}`;
	const portalInnerId = `${innerClassBase}__${portalInstance.current}`;

	const portalCloseProps = usePortalClose(onOutsideClick);
	useKeyPress("Escape", keyboard && backdrop !== "static" && onClose);

	useEffect(() => {
		portalCount += 1;
		portalInstance.current = portalCount;
		return () => {
			portalCount -= 1;
		};
	}, []);

	useEffect(() => {
		if (bodyScrollDisable) {
			if (portalCount > 0) {
				disableScrollAndScrollBar(isOpen);
			}
		}
		return () => {
			if (bodyScrollDisable) {
				disableScrollAndScrollBar(false);
			}
		};
	}, [isOpen]);

	const portalProps = {
		onClose,
		innerProps: {
			...portalCloseProps,
			classBase: innerClassBase,
		},
		isOpen,
		withFocusLock,
		portalId,
		portalInnerId,
		classBase,
		backdrop,
		classDefaults,
		safeZoneSize,
		verticalAlign,
		...rest,
	};

	switch (animation) {
		case "default":
			return (
				<FadePortal in={isOpen}>
					<PortalContent {...portalProps} ref={ref} />
				</FadePortal>
			);
		case "zoom":
			return (
				<ZoomPortal in={isOpen}>
					<PortalContent {...portalProps} ref={ref} />
				</ZoomPortal>
			);
		default:
			return isOpen && <PortalContent {...portalProps} ref={ref} />;
	}
};

export default React.forwardRef<HTMLDivElement, PortalProps>(Portal);
