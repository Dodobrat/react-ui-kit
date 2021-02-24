// Auto-Generated
import React, { useEffect, useState } from "react";
import cn from "classnames";

import { AlertProps } from "./Alert.types";
import { ElevationOptions, PigmentOptions } from "../../helpers/global";
import CollapseFade from "../util/animations/CollapseFade";
import Fade from "../util/animations/Fade";
import Button from "../Button/Button";

const Alert: React.ForwardRefRenderFunction<HTMLDivElement, AlertProps> = (props, ref) => {
	const {
		className,
		elevation = "none",
		pigment = "danger",
		contrast = false,
		rounded = false,
		flat = false,
		animation = "collapse-n-fade",
		isVisible = true,
		isDismissible = false,
		isDismissibleOnClick = true,
		dismissibleComponent = null,
		children,
		...rest
	} = props;

	const passThroughBtnProps = {
		elevation,
		pigment,
		contrast,
		rounded,
		flat,
	};

	const [isVisibleState, setIsVisbleState] = useState<boolean>(isVisible);

	const removeAlert = () => setIsVisbleState(false);

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
						"dui__alert--contrast": contrast,
						"dui__alert--rounded": rounded,
						"dui__alert--flat": flat,
						"dui__alert--dismissible": isDismissible,
					},
					{
						[`dui__alert--${pigment}`]: PigmentOptions.includes(pigment),
						[`dui__elevation--${elevation}`]: ElevationOptions.includes(elevation) && elevation !== "none",
					},
					className
				)}
				onClick={isDismissibleOnClick ? removeAlert : props?.["onClick"]}
				{...rest}
				ref={ref}>
				{isDismissible ? (
					<>
						<div className='dui__alert__title'>{children}</div>
						{dismissibleComponent ?? (
							<Button onClick={removeAlert} size='xs' {...passThroughBtnProps}>
								Close
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
