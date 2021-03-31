import { CnCh, CustomizationProps, Positions } from "../../helpers/global.types";

type ExtraTooltipProps = CnCh & CustomizationProps;

// Auto-Generated
export interface TooltipProps extends ExtraTooltipProps {
	position?: Positions;
	content?: React.ReactNode;
	adjustToViewport?: boolean;
	showOnFocus?: boolean;
	showOnClick?: boolean;
	showOnHover?: boolean;
	seamless?: boolean;
	isVisible?: boolean;
	onToggle?: (isVisible: boolean) => void;
	spacing?: number;
	triggerElement?: HTMLElement | React.MutableRefObject<any> | any;
}
