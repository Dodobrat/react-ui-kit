import { useEffect, useState } from "react";
import { canUseDOM } from "../helpers/functions";
import { useDebounce } from "./useDebounce";

export interface useWindowResizeTypes {
	width: number;
	height: number;
}

export const useWindowResize: (delay?: number) => useWindowResizeTypes = (delay = 1) => {
	const [dimensions, setDimensions] = useState<useWindowResizeTypes>({ width: 1920, height: 1080 });

	useEffect(() => {
		if (!canUseDOM) return;

		const handleResize: () => void = () => {
			setDimensions(() => ({ width: window.innerWidth, height: window.innerHeight }));
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	});

	const debouncedWindowDimensions: any = useDebounce(dimensions, delay);

	return debouncedWindowDimensions;
};
