import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";

interface useWindowResizeTypes {
	width: number;
	height: number;
}

export const useWindowResize: (delay?: number) => useWindowResizeTypes = (delay = 1) => {
	const isSSR: boolean = typeof window === "undefined";
	const [dimensions, setDimensions] = useState<useWindowResizeTypes>(() =>
		isSSR ? { width: 1920, height: 1080 } : { width: window.innerWidth, height: window.innerHeight }
	);

	useEffect(() => {
		if (!isSSR) {
			const handleResize: () => void = () => {
				setDimensions(() => ({ width: window.innerWidth, height: window.innerHeight }));
			};
			window.addEventListener("resize", handleResize);
			return () => {
				window.removeEventListener("resize", handleResize);
			};
		}
	});

	const debouncedWindowDimensions: any = useDebounce(dimensions, delay);

	return debouncedWindowDimensions;
};
