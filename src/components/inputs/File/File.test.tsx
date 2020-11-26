// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import File from "./File";
import { FileProps } from "./File.types";

describe("Test Component", () => {
  let props: FileProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<File {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("File");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
