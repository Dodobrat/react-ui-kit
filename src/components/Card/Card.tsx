// Auto-Generated
import React, { forwardRef } from "react";
import cn from "classnames";

import { CardProps } from "./Card.types";
import { CardBody, CardFooter, CardHeader, CardImage, CardLoader } from "./CardSubcomponents";
import { CardHeaderSubComponentProps, CardImageSubComponentProps, CardLoaderSubComponentProps } from "./CardSubcomponents.types";
import { CnCh } from "../../helpers/global.types";
import { useConfig } from "../../context/ConfigContext";
import { generateLoadingClasses, generateStyleClasses } from "../../helpers/classnameGenerator";

export interface CardComponent extends React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>> {
	Loader: React.ForwardRefExoticComponent<CardLoaderSubComponentProps & React.RefAttributes<HTMLDivElement>>;
	Image: React.ForwardRefExoticComponent<CardImageSubComponentProps & React.RefAttributes<HTMLDivElement>>;
	Header: React.ForwardRefExoticComponent<CardHeaderSubComponentProps & React.RefAttributes<HTMLDivElement>>;
	Body: React.ForwardRefExoticComponent<CnCh & React.RefAttributes<HTMLDivElement>>;
	Footer: React.ForwardRefExoticComponent<CnCh & React.RefAttributes<HTMLDivElement>>;
}

const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
	const {
		appConfig: { config },
	} = useConfig();

	const {
		imgPosition = config.cardImgPosition ?? "top",
		pigment = "default",
		elevation = config.elevation ?? "subtle",
		flavor = config.flavor ?? "default",
		disableWhileLoading = true,
		isLoading = false,
		className,
		children,
		...rest
	} = props;

	const classDefaults = {
		elevation,
		pigment,
		flavor,
		isLoading,
		disableWhileLoading,
	};

	const classBase = "dui__card";

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
				classBase,
				{
					[`${classBase}--img img-${imgPosition}`]: image.length > 0,
				},
				generateStyleClasses(classDefaults),
				generateLoadingClasses(classBase, classDefaults),
				className
			)}
			{...rest}
			ref={ref}>
			{isLoading && loader.length === 0 && <CardLoader />}
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
