// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { ButtonGroupProps } from "./ButtonGroup.types";
import { useConfig } from "../../context/ConfigContext";

const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>((props, ref) => {
	const {
		appConfig: { config },
	} = useConfig();

	const {
		className,
		spongy = config.btnGroupSpongy ?? false,
		vertical = false,
		rounded = config.rounded ?? false,
		flat = config.flat ?? false,
		wide = false,
		children,
		groupProps = {},
		...rest
	} = props;

	const btnGroupClassBase = "dui__btn-group";

	return (
		<div
			data-testid='ButtonGroup'
			role='group'
			aria-label={"button group"}
			tabIndex={-1}
			className={cn(
				btnGroupClassBase,
				{
					[`${btnGroupClassBase}--rounded`]: rounded,
					[`${btnGroupClassBase}--flat`]: flat,
					[`${btnGroupClassBase}--wide`]: wide,
					[`${btnGroupClassBase}--vertical`]: vertical,
				},
				className
			)}
			{...groupProps}
			ref={ref}>
			{React.Children.map(children, (child: JSX.Element) => ({
				...child,
				props: {
					...rest,
					spongy,
					...child.props,
				},
			}))}
		</div>
	);
});

export default ButtonGroup;
