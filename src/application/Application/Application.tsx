import { FC, useCallback } from "react";

import { Header } from "@/application/Header";

import { useConfirm } from "@/ui/UiConfirmation";
import { UiLayout } from "@/ui/UiLayout";

// NOTE: Temporary disable warning, because functions aren't implemented yet.
/* eslint-disable @typescript-eslint/no-empty-function */
export const Application: FC = () => {
	const confirm = useConfirm();

	const header = useCallback(() => {
		return (
			<Header
				isChanged
				isPresent
				onDownload={() => {
					confirm({
						title: "Question",

						message: "How do you do fellow kids?",

						okLabel: "Good",
						cancelLabel: "Bad",
					})
						.then(console.log)
						.catch((error: unknown) => {
							console.error(error);
						});
				}}
				onUpload={() => {}}
			/>
		);
	}, [confirm]);

	return <UiLayout header={header}>Content</UiLayout>;
};
/* eslint-enable */
