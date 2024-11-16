import { useCallback, useEffect, useRef } from "react";

type Previous<T> = {
	initial: boolean;

	value: T;
};

export function useWatch<T>(
	value: T,
	onChanged?: (previous: T, current: T) => void,
	deps: unknown[] = [],
) {
	const previousRef = useRef<Previous<T>>({ initial: true, value });

	// NOTE: Dependencies list are used apply or not a new version of `onChanged`
	//       function.
	/* eslint-disable react-hooks/exhaustive-deps */
	const handleChanged = useCallback(
		(previous: T, current: T) => {
			onChanged?.(previous, current);
		},
		[...deps],
	);
	/* eslint-enable */

	useEffect(() => {
		const { current: previous } = previousRef;

		if (previous.initial || previous.value !== value) {
			handleChanged(previous.value, value);
		}

		previousRef.current = { initial: false, value };
	}, [value, handleChanged]);
}
