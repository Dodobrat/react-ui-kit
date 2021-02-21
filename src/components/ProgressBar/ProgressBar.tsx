// Auto-Generated
import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import { ProgressBarProps } from "./ProgressBar.types";
import { PigmentOptions } from "../../helpers/global";
import { useWindowResize } from "../../hooks/useWindowResize";
import { parseValueToPercent } from "../../helpers/functions";

const ProgressBar: React.ForwardRefRenderFunction<HTMLDivElement, ProgressBarProps> = (props, ref) => {
	const {
		className,
		min = 0,
		max = 100,
		value = 0,
		labeled = false,
		labelValue = "%",
		labelPosition = "top",
		decimals = 0,
		rounded = false,
		flat = false,
		contrast = false,
		pigment = "primary",
		withTrack = true,
		...rest
	} = props;

	const parsedValue: () => number | string = () => {
		if (labelValue === "%") {
			return `${parseValueToPercent(min, max, value, decimals)} %`;
		}
		if (labelValue === "count") {
			return value;
		}
		if (labelValue === "count + %") {
			return `${value} | ${parseValueToPercent(min, max, value, decimals)} %`;
		}
	};

	const shouldCalcPosition: () => boolean = () => {
		if (labelPosition === "top" || labelPosition === "bottom") {
			return true;
		}
		return false;
	};

	const progressRef = useRef(null);
	const [progressLabelPosition, setProgressLabelPosition] = useState<number>(0);
	const { width } = useWindowResize(250);

	useEffect(() => {
		const progressBarLength = progressRef?.current?.getBoundingClientRect?.()?.width;
		setProgressLabelPosition(() => progressBarLength ?? 0);
		return () => setProgressLabelPosition(0);
	}, [value, min, max, width]);

	return (
		<div
			data-testid='ProgressBar'
			className={cn(
				"dui__progressbar",
				{
					"dui__progressbar--contrast": contrast,
					"dui__progressbar--flat": flat,
					"dui__progressbar--rounded": rounded,
					"dui__progressbar--no-track": !withTrack,
				},
				{
					[`dui__progressbar--${pigment}`]: PigmentOptions.includes(pigment),
				},
				className
			)}
			{...rest}
			ref={ref}>
			<div
				className={cn("dui__progressbar__progress")}
				style={{ width: `${parseValueToPercent(min, max, value, decimals)}%` }}
				role='progressbar'
				aria-valuenow={value}
				aria-valuemin={min}
				aria-valuemax={max}
				ref={progressRef}
			/>
			{labeled && (
				<div
					className={cn("dui__progressbar__label", {
						[`dui__progressbar__label--${labelPosition}`]: !!labelPosition,
					})}
					style={shouldCalcPosition() ? { left: `${progressLabelPosition}px` } : {}}>
					{parsedValue()}
				</div>
			)}
		</div>
	);
};

export default React.forwardRef<HTMLDivElement, ProgressBarProps>(ProgressBar);
