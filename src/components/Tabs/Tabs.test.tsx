// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import Tabs from "./Tabs";
import { TabsProps } from "./Tabs.types";

describe("Test Component", () => {
  let props: TabsProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<Tabs {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Tabs");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
