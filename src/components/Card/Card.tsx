// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { CardProps } from "./Card.types";
import { CardBody, CardFooter, CardHeader, CardImage, CardLoader } from "./CardSubcomponents";
import {
	CardHeaderSubComponentProps,
	CardImageSubComponentProps,
	CardLoaderSubComponentProps,
	CardSubComponentProps,
} from "./CardSubcomponents.types";
import { ElevationOptions, PigmentOptions } from "../../helpers/global";

interface CardComponent extends React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>> {
	Loader: React.ForwardRefExoticComponent<CardLoaderSubComponentProps & React.RefAttributes<HTMLDivElement>>;
	Image: React.ForwardRefExoticComponent<CardImageSubComponentProps & React.RefAttributes<HTMLDivElement>>;
	Header: React.ForwardRefExoticComponent<CardHeaderSubComponentProps & React.RefAttributes<HTMLDivElement>>;
	Body: React.ForwardRefExoticComponent<CardSubComponentProps & React.RefAttributes<HTMLDivElement>>;
	Footer: React.ForwardRefExoticComponent<CardSubComponentProps & React.RefAttributes<HTMLDivElement>>;
}

const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
	const {
		imgPosition = "top",
		elevation = "subtle",
		pigment = null,
		contrast = false,
		flat = false,
		allowOverflow = true,
		disableWhileLoading = true,
		loading = false,
		className,
		children,
		...rest
	} = props;

	const loader: JSX.Element[] = React.Children.map(children, (child: JSX.Element) =>
		child?.type?.displayName === "CardLoader" ? child : null
	);

	const image: JSX.Element[] = React.Children.map(children, (child: JSX.Element) =>
		child?.type?.displayName === "CardImage" ? child : null
	);

	return (
		<div
			data-testid='Card'
			className={cn(
				"dui__card",
				{
					"dui__card--contrast": contrast,
					"dui__card--flat": flat,
					"dui__card--loading": loading,
					"dui__card--loading-disabled": loading && disableWhileLoading,
					"no-overflow": !allowOverflow,
				},
				{
					[`dui__card--${pigment}`]: PigmentOptions.includes(pigment),
					[`dui__card--img img-${imgPosition}`]: image.length > 0,
					[`dui__elevation--${elevation}`]: ElevationOptions.includes(elevation) && elevation !== "none",
				},
				className
			)}
			{...rest}
			ref={ref}>
			{loading && loader.length === 0 && <CardLoader />}
			{children}
		</div>
	);
}) as CardComponent;

Card.Loader = CardLoader;
Card.Image = CardImage;
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
