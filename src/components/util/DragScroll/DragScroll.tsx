// Auto-Generated
import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import { DragScrollProps } from "./DragScroll.types";
import ScrollContainer from "react-indiana-drag-scroll";
import Fade from "../animations/Fade";
import { CaretDown, CaretLeft, CaretRight, CaretUp } from "../../icons";
import { useWindowResize } from "../../../hooks/useWindowResize";

const DragScroll: React.ForwardRefRenderFunction<HTMLDivElement, DragScrollProps> = (props, ref) => {
	const {
		className,
		activationDistance = 10,
		horizontal = true,
		vertical = false,
		onScroll,
		indicatorClassName,
		indicatorComponent,
		children,
		...rest
	} = props;

	const { width } = useWindowResize();

	const scrollListRef = useRef(null);
	const [isScrollable, setIsScrollable] = useState<boolean>(false);
	const [isAtStartX, setIsAtStartX] = useState<boolean>(true);
	const [isAtStartY, setIsAtStartY] = useState<boolean>(true);
	const [isAtEndX, setIsAtEndX] = useState<boolean>(false);
	const [isAtEndY, setIsAtEndY] = useState<boolean>(false);

	const isOverflowing = () => {
		const container = scrollListRef.current?.container?.current;

		if (container) {
			return container.scrollWidth > container.clientWidth || container.scrollHeight > container.clientHeight;
		}
	};

	useEffect(() => {
		const handler = setTimeout(() => {
			setIsScrollable(isOverflowing());
		}, 500);

		return () => {
			clearTimeout(handler);
		};
	}, [width, horizontal, vertical]);

	const manageIndicatorVisibility: (scrollLeft: number, scrollTop: number, scrollWidth: number, scrollHeight: number) => void = (
		scrollLeft,
		scrollTop,
		scrollWidth,
		scrollHeight
	) => {
		const containerEl = scrollListRef.current.container.current;
		if (containerEl) {
			if (horizontal) {
				const containerWidth = containerEl.offsetWidth;
				if (scrollLeft > activationDistance) {
					setIsAtStartX(() => false);
				} else {
					setIsAtStartX(() => true);
				}

				if (scrollWidth - activationDistance < containerWidth + scrollLeft) {
					setIsAtEndX(() => true);
				} else {
					setIsAtEndX(() => false);
				}
			}
			if (vertical) {
				const containerHeight = containerEl.offsetHeight;
				if (scrollTop > activationDistance) {
					setIsAtStartY(() => false);
				} else {
					setIsAtStartY(() => true);
				}

				if (scrollHeight - activationDistance < containerHeight + scrollTop) {
					setIsAtEndY(() => true);
				} else {
					setIsAtEndY(() => false);
				}
			}
		}
		if (onScroll) {
			onScroll(scrollLeft, scrollTop, scrollWidth, scrollHeight);
		}
	};

	const showIndicator: (position: string) => string | React.ReactNode = (position) => {
		switch (position) {
			case "startX":
				return <CaretLeft />;
			case "startY":
				return <CaretUp />;
			case "endX":
				return <CaretRight />;
			case "endY":
				return <CaretDown />;
			default:
				return position;
		}
	};

	const scrollInDirection: (position: string) => void = (position) => {
		const container = scrollListRef.current.container.current;
		const containerWidth = container.offsetWidth;
		const containerHeight = container.offsetHeight;
		let scrolledX = container.scrollLeft;
		let scrolledY = container.scrollTop;

		switch (position) {
			case "startX":
				container.scrollTo({
					left: (scrolledX -= containerWidth / 2),
					behavior: "smooth",
				});
				break;
			case "startY":
				container.scrollTo({
					top: (scrolledY -= containerHeight / 2),
					behavior: "smooth",
				});
				break;
			case "endX":
				container.scrollTo({
					left: (scrolledX += containerWidth / 2),
					behavior: "smooth",
				});
				break;
			case "endY":
				container.scrollTo({
					top: (scrolledY += containerHeight / 2),
					behavior: "smooth",
				});
				break;
			default:
				break;
		}
	};

	const DragScrollIndicator = ({ position }) => {
		return (
			<div
				role='button'
				className={cn(
					"dui__dragscroll__container__indicator",
					{
						"dui__dragscroll__container__indicator--startX": position === "startX",
						"dui__dragscroll__container__indicator--startY": position === "startY",
						"dui__dragscroll__container__indicator--endX": position === "endX",
						"dui__dragscroll__container__indicator--endY": position === "endY",
					},
					indicatorClassName
				)}
				onClick={() => scrollInDirection(position)}
				tabIndex={-1}>
				{indicatorComponent ?? showIndicator(position)}
			</div>
		);
	};

	return (
		<div data-testid='DragScrollContainer' className={cn("dui__dragscroll__container", className)} {...rest} ref={ref}>
			<Fade in={!isAtStartX && isScrollable && horizontal}>
				<DragScrollIndicator position='startX' />
			</Fade>
			<Fade in={!isAtStartY && isScrollable && vertical}>
				<DragScrollIndicator position='startY' />
			</Fade>

			<ScrollContainer
				ref={scrollListRef}
				activationDistance={activationDistance}
				horizontal={horizontal}
				vertical={vertical}
				onScroll={manageIndicatorVisibility}>
				{children}
			</ScrollContainer>

			<Fade in={!isAtEndX && isScrollable && horizontal}>
				<DragScrollIndicator position='endX' />
			</Fade>
			<Fade in={!isAtEndY && isScrollable && vertical}>
				<DragScrollIndicator position='endY' />
			</Fade>
		</div>
	);
};

export default React.forwardRef<HTMLDivElement, DragScrollProps>(DragScroll);
