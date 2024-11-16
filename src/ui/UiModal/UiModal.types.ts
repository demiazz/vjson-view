import { Variant } from "@/ui/UiButton";
import { RefObject } from "react";

export type Action = {
	id: string;

	onAction: () => void;

	label: string;
	variant: Variant;

	ref?: RefObject<HTMLButtonElement>;
};
