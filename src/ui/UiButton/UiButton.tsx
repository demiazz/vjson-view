import { forwardRef, PropsWithChildren } from "react";

import { clsx } from "clsx/lite";

import * as styles from "./UiButton.css";

export type Variant = keyof typeof styles.variants;

type Props = PropsWithChildren<{
	isDisabled?: boolean;

	onClick: () => void;

	variant: Variant;
}>;

export const UiButton = forwardRef<HTMLButtonElement, Props>(
	({ children, isDisabled, onClick, variant }, ref) => {
		return (
			<button
				className={clsx(styles.root, styles.variants[variant])}
				disabled={isDisabled}
				onClick={onClick}
				ref={ref}
				type="button"
			>
				{children}
			</button>
		);
	},
);

if (import.meta.env.DEV) {
	UiButton.displayName = "UiButton";
}
