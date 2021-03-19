import { CnCh, EssentialCustomizationProps, EssentialLoadingProps } from "../../helpers/global.types";

type ExtraTabsProps = CnCh & EssentialCustomizationProps & EssentialLoadingProps;
// Auto-Generated
export interface TabsProps extends ExtraTabsProps {
	allowOverflow?: boolean;
	activeTab?: number;
	onTabSelect?: (tab: number) => void;
	orientation?: "horizontal" | "vertical";
}
