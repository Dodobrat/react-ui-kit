import { CnCh } from "../../../helpers/global.types";

type ExtraInputProps = React.InputHTMLAttributes<HTMLInputElement> & CnCh;
// Auto-Generated
export interface InputProps extends ExtraInputProps {
	labelClassName?: string;
	fieldClassName?: string;
	hintClassName?: string;
	label: string | React.ReactNode | null;
	invisibleLabel?: boolean;
	hintMsg?: string | React.ReactNode | null;
	valid?: boolean | null;
	fieldSize?: "sm" | "md" | "lg" | "xl";
	round?: boolean;
	pigment?: "primary" | "secondary" | "success" | "warning" | "info" | "danger" | "light" | "dark";
	modern?: boolean;
	loading?: boolean;
}
