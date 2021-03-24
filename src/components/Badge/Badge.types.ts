import React from "react";
import { CnCh, CustomizationProps, ElemType, RippleEffect, SyntheticKeyboardControls } from "../../helpers/global.types";

type ExtraBadgeProps = ElemType & CustomizationProps & CnCh & SyntheticKeyboardControls & RippleEffect;
// Auto-Generated
export interface BadgeProps extends ExtraBadgeProps {
	onClick?: React.MouseEventHandler<HTMLElement>;
}
