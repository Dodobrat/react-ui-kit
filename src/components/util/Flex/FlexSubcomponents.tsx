import React, { forwardRef } from "react";
import cn from "classnames";
import { FlexSubComponentProps } from "./FlexSubcomponents.types";
import { SizeOptions } from "../../../helpers/global";
import { configError } from "../../../helpers/functions";

export const FlexCol = forwardRef<HTMLDivElement, FlexSubComponentProps>((props, ref) => {
	const { className, order, alignSelf, col, offset, hide, children, style, ...rest } = props;

	const generateColClasses: () => string = () => {
		if (col) {
			if (typeof col === "object") {
				return Object.entries?.(col)
					.map((item) => `dui__flex__col-${item[0]}-${item[1]}`)
					.join(" ");
			}
			if (typeof col === "number") {
				return `dui__flex__col-${col}`;
			}
			if (typeof col === "string" && col === "auto") {
				return `dui__flex__col-${col}`;
			}

			configError("col", {
				object: `{xs: 12, sm: 8, md: 6 ....}`,
				number: `1 ... 12`,
				string: `auto`,
			});
			return "";
		}
	};

	const generateOffsetClasses: () => string = () => {
		if (offset) {
			if (typeof offset === "object") {
				return Object.entries?.(offset)
					.map((item) => `dui__flex__col--offset-${item[0]}-${item[1]}`)
					.join(" ");
			}
			if (typeof offset === "number") {
				return `dui__flex__col--offset-${offset}`;
			}

			configError("offset", {
				object: `{xs: 12, sm: 8, md: 6 ....}`,
				number: `1 ... 12`,
			});
			return "";
		}
	};

	const generateHideClasses: () => string = () => {
		if (hide) {
			if (typeof hide === "boolean") {
				return `dui__flex__col--hide`;
			}
			if (typeof hide === "string" && SizeOptions.includes(hide)) {
				return `dui__flex__col--hide-${hide}`;
			}

			configError("hide", {
				boolean: `true / false`,
				string: `xs / sm / md ...`,
			});
			return "";
		}
	};

	return (
		<div
			className={cn(
				"dui__flex__col",
				{
					[`dui__flex__col--align-${alignSelf}`]: alignSelf,
				},
				generateColClasses(),
				generateOffsetClasses(),
				generateHideClasses(),
				className
			)}
			style={{ ...style, order }}
			{...rest}
			ref={ref}>
			{children}
		</div>
	);
});

FlexCol.displayName = "FlexCol";
