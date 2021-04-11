import { AllCustomizationProps, CnCh, PigmentColorProps } from "../../helpers/global.types";

type ExtraBreadcrumbsProps = AllCustomizationProps & PigmentColorProps & CnCh;
// Auto-Generated
export interface BreadcrumbsProps extends ExtraBreadcrumbsProps {
	contained?: boolean;
	separator?: JSX.Element | string | null;
}
