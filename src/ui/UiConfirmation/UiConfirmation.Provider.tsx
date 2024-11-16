import { FC, PropsWithChildren, useMemo, useState } from "react";

import { Context, Confirmation, Value } from "./UiConfirmation.Context";
import { UiConfirmation } from "./UiConfirmation";

export const Provider: FC<PropsWithChildren> = ({ children }) => {
	const [confirmation, setConfirmation] = useState<Confirmation>(null);

	const value = useMemo<Value>(
		() => ({
			confirmation,

			onConfirm: setConfirmation,
		}),
		[confirmation],
	);

	return (
		<Context.Provider value={value}>
			{children}
			<UiConfirmation />
		</Context.Provider>
	);
};

if (import.meta.env.DEV) {
	Provider.displayName = "UiConfirmation(Provider)";
}
