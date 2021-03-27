import { useEffect, useRef } from "react";
import { canUseDOM } from "../helpers/functions";

export const useEventListener: (e: any, handler: Function, eventOptions?: any, el?: Window & typeof globalThis) => void = (
	e,
	handler,
	eventOptions,
	el = window
) => {
	const savedHandler = useRef<Function>();

	useEffect(() => {
		savedHandler.current = handler;
	}, [handler]);

	useEffect(() => {
		if (!canUseDOM) return;

		if (el) {
			const eventListener: (event: any) => any = (event) => savedHandler.current(event);

			el.addEventListener(e, eventListener, eventOptions);

			return () => {
				el.removeEventListener(e, eventListener, eventOptions);
			};
		}
	}, [e, el]);
};
