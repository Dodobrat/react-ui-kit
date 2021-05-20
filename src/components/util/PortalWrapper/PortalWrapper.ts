// Auto-Generated
import React from "react";
import ReactDOM from "react-dom";

import { canUseDOM } from "../../../helpers/functions";

const PortalWrapper: React.FC = (props) => {
	const { children } = props;

	if (!canUseDOM) return null;

	return ReactDOM.createPortal(children, document.body);
};

export default PortalWrapper;
