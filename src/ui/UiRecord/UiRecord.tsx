import { FC, memo, ReactNode } from "react";

import { isScalar } from "@/helpers/isScalar";

import { UiButton } from "@/ui/UiButton";

import * as styles from "./UiRecord.css";

type Props = {
	index: number;
	onEdit: (index: number) => void;
	record: JSONRecord;
};

export const UiRecord: FC<Props> = memo(({ index, onEdit, record }) => {
	const handleEdit = () => {
		onEdit(index);
	};

	const fields: ReactNode[] = [];

	const id = "id" in record && isScalar(record.id) ? record.id : null;

	fields.push(
		<div className={styles.header}>
			<div className={styles.id}>{id}</div>
			<UiButton onClick={handleEdit} variant="primary">
				Edit
			</UiButton>
		</div>,
	);

	for (const [name, value] of Object.entries(record)) {
		if (name === "id" || !isScalar(value)) {
			continue;
		}

		fields.push(
			<div className={styles.row} key={name}>
				<div className={styles.field}>{name}</div>
				<div className={styles.value}>{value.toString()}</div>
			</div>,
		);
	}

	return <div className={styles.root}>{fields}</div>;
});

if (import.meta.env.DEV) {
	UiRecord.displayName = "UiRecord";
}
