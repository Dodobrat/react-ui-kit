// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import Slider from "./Slider";
import { SliderProps } from "./Slider.types";

describe("Test Component", () => {
  let props: SliderProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<Slider {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Slider");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
