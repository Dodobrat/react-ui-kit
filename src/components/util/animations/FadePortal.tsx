import React from "react";
import { CSSTransition } from "react-transition-group";
import cn from "classnames";
import { PortalAnimProps } from "./PortalAnimProps.types";

const FadePortal: React.FC<PortalAnimProps> = (props) => {
	const { classNames, timeout = 300, children, ...rest } = props;
	return (
		<CSSTransition
			timeout={timeout}
			unmountOnExit
			className={cn("dui__anim dui__anim--fade-portal")}
			classNames={cn("fade-portal", classNames)}
			{...rest}>
			{children}
		</CSSTransition>
	);
};

export default FadePortal;
