import { PigmentOptions } from "../../helpers/global.types";
import { LineLoaderProps } from "../LineLoader/LineLoader.types";

interface ListGroupSubComponentGlobalsProps {
	className?: string;
	children?: React.ReactNode;
}
interface ListGroupSubComponentProps extends ListGroupSubComponentGlobalsProps {
	as?: React.ElementType;
	contrast?: boolean;
	pigment?: PigmentOptions;
}

type ExtendedListGroupLoaderProps = ListGroupSubComponentGlobalsProps & LineLoaderProps;
export interface ListGroupLoaderSubComponentProps extends ExtendedListGroupLoaderProps {}

export interface ListGroupHeaderSubComponentProps extends ListGroupSubComponentProps {
	align?: "left" | "center" | "right";
}

export interface ListGroupItemSubComponentProps extends ListGroupSubComponentProps {
	active?: boolean;
}

export interface ListGroupCollapseSubComponentProps extends ListGroupSubComponentProps {
	onToggle?: ({}) => void;
	isCollapsed?: boolean;
	nestedCollapseIndent?: boolean;
}

export interface ListGroupCollapseToggleSubComponentProps extends ListGroupSubComponentGlobalsProps {
	onToggle?: ({}) => void;
	isCollapsed?: boolean;
	collapseIndicator?: boolean;
	collapseIndicatorComponent?: React.ReactNode;
}

export interface ListGroupCollapseContentSubComponentProps extends ListGroupSubComponentGlobalsProps {
	isCollapsed?: boolean;
}
