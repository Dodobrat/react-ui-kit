import { useEffect, useRef } from "react";
import { canUseDOM } from "../helpers/functions";

export const useKeyPress: (key: any, handler: Function, dir?: "down" | "up") => void = (key, handler, dir = "up") => {
	const onPressRef = useRef(handler);

	useEffect(() => {
		onPressRef.current = handler;
	}, [handler]);

	useEffect(() => {
		if (!canUseDOM) return;

		const handlePress: (e: any) => any = (e) => {
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
