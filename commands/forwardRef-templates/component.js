module.exports = (componentName) => ({
	content: `// Auto-Generated
import React, { forwardRef } from "react";
import cn from 'classnames';

import { ${componentName}Props } from "./${componentName}.types";

const ${componentName} = forwardRef<HTMLDivElement, ${componentName}Props>((props, ref) => {
    const { className, children, ...rest } = props;
    
    return(
        <div data-testid="${componentName}" className={cn("", className)} {...rest} ref={ref}>{children}</div>
    )
});

export default ${componentName};

`,
	extension: `.tsx`,
});
