import { LineLoaderProps } from "../LineLoader/LineLoader.types";

export interface CollapseSubComponentProps {
	className?: string;
	children?: React.ReactNode;
}

export interface CollapseLoaderSubComponentProps extends LineLoaderProps {
	children?: React.ReactNode;
}

export interface CollapseToggleSubComponentProps extends CollapseSubComponentProps {
	collapseIndicator?: boolean;
	collapseIndicatorComponent?: React.ReactNode;
}

export interface CollapseContentSubComponentProps extends CollapseSubComponentProps {
	isCollapsed?: boolean;
	animation?: "collapse-n-fade" | "collapse" | null;
}
