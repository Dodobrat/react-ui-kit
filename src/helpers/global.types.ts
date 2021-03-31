import React from "react";

//Customization Types
export type PigmentOptions = "primary" | "secondary" | "success" | "warning" | "info" | "danger";
export type ElevationOptions = "none" | "subtle" | "light" | "medium" | "strong" | "interstellar";
export type SizeOptions = "xs" | "sm" | "md" | "lg" | "xl";
export type AllSizeOptions = "xs" | "sm" | "md" | "lg" | "xl" | "fhd";
//Flex
export type FlexAlign = "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
export type FlexJustify = "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
export type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
export type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";
//Other
export type Positions = "top" | "bottom" | "left" | "right";
export type StartEnd = "start" | "end";
export type HorizontalAlign = "left" | "center" | "right";
export type ProgressLabelValue = "%" | "count" | "count + %";
type EssentialInputPropsExtensions = CustomizationProps & CnCh;

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
export interface EssentialCustomizationProps {
	pigment?: PigmentOptions;
	elevation?: ElevationOptions;
	flat?: boolean;
}

export interface CustomizationProps extends EssentialCustomizationProps {
	size?: SizeOptions;
	rounded?: boolean;
}
export interface RippleEffect {
	withRipple?: boolean;
	onPointerDown?: React.PointerEventHandler;
}

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
	flat?: boolean;
	pigment?: PigmentOptions;
	withTrack?: boolean;
}

export interface PortalComponent extends CnCh {
	innerClassName?: string;
	onClose: () => void;
	withFocusLock?: boolean;
	keyboard?: boolean;
	backdrop?: boolean | "static";
	size?: SizeOptions;
	bodyScrollDisable?: boolean;
	isOpen?: boolean;
}
