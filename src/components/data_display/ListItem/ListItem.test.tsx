// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import ListItem from "./ListItem";
import { ListItemProps } from "./ListItem.types";

describe("Test Component", () => {
  let props: ListItemProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<ListItem {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("ListItem");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
