import {
	createContext,
	useCallback,
	useContext as useReactContext,
} from "react";

export type Confirmation = Maybe<{
	title: string;
	message: string;

	okLabel?: string;
	cancelLabel?: string;

	onOk: () => void;
	onCancel: () => void;
}>;

export type Confirm = (
	confirmation: Omit<NonNullable<Confirmation>, "onOk" | "onCancel">,
) => Promise<boolean>;

export type Value = {
	confirmation: Confirmation;

	onConfirm: (confirmation: Confirmation) => void;
};

export const Context = createContext<Value>({
	confirmation: null,

	// NOTE: There are just default value with no-op function.
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	onConfirm: () => {},
});

export function useContext(): Value {
	return useReactContext(Context);
}

export function useConfirm(): Confirm {
	const confirm = useReactContext(Context).onConfirm;

	return useCallback<Confirm>(
		async (options) =>
			new Promise((resolve) => {
				confirm({
					...options,

					onOk: () => {
						resolve(true);
					},

					onCancel: () => {
						resolve(false);
					},
				});
			}),
		[confirm],
	);
}
