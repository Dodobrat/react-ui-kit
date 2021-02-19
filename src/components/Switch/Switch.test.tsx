// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import Switch from "./Switch";
import { SwitchProps } from "./Switch.types";

describe("Test Component", () => {
  let props: SwitchProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<Switch {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Switch");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
