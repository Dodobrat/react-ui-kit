import React from "react";
import { CSSTransition } from "react-transition-group";
import cn from "classnames";
import { SlideInProps } from "./AnimProps.types";

const SlideIn: React.FC<SlideInProps> = (props) => {
	const { classNames, position = "left", unmountOnExit = true, timeout = 550, children, ...rest } = props;
	return (
		<CSSTransition
			timeout={timeout}
			unmountOnExit={unmountOnExit}
			classNames={cn(
				{
					[`dui__anim__slide-${position}`]: position,
					[`slide-${position}`]: position,
				},
				classNames
			)}
			{...rest}>
			{children}
		</CSSTransition>
	);
};

export default SlideIn;
