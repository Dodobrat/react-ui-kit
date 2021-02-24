// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import Skeleton from "./Skeleton";
import { SkeletonProps } from "./Skeleton.types";

describe("Test Component", () => {
  let props: SkeletonProps;

  beforeEach(() => {
    props = {
      children: "test"
    };
  });

  const renderComponent = () => render(<Skeleton {...props} />);

  it("should render children correctly", () => {
    props.children = "Dodo was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Skeleton");

    expect(component).toHaveTextContent("Dodo was here");
  });
});
