export interface CardSubComponentProps {
	className?: string;
	children?: React.ReactNode;
}

export interface CardLoaderSubComponentProps extends CardSubComponentProps {
	sticky?: boolean;
	modern?: boolean;
	pigment?: "primary" | "secondary" | "success" | "warning" | "info" | "danger" | "light" | "dark";
}

export interface CardHeaderSubComponentProps extends CardSubComponentProps {
	onClose?: () => void | null;
	closeBtnComponent?: JSX.Element;
}

export interface CardImageSubComponentProps extends CardSubComponentProps {
	imgLink?: string | null;
	imgLinkAlt?: string;
}
