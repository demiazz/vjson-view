import { FC } from "react";

import { UiModal } from "@/ui/UiModal";

import { Field } from "./UiRecordForm.Field";
import { useModal } from "./UiRecordForm.hooks";

import * as styles from "./UiRecordForm.css";

type Props = {
	record: Maybe<JsonRecord>;

	onCancel: () => void;
	onSubmit: (next: JsonRecord) => void;
};

export const UiRecordForm: FC<Props> = ({ record, onCancel, onSubmit }) => {
	const {
		actions,
		initialFocusRef,
		isOpened,
		onClose,
		onClosed,
		fields,
		onChangeField,
	} = useModal({ record, onCancel, onSubmit });

	return (
		<UiModal
			actions={actions}
			isOpened={isOpened}
			onClose={onClose}
			onClosed={onClosed}
			title="Edit record"
			initialFocus={initialFocusRef}
		>
			<div className={styles.root}>
				{fields != null &&
					Object.entries(fields).map(([name, field], index) => (
						<Field
							key={name}
							name={name}
							field={field}
							onChange={onChangeField}
							ref={index === 0 ? initialFocusRef : undefined}
						/>
					))}
			</div>
		</UiModal>
	);
};
