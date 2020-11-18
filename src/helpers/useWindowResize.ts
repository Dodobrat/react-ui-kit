import { useEffect, useState } from "react";

interface useWindowResizeTypes {
	width: number;
	height: number;
}

export const useWindowResize: () => useWindowResizeTypes = () => {
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

	return dimensions;
};
