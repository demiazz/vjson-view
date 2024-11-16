import { useMemo, useCallback, useState } from "react";

import { useWatch } from "@/hooks/useWatch";

import { UiModalAction } from "@/ui/UiModal";

import { ChangeFieldHandler, Fields, InputRecord } from "./UiRecordForm.types";
import { parseRecord } from "./UiRecordForm.helpers";

type Options = {
	input: InputRecord;

	onSubmit: (index: number, next: JSONRecord) => void;
	onCancel: () => void;
};

type Result = {
	isOpened: boolean;

	fields: Maybe<Fields>;
	onChangeField: ChangeFieldHandler;

	actions: UiModalAction[];

	onClose: () => void;
	onClosed: () => void;
};

export function useModal({ input, onCancel, onSubmit }: Options): Result {
	const [fields, setFields] = useState<Maybe<Fields>>(() =>
		parseRecord(input.content),
	);

	const [isOpened, setIsOpened] = useState(fields != null);

	const setField = useCallback<ChangeFieldHandler>((name, field) => {
		setFields((current) => ({ ...current, [name]: field }));
	}, []);

	useWatch(
		fields,
		(_, current) => {
			if (current != null) {
				setIsOpened(true);
			}
		},
		[],
	);

	const handleSubmit = useCallback(() => {
		if (fields == null) {
			return;
		}

		const next: JSONRecord = {};

		for (const [name, field] of Object.entries(fields)) {
			next[name] =
				field.value instanceof Date ? field.value.toISOString() : field.value;
		}

		onSubmit(input.index, next);

		setIsOpened(false);
	}, [input.index, fields]);

	const handleCancel = useCallback(() => {
		onCancel();

		setIsOpened(false);
	}, []);

	const handleClosed = useCallback(() => {
		setFields(null);
	}, []);

	const actions: UiModalAction[] = useMemo(
		() => [
			{
				id: "save",
				onAction: handleSubmit,
				label: "Save",
				variant: "primary",
			},
			{
				id: "cancel",
				onAction: handleCancel,
				label: "Cancel",
				variant: "danger",
			},
		],
		[handleSubmit, handleCancel],
	);

	return {
		isOpened,

		actions,
		fields,

		onChangeField: setField,
		onClose: handleCancel,
		onClosed: handleClosed,
	};
}
