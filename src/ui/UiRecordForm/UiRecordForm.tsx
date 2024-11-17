import { FC } from "react";

import { UiModal } from "@/ui/UiModal";

import { Field } from "./UiRecordForm.Field";
import { useModal } from "./UiRecordForm.hooks";
import { InputRecord } from "./UiRecordForm.types";

import * as styles from "./UiRecordForm.css";

type Props = {
	input: InputRecord;

	onCancel: () => void;
	onSubmit: (index: number, next: JsonRecord) => void;
};

export const UiRecordForm: FC<Props> = ({ input, onCancel, onSubmit }) => {
	const { actions, isOpened, onClose, onClosed, fields, onChangeField } =
		useModal({ input, onCancel, onSubmit });

	return (
		<UiModal
			actions={actions}
			isOpened={isOpened}
			onClose={onClose}
			onClosed={onClosed}
			title="Edit record"
		>
			<div className={styles.root}>
				{fields != null &&
					Object.entries(fields).map(([name, field]) => (
						<Field
							key={name}
							name={name}
							field={field}
							onChange={onChangeField}
						/>
					))}
			</div>
		</UiModal>
	);
};
