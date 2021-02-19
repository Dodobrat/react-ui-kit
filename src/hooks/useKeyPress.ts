import { useEffect, useRef } from "react";

export const useKeyPress = (key: number | string, callback: (e: KeyboardEvent) => void, dir: "down" | "up" = "up") => {
	const onPressRef = useRef(callback);

	useEffect(() => {
		onPressRef.current = callback;
	});

	useEffect(() => {
		const handlePress = (e: KeyboardEvent) => {
			if (typeof key === "number" && e.keyCode === key) {
				return onPressRef.current(e);
			}
			if (typeof key === "string" && e.key === key) {
				return onPressRef.current(e);
			}
		};
		document.addEventListener(`key${dir}`, handlePress);
		return () => {
			document.removeEventListener(`key${dir}`, handlePress);
		};
	}, [key]);
};
