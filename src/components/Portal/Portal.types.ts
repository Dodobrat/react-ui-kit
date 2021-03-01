import { SizeOptions } from "../../helpers/global.types";

// Auto-Generated
export interface PortalProps {
	className?: string;
	innerClassName?: string;
	onClose: () => void;
	withFocusLock?: boolean;
	keyboard?: boolean;
	backdrop?: boolean | "static";
	size?: SizeOptions | null;
	safeZoneSize?: SizeOptions | null;
	verticalAlign?: "start" | "center" | "end";
	animation?: "default" | "zoom" | null;
	bodyScrollDisable?: boolean;
	isOpen?: boolean;
	children?: React.ReactNode;
}
