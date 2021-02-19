// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { TextAreaProps } from "./TextArea.types";

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ className, children, ...rest }, ref) => {
	return (
		<textarea data-testid='TextArea' className={cn("dui__textarea", className)} {...rest} ref={ref}>
			{children}
		</textarea>
	);
});

export default TextArea;
