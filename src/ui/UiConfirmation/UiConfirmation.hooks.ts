import { useCallback, useMemo, useState } from "react";

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
};

export function useModal(): Result {
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
			},
		],
		[confirmation],
	);

	return {
		isOpened,

		title: confirmation?.title ?? "",
		message: confirmation?.message ?? "",
		actions,

		onClose: handleClose,
		onClosed: handleClosed,
	};
}
