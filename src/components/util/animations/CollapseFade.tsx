import React from "react";
import { CSSTransition } from "react-transition-group";
import cn from "classnames";
import { AnimProps } from "./AnimProps.types";

const CollapseFade: React.FC<AnimProps> = (props) => {
	const { classNames, unmountOnExit = true, timeout = 550, children, ...rest } = props;
	return (
		<CSSTransition
			timeout={timeout}
			unmountOnExit={unmountOnExit}
			classNames={cn("dui__anim__collapse-fade collapse-fade", classNames)}
			{...rest}>
			{children}
		</CSSTransition>
	);
};

export default CollapseFade;
