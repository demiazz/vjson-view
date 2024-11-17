import { FC } from "react";

import { Header } from "@/application/Header";

import { useJsonView } from "./hooks";

import * as styles from "./Application.css";

export const Application: FC = () => {
	const { onDownload, onUpload, view } = useJsonView();

	return (
		<div className={styles.root}>
			<header className={styles.header}>
				<Header
					isChanged={view?.isChanged ?? false}
					isPresent={view != null}
					onDownload={onDownload}
					onUpload={onUpload}
				/>
			</header>
			<main className={styles.content} />
		</div>
	);
};
