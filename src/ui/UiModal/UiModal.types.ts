import { ComponentType, RefObject } from "react";

import { Variant } from "@/ui/UiButton";

export type Action = {
	id: string;

	onAction: () => void;

	icon?: ComponentType;
	label: string;
	variant: Variant;

	ref?: RefObject<HTMLButtonElement>;
};
