// Auto-Generated
import React from "react";
import cn from "classnames";

import { ProgressRingProps } from "./ProgressRing.types";
import { parseValueToPercent } from "../../helpers/functions";
import { useConfig } from "../../context/ConfigContext";
import { generateStyleClasses } from "../../helpers/classnameGenerator";

const ProgressRing: React.ForwardRefRenderFunction<SVGSVGElement, ProgressRingProps> = (props, ref) => {
	const {
		appConfig: { config },
	} = useConfig();

	const {
		className,
		sizing = 60,
		strokeWidth = 5,
		min = 0,
		max = 100,
		value = 0,
		labeled = config.progressRingLabeled ?? false,
		labelValue = config.progressRingLabeleValue ?? "%",
		labelAlwaysVisible = true,
		decimals = 0,
		flavor = config.flavor ?? "default",
		pigment = config.pigment ?? "primary",
		withTrack = true,
		counterClockWise = config.progressRingCounterClockWise ?? false,
		...rest
	} = props;

	const classDefaults = {
		pigment,
		flavor,
	};

	const classBase = "dui__progressring";

	const normalizedRadius = sizing / 2 - strokeWidth;
	const circumference = normalizedRadius * 2 * Math.PI;
	const strokeDashoffset = circumference - (Number(parseValueToPercent(min, max, value, decimals)) / 100) * circumference;

	const parsedValue: () => number | string | React.ReactNode = () => {
		if (labelValue === "%") {
			return `${parseValueToPercent(min, max, value, decimals)} %`;
		}
		if (labelValue === "count") {
			return value;
		}
		if (labelValue === "count + %") {
			return (
				<>
					<tspan dy='-0.25em' dx='0' x='50%'>
						{value}
					</tspan>
					<tspan dy='1.25em' dx='0' x='50%'>
						{parseValueToPercent(min, max, value, decimals)} %
					</tspan>
				</>
			);
		}
	};

	return (
		<svg
			data-testid='ProgressRing'
			className={cn(
				classBase,
				{
					[`${classBase}--label-always`]: labelAlwaysVisible,
					[`${classBase}--reversed`]: counterClockWise,
				},
				generateStyleClasses(classDefaults),
				className
			)}
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
			{...rest}
			style={{
				...rest?.["style"],
				maxWidth: sizing,
				maxHeight: sizing,
			}}
			viewBox={`0 0 ${sizing} ${sizing}`}
			ref={ref}>
			{withTrack && (
				<circle className={`${classBase}__track`} strokeWidth={strokeWidth} r={normalizedRadius} cx={sizing / 2} cy={sizing / 2} />
			)}
			<circle
				strokeWidth={strokeWidth}
				strokeDasharray={circumference + " " + circumference}
				style={{ strokeDashoffset }}
				r={normalizedRadius}
				cx={sizing / 2}
				cy={sizing / 2}
			/>

			{labeled && (
				<text className={`${classBase}__label`} x='50%' y='50%' textAnchor='middle' dy='0.35em' fontSize={normalizedRadius / 2.75}>
					{parsedValue()}
				</text>
			)}
		</svg>
	);
};

export default React.forwardRef<SVGSVGElement, ProgressRingProps>(ProgressRing);
