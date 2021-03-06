import { useState } from "react";
import { canUseDOM } from "../helpers/functions";

export const useLocalStorage: (key: string, initialValue: any) => any[] = (key, initialValue) => {
	const [storedValue, setStoredValue] = useState<any>(() => {
		if (!canUseDOM) return;

		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (err) {
			console.log(err);
			return initialValue;
		}
	});

	const setValue: (value: any) => void = (value) => {
		if (!canUseDOM) return;

		try {
			const valueToStore = value instanceof Function ? value(storedValue) : value;
			setStoredValue(valueToStore);
			window.localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (err) {
			console.log(err);
		}
	};

	return [storedValue, setValue];
};
