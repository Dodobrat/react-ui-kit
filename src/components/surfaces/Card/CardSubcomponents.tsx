import React from "react";
import cn from "classnames";
import LineLoader from "../../loaders/LineLoader/LineLoader";
import SpinnerLoader from "../../loaders/SpinnerLoader/SpinnerLoader";
import { CardImageSubComponentProps, CardLoaderSubComponentProps, CardSubComponentProps } from "./CardSubcomponents.types";

export const CardLoader: React.FC<CardLoaderSubComponentProps> = ({
	className,
	modern = false,
	sticky = false,
	pigment,
	children,
	...rest
}) => (
	<div
		className={cn(
			"dodo-ui__card__loader",
			{ "dodo-ui__card__loader--sticky": sticky },
			{ "dodo-ui__card__loader--modern": modern },
			className
		)}
		{...rest}>
		{!!children ? children : modern ? <LineLoader pigment={pigment} /> : <SpinnerLoader pigment={pigment} />}
	</div>
);

CardLoader.displayName = "CardLoader";

export const CardImage: React.FC<CardImageSubComponentProps> = ({ imgLink = null, imgLinkAlt = "image", className, children, ...rest }) => (
	<div className={cn("dodo-ui__card__img", className)} {...rest}>
		{imgLink ? <img src={imgLink} alt={imgLinkAlt} /> : children}
	</div>
);

CardImage.displayName = "CardImage";

export const CardHeader: React.FC<CardSubComponentProps> = ({ className, children, ...rest }) => (
	<div className={cn("dodo-ui__card__header", className)} {...rest}>
		{children}
	</div>
);

CardHeader.displayName = "CardHeader";

export const CardBody: React.FC<CardSubComponentProps> = ({ className, children, ...rest }) => (
	<div className={cn("dodo-ui__card__body", className)} {...rest}>
		{children}
	</div>
);

CardBody.displayName = "CardBody";

export const CardFooter: React.FC<CardSubComponentProps> = ({ className, children, ...rest }) => (
	<div className={cn("dodo-ui__card__footer", className)} {...rest}>
		{children}
	</div>
);

CardFooter.displayName = "CardFooter";
