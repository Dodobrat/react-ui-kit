// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import Checkable from "./Checkable";
import { CheckableProps } from "./Checkable.types";

describe("Test Component", () => {
  let props: CheckableProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<Checkable {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Checkable");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
