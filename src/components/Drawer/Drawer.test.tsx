// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import Drawer from "./Drawer";
import { DrawerProps } from "./Drawer.types";

describe("Test Component", () => {
  let props: DrawerProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<Drawer {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Drawer");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
