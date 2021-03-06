import React, { forwardRef } from "react";
import cn from "classnames";
import LineLoader from "../LineLoader/LineLoader";
import { CardHeaderSubComponentProps, CardImageSubComponentProps, CardLoaderSubComponentProps } from "./CardSubcomponents.types";
import { CnCh } from "../../helpers/global.types";

export const CardLoader = forwardRef<HTMLDivElement, CardLoaderSubComponentProps>((props, ref) => {
	const { className, pigment, contrast, children, ...rest } = props;

	return (
		<div className={cn("dui__card__loader", className)} {...rest} ref={ref}>
			{!!children ? children : <LineLoader pigment={pigment} contrast={contrast} />}
		</div>
	);
});

CardLoader.displayName = "CardLoader";

export const CardImage = forwardRef<HTMLDivElement, CardImageSubComponentProps>((props, ref) => {
	const { imgLink = null, imgProps = { alt: "Image" }, className, children, ...rest } = props;

	return (
		<div className={cn("dui__card__img", className)} {...rest} ref={ref}>
			{imgLink ? <img src={imgLink} {...imgProps} /> : children}
		</div>
	);
});

CardImage.displayName = "CardImage";

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderSubComponentProps>((props, ref) => {
	const { className, actions = null, children, ...rest } = props;

	return (
		<div
			className={cn(
				"dui__card__header",
				{
					"dui__card__header--rich": actions,
				},
				className
			)}
			{...rest}
			ref={ref}>
			{actions ? (
				<>
					<div className='dui__card__header__title'>{children}</div>
					<div className='dui__card__header__actions'>{actions}</div>
				</>
			) : (
				children
			)}
		</div>
	);
});

CardHeader.displayName = "CardHeader";

export const CardBody = forwardRef<HTMLDivElement, CnCh>((props, ref) => {
	const { className, children, ...rest } = props;

	return (
		<div className={cn("dui__card__body", className)} {...rest} ref={ref}>
			{children}
		</div>
	);
});

CardBody.displayName = "CardBody";

export const CardFooter = forwardRef<HTMLDivElement, CnCh>((props, ref) => {
	const { className, children, ...rest } = props;

	return (
		<div className={cn("dui__card__footer", className)} {...rest} ref={ref}>
			{children}
		</div>
	);
});

CardFooter.displayName = "CardFooter";
