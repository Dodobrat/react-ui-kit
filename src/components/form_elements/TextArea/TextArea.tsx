// Auto-Generated
import React from "react";
import cn from "classnames";

import { TextAreaProps } from "./TextArea.types";

const TextArea: React.ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> = (props, ref) => {
	const { className, children, ...rest } = props;

	return (
		<textarea data-testid='TextArea' className={cn("dui__input__textarea", className)} {...rest} ref={ref}>
			{children}
		</textarea>
	);
};

export default React.forwardRef<HTMLTextAreaElement, TextAreaProps>(TextArea);
