import { CnCh, CustomizationProps, ElemType, PigmentOptions } from "../../helpers/global.types";

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

type ExtraButtonProps = ElemType & HTMLButtonProps & HTMLAnchorProps & CustomizationProps & CnCh;

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
	disableWhileLoading?: boolean;
	loading?: boolean;
	loadingComponent?: boolean | JSX.Element | React.ReactNode;
}
