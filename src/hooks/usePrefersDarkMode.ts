import { useState, useEffect } from "react";
import { canUseDOM } from "../helpers/functions";

export const usePrefersDarkMode: () => boolean = () => {
	const colorMatchMedia: MediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

	const [prefersDark, setPrefersDark] = useState<boolean>(colorMatchMedia.matches);

	useEffect(() => {
		if (!canUseDOM) return;

		const determineMatch: () => void = () => {
			if (colorMatchMedia.matches) {
				setPrefersDark(true);
			} else {
				setPrefersDark(false);
			}
		};

		colorMatchMedia.addEventListener("change", determineMatch);

		return () => {
			colorMatchMedia.removeEventListener("change", determineMatch);
		};
	}, []);

	return prefersDark;
};
