import React from "react";
import { useConfig } from "../context/ConfigContext";

const withConfig = (componentType, Component) => (props) => {
	const {
		appConfig: { config },
	} = useConfig();

	console.log("type", componentType);

	const injectedProps = {
		pigment: props?.pigment || config.alertPigment,
		pigmentColor: config.alertPigmentColor || props?.pigmentColor || null,
		elevation: config.alertElevation || props?.elevation || "none",
		flavor: config.flavor || props?.flavor || "default",
		sizing: config.sizing || props?.sizing || "md",
		withRipple: config.withRipple || props?.withRipple,
	};

	const ComponentWithConfig = () => {
		return <Component {...injectedProps} {...props} />;
	};

	return <ComponentWithConfig />;
};

export default withConfig;
