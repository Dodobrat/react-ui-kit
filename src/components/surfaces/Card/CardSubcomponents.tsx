import React, { forwardRef } from "react";
import cn from "classnames";
import LineLoader from "../../loaders/LineLoader/LineLoader";
import SpinnerLoader from "../../loaders/SpinnerLoader/SpinnerLoader";
import {
	CardHeaderSubComponentProps,
	CardImageSubComponentProps,
	CardLoaderSubComponentProps,
	CardSubComponentProps,
} from "./CardSubcomponents.types";
import Button from "../../inputs/Button/Button";

export const CardLoader = forwardRef<HTMLDivElement, CardLoaderSubComponentProps>(
	({ className, modern = false, sticky = false, pigment, children, ...rest }, ref) => (
		<div
			className={cn(
				"dodo-ui__card__loader",
				{ "dodo-ui__card__loader--sticky": sticky },
				{ "dodo-ui__card__loader--modern": modern },
				className
			)}
			{...rest}
			ref={ref}>
			{!!children ? children : modern ? <LineLoader pigment={pigment} /> : <SpinnerLoader pigment={pigment} />}
		</div>
	)
);

CardLoader.displayName = "CardLoader";

export const CardImage = forwardRef<HTMLDivElement, CardImageSubComponentProps>(
	({ imgLink = null, imgLinkAlt = "image", className, children, ...rest }, ref) => (
		<div className={cn("dodo-ui__card__img", className)} {...rest} ref={ref}>
			{imgLink ? <img src={imgLink} alt={imgLinkAlt} /> : children}
		</div>
	)
);

CardImage.displayName = "CardImage";

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderSubComponentProps>(
	({ className, onClose = null, closeBtnModern = true, closeBtnPigment = "secondary", children, ...rest }, ref) => (
		<div
			className={cn(
				"dodo-ui__card__header",
				{
					"dodo-ui__card__header--dismissible": onClose,
				},
				className
			)}
			{...rest}
			ref={ref}>
			{onClose ? (
				<>
					<div className='dodo-ui__card__header__title'>{children}</div>
					<Button size='sm' modern={closeBtnModern} pigment={closeBtnPigment} onClick={onClose}>
						X
					</Button>
				</>
			) : (
				children
			)}
		</div>
	)
);

CardHeader.displayName = "CardHeader";

export const CardBody = forwardRef<HTMLDivElement, CardSubComponentProps>(({ className, children, ...rest }, ref) => (
	<div className={cn("dodo-ui__card__body", className)} {...rest} ref={ref}>
		{children}
	</div>
));

CardBody.displayName = "CardBody";

export const CardFooter = forwardRef<HTMLDivElement, CardSubComponentProps>(({ className, children, ...rest }, ref) => (
	<div className={cn("dodo-ui__card__footer", className)} {...rest} ref={ref}>
		{children}
	</div>
));

CardFooter.displayName = "CardFooter";
