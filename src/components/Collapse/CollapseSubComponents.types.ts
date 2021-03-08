import { CnCh, SyntheticKeyboardControls } from "../../helpers/global.types";
import { LineLoaderProps } from "../LineLoader/LineLoader.types";

type ExtraCollapseLoaderSubComponentProps = CnCh & LineLoaderProps;

export interface CollapseLoaderSubComponentProps extends ExtraCollapseLoaderSubComponentProps {}

type ExtraCollapseToggleSubComponentProps = CnCh & SyntheticKeyboardControls;
export interface CollapseToggleSubComponentProps extends ExtraCollapseToggleSubComponentProps {
	isCollapsed?: boolean;
	isAccordionChild?: boolean;
	scrollIntoViewOnToggle?: boolean;
	collapseIndicator?: boolean;
	collapseIndicatorComponent?: React.ReactNode;
	onKeyboardToggle?: (isCollapsed: boolean) => void;
}

export interface CollapseContentSubComponentProps extends CnCh {
	isCollapsed?: boolean;
	animation?: "collapse-n-fade" | "collapse" | null;
}
