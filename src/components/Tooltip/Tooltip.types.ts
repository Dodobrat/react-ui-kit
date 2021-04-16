import { CnCh, AllCustomizationProps, Positions } from "../../helpers/global.types";

type ExtraTooltipProps = CnCh & AllCustomizationProps;

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
