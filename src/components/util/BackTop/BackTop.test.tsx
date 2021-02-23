// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import BackTop from "./BackTop";
import { BackTopProps } from "./BackTop.types";

describe("Test Component", () => {
  let props: BackTopProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<BackTop {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("BackTop");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
