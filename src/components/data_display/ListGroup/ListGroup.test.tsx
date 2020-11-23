// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import ListGroup from "./ListGroup";
import { ListGroupProps } from "./ListGroup.types";

describe("Test Component", () => {
  let props: ListGroupProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<ListGroup {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("ListGroup");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
