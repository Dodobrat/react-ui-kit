import React from "react";
import { CSSTransition } from "react-transition-group";
import cn from "classnames";
import { AnimProps } from "./AnimProps.types";

const CollapseShow: React.FC<AnimProps> = (props) => {
	const { classNames, unmountOnExit = true, timeout = 400, children, ...rest } = props;
	return (
		<CSSTransition
			timeout={timeout}
			unmountOnExit={unmountOnExit}
			classNames={cn("dui__anim__collapse-show collapse-show", classNames)}
			{...rest}>
			{children}
		</CSSTransition>
	);
};

export default CollapseShow;
