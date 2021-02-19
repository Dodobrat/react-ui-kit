// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import Badge from "./Badge";
import { BadgeProps } from "./Badge.types";

describe("Test Component", () => {
  let props: BadgeProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<Badge {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Badge");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
