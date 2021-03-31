// Auto-Generated
import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import { ProgressBarProps } from "./ProgressBar.types";
import { PigmentOptions } from "../../helpers/global";
import { useWindowResize } from "../../hooks/useWindowResize";
import { parseValueToPercent } from "../../helpers/functions";
import { useConfig } from "../../context/ConfigContext";

const ProgressBar: React.ForwardRefRenderFunction<HTMLDivElement, ProgressBarProps> = (props, ref) => {
	const {
		appConfig: { config },
	} = useConfig();

	const {
		className,
		min = 0,
		max = 100,
		value = 0,
		labeled = config.progressBarLabeled ?? false,
		labelValue = config.progressBarLabelValue ?? "%",
		labelPosition = config.progressBarLabelPosition ?? "top",
		labelAlwaysVisible = false,
		decimals = 0,
		rounded = config.rounded ?? false,
		flat = config.flat ?? false,
		pigment = config.pigment ?? "primary",
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
		if (labeled) {
			const progressBarParentLength: number = progressRef?.current?.parentElement?.getBoundingClientRect?.()?.width;
			const progressBarLength: number = (progressBarParentLength * Number(parseValueToPercent(min, max, value, decimals))) / 100;
			const progressBarLabel: HTMLElement = progressRef?.current?.nextSibling;
			const progressBarLabelDimensions: number = progressBarLabel?.getBoundingClientRect?.()?.width;

			if (progressBarLength < progressBarLabelDimensions / 2) {
				setProgressLabelPosition(() => progressBarLabelDimensions / 2);
			} else if (progressBarParentLength - progressBarLength < progressBarLabelDimensions / 2) {
				setProgressLabelPosition(() => progressBarParentLength - progressBarLabelDimensions / 2);
			} else {
				setProgressLabelPosition(() => progressBarLength ?? 0);
			}
			return () => setProgressLabelPosition(0);
		}
	}, [value, min, max, width, labeled]);

	return (
		<div
			data-testid='ProgressBar'
			className={cn(
				"dui__progressbar",
				{
					"dui__progressbar--flat": flat,
					"dui__progressbar--rounded": rounded,
					"dui__progressbar--label-always": labelAlwaysVisible,
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
				aria-label={`current progress is ${value} from range (${min} to ${max}), amounting to ${parseValueToPercent(
					min,
					max,
					value,
					decimals
				)}%`}
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
