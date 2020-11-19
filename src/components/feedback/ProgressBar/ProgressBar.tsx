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
			...rest
		},
		ref
	) => {
		const parseValueToPercent: () => number | string = () => {
			const range: number = max - min;
			const correctedStartValue: number = value - min;
			const percentage: number = (correctedStartValue * 100) / range;
			if (fixedLabelValue !== 0) {
				return Math.min(percentage, 100).toFixed(fixedLabelValue);
			}
			return Math.min(percentage, 100);
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
				{...rest}
				ref={ref}>
				<div
					className={cn("dodo-ui__progress-bar__progress", {
						"dodo-ui__progress-bar__progress--allow-overflow": (labelPosition === "outer" || minified) && !animated,
					})}
					style={{ width: `${parseValueToPercent()}%` }}
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
								? `${parseValueToPercent()} %`
								: labelValue === "count"
								? value
								: labelValue === "count + %" && `${value} | ${parseValueToPercent()} %`}
						</div>
					)}
				</div>
			</div>
		);
	}
);

export default ProgressBar;
