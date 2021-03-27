// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import Table from "./Table";
import { TableProps } from "./Table.types";

describe("Test Component", () => {
  let props: TableProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<Table {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Table");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
