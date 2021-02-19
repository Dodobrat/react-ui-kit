// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import Flex from "./Flex";
import { FlexProps } from "./Flex.types";

describe("Test Component", () => {
  let props: FlexProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<Flex {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Flex");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
