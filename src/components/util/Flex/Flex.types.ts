import { CnCh, SizeOptions, FlexAlign, FlexJustify, FlexDirection, FlexWrap } from "../../../helpers/global.types";

interface FlexSpacingConfig {
	base?: SizeOptions;
	xs?: SizeOptions;
	sm?: SizeOptions;
	md?: SizeOptions;
	lg?: SizeOptions;
	xl?: SizeOptions;
}
interface FlexAlignConfig {
	base?: FlexAlign;
	xs?: FlexAlign;
	sm?: FlexAlign;
	md?: FlexAlign;
	lg?: FlexAlign;
	xl?: FlexAlign;
}
interface FlexJustifyConfig {
	base?: FlexJustify;
	xs?: FlexJustify;
	sm?: FlexJustify;
	md?: FlexJustify;
	lg?: FlexJustify;
	xl?: FlexJustify;
}
interface FlexDirectionConfig {
	base?: FlexDirection;
	xs?: FlexDirection;
	sm?: FlexDirection;
	md?: FlexDirection;
	lg?: FlexDirection;
	xl?: FlexDirection;
}
interface FlexWrapConfig {
	base?: FlexWrap;
	xs?: FlexWrap;
	sm?: FlexWrap;
	md?: FlexWrap;
	lg?: FlexWrap;
	xl?: FlexWrap;
}

// Auto-Generated
export interface FlexProps extends CnCh {
	spacingX?: FlexSpacingConfig | SizeOptions;
	spacingY?: FlexSpacingConfig | SizeOptions;
	align?: FlexAlignConfig | FlexAlign;
	justify?: FlexJustifyConfig | FlexJustify;
	direction?: FlexDirectionConfig | FlexDirection;
	wrap?: FlexWrapConfig | FlexWrap;
	disableNegativeSpace?: boolean;
}
