// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { CloseBtnProps } from "./CloseBtn.types";

const CloseBtn = forwardRef<HTMLButtonElement, CloseBtnProps>(({ className, round = false, onClick, children, ...rest }, ref) => {
	return (
		<button
			data-testid='CloseBtn'
			className={cn(
				"dui__close__btn",
				{
					"dui__close__btn--round": round,
				},
				className
			)}
			{...rest}
			onClick={onClick}
			ref={ref}
		/>
	);
});

export default CloseBtn;
