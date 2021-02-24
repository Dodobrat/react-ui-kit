// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import Heading from "./Heading";
import { HeadingProps } from "./Heading.types";

describe("Test Component", () => {
  let props: HeadingProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<Heading {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Heading");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
