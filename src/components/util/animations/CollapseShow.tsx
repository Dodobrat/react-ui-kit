import React from "react";
import { CSSTransition } from "react-transition-group";
import cn from "classnames";
import { AnimProps } from "./AnimProps.types";

const CollapseShow: React.FC<AnimProps> = (props) => {
	const { classNames, className, unmountOnExit = true, timeout = 400, children, ...rest } = props;
	return (
		<CSSTransition
			timeout={timeout}
			unmountOnExit={unmountOnExit}
			className={cn("dui__anim dui__anim--collapse-show", className)}
			classNames={cn("collapse-show", classNames)}
			{...rest}>
			{children}
		</CSSTransition>
	);
};

export default CollapseShow;
