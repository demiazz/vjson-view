import { FC, PropsWithChildren } from "react";

import * as styles from "./UiIndicator.css";

export const UiIndicator: FC<PropsWithChildren> = ({ children }) => {
	return <span className={styles.root}>{children}</span>;
};
