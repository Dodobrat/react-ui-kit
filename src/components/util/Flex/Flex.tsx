// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { FlexProps } from "./Flex.types";
import { FlexCol } from "./FlexSubcomponents";
import { FlexAlign, FlexDirection, FlexJustify, FlexWrap, SizeOptions } from "../../../helpers/global";
import { configError } from "../../../helpers/functions";

interface FlexComponent extends React.ForwardRefExoticComponent<FlexProps & React.RefAttributes<HTMLDivElement>> {
	Col: React.FC;
}

const Flex = forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
	const {
		className,
		spacingX = "sm",
		spacingY = "sm",
		align = "flex-start",
		justify = "flex-start",
		direction = "row",
		wrap = "wrap",
		disableNegativeSpace = false,
		children,
		...rest
	} = props;

	const generateSpacingClasses: (prop: any, prefix: string) => string = (prop, prefix) => {
		if (prop) {
			if (typeof prop === "object") {
				return Object.entries?.(prop)
					.map((item) => {
						if (SizeOptions.includes(item?.[1]?.toString())) {
							return `dui__flex--${prefix}-${item[0]}-${item[1]}`;
						}
						configError(prefix, {
							object: `{xs: 'sm', sm: 'md', md: 'xl' ....}`,
							string: `xs, sm, md, none ...`,
						});
						return "";
					})
					.join(" ");
			}
			if (typeof prop === "string" && (SizeOptions.includes(prop) || prop === "none")) {
				return `dui__flex--${prefix}-${prop}`;
			}

			configError(prefix, {
				object: `{xs: 'sm', sm: 'md', md: 'xl' ....}`,
				string: `xs, sm, md, none ...`,
			});
			return "";
		}
	};

	const generateOtherClasses: (prop: any, prefix: string, allowedNames: Array<string>, initial: string) => string = (
		prop,
		prefix,
		allowedNames,
		initial
	) => {
		if (prop) {
			if (typeof prop === "object") {
				return Object.entries?.(prop)
					.map((item) => {
						if (allowedNames.includes(item?.[1]?.toString())) {
							return `dui__flex--${prefix}-${item[0]}-${item[1]}`;
						}
						configError(prefix, {
							object: `{xs: ${allowedNames}, sm: ...}`,
							string: allowedNames.toString(),
						});
						return "";
					})
					.join(" ");
			}
			if (typeof prop === "string" && allowedNames.includes(prop)) {
				if (prop !== initial) {
					return `dui__flex--${prefix}-${prop}`;
				} else {
					return "";
				}
			}

			configError(prefix, {
				object: `{xs: ${allowedNames}, sm: ...}`,
				string: allowedNames.toString(),
			});
			return "";
		}
	};

	return (
		<div
			data-testid='Flex'
			className={cn(
				"dui__flex",
				{
					"dui__flex--no-negative": disableNegativeSpace,
				},
				generateSpacingClasses(spacingX, "sx"),
				generateSpacingClasses(spacingY, "sy"),
				generateOtherClasses(align, "align", FlexAlign, "flex-start"),
				generateOtherClasses(justify, "justify", FlexJustify, "flex-start"),
				generateOtherClasses(direction, "direction", FlexDirection, "row"),
				generateOtherClasses(wrap, "wrap", FlexWrap, "wrap"),
				className
			)}
			{...rest}
			ref={ref}>
			{children}
		</div>
	);
}) as FlexComponent;

Flex.Col = FlexCol;

export default Flex;
