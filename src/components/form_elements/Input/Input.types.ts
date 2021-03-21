import React from "react";
import { EssentialInputProps, LoadingProps } from "../../../helpers/global.types";

type ExtraInputComponentProps = React.InputHTMLAttributes<HTMLInputElement> & EssentialInputProps;

type ExtraInputProps = ExtraInputComponentProps & LoadingProps;

// Auto-Generated
export interface InputProps extends ExtraInputProps {
	inputClassName?: string;
	value?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	onFocus?: React.FocusEventHandler<HTMLInputElement>;
	onBlur?: React.FocusEventHandler<HTMLInputElement>;
	isClearable?: boolean;
	clearableComponent?: React.ReactNode;
	suffix?: React.ReactNode;
	preffix?: React.ReactNode;
	innerRef?: React.MutableRefObject<any>;
	withPasswordReveal?: boolean;
	passwordRevealComponent?: (visible: boolean) => React.ReactNode;
}

export interface InputComponentProps extends ExtraInputComponentProps {
	[key: string]: any;
}
