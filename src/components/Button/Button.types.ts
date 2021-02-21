import { ElevationOptions, PigmentOptions, SizeOptions } from "../../helpers/global.types";

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

type ExtraButtonProps = HTMLButtonProps & HTMLAnchorProps;

export interface ButtonProps extends ExtraButtonProps {
	className?: string;
	type?: "button" | "submit" | "reset";
	as?: React.ElementType;
	elevation?: ElevationOptions;
	iconStart?: null | React.ElementType;
	iconEnd?: null | React.ElementType;
	leftAlignContent?: boolean;
	unWrapText?: boolean;
	pigment?: null | PigmentOptions;
	pigmentColor?: null | PigmentOptions;
	keyboardOnlyFocusRing?: boolean;
	spongy?: boolean;
	contrast?: boolean;
	size?: SizeOptions;
	rounded?: boolean;
	round?: boolean;
	flat?: boolean;
	wide?: boolean;
	active?: boolean;
	disableWhileLoading?: boolean;
	loading?: boolean;
	loadingComponent?: boolean | JSX.Element | React.ReactNode | React.ElementType;
	children?: React.ReactNode;
}
