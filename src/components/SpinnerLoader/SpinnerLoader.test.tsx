// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import SpinnerLoader from "./SpinnerLoader";
import { SpinnerLoaderProps } from "./SpinnerLoader.types";

describe("Test Component", () => {
  let props: SpinnerLoaderProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<SpinnerLoader {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("SpinnerLoader");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
