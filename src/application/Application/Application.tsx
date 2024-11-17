import { FC } from "react";

import { Header } from "@/application/Header";

import { UiRecord } from "@/ui/UiRecord";
import { UiRecordForm } from "@/ui/UiRecordForm";

import { useJsonView } from "./hooks";

import * as styles from "./Application.css";

export const Application: FC = () => {
	const { onEdit, onCancel, onSubmit, onDownload, onUpload, view } =
		useJsonView();

	return (
		<>
			<div className={styles.root}>
				<header className={styles.header}>
					<Header
						isChanged={view?.isChanged ?? false}
						isPresent={view != null}
						onDownload={onDownload}
						onUpload={onUpload}
					/>
				</header>
				<main className={styles.content}>
					{(view?.content ?? []).map((it, index) => (
						// NOTE: Items count has never changed. We can use index safely here.
						// eslint-disable-next-line react/no-array-index-key
						<UiRecord key={index} index={index} onEdit={onEdit} record={it} />
					))}
				</main>
			</div>
			<UiRecordForm
				onCancel={onCancel}
				onSubmit={onSubmit}
				record={view == null ? null : view.current}
			/>
		</>
	);
};
