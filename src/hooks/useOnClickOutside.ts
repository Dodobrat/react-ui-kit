import { useEffect } from "react";

export const useOnClickOutside: (
	ref: React.RefObject<HTMLElement>,
	handler: Function,
	mouseEventDir?: "up" | "down",
	touchEventDir?: "start" | "end"
) => void = (ref, handler, mouseEventDir = "up", touchEventDir = "end") => {
	useEffect(() => {
		const listener: (event: any) => void = (event) => {
			if (!ref.current || ref.current.contains(event.target)) {
				return;
			}

			handler(event);
		};

		document.addEventListener(`mouse${mouseEventDir}`, listener);
		document.addEventListener(`touch${touchEventDir}`, listener);

		return () => {
			document.removeEventListener(`mouse${mouseEventDir}`, listener);
			document.removeEventListener(`touch${touchEventDir}`, listener);
		};
	}, [ref, handler]);
};
