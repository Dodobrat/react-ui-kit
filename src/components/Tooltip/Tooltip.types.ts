import React from "react";
import { CnCh, AllCustomizationProps, AllPositions, PopUpAnimation } from "../../helpers/global.types";

type ExtraTooltipProps = CnCh & AllCustomizationProps;

// Auto-Generated
export interface TooltipProps extends ExtraTooltipProps {
	position?: AllPositions;
	content?: React.ReactNode;
	showOnFocus?: boolean;
	showOnClick?: boolean;
	showOnHover?: boolean;
	seamless?: boolean;
	isToggled?: boolean;
	onToggle?: (isToggled: boolean) => void;
	spacing?: number;
	disabled?: boolean;
	triggerElement?: HTMLElement | React.MutableRefObject<HTMLElement> | any;
	animation?: PopUpAnimation;
}
