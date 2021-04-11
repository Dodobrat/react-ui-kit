import {
	CnCh,
	AllFlexAlignOptions,
	AllFlexJustifyOptions,
	AllFlexDirectionOptions,
	AllFlexWrapOptions,
	AllSizeOptions,
} from "../../../helpers/global.types";

// Auto-Generated
export interface FlexProps extends CnCh {
	spacingX?: AllSizeOptions;
	spacingY?: AllSizeOptions;
	disableNegativeSpace?: boolean;
	//-----
	align?: AllFlexAlignOptions;
	justify?: AllFlexJustifyOptions;
	direction?: AllFlexDirectionOptions;
	wrap?: AllFlexWrapOptions;
}
