import { FC, useCallback } from "react";

import { Header } from "@/application/Header";

import { useConfirm } from "@/ui/UiConfirmation";
import { UiLayout } from "@/ui/UiLayout";
import { UiRecordForm } from "@/ui/UiRecordForm";

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

	const record: JSONValue = {
		id: "e8d04e55-f289-495a-84bc-97b0224da81a",
		isActive: false,
		picture: "http://placehold.it/32x32",
		age: 36,
		name: "Willis Acosta",
		email: "willisacosta@hometown.com",
		address: "666 Dekalb Avenue, Vandiver, Nevada, 4620",
		about:
			"Magna eiusmod nostrud enim proident sit magna cillum. Laborum culpa quis occaecat elit. Do occaecat quis nisi consectetur.\r\n",
		registered: "2018-12-14T06:52:38-01:00",
	};

	return (
		<UiLayout header={header}>
			<UiRecordForm
				onCancel={() => {}}
				onSubmit={() => {}}
				input={{ index: 0, content: record }}
			/>
		</UiLayout>
	);
};
/* eslint-enable */
