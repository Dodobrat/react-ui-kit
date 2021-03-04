import { useEffect, useRef } from "react";
import { canUseDOM } from "../helpers/functions";

export const useKeyPress: (key: number | string, handler: (e: KeyboardEvent) => void, dir?: "down" | "up") => void = (
	key,
	handler,
	dir = "up"
) => {
	const onPressRef = useRef(handler);

	useEffect(() => {
		onPressRef.current = handler;
	}, [handler]);

	useEffect(() => {
		if (!canUseDOM) return;

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
