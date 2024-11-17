import { useCallback, useState } from "react";

import { JsonView } from "@/helpers/JsonView";
import { openFile } from "@/helpers/openFile";
import { saveFile } from "@/helpers/saveFile";

import { useAlert } from "@/ui/UiAlert";

type Result = {
	view: Maybe<JsonView>;

	onDownload: () => void;
	onUpload: () => void;

	onEdit: (index: number) => void;
	onCancel: () => void;
	onSubmit: (record: JsonRecord) => void;
};

export function useJsonView(): Result {
	const alert = useAlert();

	const [view, setView] = useState<Maybe<JsonView>>(null);

	const handleUpload = useCallback(async () => {
		const result = await openFile();

		if (result.type === "done") {
			setView(JsonView.fromJsonFile(result.file));

			return;
		}

		if (result.type === "error") {
			alert(result.message);
		}
	}, [alert]);

	const handleDownload = useCallback(() => {
		if (view == null) {
			return;
		}

		saveFile(view.name, view.content);
	}, [view]);

	const handleEdit = useCallback((index: number) => {
		setView((current) => {
			if (current == null) {
				return current;
			}

			return current.startRecordEdit(index);
		});
	}, []);

	const handleCancel = useCallback(() => {
		setView((current) => {
			if (current == null) {
				return current;
			}

			return current.cancelRecordEdit();
		});
	}, []);

	const handleSubmit = useCallback((record: JsonRecord) => {
		setView((current) => {
			if (current == null) {
				return current;
			}

			return current.updateRecord(record);
		});
	}, []);

	// NOTE: We provide "non async" function to external code because async
	//       nature of function is used inside that hook only right now.
	/* eslint-disable @typescript-eslint/no-misused-promises */
	return {
		view,

		onDownload: handleDownload,
		onUpload: handleUpload,

		onEdit: handleEdit,
		onCancel: handleCancel,
		onSubmit: handleSubmit,
	};
	/* eslint-enable */
}
