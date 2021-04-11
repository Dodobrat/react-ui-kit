import React from "react";
import {
	AllCustomizationProps,
	CnCh,
	ElemType,
	PigmentColorProps,
	RippleEffect,
	SyntheticKeyboardControls,
} from "../../helpers/global.types";

type ExtraBadgeProps = ElemType & AllCustomizationProps & PigmentColorProps & CnCh & SyntheticKeyboardControls & RippleEffect;
// Auto-Generated
export interface BadgeProps extends ExtraBadgeProps {
	onClick?: React.MouseEventHandler<HTMLElement>;
}
