import { PortalComponent, SizeOptions } from "../../helpers/global.types";

export type VerticalAlign = "start" | "center" | "end";
export type PortalAnimation = "default" | "zoom" | null;
// Auto-Generated
export interface PortalProps extends PortalComponent {
	safeZoneSize?: SizeOptions | null;
	verticalAlign?: VerticalAlign;
	animation?: PortalAnimation;
}
