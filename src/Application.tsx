import { FC, useCallback } from "react";

import { UiLayout } from "@/ui/UiLayout";

export const Application: FC = () => {
	const header = useCallback(() => {
		return "Header";
	}, []);

	return <UiLayout header={header}>Content</UiLayout>;
};
