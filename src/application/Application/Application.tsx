import { FC } from "react";

import { Header } from "@/application/Header";
import { RecordsList } from "@/application/RecordsList";

import { UiRecordForm } from "@/ui/UiRecordForm";

import { useJsonView } from "./Application.hooks";

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
				{view != null && (
					<RecordsList className={styles.content} onEdit={onEdit} view={view} />
				)}
			</div>
			<UiRecordForm
				onCancel={onCancel}
				onSubmit={onSubmit}
				record={view == null ? null : view.current}
			/>
		</>
	);
};
