import { useEffect } from "react";
import { canUseDOM } from "../helpers/functions";
import { useLocalStorage } from "./useLocalStorage";
import { usePrefersDarkMode } from "./usePrefersDarkMode";

export const useDarkMode: (preference: boolean) => any[] = (systemPreferenceFirst = true) => {
	const prefersDarkMode = usePrefersDarkMode();

	const determineInitialValue = () => {
		if (localStorage?.dui_dark_theme) {
			return localStorage?.dui_dark_theme;
		}
		if (systemPreferenceFirst) {
			return prefersDarkMode;
		}
		return false;
	};

	const [isDark, setIsDark] = useLocalStorage("dui_dark_theme", determineInitialValue());

	useEffect(() => {
		if (!canUseDOM) return;

		if (!localStorage?.dui_dark_theme) {
			document.documentElement.setAttribute("dark", prefersDarkMode.toString());
		}

		return () => {
			document.documentElement.removeAttribute("dark");
		};
	}, [prefersDarkMode]);

	useEffect(() => {
		if (!canUseDOM) return;

		document.documentElement.setAttribute("dark", isDark);

		return () => {
			document.documentElement.removeAttribute("dark");
		};
	}, [isDark]);

	return [isDark, setIsDark];
};
