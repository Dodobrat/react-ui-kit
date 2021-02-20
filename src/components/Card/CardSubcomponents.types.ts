import { LineLoaderProps } from "../LineLoader/LineLoader.types";

export interface CardSubComponentProps {
	className?: string;
	children?: React.ReactNode;
}

type ExtendedCardLoaderProps = CardSubComponentProps & LineLoaderProps;
export interface CardLoaderSubComponentProps extends ExtendedCardLoaderProps {}

export interface CardHeaderSubComponentProps extends CardSubComponentProps {
	actions?: React.ReactNode;
}

export interface CardImageSubComponentProps extends CardSubComponentProps {
	imgLink?: string | null;
	imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
}
