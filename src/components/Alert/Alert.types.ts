import { CnCh, CustomizationProps, SyntheticKeyboardControls } from "../../helpers/global.types";

type ExtraAlertProps = CustomizationProps & CnCh & SyntheticKeyboardControls;

// Auto-Generated
export interface AlertProps extends ExtraAlertProps {
	animation?: "collapse-n-fade" | "fade" | null;
	isVisible?: boolean;
	isDismissible?: boolean;
	isDismissibleOnClick?: boolean;
	dismissibleComponent?: React.ReactNode;
}
