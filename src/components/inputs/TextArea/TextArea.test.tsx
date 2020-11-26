// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import TextArea from "./TextArea";
import { TextAreaProps } from "./TextArea.types";

describe("Test Component", () => {
  let props: TextAreaProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<TextArea {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("TextArea");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
