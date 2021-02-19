// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import ProgressCircle from "./ProgressCircle";
import { ProgressCircleProps } from "./ProgressCircle.types";

describe("Test Component", () => {
  let props: ProgressCircleProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<ProgressCircle {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("ProgressCircle");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
