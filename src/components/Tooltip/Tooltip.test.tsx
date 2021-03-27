// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import Tooltip from "./Tooltip";
import { TooltipProps } from "./Tooltip.types";

describe("Test Component", () => {
  let props: TooltipProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<Tooltip {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Tooltip");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
