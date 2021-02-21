export interface ListGroupSubComponentProps {
	className?: string;
	as?: HTMLElementTagNameMap;
	pigment?: "primary" | "secondary" | "success" | "warning" | "info" | "danger" | "light" | "dark";
	children?: React.ReactNode;
}

export interface ListGroupHeaderSubComponentProps extends ListGroupSubComponentProps {
	align?: "left" | "center" | "right";
}

export interface ListGroupItemSubComponentProps extends ListGroupSubComponentProps {
	active?: boolean;
}

export interface ListGroupCollapseSubComponentProps extends ListGroupSubComponentProps {
	onToggle?: ({}) => void;
	initial?: boolean;
	nestedCollapseIndent?: boolean;
}

export interface ListGroupCollapseToggleSubComponentProps {
	className?: string;
	onToggle?: ({}) => void;
	collapsed?: boolean;
	collapseIndicator?: boolean;
	collapseIndicatorComponent?: React.ReactNode;
	children?: React.ReactNode;
}

export interface ListGroupCollapseContentSubComponentProps {
	className?: string;
	collapsed?: boolean;
	children?: React.ReactNode;
}