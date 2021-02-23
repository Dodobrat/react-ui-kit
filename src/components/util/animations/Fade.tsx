import React from "react";
import { CSSTransition } from "react-transition-group";
import cn from "classnames";
import { AnimProps } from "./AnimProps.types";

const Fade: React.FC<AnimProps> = (props) => {
	const { classNames, className, unmountOnExit = true, timeout = 250, children, ...rest } = props;
	return (
		<CSSTransition
			timeout={timeout}
			unmountOnExit={unmountOnExit}
			className={cn("dui__anim dui__anim--fade", className)}
			classNames={cn("fade", classNames)}
			{...rest}>
			{children}
		</CSSTransition>
	);
};

export default Fade;
