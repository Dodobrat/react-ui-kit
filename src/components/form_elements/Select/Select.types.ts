import React from "react";
import { EssentialInputProps, LoadingProps } from "../../../helpers/global.types";

type ExtraSelectComponentProps = React.SelectHTMLAttributes<HTMLSelectElement> & EssentialInputProps;

type ExtraSelectProps = ExtraSelectComponentProps & LoadingProps;

// Auto-Generated
export interface SelectProps extends ExtraSelectProps {
	inputClassName?: string;
	value?: string;
	onChange?: React.ChangeEventHandler<HTMLSelectElement>;
	onFocus?: React.FocusEventHandler<HTMLSelectElement>;
	onBlur?: React.FocusEventHandler<HTMLSelectElement>;
	isClearable?: boolean;
	clearableComponent?: React.ReactNode;
	suffix?: React.ReactNode;
	preffix?: React.ReactNode;
	innerRef?: React.MutableRefObject<any>;
}

export interface SelectComponentProps extends ExtraSelectComponentProps {
	[key: string]: any;
}
