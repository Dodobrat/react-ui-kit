// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import InputGroup from "./InputGroup";
import { InputGroupProps } from "./InputGroup.types";

describe("Test Component", () => {
  let props: InputGroupProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<InputGroup {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("InputGroup");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
