// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import Alert from "./Alert";
import { AlertProps } from "./Alert.types";

describe("Test Component", () => {
  let props: AlertProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<Alert {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Alert");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
