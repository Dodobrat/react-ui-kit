import { useState, useEffect } from "react";

interface useDebounceTypes {
	value: any;
}

export const useDebounce: (value: any, delay?: number) => useDebounceTypes = (value, delay = 500) => {
	const [debouncedValue, setDebouncedValue] = useState<any>(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	return debouncedValue;
};
