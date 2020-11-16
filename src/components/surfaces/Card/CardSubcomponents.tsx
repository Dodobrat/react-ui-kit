import React from "react";
import cn from "classnames";
import LineLoader from "../../loaders/LineLoader/LineLoader";
import SpinnerLoader from "../../loaders/SpinnerLoader/SpinnerLoader";
import { CardImageSubComponentProps, CardLoaderSubComponentProps, CardSubComponentProps } from "./CardSubcomponents.types";

export const Loader: React.FC<CardLoaderSubComponentProps> = ({
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

Loader.displayName = "Loader";

export const Image: React.FC<CardImageSubComponentProps> = ({ imgLink = null, imgLinkAlt = "image", className, children, ...rest }) => (
	<div className={cn("dodo-ui__card__img", className)} {...rest}>
		{imgLink ? <img src={imgLink} alt={imgLinkAlt} /> : children}
	</div>
);

Image.displayName = "Image";

export const Header: React.FC<CardSubComponentProps> = ({ className, children, ...rest }) => (
	<div className={cn("dodo-ui__card__header", className)} {...rest}>
		{children}
	</div>
);

Header.displayName = "Header";

export const Body: React.FC<CardSubComponentProps> = ({ className, children, ...rest }) => (
	<div className={cn("dodo-ui__card__body", className)} {...rest}>
		{children}
	</div>
);

Body.displayName = "Body";

export const Footer: React.FC<CardSubComponentProps> = ({ className, children, ...rest }) => (
	<div className={cn("dodo-ui__card__footer", className)} {...rest}>
		{children}
	</div>
);

Footer.displayName = "Footer";
