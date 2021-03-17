import { CnCh, ElemType, PigmentOptions, SyntheticKeyboardControls } from "../../helpers/global.types";
import { LineLoaderProps } from "../LineLoader/LineLoader.types";

type ExtraListGroupSubComponentProps = ElemType & CnCh;
interface ListGroupSubComponentProps extends ExtraListGroupSubComponentProps {
	pigment?: PigmentOptions;
}

type ExtendedListGroupLoaderProps = CnCh & LineLoaderProps;

export interface ListGroupLoaderSubComponentProps extends ExtendedListGroupLoaderProps {}

export interface ListGroupHeaderSubComponentProps extends ListGroupSubComponentProps {
	align?: "left" | "center" | "right";
}

export interface ListGroupItemSubComponentProps extends ListGroupSubComponentProps {
	active?: boolean;
}

export interface ListGroupCollapseSubComponentProps extends ListGroupSubComponentProps {
	onToggle?: (isCollapsed: boolean) => void;
	isCollapsed?: boolean;
	nestedCollapseIndent?: boolean;
}

type ExtraListGroupCollapseToggleSubComponentProps = CnCh & SyntheticKeyboardControls;

export interface ListGroupCollapseToggleSubComponentProps extends ExtraListGroupCollapseToggleSubComponentProps {
	isCollapsed?: boolean;
	onKeyboardToggle?: (isCollapsed: boolean) => void;
	collapseIndicator?: boolean;
	collapseIndicatorComponent?: React.ReactNode;
}

export interface ListGroupCollapseContentSubComponentProps extends CnCh {
	isCollapsed?: boolean;
	animation?: "collapse-n-fade" | "collapse" | null;
}
