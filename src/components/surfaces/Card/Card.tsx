// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { CardProps } from "./Card.types";
import { pigmentOptions } from "../../../helpers/pigments";
import { Body, Footer, Header, Image, Loader } from "./CardSubcomponents";
import { CardImageSubComponentProps, CardLoaderSubComponentProps, CardSubComponentProps } from "./CardSubcomponents.types";

interface CardComponent extends React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLInputElement>> {
	Loader: React.FC<CardLoaderSubComponentProps>;
	Image: React.FC<CardImageSubComponentProps>;
	Header: React.FC<CardSubComponentProps>;
	Body: React.FC<CardSubComponentProps>;
	Footer: React.FC<CardSubComponentProps>;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
	({ cardImgPosition = "top", modern = false, allowOverflow = false, pigment, loading = false, className, children, ...rest }, ref) => {
		const loader = React.Children.map(children, (child: JSX.Element) => (child.type.displayName === "Loader" ? child : null));
		const image = React.Children.map(children, (child: JSX.Element) => (child.type.displayName === "Image" ? child : null));
		const header = React.Children.map(children, (child: JSX.Element) => (child.type.displayName === "Header" ? child : null));
		const body = React.Children.map(children, (child: JSX.Element) => (child.type.displayName === "Body" ? child : null));
		const footer = React.Children.map(children, (child: JSX.Element) => (child.type.displayName === "Footer" ? child : null));

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
						[`dodo-ui__card--img-${cardImgPosition}`]: image.length > 0,
					},
					{
						[`dodo-ui__card--pigment-${pigment}`]: pigmentOptions.includes(pigment),
					},
					className
				)}
				{...rest}
				ref={ref}>
				{loading && loader.length > 0 ? loader : loading ? <Loader modern={modern} /> : null}
				{image}
				{header}
				{body}
				{footer}
			</div>
		);
	}
) as CardComponent;

Card.Loader = Loader;
Card.Image = Image;
Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
