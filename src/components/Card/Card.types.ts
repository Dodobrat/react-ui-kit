import { CnCh, Directions, EssentialCustomizationProps, EssentialLoadingProps } from "../../helpers/global.types";

type ExtraCardProps = EssentialCustomizationProps & CnCh & EssentialLoadingProps;

// Auto-Generated
export interface CardProps extends ExtraCardProps {
	imgPosition?: Directions;
	allowOverflow?: boolean;
}
