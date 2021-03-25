import { CnCh, CustomizationProps, RippleEffect, SyntheticKeyboardControls } from "../../helpers/global.types";

type ExtraAlertProps = CustomizationProps & CnCh & SyntheticKeyboardControls & RippleEffect;

export type AlertAnimation = "collapse-n-fade" | "fade" | null;

// Auto-Generated
export interface AlertProps extends ExtraAlertProps {
	animation?: AlertAnimation;
	isVisible?: boolean;
	withIcon?: boolean;
	iconComponent?: React.ReactNode;
	isDismissible?: boolean;
	isDismissibleOnClick?: boolean;
	dismissibleComponent?: React.ReactNode;
}
