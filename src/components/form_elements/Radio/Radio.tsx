// Auto-Generated
import React from "react";

import { RadioComponentProps, RadioProps } from "./Radio.types";
import Checkable, { CheckableComponent } from "../Checkable/Checkable";

const Radio: React.ForwardRefRenderFunction<HTMLDivElement, RadioProps> = (props, ref) => {
	const { type, ...rest } = props;

	return <Checkable type='radio' typeClass='radio' {...rest} ref={ref} />;
};

export const RadioComponent = React.forwardRef<HTMLInputElement, RadioComponentProps>((props, ref) => {
	const { type, ...rest } = props;

	return <CheckableComponent type='radio' typeClass='radio' {...rest} ref={ref} />;
});

export default React.forwardRef<HTMLDivElement, RadioProps>(Radio);
