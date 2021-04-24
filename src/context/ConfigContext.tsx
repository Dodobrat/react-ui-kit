// Auto-Generated
import React, { createContext, useContext, useMemo, useState } from "react";
import { GlobalOptions } from "../helpers/global.types";

const ConfigContext = createContext(null);

export interface ConfigProviderProps {
	config?: GlobalOptions;
	children?: React.ReactNode;
}

const ConfigProvider: React.FC<ConfigProviderProps> = ({ config: defaultConfig = {}, children }) => {
	const [config, setConfig] = useState<GlobalOptions>(defaultConfig);

	const appConfig = useMemo(() => ({ config, setConfig }), [config, setConfig]);

	return (
		<ConfigContext.Provider
			value={{
				appConfig,
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
