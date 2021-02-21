// Auto-Generated
import React from "react";
import cn from "classnames";

import { ProgressRingProps } from "./ProgressRing.types";
import { PigmentOptions } from "../../helpers/global";
import { parseValueToPercent } from "../../helpers/functions";

const ProgressRing: React.ForwardRefRenderFunction<SVGSVGElement, ProgressRingProps> = (props, ref) => {
	const {
		className,
		size = 60,
		strokeWidth = 5,
		min = 0,
		max = 100,
		value = 0,
		labeled = false,
		labelValue = "%",
		decimals = 0,
		flat = false,
		contrast = false,
		pigment = "primary",
		withTrack = true,
		counterClockWise = false,
		...rest
	} = props;

	const normalizedRadius = size / 2 - strokeWidth;
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
				"dui__progressring",
				{
					"dui__progressring--contrast": contrast,
					"dui__progressring--flat": flat,
					"dui__progressring--reversed": counterClockWise,
				},
				{
					[`dui__progressring--${pigment}`]: PigmentOptions.includes(pigment),
				},
				className
			)}
			{...rest}
			style={{
				...rest?.["style"],
				maxWidth: size,
				maxHeight: size,
			}}
			viewBox={`0 0 ${size} ${size}`}
			ref={ref}>
			{withTrack && (
				<circle className='dui__progressring__track' strokeWidth={strokeWidth} r={normalizedRadius} cx={size / 2} cy={size / 2} />
			)}
			<circle
				strokeWidth={strokeWidth}
				strokeDasharray={circumference + " " + circumference}
				style={{ strokeDashoffset }}
				r={normalizedRadius}
				cx={size / 2}
				cy={size / 2}
			/>

			{labeled && (
				<text
					className='dui__progressring__label'
					x='50%'
					y='50%'
					textAnchor='middle'
					dy='0.35em'
					fontSize={normalizedRadius / 2.5}>
					{parsedValue()}
				</text>
			)}
		</svg>
	);
};

export default React.forwardRef<SVGSVGElement, ProgressRingProps>(ProgressRing);
