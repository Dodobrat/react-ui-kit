import React from "react";
import { CSSTransition } from "react-transition-group";
import cn from "classnames";
import { AnimProps } from "./AnimProps.types";

const FadePortal: React.FC<AnimProps> = (props) => {
	const { classNames, className, unmountOnExit = true, timeout = 300, children, ...rest } = props;
	return (
		<CSSTransition
			timeout={timeout}
			unmountOnExit={unmountOnExit}
			className={cn("dui__anim dui__anim--fade-portal", className)}
			classNames={cn("fade-portal", classNames)}
			{...rest}>
			{children}
		</CSSTransition>
	);
};

export default FadePortal;
