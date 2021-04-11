import { AllEssentialCustomizationProps, CnCh, EssentialLoadingProps } from "../../helpers/global.types";

type ExtraCollapseProps = AllEssentialCustomizationProps & CnCh & EssentialLoadingProps;

// Auto-Generated
export interface CollapseProps extends ExtraCollapseProps {
	onToggle?: (isCollapsed: boolean) => void;
	isCollapsed?: boolean;
	scrollIntoViewOnToggle?: boolean;
}
