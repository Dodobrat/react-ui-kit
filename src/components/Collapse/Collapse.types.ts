import { CnCh, EssentialCustomizationProps } from "../../helpers/global.types";

type ExtraCollapseProps = EssentialCustomizationProps & CnCh;

// Auto-Generated
export interface CollapseProps extends ExtraCollapseProps {
	onToggle?: (isCollapsed: boolean) => void;
	isCollapsed?: boolean;
	allowOverflow?: boolean;
	scrollIntoViewOnToggle?: boolean;
	disableWhileLoading?: boolean;
	loading?: boolean;
}
