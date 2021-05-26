import { CnCh, AllCustomizationProps, AllPositions, PopUpAnimation } from "../../helpers/global.types";

type ExtraDropdownProps = CnCh & AllCustomizationProps;

// Auto-Generated
export interface DropdownProps extends ExtraDropdownProps {
	position?: AllPositions;
	showOnFocus?: boolean;
	seamless?: boolean;
	isToggled?: boolean;
	onToggle?: (isToggled: boolean) => void;
	spacing?: number;
	disabled?: boolean;
	triggerElement?: HTMLElement | React.MutableRefObject<HTMLElement> | any;
	animation?: PopUpAnimation;
}
