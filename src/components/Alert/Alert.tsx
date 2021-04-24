// Auto-Generated
import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import { AlertProps } from "./Alert.types";
import CollapseFade from "../util/animations/CollapseFade";
import Fade from "../util/animations/Fade";
import Button from "../Button/Button";
import { createRipple, mergeRefs } from "../../helpers/functions";
import { IconClose, IconCompleted, IconDanger, IconInfo, IconWarning } from "../icons";
import { useConfig } from "../../context/ConfigContext";
import { generateStyleClasses } from "../../helpers/classnameGenerator";

const Alert: React.ForwardRefRenderFunction<HTMLDivElement, AlertProps> = (props, ref) => {
	const {
		appConfig: { config },
	} = useConfig();

	const {
		className,
		pigment = config.alertPigment ?? "danger",
		pigmentColor = config.alertPigmentColor ?? null,
		elevation = config.alertElevation ?? "none",
		flavor = config.flavor ?? "default",
		size = config.size ?? "md",
		animation = config.alertAnimation ?? "collapse-n-fade",
		isVisible = true,
		withIcon = config.alertWithIcon ?? true,
		iconComponent,
		isDismissible = config.alertIsDismissible ?? false,
		isDismissibleOnClick = config.alertIsDismissibleOnClick ?? true,
		dismissibleComponent = config.alertDismissibleComponent ?? null,
		children,
		withRipple = config.withRipple ?? isDismissibleOnClick,
		onPointerDown,
		onKeyDown,
		...rest
	} = props;

	const classDefaults = {
		pigment,
		pigmentColor,
		elevation,
		flavor,
		size,
	};

	const classBase = "dui__alert";

	const alertRef = useRef(null);
	const [isVisibleState, setIsVisbleState] = useState<boolean>(isVisible);

	const removeAlert = () => setIsVisbleState(false);

	const alertIcon: (type: string) => null | React.ReactNode = (type) => {
		if (!iconComponent) {
			switch (type) {
				case "danger":
					return <IconDanger className='dui__alert__icon' />;
				case "warning":
					return <IconWarning className='dui__alert__icon' />;
				case "success":
					return <IconCompleted className='dui__alert__icon' />;
				default:
					return <IconInfo className='dui__alert__icon' />;
			}
		}
		return iconComponent;
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (onKeyDown) {
			onKeyDown(e);
		}
		if (alertRef.current === document.activeElement && e.code === "Space") {
			e.preventDefault();
			if (isDismissibleOnClick) {
				removeAlert();
			}
		}
	};

	const handleOnPointerDown: (e: React.PointerEvent) => void = (e) => {
		if (withRipple) {
			createRipple({ e, elem: alertRef });
		}

		if (onPointerDown) {
			onPointerDown(e);
		}
	};

	useEffect(() => {
		setIsVisbleState(isVisible);
		return removeAlert;
	}, [isVisible]);

	const AlertContent = () => {
		return (
			<div
				data-testid='Alert'
				className={cn(classBase, generateStyleClasses(classDefaults), className)}
				onClick={isDismissibleOnClick ? removeAlert : props?.["onClick"]}
				role='alert'
				tabIndex={isDismissibleOnClick ? 0 : -1}
				onKeyDown={handleKeyDown}
				onPointerDown={handleOnPointerDown}
				{...rest}
				ref={mergeRefs([alertRef, ref])}>
				{withIcon && alertIcon(pigment)}
				<div className={cn(`${classBase}__content`)}>{children}</div>
				{isDismissible && (
					<>
						{dismissibleComponent ?? (
							<Button onClick={removeAlert} {...classDefaults}>
								<IconClose className='dui__icon' />
							</Button>
						)}
					</>
				)}
			</div>
		);
	};

	switch (animation) {
		case "collapse-n-fade":
			return (
				<CollapseFade in={isVisibleState}>
					<div>
						<AlertContent />
					</div>
				</CollapseFade>
			);
		case "fade":
			return (
				<Fade in={isVisibleState}>
					<div>
						<AlertContent />
					</div>
				</Fade>
			);
		default:
			return isVisibleState && <AlertContent />;
	}
};

export default React.forwardRef<HTMLDivElement, AlertProps>(Alert);
