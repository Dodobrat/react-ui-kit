module.exports = (componentName) => ({
	content: `// Auto-Generated
import React, { createContext, useMemo, useState } from "react";

export const ${componentName} = createContext(null);

const ${componentName}Provider: React.FC = ({ children }) => {
    const [value, setValue] = useState<boolean>(false);

	const toggleValue = () => setValue((prev) => !prev);

	const contextValue = useMemo(() => ({ value, setValue }), [value, setValue]);

	return (
		<${componentName}.Provider
			value={{
				contextValue,
				toggleValue,
			}}>
			{children}
		</${componentName}.Provider>
	);
};

export default ${componentName}Provider;

`,
	extension: `.tsx`,
});
