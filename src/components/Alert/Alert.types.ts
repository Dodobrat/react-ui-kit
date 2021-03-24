import { CnCh, CustomizationProps, RippleEffect, SyntheticKeyboardControls } from "../../helpers/global.types";

type ExtraAlertProps = CustomizationProps & CnCh & SyntheticKeyboardControls & RippleEffect;

// Auto-Generated
export interface AlertProps extends ExtraAlertProps {
	animation?: "collapse-n-fade" | "fade" | null;
	isVisible?: boolean;
	withIcon?: boolean;
	iconComponent?: React.ReactNode;
	isDismissible?: boolean;
	isDismissibleOnClick?: boolean;
	dismissibleComponent?: React.ReactNode;
}
