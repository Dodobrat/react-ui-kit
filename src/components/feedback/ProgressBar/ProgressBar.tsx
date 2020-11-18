// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { ProgressBarProps } from "./ProgressBar.types";
import { pigmentOptions } from "../../../helpers/pigments";

const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
	(
		{
			className,
			min = 0,
			max = 100,
			value = 0,
			labeled = false,
			labelValue = "%",
			labelPosition = "left",
			fixedLabelValue = 0,
			animated = false,
			modern = false,
			rounded = false,
			minified = false,
			pigment = "primary",
		},
		ref
	) => {
		const parseValueToWidth: () => number | string = () => {
			const range: number = max - min;
			const correctedStartValue: number = value - min;
			const percentage: number = (correctedStartValue * 100) / range;
			if (fixedLabelValue !== 0) {
				return percentage.toFixed(fixedLabelValue);
			}
			return percentage;
		};

		return (
			<div
				data-testid='ProgressBar'
				className={cn(
					"dodo-ui__progress-bar",
					{
						"dodo-ui__progress-bar--modern": modern,
						"dodo-ui__progress-bar--animated": animated,
						"dodo-ui__progress-bar--rounded": rounded,
						"dodo-ui__progress-bar--minified": minified,
					},
					{
						[`dodo-ui__progress-bar--pigment-${pigment}`]: pigmentOptions.includes(pigment),
					},
					className
				)}
				ref={ref}>
				<div
					className={cn("dodo-ui__progress-bar__progress", {
						"dodo-ui__progress-bar__progress--allow-overflow": (labelPosition === "outer" || minified) && !animated,
					})}
					style={{ width: `${parseValueToWidth()}%` }}
					role='progressbar'
					aria-valuenow={value}
					aria-valuemin={min}
					aria-valuemax={max}>
					{labeled && (
						<div
							className={cn("dodo-ui__progress-bar__progress__label", {
								[`dodo-ui__progress-bar__progress__label--position-${labelPosition}`]: labelPosition !== "left",
							})}>
							{labelValue === "%"
								? `${parseValueToWidth()} %`
								: labelValue === "count"
								? value
								: labelValue === "count + %" && `${value} | ${parseValueToWidth()} %`}
						</div>
					)}
				</div>
			</div>
		);
	}
);

export default ProgressBar;
