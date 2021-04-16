// Auto-Generated
import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import { ProgressBarProps } from "./ProgressBar.types";
import { useWindowResize } from "../../hooks/useWindowResize";
import { parseValueToPercent } from "../../helpers/functions";
import { useConfig } from "../../context/ConfigContext";
import { generateStyleClasses } from "../../helpers/classnameGenerator";

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
		flavor = config.flavor ?? "default",
		pigment = config.pigment ?? "primary",
		withTrack = true,
		...rest
	} = props;

	const classDefaults = {
		pigment,
		flavor,
	};

	const classBase = "dui__progressbar";

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
		}
	}, [value, min, max, width, labeled]);

	return (
		<div
			data-testid='ProgressBar'
			className={cn(
				classBase,
				{
					[`${classBase}--label-always`]: labelAlwaysVisible,
					[`${classBase}--no-track`]: !withTrack,
				},
				generateStyleClasses(classDefaults),
				className
			)}
			{...rest}
			ref={ref}>
			<div
				className={cn(`${classBase}__progress`)}
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
					className={cn(`${classBase}__label`, {
						[`${classBase}__label--${labelPosition}`]: !!labelPosition,
					})}
					style={shouldCalcPosition() ? { left: `${progressLabelPosition}px` } : {}}>
					{parsedValue()}
				</div>
			)}
		</div>
	);
};

export default React.forwardRef<HTMLDivElement, ProgressBarProps>(ProgressBar);
