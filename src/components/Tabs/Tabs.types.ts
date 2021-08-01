import { AllEssentialCustomizationProps, CnCh, EssentialLoadingProps } from "../../helpers/global.types";

type ExtraTabsProps = CnCh & AllEssentialCustomizationProps & EssentialLoadingProps;
// Auto-Generated
export interface TabsProps extends ExtraTabsProps {
	contentClassName?: string;
	withRipple?: boolean;
	onTabPointerDown?: React.PointerEventHandler;
	activeTab?: number;
	onTabSelect?: (tab: number) => void;
	orientation?: "horizontal" | "vertical";
}
