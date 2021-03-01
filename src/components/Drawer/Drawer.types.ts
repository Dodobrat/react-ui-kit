import { ElevationOptions, SizeOptions } from "../../helpers/global.types";

// Auto-Generated
export interface DrawerProps {
	className?: string;
	innerClassName?: string;
	onClose: () => void;
	withFocusLock?: boolean;
	keyboard?: boolean;
	backdrop?: boolean | "static";
	elevation?: ElevationOptions;
	size?: SizeOptions;
	position?: "left" | "top" | "right" | "bottom" | null;
	bodyScrollDisable?: boolean;
	isOpen?: boolean;
	children?: React.ReactNode;
}
