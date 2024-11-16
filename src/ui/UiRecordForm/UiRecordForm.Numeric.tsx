import { ChangeEventHandler, FC, FocusEventHandler, useState } from "react";

import { Container } from "./UiRecordForm.Container";
import { NumberField, ChangeFieldHandler } from "./UiRecordForm.types";

import * as styles from "./UiRecordForm.css";

type Props = {
	name: string;
	field: NumberField;
	onChange: ChangeFieldHandler<NumberField>;
};

export const Numeric: FC<Props> = ({ name, field, onChange }) => {
	const [value, setValue] = useState(field.value);

	const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		const next = event.target.valueAsNumber;

		setValue(Number.isNaN(next) ? 0 : next);
	};

	const handleBlur: FocusEventHandler = () => {
		if (field.value === value) {
			return;
		}

		onChange(name, { ...field, value });
	};

	return (
		<Container name={name}>
			<input
				className={styles.control.input}
				onBlur={handleBlur}
				onChange={handleChange}
				type="number"
				value={value}
			/>
		</Container>
	);
};
