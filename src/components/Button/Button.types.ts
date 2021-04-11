import React from "react";
import { AllCustomizationProps, CnCh, ElemType, LoadingProps, PigmentColorProps, RippleEffect } from "../../helpers/global.types";

// Auto-Generated

type ExtraButtonProps = ElemType & RippleEffect & AllCustomizationProps & PigmentColorProps & CnCh & LoadingProps;

export interface ButtonProps extends ExtraButtonProps {
	type?: "button" | "submit" | "reset";
	iconStart?: null | React.ReactNode;
	iconEnd?: null | React.ReactNode;
	leftAlignContent?: boolean;
	unWrapText?: boolean;
	keyboardOnlyFocusRing?: boolean;
	spongy?: boolean;
	wide?: boolean;
	active?: boolean;
	href?: string;
	onClick?: React.MouseEventHandler<unknown>;
}
