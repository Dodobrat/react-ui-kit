// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import Icon from "./Icon";
import { IconProps } from "./Icon.types";

describe("Test Component", () => {
  let props: IconProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<Icon {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Icon");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
