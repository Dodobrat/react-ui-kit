import { EssentialInputProps, LoadingProps } from "../../../helpers/global.types";

type ExtraSwitchComponentProps = React.InputHTMLAttributes<HTMLInputElement> & EssentialInputProps;

type ExtraSwitchProps = ExtraSwitchComponentProps & LoadingProps;
// Auto-Generated
export interface SwitchProps extends ExtraSwitchProps {
	inputClassName?: string;
	suffix?: React.ReactNode;
	preffix?: React.ReactNode;
	onFocus?: React.FocusEventHandler<HTMLInputElement>;
	onBlur?: React.FocusEventHandler<HTMLInputElement>;
	innerRef?: React.MutableRefObject<any>;
}

export interface SwitchComponentProps extends ExtraSwitchComponentProps {
	[key: string]: any;
}
