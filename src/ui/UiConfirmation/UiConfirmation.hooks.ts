import { RefObject, useCallback, useMemo, useRef, useState } from "react";

import { useWatch } from "@/hooks/useWatch";

import { UiModalAction } from "@/ui/UiModal";

import { useContext } from "./UiConfirmation.Context";

type Result = {
	isOpened: boolean;

	title: string;
	message: string;
	actions: UiModalAction[];

	onClose: () => void;
	onClosed: () => void;

	initialFocusRef: RefObject<HTMLElement>;
};

export function useModal(): Result {
	const initialFocusRef = useRef<HTMLButtonElement>(null);

	const { confirmation, onConfirm } = useContext();

	const [isOpened, setIsOpened] = useState(confirmation != null);

	useWatch(
		confirmation,
		(_, current) => {
			if (current != null) {
				setIsOpened(true);
			}
		},
		[],
	);

	const handleClose = useCallback(() => {
		confirmation?.onCancel();

		setIsOpened(false);
	}, [confirmation]);

	const handleClosed = useCallback(() => {
		onConfirm(null);
	}, [onConfirm]);

	const actions: UiModalAction[] = useMemo(
		() => [
			{
				id: "ok",

				onAction: () => {
					confirmation?.onOk();

					setIsOpened(false);
				},

				label: "OK",
				variant: "primary",
			},
			{
				id: "cancel",

				onAction: () => {
					confirmation?.onCancel();

					setIsOpened(false);
				},

				label: "Cancel",
				variant: "danger",

				ref: initialFocusRef,
			},
		],
		[confirmation, initialFocusRef],
	);

	return {
		isOpened,

		title: confirmation?.title ?? "",
		message: confirmation?.message ?? "",
		actions,

		onClose: handleClose,
		onClosed: handleClosed,

		initialFocusRef,
	};
}
