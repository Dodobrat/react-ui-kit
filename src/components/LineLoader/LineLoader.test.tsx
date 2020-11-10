// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import LineLoader from "./LineLoader";
import { LineLoaderProps } from "./LineLoader.types";

describe("Test Component", () => {
  let props: LineLoaderProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<LineLoader {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("LineLoader");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
