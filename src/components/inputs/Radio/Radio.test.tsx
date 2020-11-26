// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import Radio from "./Radio";
import { RadioProps } from "./Radio.types";

describe("Test Component", () => {
  let props: RadioProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<Radio {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Radio");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
