import { CnCh, EssentialCustomizationProps, EssentialLoadingProps, SizeOptions } from "../../helpers/global.types";

type ExtraTableProps = CnCh & EssentialCustomizationProps & EssentialLoadingProps;
// Auto-Generated
export interface TableProps extends ExtraTableProps {
	innerClassName?: string;
	allowOverflow?: boolean;
	condensed?: boolean;
	bordered?: boolean;
	size?: SizeOptions;
	innerRef?: React.MutableRefObject<any>;
}
