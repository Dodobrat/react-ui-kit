// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import Input from "./Input";
import { InputProps } from "./Input.types";

describe("Test Component", () => {
  let props: InputProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<Input {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Input");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
