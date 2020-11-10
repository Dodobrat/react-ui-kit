// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { CardProps } from "./Card.types";
import { pigmentOptions } from "../../helpers/pigments";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";
import LineLoader from "../LineLoader/LineLoader";

const Card = forwardRef<HTMLDivElement, CardProps>(
	(
		{
			headerImg = null,
			headerImgAlt = "",
			headerImgClassName = "",
			headerImgProps,
			header = null,
			headerClassName = "",
			headerProps,
			footer = null,
			footerClassName = "",
			footerProps,
			bodyClassName = "",
			bodyProps,
			modern = false,
			allowOverflow = false,
			pigment = "none",
			loading = false,
			stickyLoader = false,
			loaderPigment,
			loaderClassName = "",
			className,
			children,
			...rest
		},
		ref
	) => {
		return (
			<div
				data-testid='Card'
				className={cn(
					"dodo-ui__card",
					{
						"dodo-ui__card--modern": modern,
						"dodo-ui__card--overflow": allowOverflow,
						"dodo-ui__card--loading": loading,
					},
					{
						[`dodo-ui__card--pigment-${pigment}`]: pigmentOptions.includes(pigment),
					},
					className
				)}
				{...rest}
				ref={ref}>
				{loading && (
					<div
						className={cn(
							"dodo-ui__card__loader",
							{ "dodo-ui__card__loader--sticky": stickyLoader },
							{ "dodo-ui__card__loader--modern": modern },
							loaderClassName
						)}
						aria-label='loading'>
						{modern ? <LineLoader pigment={loaderPigment} /> : <SpinnerLoader pigment={loaderPigment} />}
					</div>
				)}
				{headerImg && (
					<div className={cn("dodo-ui__card__img", headerImgClassName)} {...headerImgProps}>
						{typeof headerImg === "string" ? <img src={headerImg} alt={headerImgAlt} /> : headerImg}
					</div>
				)}
				{header && (
					<div className={cn("dodo-ui__card__header", headerClassName)} {...headerProps}>
						{header}
					</div>
				)}
				<div className={cn("dodo-ui__card__body", bodyClassName)} {...bodyProps}>
					{children}
				</div>
				{footer && (
					<div className={cn("dodo-ui__card__footer", footerClassName)} {...footerProps}>
						{footer}
					</div>
				)}
			</div>
		);
	}
);

export default Card;
