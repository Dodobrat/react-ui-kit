import React from "react";
import { CnCh, CustomizationProps, LoadingProps } from "../../../helpers/global.types";

type ExtraInputProps = React.InputHTMLAttributes<HTMLInputElement> & CnCh & CustomizationProps & LoadingProps;

type ExtraInputComponentProps = React.InputHTMLAttributes<HTMLInputElement> & CustomizationProps;
// Auto-Generated
export interface InputProps extends ExtraInputProps {
	inputClassName?: string;
	value?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	isClearable?: boolean;
	clearableComponent?: React.ReactNode;
	suffix?: React.ReactNode;
	preffix?: React.ReactNode;
	scrollOnFocus?: boolean;
	innerRef?: React.MutableRefObject<any>;
	withPasswordReveal?: boolean;
	passwordRevealComponent?: (visible: boolean) => React.ReactNode;
}

export interface InputComponentProps extends ExtraInputComponentProps {
	className?: string;
	scrollOnFocus?: boolean;
	ref?: React.MutableRefObject<any> | Function;
	[key: string]: any;
}
