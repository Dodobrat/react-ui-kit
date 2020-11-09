// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import ButtonGroup from "./ButtonGroup";
import { ButtonGroupProps } from "./ButtonGroup.types";

describe("Test Component", () => {
  let props: ButtonGroupProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<ButtonGroup {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("ButtonGroup");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
