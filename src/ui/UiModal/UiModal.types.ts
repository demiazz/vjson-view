import { Variant } from "@/ui/UiButton";

export type Action = {
	id: string;

	onAction: () => void;

	label: string;
	variant: Variant;
};
