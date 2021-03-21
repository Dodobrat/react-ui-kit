// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import Form from "./Form";
import { FormProps } from "./Form.types";

describe("Test Component", () => {
  let props: FormProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<Form {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Form");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
