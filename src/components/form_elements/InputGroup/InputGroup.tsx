// Auto-Generated
import React from "react";
import cn from "classnames";

import { InputGroupProps } from "./InputGroup.types";
import { useConfig } from "../../../context/ConfigContext";
import { generateStyleClasses } from "../../../helpers/classnameGenerator";

const InputGroup: React.ForwardRefRenderFunction<HTMLDivElement, InputGroupProps> = (props, ref) => {
	const {
		appConfig: { config },
	} = useConfig();

	const { className, flavor = config.flavor ?? "default", groupProps = {}, children, ...rest } = props;

	const classDefaults = {
		flavor,
	};

	return (
		<div
			data-testid='InputGroup'
			className={cn("dui__input-group", generateStyleClasses(classDefaults), className)}
			tabIndex={-1}
			{...rest}
			ref={ref}>
			{React.Children.map(children, (child: JSX.Element) => ({
				...child,
				props: {
					...rest,
					...child.props,
				},
			}))}
		</div>
	);
};

export default React.forwardRef<HTMLDivElement, InputGroupProps>(InputGroup);
