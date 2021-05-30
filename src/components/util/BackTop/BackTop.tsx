// Auto-Generated
import React, { useCallback, useState } from "react";
import cn from "classnames";
import Button from "../../Button/Button";
import Fade from "../animations/Fade";
import { useEventListener } from "../../../hooks/useEventListener";

import { BackTopProps } from "./BackTop.types";
import { ButtonProps } from "../../Button/Button.types";
import { IconArrowUp } from "../../icons";

const BackTop: React.ForwardRefRenderFunction<ButtonProps, BackTopProps> = (props, ref) => {
	const { className, flavor = "round", sizing = "lg", position = "bottom-right", scrollDistanceTrigger = 400, children, ...rest } = props;

	const [showScroll, setShowScroll] = useState(false);

	const handler = useCallback(() => {
		if (!showScroll && window.pageYOffset > scrollDistanceTrigger) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= scrollDistanceTrigger) {
			setShowScroll(false);
		}
	}, [showScroll]);

	useEventListener("scroll", handler);

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<Fade in={showScroll}>
			<div
				className={cn(
					"dui__back-top",
					{
						[`dui__back-top--${position}`]: position,
					},
					className
				)}>
				<Button flavor={flavor} sizing={sizing} data-testid='BackTop' onClick={scrollTop} {...rest} ref={ref}>
					{children ?? <IconArrowUp className='dui__icon' />}
				</Button>
			</div>
		</Fade>
	);
};

export default React.forwardRef<HTMLDivElement, BackTopProps>(BackTop);
