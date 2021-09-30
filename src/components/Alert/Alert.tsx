// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { AlertProps } from "./Alert.types";
import StyledAlert from "./StyledAlert.styled";

import withConfig from "src/wrappers/withConfig";

const Alert: React.ForwardRefRenderFunction<HTMLDivElement, AlertProps> = (props, ref) => {
	const { className, children, ...rest } = props;

	const classBase = "dui__alert";

	console.log(props);

	return (
		<StyledAlert className={cn(classBase, className)} role='alert' {...rest} ref={ref}>
			{children}
		</StyledAlert>
	);
};

export default withConfig("alert", forwardRef<HTMLDivElement, AlertProps>(Alert));
