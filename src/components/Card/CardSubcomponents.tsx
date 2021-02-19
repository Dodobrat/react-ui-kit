import React, { forwardRef } from "react";
import cn from "classnames";
import LineLoader from "../LineLoader/LineLoader";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";
import {
	CardHeaderSubComponentProps,
	CardImageSubComponentProps,
	CardLoaderSubComponentProps,
	CardSubComponentProps,
} from "./CardSubcomponents.types";
import CloseBtn from "../CloseBtn/CloseBtn";

export const CardLoader = forwardRef<HTMLDivElement, CardLoaderSubComponentProps>(
	({ className, modern = false, sticky = false, pigment, children, ...rest }, ref) => (
		<div
			className={cn("dui__card__loader", { "dui__card__loader--sticky": sticky }, { "dui__card__loader--modern": modern }, className)}
			{...rest}
			ref={ref}>
			{!!children ? children : modern ? <LineLoader pigment={pigment} /> : <SpinnerLoader pigment={pigment} />}
		</div>
	)
);

CardLoader.displayName = "CardLoader";

export const CardImage = forwardRef<HTMLDivElement, CardImageSubComponentProps>(
	({ imgLink = null, imgLinkAlt = "image", className, children, ...rest }, ref) => (
		<div className={cn("dui__card__img", className)} {...rest} ref={ref}>
			{imgLink ? <img src={imgLink} alt={imgLinkAlt} /> : children}
		</div>
	)
);

CardImage.displayName = "CardImage";

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderSubComponentProps>(
	({ className, onClose = null, closeBtnComponent, children, ...rest }, ref) => {
		return (
			<div
				className={cn(
					"dui__card__header",
					{
						"dui__card__header--dismissible": onClose,
					},
					className
				)}
				{...rest}
				ref={ref}>
				{onClose || closeBtnComponent ? (
					<>
						<div className='dui__card__header__title'>{children}</div>
						{!!closeBtnComponent ? closeBtnComponent : <CloseBtn onClick={onClose} />}
					</>
				) : (
					children
				)}
			</div>
		);
	}
);

CardHeader.displayName = "CardHeader";

export const CardBody = forwardRef<HTMLDivElement, CardSubComponentProps>(({ className, children, ...rest }, ref) => (
	<div className={cn("dui__card__body", className)} {...rest} ref={ref}>
		{children}
	</div>
));

CardBody.displayName = "CardBody";

export const CardFooter = forwardRef<HTMLDivElement, CardSubComponentProps>(({ className, children, ...rest }, ref) => (
	<div className={cn("dui__card__footer", className)} {...rest} ref={ref}>
		{children}
	</div>
));

CardFooter.displayName = "CardFooter";
