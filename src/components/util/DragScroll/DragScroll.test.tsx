// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import DragScroll from "./DragScroll";
import { DragScrollProps } from "./DragScroll.types";

describe("Test Component", () => {
  let props: DragScrollProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<DragScroll {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("DragScroll");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
