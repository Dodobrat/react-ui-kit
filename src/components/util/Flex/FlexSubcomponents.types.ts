import React from "react";
import { CnCh, FlexAlign, SizeOptions } from "../../../helpers/global.types";

interface FlexGridColConfig {
	xs?: number;
	sm?: number;
	md?: number;
	lg?: number;
	xl?: number;
}

export interface FlexSubComponentProps extends CnCh {
	order?: number;
	alignSelf?: FlexAlign | "auto";
	style?: React.CSSProperties;
	col?: FlexGridColConfig | number | "auto";
	offset?: FlexGridColConfig | number;
	hide?: SizeOptions | boolean;
}
