import { FC, PropsWithChildren, ReactNode } from "react";

import * as styles from "./UiLayout.css";

type Props = PropsWithChildren<{
	header: () => ReactNode;
}>;

export const UiLayout: FC<Props> = ({ children, header }) => {
	return (
		<div className={styles.root}>
			<header className={styles.header}>{header()}</header>
			<main className={styles.content}>{children}</main>
		</div>
	);
};
