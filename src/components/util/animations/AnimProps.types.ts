export interface AnimProps {
	in: boolean;
	classNames?: string;
	unmountOnExit?: boolean;
	timeout?: number;
	onEnter?: any;
	onEntering?: any;
	onEntered?: any;
	children?: React.ReactNode;
}

export interface SlideInProps extends AnimProps {
	position: "left" | "top" | "right" | "bottom";
}