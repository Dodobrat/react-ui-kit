// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import ExpandIndicator from "./ExpandIndicator";
import { ExpandIndicatorProps } from "./ExpandIndicator.types";

describe("Test Component", () => {
  let props: ExpandIndicatorProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<ExpandIndicator {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("ExpandIndicator");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
