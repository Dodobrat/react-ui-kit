// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import Collapse from "./Collapse";
import { CollapseProps } from "./Collapse.types";

describe("Test Component", () => {
  let props: CollapseProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<Collapse {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Collapse");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
