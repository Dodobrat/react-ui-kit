import { EssentialInputProps, LoadingProps } from "../../../helpers/global.types";

type ExtraCheckableComponentProps = React.InputHTMLAttributes<HTMLInputElement> & EssentialInputProps;

type ExtraCheckableProps = ExtraCheckableComponentProps & EssentialCheckablesProps & LoadingProps;
// Auto-Generated

export interface EssentialCheckablesProps {
	inputClassName?: string;
	suffix?: React.ReactNode;
	preffix?: React.ReactNode;
	onFocus?: React.FocusEventHandler<HTMLInputElement>;
	onBlur?: React.FocusEventHandler<HTMLInputElement>;
	innerRef?: React.MutableRefObject<any>;
}

export interface CheckableProps extends ExtraCheckableProps {
	typeClass?: string;
}

export interface CheckableComponentProps extends ExtraCheckableComponentProps {
	[key: string]: any;
}
