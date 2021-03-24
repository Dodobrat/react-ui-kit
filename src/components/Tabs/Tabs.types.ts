import { CnCh, EssentialCustomizationProps, EssentialLoadingProps } from "../../helpers/global.types";

type ExtraTabsProps = CnCh & EssentialCustomizationProps & EssentialLoadingProps;
// Auto-Generated
export interface TabsProps extends ExtraTabsProps {
	withRipple?: boolean;
	onTabPointerDown?: React.PointerEventHandler;
	allowOverflow?: boolean;
	activeTab?: number;
	onTabSelect?: (tab: number) => void;
	orientation?: "horizontal" | "vertical";
}
