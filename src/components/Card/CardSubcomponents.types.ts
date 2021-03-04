import { CnCh } from "../../helpers/global.types";
import { LineLoaderProps } from "../LineLoader/LineLoader.types";

type ExtendedCardLoaderProps = CnCh & LineLoaderProps;
export interface CardLoaderSubComponentProps extends ExtendedCardLoaderProps {}

export interface CardHeaderSubComponentProps extends CnCh {
	actions?: React.ReactNode;
}

export interface CardImageSubComponentProps extends CnCh {
	imgLink?: string | null;
	imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
}
