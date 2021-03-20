// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { ButtonGroupProps } from "./ButtonGroup.types";

const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>((props, ref) => {
	const { className, vertical = false, rounded = false, flat = false, wide = false, children, groupProps = {}, ...rest } = props;

	return (
		<div
			data-testid='ButtonGroup'
			role='group'
			aria-label={"button group"}
			tabIndex={-1}
			className={cn(
				"dui__btn-group",
				{
					"dui__btn-group--rounded": rounded,
					"dui__btn-group--flat": flat,
					"dui__btn-group--wide": wide,
					"dui__btn-group--vertical": vertical,
				},
				className
			)}
			{...groupProps}
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
});

export default ButtonGroup;
