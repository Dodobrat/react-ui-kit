export type PigmentOptions = "primary" | "secondary" | "success" | "warning" | "info" | "danger";
export type ElevationOptions = "none" | "subtle" | "light" | "medium" | "strong" | "interstellar";
export type SizeOptions = "xs" | "sm" | "md" | "lg" | "xl";
export type AllSizeOptions = "xs" | "sm" | "md" | "lg" | "xl" | "fhd";
export type FlexAlign = "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
export type FlexJustify = "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
export type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
export type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";

export interface CnCh {
	className?: string;
	children?: React.ReactNode;
}

export interface ElemType {
	as?: React.ElementType;
}

export interface SyntheticKeyboardControls {
	onKeyDown?: React.KeyboardEventHandler<unknown>;
}

export interface EssentialCustomizationProps {
	pigment?: PigmentOptions;
	elevation?: ElevationOptions;
	flat?: boolean;
}

export interface CustomizationProps extends EssentialCustomizationProps {
	size?: SizeOptions;
	rounded?: boolean;
}

export interface Progress {
	className?: string;
	min?: number;
	max?: number;
	value?: number;
	labeled?: boolean;
	labelValue?: "%" | "count" | "count + %";
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
