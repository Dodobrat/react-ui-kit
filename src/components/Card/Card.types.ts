import { CnCh, EssentialCustomizationProps } from "../../helpers/global.types";

type ExtraCardProps = EssentialCustomizationProps & CnCh;

// Auto-Generated
export interface CardProps extends ExtraCardProps {
	imgPosition?: "top" | "bottom" | "left" | "right";
	allowOverflow?: boolean;
	disableWhileLoading?: boolean;
	loading?: boolean;
}
