import { CnCh, CustomizationProps, Positions, StartEnd } from "../../helpers/global.types";

type ExtraDropdownProps = CnCh & CustomizationProps;
// Auto-Generated
export interface DropdownProps extends ExtraDropdownProps {
	onToggle?: (isToggled: boolean) => void;
	isToggled?: boolean;
	adjustToViewport?: boolean;
	position?: Positions;
	seamless?: boolean;
	spacing?: number;
	alignment?: StartEnd;
}
