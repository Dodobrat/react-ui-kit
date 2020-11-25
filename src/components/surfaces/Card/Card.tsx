// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { CardProps } from "./Card.types";
import { pigmentOptions } from "../../../helpers/pigments";
import { CardBody, CardFooter, CardHeader, CardImage, CardLoader } from "./CardSubcomponents";
import {
	CardHeaderSubComponentProps,
	CardImageSubComponentProps,
	CardLoaderSubComponentProps,
	CardSubComponentProps,
} from "./CardSubcomponents.types";

interface CardComponent extends React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>> {
	Loader: React.ForwardRefExoticComponent<CardLoaderSubComponentProps & React.RefAttributes<HTMLDivElement>>;
	Image: React.ForwardRefExoticComponent<CardImageSubComponentProps & React.RefAttributes<HTMLDivElement>>;
	Header: React.ForwardRefExoticComponent<CardHeaderSubComponentProps & React.RefAttributes<HTMLDivElement>>;
	Body: React.ForwardRefExoticComponent<CardSubComponentProps & React.RefAttributes<HTMLDivElement>>;
	Footer: React.ForwardRefExoticComponent<CardSubComponentProps & React.RefAttributes<HTMLDivElement>>;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
	({ cardImgPosition = "top", modern = false, allowOverflow = false, pigment, loading = false, className, children, ...rest }, ref) => {
		const loader: JSX.Element[] = React.Children.map(children, (child: JSX.Element) =>
			child.type?.displayName === "CardLoader" ? child : null
		);
		const image: JSX.Element[] = React.Children.map(children, (child: JSX.Element) =>
			child.type?.displayName === "CardImage" ? child : null
		);

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
				{loading && loader.length > 0 ? loader : loading ? <CardLoader modern={modern} /> : null}
				{children}
			</div>
		);
	}
) as CardComponent;

Card.Loader = CardLoader;
Card.Image = CardImage;
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
