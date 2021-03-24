// Auto-Generated
import React from "react";

import { CheckboxComponentProps, CheckboxProps } from "./Checkbox.types";
import Checkable, { CheckableComponent } from "../Checkable/Checkable";

const Checkbox: React.ForwardRefRenderFunction<HTMLDivElement, CheckboxProps> = (props, ref) => {
	const { type, ...rest } = props;

	return <Checkable type='checkbox' typeClass='checkbox' {...rest} ref={ref} />;
};

export const CheckboxComponent = React.forwardRef<HTMLInputElement, CheckboxComponentProps>((props, ref) => {
	const { type, ...rest } = props;

	return <CheckableComponent type='checkbox' typeClass='checkbox' {...rest} ref={ref} />;
});

export default React.forwardRef<HTMLDivElement, CheckboxProps>(Checkbox);
