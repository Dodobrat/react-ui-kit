// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import ProgressBar from "./ProgressBar";
import { ProgressBarProps } from "./ProgressBar.types";

describe("Test Component", () => {
  let props: ProgressBarProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<ProgressBar {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("ProgressBar");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
