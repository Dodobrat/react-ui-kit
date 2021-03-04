import { CnCh } from "../../helpers/global.types";
import { LineLoaderProps } from "../LineLoader/LineLoader.types";

type ExtraCollapseLoaderSubComponentProps = CnCh & LineLoaderProps;

export interface CollapseLoaderSubComponentProps extends ExtraCollapseLoaderSubComponentProps {}

export interface CollapseToggleSubComponentProps extends CnCh {
	collapseIndicator?: boolean;
	collapseIndicatorComponent?: React.ReactNode;
}

export interface CollapseContentSubComponentProps extends CnCh {
	isCollapsed?: boolean;
	animation?: "collapse-n-fade" | "collapse" | null;
}
