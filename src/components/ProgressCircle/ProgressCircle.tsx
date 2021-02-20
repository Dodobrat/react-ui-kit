// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { ProgressCircleProps } from "./ProgressCircle.types";
import { PigmentOptions } from "../../helpers/global";

const ProgressCircle = forwardRef<SVGSVGElement, ProgressCircleProps>(
	(
		{
			className,
			radius = 30,
			strokeWidth = 5,
			min = 0,
			max = 100,
			value = 0,
			labeled = false,
			labelValue = "%",
			fixedLabelValue = 0,
			modern = false,
			pigment = "primary",
			withTrack = true,
			counterClockWise = false,
			style,
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

		const normalizedRadius = radius - strokeWidth;
		const circumference = normalizedRadius * 2 * Math.PI;
		const strokeDashoffset = circumference - (Number(parseValueToPercent()) / 100) * circumference;

		return (
			<svg
				data-testid='ProgressCircle'
				className={cn(
					"dui__progress-circle",
					{
						"dui__progress-circle--modern": modern,
						"dui__progress-circle--reversed": counterClockWise,
					},
					{
						[`dui__progress-circle--pigment-${pigment}`]: PigmentOptions.includes(pigment),
					},
					className
				)}
				style={{
					...style,
					maxWidth: radius * 2,
					maxHeight: radius * 2,
				}}
				viewBox={`0 0 ${radius * 2} ${radius * 2}`}
				{...rest}
				ref={ref}>
				{withTrack && (
					<circle
						className='dui__progress-circle__track'
						strokeWidth={strokeWidth}
						r={normalizedRadius}
						cx={radius}
						cy={radius}
					/>
				)}
				<circle
					strokeWidth={strokeWidth}
					strokeDasharray={circumference + " " + circumference}
					style={{ strokeDashoffset }}
					r={normalizedRadius}
					cx={radius}
					cy={radius}
				/>

				{labeled && (
					<text
						className='dui__progress-circle__label'
						x='50%'
						y='50%'
						textAnchor='middle'
						dy='0.35em'
						fontSize={normalizedRadius / 2.5}>
						{labelValue === "%"
							? `${parseValueToPercent()} %`
							: labelValue === "count"
							? value
							: labelValue === "count + %" && (
									<>
										<tspan dy='-0.25em' dx='0' x='50%'>
											{value}
										</tspan>
										<tspan dy='1.25em' dx='0' x='50%'>
											{parseValueToPercent()} %
										</tspan>
									</>
							  )}
					</text>
				)}
			</svg>
		);
	}
);

export default ProgressCircle;
