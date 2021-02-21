import React from "react";
import { CSSTransition } from "react-transition-group";
import cn from "classnames";
import { PortalAnimProps } from "./PortalAnimProps.types";

const FadeInPortal: React.FC<PortalAnimProps> = (props) => {
	const { classNames, timeout = 500, children, ...rest } = props;
	return (
		<CSSTransition timeout={timeout} unmountOnExit classNames={cn("dui__anim--fade-portal", classNames)} {...rest}>
			{children}
		</CSSTransition>
	);
};

export default FadeInPortal;
