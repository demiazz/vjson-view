import { FC, useCallback } from "react";

import { UiLayout } from "@/ui/UiLayout";

import { Header } from "@/application/Header";

// NOTE: Temporary disable warning, because functions aren't implemented yet.
/* eslint-disable @typescript-eslint/no-empty-function */
export const Application: FC = () => {
	const header = useCallback(() => {
		return (
			<Header isChanged isPresent onDownload={() => {}} onUpload={() => {}} />
		);
	}, []);

	return <UiLayout header={header}>Content</UiLayout>;
};
/* eslint-enable */
