import { RefObject, useCallback, useMemo, useRef, useState } from "react";

import { useWatch } from "@/hooks/useWatch";

import { UiModalAction } from "@/ui/UiModal";

import { Message, useContext } from "./UiAlert.Context";

type Result = {
	isOpened: boolean;

	message: Message;
	actions: UiModalAction[];

	onClose: () => void;
	onClosed: () => void;

	initialFocusRef: RefObject<HTMLElement>;
};

export function useModal(): Result {
	const initialFocusRef = useRef<HTMLButtonElement>(null);

	const { message, onMessage } = useContext();

	const [isOpened, setIsOpened] = useState(message != null);

	useWatch(
		message,
		(_, current) => {
			if (current != null) {
				setIsOpened(true);
			}
		},
		[],
	);

	const handleClose = useCallback(() => {
		setIsOpened(false);
	}, []);

	const handleClosed = useCallback(() => {
		onMessage(null);
	}, [onMessage]);

	const actions: UiModalAction[] = useMemo(
		() => [
			{
				id: "ok",

				onAction: handleClose,

				label: "OK",
				variant: "danger",

				ref: initialFocusRef,
			},
		],
		[handleClose, initialFocusRef],
	);

	return {
		isOpened,

		message,
		actions,

		onClose: handleClose,
		onClosed: handleClosed,

		initialFocusRef,
	};
}
