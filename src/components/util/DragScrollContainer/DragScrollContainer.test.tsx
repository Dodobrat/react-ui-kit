// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import DragScrollContainer from "./DragScrollContainer";
import { DragScrollContainerProps } from "./DragScrollContainer.types";

describe("Test Component", () => {
  let props: DragScrollContainerProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<DragScrollContainer {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("DragScrollContainer");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
