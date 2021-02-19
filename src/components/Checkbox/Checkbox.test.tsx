// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import Checkbox from "./Checkbox";
import { CheckboxProps } from "./Checkbox.types";

describe("Test Component", () => {
  let props: CheckboxProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<Checkbox {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Checkbox");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
