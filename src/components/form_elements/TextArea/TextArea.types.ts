import { EssentialInputProps, LoadingProps } from "../../../helpers/global.types";

type ExtraTextAreaComponentProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & EssentialInputProps;

type ExtraInputProps = ExtraTextAreaComponentProps & LoadingProps;

// Auto-Generated
export interface TextAreaProps extends ExtraInputProps {
	inputClassName?: string;
	value?: string;
	onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
	onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
	onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
	isClearable?: boolean;
	clearableComponent?: React.ReactNode;
	clearableComponentLabel?: React.ReactNode;
	withCharacterCount?: boolean;
	charactersComponent?: (length: number, maxLength: number) => React.ReactNode;
	innerRef?: React.MutableRefObject<any>;
}

export interface TextAreaComponentProps extends ExtraTextAreaComponentProps {
	[key: string]: any;
}
