// Auto-Generated
import React, { useContext, useEffect, useRef, useState } from "react";
import cn from "classnames";

import { AlertProps } from "./Alert.types";
import CollapseFade from "../util/animations/CollapseFade";
import Fade from "../util/animations/Fade";
import Button from "../Button/Button";
import { createRipple, mergeRefs } from "../../helpers/functions";
import { Close, Completed, Danger, Info, Warning } from "../icons";
import { GlobalContext } from "../../context/GlobalContext/GlobalContext";
import { generateCustomizationClasses } from "../../helpers/classnameGenerator";

const Alert: React.ForwardRefRenderFunction<HTMLDivElement, AlertProps> = (props, ref) => {
	const {
		appConfig: { config },
	} = useContext(GlobalContext);

	const {
		className,
		elevation = config.alertElevation ?? "none",
		pigment = config.alertPigment ?? "danger",
		size = config.size ?? "md",
		rounded = config.rounded ?? false,
		flat = config.flat ?? false,
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

	const passThroughBtnProps = {
		size,
		elevation,
		pigment,
		rounded,
		flat,
	};

	const alertClassBase = "dui__alert";

	const alertRef = useRef(null);
	const [isVisibleState, setIsVisbleState] = useState<boolean>(isVisible);

	const removeAlert = () => setIsVisbleState(false);

	const alertIcon: (type: string) => null | React.ReactNode = (type) => {
		if (!iconComponent) {
			switch (type) {
				case "danger":
					return <Danger className='dui__alert__icon' />;
				case "warning":
					return <Warning className='dui__alert__icon' />;
				case "success":
					return <Completed className='dui__alert__icon' />;
				default:
					return <Info className='dui__alert__icon' />;
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
			createRipple({ e, elem: alertRef, pigment });
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
				className={cn(
					alertClassBase,
					{
						[`${alertClassBase}--flex`]: isDismissible || withIcon,
					},
					generateCustomizationClasses(alertClassBase, passThroughBtnProps),
					className
				)}
				onClick={isDismissibleOnClick ? removeAlert : props?.["onClick"]}
				role='alert'
				tabIndex={0}
				onKeyDown={handleKeyDown}
				onPointerDown={handleOnPointerDown}
				{...rest}
				ref={mergeRefs([alertRef, ref])}>
				{withIcon && alertIcon(pigment)}
				{isDismissible ? (
					<>
						<div className={cn(`${alertClassBase}__title`)}>{children}</div>
						{dismissibleComponent ?? (
							<Button onClick={removeAlert} size='xs' {...passThroughBtnProps}>
								<Close className='dui__icon' />
							</Button>
						)}
					</>
				) : (
					children
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
