import { useEffect, useRef } from "react";
import { canUseDOM } from "../helpers/functions";

export const useEventListener: (e: any, handler: Function, el?: Window & typeof globalThis) => void = (e, handler, el = window) => {
	const savedHandler = useRef<Function>();

	useEffect(() => {
		savedHandler.current = handler;
	}, [handler]);

	useEffect(() => {
		if (!canUseDOM) return;

		if (el) {
			const eventListener: (event: any) => any = (event) => savedHandler.current(event);

			el.addEventListener(e, eventListener);

			return () => {
				el.removeEventListener(e, eventListener);
			};
		}
	}, [e, el]);
};
