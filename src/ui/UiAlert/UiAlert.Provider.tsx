import { FC, PropsWithChildren, useMemo, useState } from "react";

import { Context, Message, Value } from "./UiAlert.Context";
import { UiAlert } from "./UiAlert";

export const Provider: FC<PropsWithChildren> = ({ children }) => {
	const [message, setMessage] = useState<Message>(null);

	const value = useMemo<Value>(
		() => ({
			message,

			onMessage: setMessage,
		}),
		[message],
	);

	return (
		<Context.Provider value={value}>
			{children}
			<UiAlert />
		</Context.Provider>
	);
};

if (import.meta.env.DEV) {
	Provider.displayName = "UiAlert(Provider)";
}
