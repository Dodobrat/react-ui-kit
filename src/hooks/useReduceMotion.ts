import { useState, useEffect } from "react";
import { canUseDOM } from "../helpers/functions";

export const useReduceMotion: () => boolean = () => {
	const motionMatchMedia: MediaQueryList = window.matchMedia("(prefers-reduced-motion)");

	const [shouldReduceMotion, setShouldReduceMotion] = useState<boolean>(motionMatchMedia.matches);

	useEffect(() => {
		if (!canUseDOM) return;

		const determineMatch: () => void = () => {
			if (motionMatchMedia.matches) {
				setShouldReduceMotion(true);
			} else {
				setShouldReduceMotion(false);
			}
		};

		motionMatchMedia.addEventListener("change", determineMatch);

		return () => {
			motionMatchMedia.removeEventListener("change", determineMatch);
		};
	}, []);

	return shouldReduceMotion;
};
