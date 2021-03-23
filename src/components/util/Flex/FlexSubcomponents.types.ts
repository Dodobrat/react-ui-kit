import React from "react";
import { CnCh, SizeOptions } from "../../../helpers/global.types";

interface FlexGridColConfig {
	base?: number;
	xs?: number;
	sm?: number;
	md?: number;
	lg?: number;
	xl?: number;
}

export interface FlexSubComponentProps extends CnCh {
	order?: number;
	style?: React.CSSProperties;
	col?: FlexGridColConfig | number | "auto";
	keepGridOnSmallest?: boolean;
	offset?: FlexGridColConfig | number;
	hide?: SizeOptions | boolean;
}
