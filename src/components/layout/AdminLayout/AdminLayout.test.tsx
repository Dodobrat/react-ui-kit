// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import AdminLayout from "./AdminLayout";
import { AdminLayoutProps } from "./AdminLayout.types";

describe("Test Component", () => {
  let props: AdminLayoutProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<AdminLayout {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("AdminLayout");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
