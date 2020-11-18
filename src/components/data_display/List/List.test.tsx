// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import List from "./List";
import { ListProps } from "./List.types";

describe("Test Component", () => {
  let props: ListProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<List {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("List");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
