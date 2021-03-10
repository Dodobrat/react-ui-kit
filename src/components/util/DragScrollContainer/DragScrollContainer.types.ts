import { CnCh } from "../../../helpers/global.types";

type ExtraDragScrollContainerProps = CnCh;

// Auto-Generated
export interface DragScrollContainerProps extends ExtraDragScrollContainerProps {
	horizontal?: boolean;
	vertical?: boolean;
	onScroll?: (scrollLeft: number, scrollTop: number, scrollWidth: number, scrollHeight: number) => void;
	activationDistance?: number;
	indicatorClassName?: string;
}
