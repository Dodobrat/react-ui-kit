import { AllPortalSizeOptions, PortalComponent, SizeOptions } from "../../helpers/global.types";

export type VerticalAlign = "start" | "center" | "end";
export type PortalAnimation = "default" | "zoom" | null;
// Auto-Generated
type ExtraPortalProps = PortalComponent & PortalWrapperProps;

export interface PortalProps extends ExtraPortalProps {
	safeZoneSize?: SizeOptions | null;
	sizing?: AllPortalSizeOptions;
	verticalAlign?: VerticalAlign;
	animation?: PortalAnimation;
}

export interface PortalWrapperProps {
	element?: Element;
}

export interface PortalContentProps extends PortalProps {
	classBase?: string;
	innerProps?: any;
	classDefaults?: any;
	portalId?: string;
	portalInnerId?: string;
}
