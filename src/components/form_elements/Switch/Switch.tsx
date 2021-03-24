// Auto-Generated
import React from "react";

import { SwitchComponentProps, SwitchProps } from "./Switch.types";
import Checkable, { CheckableComponent } from "../Checkable/Checkable";

const Switch: React.ForwardRefRenderFunction<HTMLDivElement, SwitchProps> = (props, ref) => {
	const { type, ...rest } = props;

	return <Checkable type='checkbox' typeClass='switch' {...rest} ref={ref} />;
};

export const SwitchComponent = React.forwardRef<HTMLInputElement, SwitchComponentProps>((props, ref) => {
	const { type, ...rest } = props;

	return <CheckableComponent type='checkbox' typeClass='switch' {...rest} ref={ref} />;
});

export default React.forwardRef<HTMLDivElement, SwitchProps>(Switch);
