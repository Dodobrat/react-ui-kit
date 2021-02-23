import { LineLoaderProps } from "../LineLoader/LineLoader.types";

export interface CollapseSubComponentProps {
	className?: string;
	children?: React.ReactNode;
	isCollapsed?: boolean;
}

export interface CollapseLoaderSubComponentProps extends LineLoaderProps {
	children?: React.ReactNode;
}

export interface CollapseToggleSubComponentProps extends CollapseSubComponentProps {
	onToggle?: (isCollapsed: boolean) => void;
	collapseIndicator?: boolean;
	collapseIndicatorComponent?: React.ReactNode;
}

export interface CollapseContentSubComponentProps extends CollapseSubComponentProps {
	animation?: "collapse-n-fade" | "collapse" | null;
}
