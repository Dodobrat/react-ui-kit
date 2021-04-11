import { AllPigmentOptions, CnCh, ElemType, RippleEffect, SyntheticKeyboardControls } from "../../helpers/global.types";
import { CollapseAnimation } from "../Collapse/CollapseSubComponents.types";
import { LineLoaderProps } from "../LineLoader/LineLoader.types";

type ExtraListGroupSubComponentProps = ElemType & CnCh;
interface ListGroupSubComponentProps extends ExtraListGroupSubComponentProps {
	pigment?: AllPigmentOptions;
}

type ExtendedListGroupLoaderProps = CnCh & LineLoaderProps;

export interface ListGroupLoaderSubComponentProps extends ExtendedListGroupLoaderProps {}

export interface ListGroupHeaderSubComponentProps extends ListGroupSubComponentProps {}

export interface ListGroupItemSubComponentProps extends ListGroupSubComponentProps {
	active?: boolean;
}

export interface ListGroupCollapseSubComponentProps extends ListGroupSubComponentProps {
	onToggle?: (isCollapsed: boolean) => void;
	isCollapsed?: boolean;
	nestedCollapseIndent?: boolean;
}

type ExtraListGroupCollapseToggleSubComponentProps = CnCh & SyntheticKeyboardControls & RippleEffect;

export interface ListGroupCollapseToggleSubComponentProps extends ExtraListGroupCollapseToggleSubComponentProps {
	isCollapsed?: boolean;
	onKeyboardToggle?: (isCollapsed: boolean) => void;
	collapseIndicator?: boolean;
	collapseIndicatorComponent?: React.ReactNode;
}

export interface ListGroupCollapseContentSubComponentProps extends CnCh {
	isCollapsed?: boolean;
	animation?: CollapseAnimation;
}
