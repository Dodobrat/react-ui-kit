import React from "react";
import { CSSTransition } from "react-transition-group";
import cn from "classnames";
import { AnimProps } from "./AnimProps.types";

const CollapseFade: React.FC<AnimProps> = (props) => {
	const { classNames, className, unmountOnExit = true, timeout = 550, children, ...rest } = props;
	return (
		<CSSTransition
			timeout={timeout}
			unmountOnExit={unmountOnExit}
			className={cn("dui__anim dui__anim--collapse-fade", className)}
			classNames={cn("collapse-fade", classNames)}
			{...rest}>
			{children}
		</CSSTransition>
	);
};

export default CollapseFade;
