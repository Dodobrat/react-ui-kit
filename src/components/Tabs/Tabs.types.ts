import { CnCh, EssentialCustomizationProps } from "../../helpers/global.types";

type ExtraTabsProps = CnCh & EssentialCustomizationProps;
// Auto-Generated
export interface TabsProps extends ExtraTabsProps {
	allowOverflow?: boolean;
	disableWhileLoading?: boolean;
	loading?: boolean;
	activeTab?: number;
	onTabSelect?: (tab: number) => void;
	orientation?: "horizontal" | "vertical";
}
