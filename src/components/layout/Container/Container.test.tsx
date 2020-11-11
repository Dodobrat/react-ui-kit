// Auto-Generated
import React from "react";
import { render } from "@testing-library/react";

import Container from "./Container";
import { ContainerProps } from "./Container.types";

describe("Test Component", () => {
	let props: ContainerProps;

	beforeEach(() => {
		props = {
			children: "test",
		};
	});

	const renderComponent = () => render(<Container {...props} />);

	it("should render children correctly", () => {
		props.children = "Dodo was here";
		const { getByTestId } = renderComponent();

		const component = getByTestId("Container");

		expect(component).toHaveTextContent("Dodo was here");
	});
});
