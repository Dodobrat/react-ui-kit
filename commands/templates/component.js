module.exports = (componentName) => ({
	content: `// Auto-Generated
import React from "react";
import cn from 'classnames';

import { ${componentName}Props } from "./${componentName}.types";

const ${componentName}: React.FC<${componentName}Props> = (props) => {
    const { className, children, ...rest } = props;
    
    return(
        <div data-testid="${componentName}" className={cn("", className)} {...rest}>{children}</div>
    )
};

export default ${componentName};

`,
	extension: `.tsx`,
});
