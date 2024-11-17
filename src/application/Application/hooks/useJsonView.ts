import { useCallback, useState } from "react";

import { openFile } from "@/helpers/openFile";
import { saveFile } from "@/helpers/saveFile";

import { useAlert } from "@/ui/UiAlert";

import { JsonView } from "../JsonView";

type Result = {
	view: Maybe<JsonView>;

	onDownload: () => void;
	onUpload: () => void;
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

	// NOTE: We provide "non async" function to external code because async
	//       nature of function is used inside that hook only right now.
	/* eslint-disable @typescript-eslint/no-misused-promises */
	return {
		view,

		onDownload: handleDownload,
		onUpload: handleUpload,
	};
	/* eslint-enable */
}
