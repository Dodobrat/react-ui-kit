// Auto-Generated
import React from "react";
import cn from "classnames";

import { FormControlProps } from "./FormControl.types";
import { addElementAttributes } from "../../../helpers/functions";

const FormControl: React.ForwardRefRenderFunction<HTMLDivElement, FormControlProps> = (props, ref) => {
	const {
		className,
		htmlFor = "",
		withLabel = true,
		labelAs = "span",
		label,
		labelProps,
		hintClassName,
		hintMsg,
		children,
		...rest
	} = props;

	let ParsedLabel: React.ElementType = addElementAttributes(labelAs, labelProps);

	return (
		<div data-testid='FormControl' className={cn("dui__form__control", className)} {...rest} ref={ref}>
			<label htmlFor={htmlFor}>
				{withLabel && <ParsedLabel>{label}</ParsedLabel>}
				{children}
			</label>
			{hintMsg && <small className={cn("dui__form__control__hint", hintClassName)}>{hintMsg}</small>}
		</div>
	);
};

export default React.forwardRef<HTMLDivElement, FormControlProps>(FormControl);
