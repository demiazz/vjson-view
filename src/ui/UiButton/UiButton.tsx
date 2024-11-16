import { FC, PropsWithChildren } from "react";

import { clsx } from "clsx/lite";

import * as styles from "./UiButton.css";

export type Variant = keyof typeof styles.variants;

type Props = PropsWithChildren<{
	isDisabled?: boolean;

	onClick: () => void;

	variant: Variant;
}>;

export const UiButton: FC<Props> = ({
	children,
	isDisabled,
	onClick,
	variant,
}) => {
	return (
		<button
			className={clsx(styles.root, styles.variants[variant])}
			disabled={isDisabled}
			onClick={onClick}
			type="button"
		>
			{children}
		</button>
	);
};
