import { HTMLAttributes } from "react";
import {
	CnCh,
	AllFlexAlignOptions,
	AllFlexJustifyOptions,
	AllFlexDirectionOptions,
	AllFlexWrapOptions,
	AllSizeOptions,
	ElemType,
} from "../../../helpers/global.types";

// Auto-Generated

type FlexExtraProps = CnCh & ElemType & HTMLAttributes<unknown>;
export interface FlexProps extends FlexExtraProps {
	spacingX?: AllSizeOptions;
	spacingY?: AllSizeOptions;
	disableNegativeSpace?: boolean;
	//-----
	align?: AllFlexAlignOptions;
	justify?: AllFlexJustifyOptions;
	direction?: AllFlexDirectionOptions;
	wrap?: AllFlexWrapOptions;
}
