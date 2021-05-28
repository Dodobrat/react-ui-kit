// Auto-Generated
import React, { createContext, useContext, useMemo, useState } from "react";
import { GlobalOptions } from "../helpers/global.types";
import { useDarkMode, useDarkModeProps } from "../hooks/useDarkMode";

const ConfigContext = createContext(null);

export interface ConfigProviderProps {
	config?: GlobalOptions;
	darkModeConfig?: useDarkModeProps;
	children?: React.ReactNode;
}

const ConfigProvider: React.FC<ConfigProviderProps> = ({ config: defaultConfig = {}, darkModeConfig = {}, children }) => {
	const [config, setConfig] = useState<GlobalOptions>(defaultConfig);
	const [dark, setDark] = useDarkMode(darkModeConfig);

	const appConfig = useMemo(() => ({ config, setConfig }), [config, setConfig]);
	const themeConfig = useMemo(() => ({ dark, setDark }), [dark, setDark]);

	const toggleDarkTheme: () => void = () => setDark((prev: boolean) => !prev);

	return (
		<ConfigContext.Provider
			value={{
				appConfig,
				themeConfig,
				toggleDarkTheme,
			}}>
			{children}
		</ConfigContext.Provider>
	);
};

export const useConfig = () => {
	const context = useContext(ConfigContext);

	if (context === undefined) {
		throw new Error("useConfig must be used within a ConfigContextProvider");
	}

	return context;
};

export default ConfigProvider;
