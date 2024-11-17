import { CSSProperties, FC, ReactNode } from "react";

import { isScalar } from "@/helpers/isScalar";

import { ReactComponent as EditIcon } from "@/icons/edit.svg";

import { UiButton } from "@/ui/UiButton";

import * as styles from "./UiRecord.css";

type Props = {
	index: number;
	onEdit: (index: number) => void;
	record: JsonRecord;
	style?: CSSProperties;
};

export const UiRecord: FC<Props> = ({ index, onEdit, record, style }) => {
	const handleEdit = () => {
		onEdit(index);
	};

	const fields: ReactNode[] = [];

	const id = "id" in record && isScalar(record.id) ? record.id : null;

	fields.push(
		<div className={styles.header} key="id">
			<div className={styles.id}>{id}</div>
			<UiButton icon={EditIcon} onClick={handleEdit} variant="primary">
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

	return (
		<div className={styles.root} style={style}>
			{fields}
		</div>
	);
};
