// Auto-Generated
import React, { useEffect, useState } from "react";
import cn from "classnames";

import { BackTopProps } from "./BackTop.types";
import Button from "../../Button/Button";
import { ButtonProps } from "../../Button/Button.types";
import { canUseDOM } from "../../../helpers/functions";
import Fade from "../animations/Fade";

const BackTop: React.ForwardRefRenderFunction<ButtonProps, BackTopProps> = (props, ref) => {
	const { className, round = true, size = "lg", position = "bottom-right", scrollDistanceTrigger = 400, children, ...rest } = props;

	const [showScroll, setShowScroll] = useState(false);

	useEffect(() => {
		if (canUseDOM) {
			window.addEventListener("scroll", checkScrollTop);
			return function cleanup() {
				window.removeEventListener("scroll", checkScrollTop);
			};
		}
	});

	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > scrollDistanceTrigger) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= scrollDistanceTrigger) {
			setShowScroll(false);
		}
	};

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<Fade
			in={showScroll}
			className={cn(
				"dui__back-top",
				{
					[`dui__back-top--${position}`]: position,
				},
				className
			)}>
			<Button round={round} size={size} data-testid='BackTop' onClick={scrollTop} {...rest} ref={ref}>
				{children}
			</Button>
		</Fade>
	);
};

export default React.forwardRef<HTMLDivElement, BackTopProps>(BackTop);
