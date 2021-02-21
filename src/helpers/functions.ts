export const parseValueToPercent: (min: number, max: number, value: number, decimals?: number) => number | string = (
	min,
	max,
	value,
	decimals
) => {
	const range: number = max - min;
	const correctedStartValue: number = value - min;
	const percentage: number = (correctedStartValue * 100) / range;
	if (decimals !== 0) {
		return Math.min(percentage, 100).toFixed(decimals);
	}
	return Math.min(percentage, 100).toFixed(0);
};

export const disableScrollAndScrollBar: (active: boolean) => void = (active) => {
	if (active) {
		const viewportWidth = document.documentElement.clientWidth;
		const windowWidth = window.innerWidth;
		const scrollBarWidth = windowWidth - viewportWidth;

		document.body.style.paddingRight = `${scrollBarWidth}px`;
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.paddingRight = `0px`;
		document.body.style.overflow = "auto";
	}
};

export const canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
