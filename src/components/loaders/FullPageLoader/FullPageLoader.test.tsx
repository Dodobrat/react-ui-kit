// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import FullPageLoader from "./FullPageLoader";
import { FullPageLoaderProps } from "./FullPageLoader.types";

describe("Test Component", () => {
  let props: FullPageLoaderProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<FullPageLoader {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("FullPageLoader");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
