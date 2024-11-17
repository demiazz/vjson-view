import { useMemo, useCallback, useState, useEffect } from "react";

import { useWatch } from "@/hooks/useWatch";

import { useConfirm } from "@/ui/UiConfirmation";
import { UiModalAction } from "@/ui/UiModal";

import { ChangeFieldHandler, Fields } from "./UiRecordForm.types";
import { areFieldsChanged, parseRecord } from "./UiRecordForm.helpers";

type Options = {
	record: Maybe<JsonRecord>;

	onSubmit: (next: JsonRecord) => void;
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

export function useModal({ record, onCancel, onSubmit }: Options): Result {
	const confirm = useConfirm();

	const [fields, setFields] = useState<Maybe<Fields>>(() =>
		parseRecord(record),
	);

	useEffect(() => {
		setFields(parseRecord(record));
	}, [record]);

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

		const next: JsonRecord = {};

		for (const [name, field] of Object.entries(fields)) {
			next[name] =
				field.value instanceof Date ? field.value.toISOString() : field.value;
		}

		onSubmit(next);

		setIsOpened(false);
	}, [fields, onSubmit]);

	const handleCancel = useCallback(async () => {
		const hasChanges =
			record != null && fields != null
				? areFieldsChanged(record, fields)
				: true;

		const proceed = hasChanges
			? await confirm({
					message:
						"Some of fields has been changed. Are you want to ignore changes?",
					title: "Are you sure?",
				})
			: true;

		if (proceed) {
			onCancel();

			setIsOpened(false);
		}
	}, [fields, record, onCancel, confirm]);

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

	// NOTE: We provide "non async" function to external code because async
	//       nature of function is used inside that hook only right now.
	/* eslint-disable @typescript-eslint/no-misused-promises */
	return {
		isOpened,

		actions,
		fields,

		onChangeField: setField,
		onClose: handleCancel,
		onClosed: handleClosed,
	};
	/* eslint-enable */
}
