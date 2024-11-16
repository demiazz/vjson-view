import { createRoot } from "react-dom/client";

import { UiAlertProvider } from "@/ui/UiAlert";

import { Application } from "@/application/Application";

const target = document.querySelector("#root");

if (target == null) {
	throw new Error("Have no target mount point for the React application");
}

const root = createRoot(target);

root.render(
	<UiAlertProvider>
		<Application />
	</UiAlertProvider>,
);
