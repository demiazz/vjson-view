import { ComponentType, forwardRef, PropsWithChildren } from "react";

import { clsx } from "clsx/lite";

import * as styles from "./UiButton.css";

export type Variant = keyof typeof styles.variants;

type Props = PropsWithChildren<{
	icon?: ComponentType;
	isDisabled?: boolean;
	onClick: () => void;
	tabIndex?: number;
	variant: Variant;
}>;

export const UiButton = forwardRef<HTMLButtonElement, Props>(
	({ children, icon: Icon, isDisabled, onClick, tabIndex, variant }, ref) => {
		return (
			<button
				className={clsx(styles.root, styles.variants[variant])}
				disabled={isDisabled}
				onClick={onClick}
				ref={ref}
				tabIndex={tabIndex}
				type="button"
			>
				{Icon != null && <Icon />}
				{children}
			</button>
		);
	},
);

if (import.meta.env.DEV) {
	UiButton.displayName = "UiButton";
}
