import React from "react";

export type BreakpointOptions = "base" | "xs" | "sm" | "md" | "lg" | "xl";
//Customization Types
//----------
export type PigmentOptions = "none" | "default" | "primary" | "secondary" | "success" | "warning" | "info" | "danger" | null;
export type PigmentResponsiveOptions = {
	[bp in BreakpointOptions]?: PigmentOptions;
};
export type AllPigmentOptions = PigmentResponsiveOptions | PigmentOptions;
//----------
export type ElevationOptions = "none" | "subtle" | "light" | "medium" | "strong" | "interstellar";
export type ElevationResponsiveOptions = {
	[bp in BreakpointOptions]?: ElevationOptions;
};
export type AllElevationOptions = ElevationResponsiveOptions | ElevationOptions;
//----------
export type FlavorOptions = "default" | "flat" | "rounded" | "round" | "square";
export type FlavorResponsiveOptions = {
	[bp in BreakpointOptions]?: FlavorOptions;
};
export type AllFlavorOptions = FlavorResponsiveOptions | FlavorOptions;
//----------
export type SizeOptions = "xs" | "sm" | "md" | "lg" | "xl";
export type SizeResponsiveOptions = {
	[bp in BreakpointOptions]?: SizeOptions;
};
export type AllSizeOptions = SizeResponsiveOptions | SizeOptions;
//----------
export type ContainerSizeOptions = "xs" | "sm" | "md" | "lg" | "xl" | "fhd";
export type ContainerSizeResponsiveOptions = {
	[bp in BreakpointOptions]?: ContainerSizeOptions;
};
export type AllContainerSizeOptions = ContainerSizeResponsiveOptions | ContainerSizeOptions;
//----------
export type PortalSizeOptions = "xs" | "sm" | "md" | "lg" | "xl" | "fullscreen";
export type PortalSizeResponsiveOptions = {
	[bp in BreakpointOptions]?: PortalSizeOptions;
};
export type AllPortalSizeOptions = PortalSizeResponsiveOptions | PortalSizeOptions;
//----------
//FLEX
//----------
export type FlexAlignOptions = "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
export type FlexAlignResponsiveOptions = {
	[bp in BreakpointOptions]?: FlexAlignOptions;
};
export type AllFlexAlignOptions = FlexAlignResponsiveOptions | FlexAlignOptions;
//----------
export type FlexJustifyOptions = "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
export type FlexJustifyResponsiveOptions = {
	[bp in BreakpointOptions]?: FlexJustifyOptions;
};
export type AllFlexJustifyOptions = FlexJustifyResponsiveOptions | FlexJustifyOptions;
//----------
export type FlexDirectionOptions = "row" | "row-reverse" | "column" | "column-reverse";
export type FlexDirectionResponsiveOptions = {
	[bp in BreakpointOptions]?: FlexDirectionOptions;
};
export type AllFlexDirectionOptions = FlexDirectionResponsiveOptions | FlexDirectionOptions;
//----------
export type FlexWrapOptions = "nowrap" | "wrap" | "wrap-reverse";
export type FlexWrapResponsiveOptions = {
	[bp in BreakpointOptions]?: FlexWrapOptions;
};
export type AllFlexWrapOptions = FlexWrapResponsiveOptions | FlexWrapOptions;
//----------
//FLEX COL
//----------
export type FlexGridColOptions = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "auto";
export type FlexGridColResponsiveOptions = {
	[bp in BreakpointOptions]?: FlexGridColOptions;
};
export type AllFlexGridColOptions = FlexGridColResponsiveOptions | FlexGridColOptions;
//Other
export type Positions = "top" | "bottom" | "left" | "right";
export type AllPositions =
	| "top-left"
	| "top-center"
	| "top-right"
	| "right-top"
	| "right-center"
	| "right-bottom"
	| "bottom-left"
	| "bottom-center"
	| "bottom-right"
	| "left-top"
	| "left-center"
	| "left-bottom";
export type StartEnd = "start" | "end";
export type ProgressLabelValue = "%" | "count" | "count + %";

//Render As
export interface ElemType {
	as?: React.ElementType;
}

// General
export interface CnCh {
	className?: string;
	children?: React.ReactNode;
}

//Customization Interfaces
export interface AllEssentialCustomizationProps {
	pigment?: AllPigmentOptions;
	elevation?: AllElevationOptions;
	flavor?: AllFlavorOptions;
}
export interface AllCustomizationProps extends AllEssentialCustomizationProps {
	size?: AllSizeOptions;
}

export interface PigmentColorProps {
	pigmentColor?: AllPigmentOptions;
}

export interface RippleEffect {
	withRipple?: boolean;
	onPointerDown?: React.PointerEventHandler;
}

type EssentialInputPropsExtensions = AllCustomizationProps & CnCh;
export interface EssentialInputProps extends EssentialInputPropsExtensions {
	seamless?: boolean;
	scrollOnFocus?: boolean;
}

export interface EssentialLoadingProps {
	disableWhileLoading?: boolean;
	isLoading?: boolean;
}

export interface LoadingProps extends EssentialLoadingProps {
	loadingComponent?: boolean | JSX.Element | React.ReactNode;
}

//Accessability
export interface SyntheticKeyboardControls {
	onKeyDown?: React.KeyboardEventHandler<unknown>;
}

//Component specific duplicates
export interface Progress {
	className?: string;
	min?: number;
	max?: number;
	value?: number;
	labeled?: boolean;
	labelValue?: ProgressLabelValue;
	labelAlwaysVisible?: boolean;
	decimals?: number;
	flavor?: AllFlavorOptions;
	pigment?: PigmentOptions;
	withTrack?: boolean;
}

export interface PortalComponent extends CnCh {
	innerClassName?: string;
	onClose: () => void;
	withFocusLock?: boolean;
	keyboard?: boolean;
	backdrop?: boolean | "static";
	bodyScrollDisable?: boolean;
	isOpen?: boolean;
}
