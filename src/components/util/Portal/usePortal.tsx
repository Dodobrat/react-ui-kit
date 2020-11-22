import React, { forwardRef, useEffect, useState } from "react";

import Portal from "./Portal";
import { PortalProps } from "./Portal.types";

export interface PortalComponent extends React.ForwardRefExoticComponent<PortalProps & React.RefAttributes<HTMLDivElement>> {
	isVisible: boolean;
}

export const usePortal = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	const show = () => setIsVisible(true);
	const hide = () => setIsVisible(false);

	useEffect(() => {
		setBodyStyles(isVisible);
	}, [isVisible]);

	const RenderPortal = forwardRef<HTMLDivElement, PortalProps>(({ children, ...rest }, ref) => {
		if (isVisible) {
			return (
				<Portal onClose={hide} {...rest} ref={ref}>
					{children}
				</Portal>
			);
		}
		return null;
	}) as PortalComponent;

	RenderPortal.isVisible = isVisible;

	return {
		show,
		hide,
		RenderPortal,
	};
};

export const setBodyStyles = (active: boolean) => {
	if (active) {
		const viewportWidth = document.documentElement.clientWidth;
		const windowWidth = window.innerWidth;
		const scrollBarWidth = windowWidth - viewportWidth;

		document.body.style.paddingRight = `${scrollBarWidth}px`;
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.paddingRight = `0px`;
		document.body.style.overflow = "auto";
	}
};
