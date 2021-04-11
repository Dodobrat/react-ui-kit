import { CnCh, FlexJustifyOptions } from "../../helpers/global.types";
import { LineLoaderProps } from "../LineLoader/LineLoader.types";

type ExtendedCardLoaderProps = CnCh & LineLoaderProps;
export interface CardLoaderSubComponentProps extends ExtendedCardLoaderProps {}

export interface CardHeaderSubComponentProps extends CnCh {
	actions?: React.ReactNode;
}
export interface CardFooterSubComponentProps extends CnCh {
	justify?: FlexJustifyOptions;
}

export interface CardImageSubComponentProps extends CnCh {
	imgLink?: string | null;
	imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
}
