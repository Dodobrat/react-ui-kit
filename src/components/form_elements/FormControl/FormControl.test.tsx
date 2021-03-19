// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import FormControl from "./FormControl";
import { FormControlProps } from "./FormControl.types";

describe("Test Component", () => {
  let props: FormControlProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<FormControl {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("FormControl");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
