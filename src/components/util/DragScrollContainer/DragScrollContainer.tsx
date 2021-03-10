// Auto-Generated
import React, { useRef, useState } from "react";
import cn from "classnames";

import { DragScrollContainerProps } from "./DragScrollContainer.types";
import ScrollContainer from "react-indiana-drag-scroll";
import Fade from "../animations/Fade";

const DragScrollContainer: React.ForwardRefRenderFunction<HTMLDivElement, DragScrollContainerProps> = (props, ref) => {
	const {
		className,
		activationDistance = 10,
		horizontal = true,
		vertical = false,
		onScroll,
		indicatorClassName,
		children,
		...rest
	} = props;

	const scrollListRef = useRef(null);
	const [isAtStartX, setIsAtStartX] = useState<boolean>(true);
	const [isAtStartY, setIsAtStartY] = useState<boolean>(true);
	const [isAtEndX, setIsAtEndX] = useState<boolean>(false);
	const [isAtEndY, setIsAtEndY] = useState<boolean>(false);

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

	const DragScrollIndicator = ({ position = "start" }) => {
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
				onClick={() => {
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
				}}>
				{position}
			</div>
		);
	};

	return (
		<div data-testid='DragScrollContainer' className={cn("dui__dragscroll__container", className)} {...rest} ref={ref}>
			<Fade in={!isAtStartX && horizontal}>
				<DragScrollIndicator position='startX' />
			</Fade>
			<Fade in={!isAtStartY && vertical}>
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

			<Fade in={!isAtEndX && horizontal}>
				<DragScrollIndicator position='endX' />
			</Fade>
			<Fade in={!isAtEndY && vertical}>
				<DragScrollIndicator position='endY' />
			</Fade>
		</div>
	);
};

export default React.forwardRef<HTMLDivElement, DragScrollContainerProps>(DragScrollContainer);
