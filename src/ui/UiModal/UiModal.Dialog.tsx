import { CSSProperties, forwardRef, PropsWithChildren } from "react";

import { ReactComponent as CloseIcon } from "@/icons/close.svg";

import { UiButton } from "@/ui/UiButton";

import * as styles from "./UiModal.css";
import { Action } from "./UiModal.types";

type Props = PropsWithChildren<{
	actions?: Action[];
	title: string;
	style?: CSSProperties;

	getProps: () => Record<string, unknown>;
	onClose: () => void;
}>;

export const Dialog = forwardRef<HTMLDivElement, Props>(
	({ actions = [], children, getProps, onClose, style, title }, ref) => {
		return (
			<div className={styles.root} ref={ref} style={style} {...getProps()}>
				<header className={styles.header}>
					<h1 className={styles.title}>{title}</h1>
					<button className={styles.close} onClick={onClose} type="button">
						<CloseIcon />
					</button>
				</header>
				<main className={styles.body}>{children}</main>
				{actions.length > 0 && (
					<footer className={styles.footer}>
						{actions.map(({ id, label, onAction, variant }) => (
							<UiButton key={id} onClick={onAction} variant={variant}>
								{label}
							</UiButton>
						))}
					</footer>
				)}
			</div>
		);
	},
);

if (import.meta.env.DEV) {
	Dialog.displayName = "UiModal(Root)";
}
