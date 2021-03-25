// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import SwitchGroup from "./SwitchGroup";
import { SwitchGroupProps } from "./SwitchGroup.types";

describe("Test Component", () => {
  let props: SwitchGroupProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<SwitchGroup {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("SwitchGroup");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
