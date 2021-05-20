import React from "react";
import { CnCh, AllCustomizationProps, AllPositions } from "../../helpers/global.types";

type ExtraTooltipProps = CnCh & AllCustomizationProps;
export type TooltipAnimation = "fade" | "zoom" | null;

// Auto-Generated
export interface TooltipProps extends ExtraTooltipProps {
	position?: AllPositions;
	content?: React.ReactNode;
	showOnFocus?: boolean;
	showOnClick?: boolean;
	showOnHover?: boolean;
	seamless?: boolean;
	isVisible?: boolean;
	onToggle?: (isVisible: boolean) => void;
	spacing?: number;
	disabled?: boolean;
	triggerElement?: HTMLElement | React.MutableRefObject<HTMLElement> | any;
	animation?: TooltipAnimation;
}
