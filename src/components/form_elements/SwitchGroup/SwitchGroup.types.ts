import React from "react";
import { AllCustomizationProps, CnCh, RippleEffect } from "../../../helpers/global.types";

type ExtraSwitchGroupProps = CnCh & AllCustomizationProps & RippleEffect;

interface SwitchGroupItem {
	value: any;
	label: React.ReactNode;
	disabled?: boolean;
	props?: React.InputHTMLAttributes<HTMLInputElement>;
}

interface OnSwitchArgs {
	e: React.ChangeEvent;
	option: SwitchGroupItem;
}

type onSwitchFunc = (args: OnSwitchArgs) => void;

// Auto-Generated
export interface SwitchGroupProps extends ExtraSwitchGroupProps {
	options: SwitchGroupItem[];
	name: string;
	activeOption?: any;
	seamless?: boolean;
	wide?: boolean;
	onSwitch?: onSwitchFunc;
}
