// Auto-Generated
import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import { AlertProps } from "./Alert.types";
import { ElevationOptions, PigmentOptions } from "../../helpers/global";
import CollapseFade from "../util/animations/CollapseFade";
import Fade from "../util/animations/Fade";
import Button from "../Button/Button";
import { mergeRefs } from "../../helpers/functions";
import { Close, Completed, Danger, Info, Warning } from "../icons";

const Alert: React.ForwardRefRenderFunction<HTMLDivElement, AlertProps> = (props, ref) => {
	const {
		className,
		elevation = "none",
		pigment = "danger",
		rounded = false,
		flat = false,
		animation = "collapse-n-fade",
		isVisible = true,
		withIcon = true,
		iconComponent,
		isDismissible = false,
		isDismissibleOnClick = true,
		dismissibleComponent = null,
		children,
		onKeyDown,
		...rest
	} = props;

	const passThroughBtnProps = {
		elevation,
		pigment,
		rounded,
		flat,
	};

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

	useEffect(() => {
		setIsVisbleState(isVisible);
		return removeAlert;
	}, [isVisible]);

	const AlertContent = () => {
		return (
			<div
				data-testid='Alert'
				className={cn(
					"dui__alert",
					{
						"dui__alert--rounded": rounded,
						"dui__alert--flat": flat,
						"dui__alert--flex": isDismissible || withIcon,
					},
					{
						[`dui__alert--${pigment}`]: PigmentOptions.includes(pigment),
						[`dui__elevation--${elevation}`]: ElevationOptions.includes(elevation) && elevation !== "none",
					},
					className
				)}
				onClick={isDismissibleOnClick ? removeAlert : props?.["onClick"]}
				role='alert'
				tabIndex={0}
				onKeyDown={(e) => {
					if (onKeyDown) {
						onKeyDown(e);
					}
					if (alertRef.current === document.activeElement && e.code === "Space") {
						e.preventDefault();
						if (isDismissibleOnClick) {
							removeAlert();
						}
					}
				}}
				{...rest}
				ref={mergeRefs([alertRef, ref])}>
				{withIcon && alertIcon(pigment)}
				{isDismissible ? (
					<>
						<div className='dui__alert__title'>{children}</div>
						{dismissibleComponent ?? (
							<Button onClick={removeAlert} size='xs' {...passThroughBtnProps}>
								<Close className='btn__icon' />
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
			return <>{isVisibleState && <AlertContent />}</>;
	}
};

export default React.forwardRef<HTMLDivElement, AlertProps>(Alert);
