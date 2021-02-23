// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import Accordion from "./Accordion";
import { AccordionProps } from "./Accordion.types";

describe("Test Component", () => {
  let props: AccordionProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<Accordion {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Accordion");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
