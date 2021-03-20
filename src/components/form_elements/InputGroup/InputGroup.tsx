// Auto-Generated
import React from "react";
import cn from "classnames";

import { InputGroupProps } from "./InputGroup.types";

const InputGroup: React.ForwardRefRenderFunction<HTMLDivElement, InputGroupProps> = (props, ref) => {
	const { className, rounded = false, flat = false, groupProps = {}, children, ...rest } = props;

	return (
		<div
			data-testid='InputGroup'
			className={cn(
				"dui__input-group",
				{
					"dui__input-group--rounded": rounded,
					"dui__input-group--flat": flat,
				},
				className
			)}
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
