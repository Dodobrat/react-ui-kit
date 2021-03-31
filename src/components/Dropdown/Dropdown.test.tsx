// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import Dropdown from "./Dropdown";
import { DropdownProps } from "./Dropdown.types";

describe("Test Component", () => {
  let props: DropdownProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<Dropdown {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Dropdown");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
