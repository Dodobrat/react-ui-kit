import { Positions, PortalComponent, AllElevationOptions, AllSizeOptions } from "../../helpers/global.types";

// Auto-Generated
export interface DrawerProps extends PortalComponent {
	elevation?: AllElevationOptions;
	sizing?: AllSizeOptions;
	position?: Positions;
	animation?: "slide";
}

export interface DrawerContentProps extends DrawerProps {
	drawerId?: string;
	classBase?: string;
	innerClassBase?: string;
	classDefaults?: any;
}
