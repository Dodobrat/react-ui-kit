// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import Card from "./Card";
import { CardProps } from "./Card.types";

describe("Test Component", () => {
  let props: CardProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<Card {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Card");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
