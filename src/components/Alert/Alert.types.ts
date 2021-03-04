import { CnCh, CustomizationProps } from "../../helpers/global.types";

type ExtraAlertProps = CustomizationProps & CnCh;

// Auto-Generated
export interface AlertProps extends ExtraAlertProps {
	animation?: "collapse-n-fade" | "fade" | null;
	isVisible?: boolean;
	isDismissible?: boolean;
	isDismissibleOnClick?: boolean;
	dismissibleComponent?: React.ReactNode;
}
