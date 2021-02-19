import { PigmentOptions, SizeOptions } from "../../helpers/global.types";

// Auto-Generated
export interface ButtonProps {
	className?: string;
	type?: "button" | "submit" | "reset";
	renderAs?: "button" | "a";
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
	loading?: boolean;
	loadingComponent?: boolean | JSX.Element | React.ReactNode;
	children?: React.ReactNode;
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
