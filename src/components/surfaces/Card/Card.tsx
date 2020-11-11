// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { CardProps } from "./Card.types";
import { pigmentOptions } from "../../../helpers/pigments";
import SpinnerLoader from "../../loaders/SpinnerLoader/SpinnerLoader";
import LineLoader from "../../loaders/LineLoader/LineLoader";

const Card = forwardRef<HTMLDivElement, CardProps>(
	(
		{
			cardImgPosition = "top",
			cardImg = null,
			cardImgAlt = "",
			cardImgClassName = "",
			cardImgProps,
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
						[`dodo-ui__card--img-${cardImgPosition}`]: !!cardImg,
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
				{cardImg && (
					<div className={cn("dodo-ui__card__img", cardImgClassName)} {...cardImgProps}>
						{typeof cardImg === "string" ? <img src={cardImg} alt={cardImgAlt} /> : cardImg}
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
