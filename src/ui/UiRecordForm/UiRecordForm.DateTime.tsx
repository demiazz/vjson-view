import { ChangeEventHandler, FC, FocusEventHandler, useState } from "react";

import { Container } from "./UiRecordForm.Container";

import { DateTimeField, ChangeFieldHandler } from "./UiRecordForm.types";
import { parseDate } from "./UiRecordForm.helpers";

function toString(date: Date): string {
	return date.toISOString().slice(0, 19);
}

type Props = {
	name: string;
	field: DateTimeField;
	onChange: ChangeFieldHandler<DateTimeField>;
};

export const DateTime: FC<Props> = ({ name, field, onChange }) => {
	const [value, setValue] = useState(() => toString(field.value));

	const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		setValue(event.target.value);
	};

	const handleBlur: FocusEventHandler = () => {
		if (toString(field.value) !== value) {
			const next = parseDate(value);

			if (next == null) {
				return;
			}

			onChange(name, { ...field, value: next });
		}
	};

	return (
		<Container name={name}>
			<input
				onBlur={handleBlur}
				onChange={handleChange}
				step="1"
				type="datetime-local"
				value={value}
			/>
		</Container>
	);
};
