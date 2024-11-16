import { FC, useCallback, useState } from "react";

import { useConfirm } from "@/ui/UiConfirmation";
import { UiLayout } from "@/ui/UiLayout";
import { UiModal } from "@/ui/UiModal";

import { Header } from "@/application/Header";

// NOTE: Temporary disable warning, because functions aren't implemented yet.
/* eslint-disable @typescript-eslint/no-empty-function */
export const Application: FC = () => {
	const [isOpened, setIsOpened] = useState(false);

	const confirm = useConfirm();

	const header = useCallback(() => {
		return (
			<>
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
					onUpload={() => {
						setIsOpened(true);
					}}
				/>
				<UiModal
					isOpened={isOpened}
					onClose={() => {
						setIsOpened(false);
					}}
					title="Edit item"
					actions={[
						{
							id: "ok",

							onAction() {},

							label: "OK",
							variant: "primary",
						},
						{
							id: "cancel",

							onAction() {},

							label: "Cancel",
							variant: "danger",
						},
					]}
				/>
			</>
		);
	}, [confirm, isOpened]);

	return <UiLayout header={header}>Content</UiLayout>;
};
/* eslint-enable */
