// Auto-Generated
import React, { forwardRef, useEffect } from "react";
import ReactDOM from "react-dom";
import cn from "classnames";
import FocusTrap from "focus-trap-react";

import { PortalProps } from "./Portal.types";
import { useKeyPress } from "../../../hooks/useKeyPress";

const Portal = forwardRef<HTMLDivElement, PortalProps>(
	(
		{
			className,
			innerClassName,
			backdropClassName,
			onClose,
			keyboard = true,
			backdrop = true,
			size = "md",
			rootEl = document.body,
			children,
			...rest
		},
		ref
	) => {
		if (!rootEl) return null;

		useKeyPress("Escape", keyboard && backdrop !== "static" ? () => onClose() : () => null);

		useEffect(() => {
			if (backdrop !== "static") {
				const detectClicked = (e: any) => {
					if (e.target.classList.contains("dui__portal")) {
						onClose();
					}
				};
				document.addEventListener("click", detectClicked);
				return () => {
					document.removeEventListener("click", detectClicked);
				};
			}
		});

		return ReactDOM.createPortal(
			<>
				{backdrop && <div className={cn("dui__portal__backdrop", backdropClassName)} />}
				<FocusTrap active={!!rootEl}>
					<div data-testid='Portal' className={cn("dui__portal", className)} {...rest} ref={ref}>
						<div
							className={cn(
								"dui__portal__inner",
								{
									[`dui__portal__inner--${size}`]: size !== "md",
								},
								innerClassName
							)}>
							{children}
						</div>
					</div>
				</FocusTrap>
			</>,
			rootEl
		);
	}
);

export default Portal;
