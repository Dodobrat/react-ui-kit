// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { ButtonGroupProps } from "./ButtonGroup.types";

const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
	(
		{
			className,
			size,
			ariaLabel = "button group",
			round = false,
			wide = false,
			vertical = false,
			outlined,
			pigment,
			modern,
			children,
			...rest
		},
		ref
	) => {
		return (
			<div
				data-testid='ButtonGroup'
				role='group'
				aria-label={ariaLabel}
				tabIndex={rest?.disabled ? -1 : 0}
				className={cn(
					"dodo-ui__btn-group",
					{
						"dodo-ui__btn-group--round": round,
						"dodo-ui__btn-group--wide": wide,
						"dodo-ui__btn-group--vertical": vertical,
					},
					className
				)}
				{...rest}
				ref={ref}>
				{React.Children.map(children, (child: JSX.Element) => ({
					...child,
					props: {
						...child.props,
						size: child.props.size ?? size,
						outlined: child.props.outlined ?? outlined,
						pigment: child.props.pigment ?? pigment,
						modern: child.props.modern ?? modern,
						disabled: rest?.disabled,
					},
				}))}
			</div>
		);
	}
);

export default ButtonGroup;
