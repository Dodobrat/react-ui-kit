// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import CloseBtn from "./CloseBtn";
import { CloseBtnProps } from "./CloseBtn.types";

describe("Test Component", () => {
  let props: CloseBtnProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<CloseBtn {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("CloseBtn");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
