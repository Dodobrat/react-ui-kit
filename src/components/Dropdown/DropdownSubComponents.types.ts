import { CnCh, ElemType, SyntheticKeyboardControls } from "../../helpers/global.types";

type DropdownSubComponentCommon = CnCh & ElemType;

type ExtraDropdownToggleSubComponentProps = DropdownSubComponentCommon & SyntheticKeyboardControls;
export interface DropdownToggleSubComponentProps extends ExtraDropdownToggleSubComponentProps {
	isToggled?: boolean;
	onKeyboardToggle?: (isToggled: boolean) => void;
}

type ExtraDropdownMenuSubComponentProps = DropdownSubComponentCommon;
export interface DropdownMenuSubComponentProps extends ExtraDropdownMenuSubComponentProps {
	isToggled?: boolean;
}

type ExtraDropdownHeaderSubComponentProps = DropdownSubComponentCommon;
export interface DropdownHeaderSubComponentProps extends ExtraDropdownHeaderSubComponentProps {}

type ExtraDropdownItemSubComponentProps = DropdownSubComponentCommon;
export interface DropdownItemSubComponentProps extends ExtraDropdownItemSubComponentProps {}

type ExtraDropdownSeparatorSubComponentProps = DropdownSubComponentCommon;
export interface DropdownSeparatorSubComponentProps extends ExtraDropdownSeparatorSubComponentProps {}

type ExtraDropdownBodySubComponentProps = DropdownSubComponentCommon;
export interface DropdownBodySubComponentProps extends ExtraDropdownBodySubComponentProps {
	isToggled?: boolean;
}
