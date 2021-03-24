import React from "react";
import { CnCh, CustomizationProps, ElemType, LoadingProps, PigmentOptions, RippleEffect } from "../../helpers/global.types";

// Auto-Generated
type HTMLButtonProps = {
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

/**
 * If href is supplied, button becomes an anchor link
 */
type HTMLAnchorProps = {
	href?: string;
};

type ExtraButtonProps = ElemType & RippleEffect & HTMLButtonProps & HTMLAnchorProps & CustomizationProps & CnCh & LoadingProps;

export interface ButtonProps extends ExtraButtonProps {
	type?: "button" | "submit" | "reset";
	iconStart?: null | React.ReactNode;
	iconEnd?: null | React.ReactNode;
	leftAlignContent?: boolean;
	unWrapText?: boolean;
	pigmentColor?: PigmentOptions;
	keyboardOnlyFocusRing?: boolean;
	spongy?: boolean;
	round?: boolean;
	wide?: boolean;
	active?: boolean;
}
