import { CnCh, PigmentOptions, RippleEffect, SyntheticKeyboardControls } from "../../helpers/global.types";
import { LineLoaderProps } from "../LineLoader/LineLoader.types";

type ExtraCollapseLoaderSubComponentProps = CnCh & LineLoaderProps;

export interface CollapseLoaderSubComponentProps extends ExtraCollapseLoaderSubComponentProps {}

type ExtraCollapseToggleSubComponentProps = CnCh & SyntheticKeyboardControls & RippleEffect;
export interface CollapseToggleSubComponentProps extends ExtraCollapseToggleSubComponentProps {
	pigment?: PigmentOptions;
	isCollapsed?: boolean;
	isAccordionChild?: boolean;
	scrollIntoViewOnToggle?: boolean;
	collapseIndicator?: boolean;
	collapseIndicatorComponent?: React.ReactNode;
	onKeyboardToggle?: (isCollapsed: boolean) => void;
}

export type CollapseAnimation = "collapse-n-fade" | "collapse" | null;
export interface CollapseContentSubComponentProps extends CnCh {
	isCollapsed?: boolean;
	animation?: CollapseAnimation;
}
