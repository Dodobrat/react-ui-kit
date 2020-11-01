module.exports = (componentName) => ({
    content: `// Auto-Generated
import React from "react";

import { ${componentName}Props } from "./${componentName}.types";

import "./${componentName}.scss";

const ${componentName}: React.FC<${componentName}Props> = ({ children }) => (
    <div data-testid="${componentName}" className="">{children}</div>
);

export default ${componentName};

`,
    extension: `.tsx`,
});
