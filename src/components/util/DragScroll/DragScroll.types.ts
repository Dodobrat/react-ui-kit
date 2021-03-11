import React from "react";
import { CnCh } from "../../../helpers/global.types";

type ExtraDragScrollProps = CnCh;

// Auto-Generated
export interface DragScrollProps extends ExtraDragScrollProps {
	horizontal?: boolean;
	vertical?: boolean;
	onScroll?: (scrollLeft: number, scrollTop: number, scrollWidth: number, scrollHeight: number) => void;
	activationDistance?: number;
	indicatorClassName?: string;
	indicatorComponent?: React.ReactNode;
}
