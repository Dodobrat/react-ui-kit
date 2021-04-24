import React from "react";
import { AllCustomizationProps, CnCh, RippleEffect } from "../../../helpers/global.types";

type ExtraSwitchGroupProps = CnCh & AllCustomizationProps & RippleEffect;

export type SwitchGroupItem = {
	value: any;
	label: React.ReactNode;
	disabled?: boolean;
	props?: React.InputHTMLAttributes<HTMLInputElement>;
};

export type OnSwitchArgs = {
	e: React.ChangeEvent;
	option: SwitchGroupItem;
};

export type onSwitchFunc = (args: OnSwitchArgs) => void;

// Auto-Generated
export interface SwitchGroupProps extends ExtraSwitchGroupProps {
	options: SwitchGroupItem[];
	name: string;
	activeOption?: any;
	seamless?: boolean;
	wide?: boolean;
	onSwitch?: onSwitchFunc;
}
