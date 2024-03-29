// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import Text from "./Text";
import { TextProps } from "./Text.types";

describe("Test Component", () => {
  let props: TextProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<Text {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Text");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
