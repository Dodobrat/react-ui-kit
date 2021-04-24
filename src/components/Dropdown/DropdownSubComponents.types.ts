import { CnCh, ElemType, SyntheticKeyboardControls } from "../../helpers/global.types";

type ExtraDropdownSubComponentDuplicates = CnCh & ElemType;

type ExtraDropdownToggleSubComponentProps = ExtraDropdownSubComponentDuplicates & SyntheticKeyboardControls;
export interface DropdownToggleSubComponentProps extends ExtraDropdownToggleSubComponentProps {
	isToggled?: boolean;
	onKeyboardToggle?: (isToggled: boolean) => void;
}

type ExtraDropdownMenuSubComponentProps = ExtraDropdownSubComponentDuplicates;
export interface DropdownMenuSubComponentProps extends ExtraDropdownMenuSubComponentProps {
	isToggled?: boolean;
}

type ExtraDropdownHeaderSubComponentProps = ExtraDropdownSubComponentDuplicates;
export interface DropdownHeaderSubComponentProps extends ExtraDropdownHeaderSubComponentProps {}

type ExtraDropdownItemSubComponentProps = ExtraDropdownSubComponentDuplicates;
export interface DropdownItemSubComponentProps extends ExtraDropdownItemSubComponentProps {}

type ExtraDropdownSeparatorSubComponentProps = ExtraDropdownSubComponentDuplicates;
export interface DropdownSeparatorSubComponentProps extends ExtraDropdownSeparatorSubComponentProps {}

type ExtraDropdownBodySubComponentProps = ExtraDropdownSubComponentDuplicates;
export interface DropdownBodySubComponentProps extends ExtraDropdownBodySubComponentProps {
	isToggled?: boolean;
}
