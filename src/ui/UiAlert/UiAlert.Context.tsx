import { createContext, useContext as useReactContext } from "react";

export type Message = Maybe<string>;

export type Alert = (message: NonNullable<Message>) => void;

export type Value = {
	message: Message;

	onMessage: (message: Message) => void;
};

export const Context = createContext<Value>({
	message: null,

	// NOTE: There are just default value with no-op function.
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	onMessage: () => {},
});

export function useContext(): Value {
	return useReactContext(Context);
}

export function useAlert(): Alert {
	return useReactContext(Context).onMessage;
}
