// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import Select from "./Select";
import { SelectProps } from "./Select.types";

describe("Test Component", () => {
  let props: SelectProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<Select {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Select");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
