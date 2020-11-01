module.exports = (componentName) => ({
    content: `// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import ${componentName} from "./${componentName}";
import { ${componentName}Props } from "./${componentName}.types";

describe("Test Component", () => {
  let props: ${componentName}Props;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<${componentName} {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("${componentName}");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
`,
    extension: `.test.tsx`,
});
