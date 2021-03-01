import React from "react";
import { CSSTransition } from "react-transition-group";
import cn from "classnames";
import { AnimProps } from "./AnimProps.types";

const Fade: React.FC<AnimProps> = (props) => {
	const { classNames, unmountOnExit = true, timeout = 250, children, ...rest } = props;
	return (
		<CSSTransition timeout={timeout} unmountOnExit={unmountOnExit} classNames={cn("dui__anim__fade fade", classNames)} {...rest}>
			{children}
		</CSSTransition>
	);
};

export default Fade;
