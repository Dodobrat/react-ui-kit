import { CnCh, EssentialCustomizationProps, EssentialLoadingProps } from "../../helpers/global.types";

type ExtraCardProps = EssentialCustomizationProps & CnCh & EssentialLoadingProps;

// Auto-Generated
export interface CardProps extends ExtraCardProps {
	imgPosition?: "top" | "bottom" | "left" | "right";
	allowOverflow?: boolean;
}
