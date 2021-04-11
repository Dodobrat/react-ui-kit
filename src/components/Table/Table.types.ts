import React from "react";
import { AllCustomizationProps, CnCh, EssentialLoadingProps } from "../../helpers/global.types";

type ExtraTableProps = CnCh & AllCustomizationProps & EssentialLoadingProps;
// Auto-Generated
export interface TableProps extends ExtraTableProps {
	innerClassName?: string;
	condensed?: boolean;
	bordered?: boolean;
	innerRef?: React.MutableRefObject<any>;
}
