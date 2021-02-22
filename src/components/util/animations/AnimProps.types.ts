export interface AnimProps {
	in: boolean;
	classNames?: string;
	className?: string;
	unmountOnExit?: boolean;
	timeout?: number;
	onEnter?: any;
	onEntering?: any;
	onEntered?: any;
	children?: React.ReactNode;
}
