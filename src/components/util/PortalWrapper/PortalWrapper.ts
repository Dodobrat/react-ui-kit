// Auto-Generated
import React from "react";
import ReactDOM from "react-dom";

import { canUseDOM } from "../../../helpers/functions";
import { PortalWrapperProps } from "../../Portal/Portal.types";

const PortalWrapper: React.FC<PortalWrapperProps> = (props) => {
	const { children, element = document.body } = props;

	if (!canUseDOM || !element) return null;

	return ReactDOM.createPortal(children, element);
};

export default PortalWrapper;
