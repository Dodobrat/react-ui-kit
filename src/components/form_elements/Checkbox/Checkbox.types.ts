import { EssentialInputProps, LoadingProps } from "../../../helpers/global.types";

type ExtraCheckboxComponentProps = React.InputHTMLAttributes<HTMLInputElement> & EssentialInputProps;

type ExtraCheckboxProps = ExtraCheckboxComponentProps & LoadingProps;
// Auto-Generated
export interface CheckboxProps extends ExtraCheckboxProps {
	inputClassName?: string;
	suffix?: React.ReactNode;
	preffix?: React.ReactNode;
	onFocus?: React.FocusEventHandler<HTMLInputElement>;
	onBlur?: React.FocusEventHandler<HTMLInputElement>;
	innerRef?: React.MutableRefObject<any>;
}

export interface CheckboxComponentProps extends ExtraCheckboxComponentProps {
	[key: string]: any;
}
