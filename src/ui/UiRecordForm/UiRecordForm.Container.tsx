import { FC, PropsWithChildren } from "react";

import * as styles from "./UiRecordForm.css";

type Props = PropsWithChildren<{
	name: string;
}>;

export const Container: FC<Props> = ({ children, name }) => {
	return (
		<label className={styles.container}>
			<div className={styles.label}>{name}</div>
			<div className={styles.input}>{children}</div>
		</label>
	);
};
