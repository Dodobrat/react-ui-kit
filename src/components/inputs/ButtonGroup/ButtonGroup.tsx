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
				{Object.values(children).map((child: JSX.Element) => ({
					...child,
					props: {
						...child.props,
						size: size ?? child.props.size,
						outlined: outlined ?? child.props.outlined,
						pigment: pigment ?? child.props.pigment,
						modern: modern ?? child.props.modern,
						disabled: rest?.disabled,
					},
				}))}
			</div>
		);
	}
);

export default ButtonGroup;
