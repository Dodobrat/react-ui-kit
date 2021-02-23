// Auto-Generated
import React, { useState } from "react";
import cn from "classnames";

import { AccordionProps } from "./Accordion.types";

const Accordion: React.ForwardRefRenderFunction<HTMLDivElement, AccordionProps> = (props, ref) => {
	const { className, onToggle = null, children, ...rest } = props;

	const isCollapseElem = (el: JSX.Element) => el?.type?.displayName === "Collapse";

	const [collapseState, setCollapseState] = useState<Object>(
		React.Children.toArray(children).reduce((result, child: JSX.Element) => {
			if (isCollapseElem(child)) {
				result[`${child.key.toString().replace(".", "collapse_")}`] = child.props?.isCollapsed ?? true;
			}
			return result;
		}, {})
	);

	const collapseAllExceptForActive = (idx: number, isCollapsed: boolean) => {
		const adjustedCollapseState = [];

		for (const key of Object.keys(collapseState)) {
			if (key === `collapse_${idx}`) {
				adjustedCollapseState.push({
					key,
					value: isCollapsed,
				});
			} else {
				adjustedCollapseState.push({
					key,
					value: true,
				});
			}
		}

		const newCollapseState = adjustedCollapseState.reduce((result, entry) => {
			result[entry.key] = entry.value;
			return result;
		}, {});

		setCollapseState(newCollapseState);
		if (onToggle) {
			onToggle(newCollapseState);
		}
	};

	const accordionChildren: JSX.Element[] = React.Children.map(children, (child: JSX.Element, idx: number) => {
		if (isCollapseElem(child)) {
			return {
				...child,
				props: {
					...child.props,
					isCollapsed: collapseState[`collapse_${idx}`],
					onToggle: (isCollapsed: boolean) => {
						child.props?.onToggle?.(isCollapsed);
						collapseAllExceptForActive(idx, isCollapsed);
					},
				},
			};
		}
		return child;
	});

	return (
		<div data-testid='Accordion' className={cn("dui__accordion", className)} {...rest} ref={ref}>
			{accordionChildren}
		</div>
	);
};

export default React.forwardRef<HTMLDivElement, AccordionProps>(Accordion);
