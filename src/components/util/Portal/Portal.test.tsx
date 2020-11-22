// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import Portal from "./Portal";
import { PortalProps } from "./Portal.types";

describe("Test Component", () => {
  let props: PortalProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<Portal {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Portal");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
