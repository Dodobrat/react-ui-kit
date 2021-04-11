import React from "react";
import { CnCh, ElemType, AllFlexGridColOptions } from "../../../helpers/global.types";

type ExtraFlexSubComponentProps = CnCh & ElemType;
export interface FlexSubComponentProps extends ExtraFlexSubComponentProps {
	order?: number;
	style?: React.CSSProperties;
	col?: AllFlexGridColOptions;
	offset?: AllFlexGridColOptions;
	offsetRight?: AllFlexGridColOptions;
}
