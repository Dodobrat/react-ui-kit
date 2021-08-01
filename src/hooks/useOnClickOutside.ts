import { useEffect, useRef } from "react";
import { canUseDOM } from "../helpers/functions";

export const useOnClickOutside: (
	ref: React.RefObject<HTMLElement>,
	handler: Function,
	mouseEventDir?: "up" | "down",
	touchEventDir?: "start" | "end"
) => void = (ref, handler, mouseEventDir = "up", touchEventDir = "end") => {
	const onClickRef = useRef(handler);

	useEffect(() => {
		onClickRef.current = handler;
	}, [handler]);

	useEffect(() => {
		if (!canUseDOM) return;

		const handleEvent: (e: any) => any = (e) => {
			if (!ref.current || ref.current.contains(e.target)) {
				return;
			}

			return onClickRef.current(e);
		};

		document.addEventListener(`mouse${mouseEventDir}`, handleEvent);
		document.addEventListener(`touch${touchEventDir}`, handleEvent);

		return () => {
			document.removeEventListener(`mouse${mouseEventDir}`, handleEvent);
			document.removeEventListener(`touch${touchEventDir}`, handleEvent);
		};
	}, [ref, mouseEventDir, touchEventDir]);
};
