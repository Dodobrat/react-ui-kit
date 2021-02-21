// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import ProgressRing from "./ProgressRing";
import { ProgressRingProps } from "./ProgressRing.types";

describe("Test Component", () => {
  let props: ProgressRingProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<ProgressRing {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("ProgressRing");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
