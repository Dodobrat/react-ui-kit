export interface CardSubComponentProps {
	className?: string;
	children?: React.ReactNode;
}

export interface CardLoaderSubComponentProps extends CardSubComponentProps {
	modern?: boolean;
	sticky?: boolean;
	pigment?: "primary" | "secondary" | "success" | "warning" | "info" | "danger" | "light" | "dark" | null;
}

export interface CardImageSubComponentProps extends CardSubComponentProps {
	imgLink?: string | null;
	imgLinkAlt?: string;
}
