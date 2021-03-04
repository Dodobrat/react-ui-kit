import { CnCh } from "../../helpers/global.types";
import { ButtonProps } from "../Button/Button.types";

type ExtraButtonGroupProps = ButtonProps & CnCh;

// Auto-Generated
export interface ButtonGroupProps extends ExtraButtonGroupProps {
	ariaLabel?: string;
	vertical?: boolean;
	groupProps?: Object;
	disabled?: boolean;
}
