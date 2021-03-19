import { CnCh, EssentialCustomizationProps, EssentialLoadingProps } from "../../helpers/global.types";

type ExtraCollapseProps = EssentialCustomizationProps & CnCh & EssentialLoadingProps;

// Auto-Generated
export interface CollapseProps extends ExtraCollapseProps {
	onToggle?: (isCollapsed: boolean) => void;
	isCollapsed?: boolean;
	allowOverflow?: boolean;
	scrollIntoViewOnToggle?: boolean;
}
