import React from "react";
import { CSSTransition } from "react-transition-group";
import cn from "classnames";
import { AnimProps } from "./AnimProps.types";

const ZoomPortal: React.FC<AnimProps> = (props) => {
	const { classNames, unmountOnExit = true, timeout = 300, children, ...rest } = props;
	return (
		<CSSTransition
			timeout={timeout}
			unmountOnExit={unmountOnExit}
			classNames={cn("dui__anim__zoom-portal zoom-portal", classNames)}
			{...rest}>
			{children}
		</CSSTransition>
	);
};

export default ZoomPortal;
