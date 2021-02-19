// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import Breadcrumbs from "./Breadcrumbs";
import { BreadcrumbsProps } from "./Breadcrumbs.types";

describe("Test Component", () => {
  let props: BreadcrumbsProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<Breadcrumbs {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Breadcrumbs");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
