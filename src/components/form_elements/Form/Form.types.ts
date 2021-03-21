import React, { FormEvent } from "react";
import { CnCh } from "../../../helpers/global.types";

type ExtraFormProps = React.HTMLAttributes<HTMLFormElement> & CnCh;

interface OnFormSubmitType {
	event: FormEvent;
	values: Object;
}
// Auto-Generated
export interface FormProps extends ExtraFormProps {
	onFormSubmit?: (args: OnFormSubmitType) => void;
}
