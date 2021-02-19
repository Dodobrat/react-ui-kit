// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import Navbar from "./Navbar";
import { NavbarProps } from "./Navbar.types";

describe("Test Component", () => {
  let props: NavbarProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<Navbar {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Navbar");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
