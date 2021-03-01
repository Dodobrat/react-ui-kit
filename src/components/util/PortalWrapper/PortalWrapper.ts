// Auto-Generated
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { canUseDOM } from "../../../helpers/functions";

const PortalWrapper: React.FC = (props) => {
	const { children } = props;

	if (!canUseDOM) return null;

	const [portalNode] = useState(document.createElement("div"));

	useEffect(() => {
		document.body.appendChild(portalNode);
		return () => {
			document.body.removeChild(portalNode);
		};
	}, []);

	return ReactDOM.createPortal(children, portalNode);
};

export default PortalWrapper;
