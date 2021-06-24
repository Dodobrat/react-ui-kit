module.exports = (componentName, hookName) => ({
	content: `// Auto-Generated
import React, { createContext, useMemo, useState, useContext } from "react";

export const ${componentName}Context = createContext(null);

const ${componentName}Provider: React.FC = ({ children }) => {
    const [value, setValue] = useState<boolean>(false);

	const toggleValue = () => setValue((prev) => !prev);

	const contextValue = useMemo(() => ({ value, setValue }), [value, setValue]);

	return (
		<${componentName}Context.Provider
			value={{
				contextValue,
				toggleValue,
			}}>
			{children}
		</${componentName}Context.Provider>
	);
};

export const ${hookName} = () => {
	const context = useContext(${componentName}Context);

	if (context === undefined) {
		throw new Error("${hookName} must be used within a ${componentName}Provider");
	}

	return context;
};

export default ${componentName}Provider;

`,
	extension: `.tsx`,
});
