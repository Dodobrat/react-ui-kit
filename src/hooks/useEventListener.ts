import { useEffect, useRef } from "react";
import { canUseDOM } from "../helpers/functions";

export const useEventListener: (e: string, handler: Function, el?: EventTarget) => void = (e, handler, el = window) => {
	const savedHandler = useRef<Function>();

	useEffect(() => {
		savedHandler.current = handler;
	}, [handler]);

	useEffect(() => {
		if (!canUseDOM) return;

		const eventListener: (e: Event) => Function = (event) => savedHandler.current(event);

		el.addEventListener(e, eventListener);

		return () => {
			el.removeEventListener(e, eventListener);
		};
	}, [e, el]);
};
