// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { ButtonGroupProps } from "./ButtonGroup.types";
import { useConfig } from "../../context/ConfigContext";
import { generateBtnClasses, generateStyleClasses } from "../../helpers/classnameGenerator";

const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>((props, ref) => {
	const {
		appConfig: { config },
	} = useConfig();

	const {
		className,
		spongy = config.btnGroupSpongy ?? false,
		vertical = false,
		flavor = config.flavor ?? "default",
		wide = false,
		children,
		groupProps = {},
		...rest
	} = props;

	const utilClassDefaults = {
		wide,
		spongy,
		vertical,
	};

	const classDefaults = {
		flavor,
	};

	const classBase = "dui__btn-group";

	return (
		<div
			data-testid='ButtonGroup'
			role='group'
			aria-label={"button group"}
			tabIndex={-1}
			className={cn(classBase, generateStyleClasses(classDefaults), generateBtnClasses(classBase, utilClassDefaults), className)}
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
