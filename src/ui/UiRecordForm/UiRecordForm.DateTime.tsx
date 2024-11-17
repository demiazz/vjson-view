import {
	ChangeEventHandler,
	FocusEventHandler,
	forwardRef,
	useState,
} from "react";

import { Container } from "./UiRecordForm.Container";

import { DateTimeField, ChangeFieldHandler } from "./UiRecordForm.types";
import { parseDate } from "./UiRecordForm.helpers";

import * as styles from "./UiRecordForm.css";

function toString(date: Date): string {
	return date.toISOString().slice(0, 19);
}

type Props = {
	name: string;
	field: DateTimeField;
	onChange: ChangeFieldHandler<DateTimeField>;
};

export const DateTime = forwardRef<HTMLInputElement, Props>(
	({ name, field, onChange }, ref) => {
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
					className={styles.control.input}
					onBlur={handleBlur}
					onChange={handleChange}
					ref={ref}
					step="1"
					tabIndex={0}
					type="datetime-local"
					value={value}
				/>
			</Container>
		);
	},
);

if (import.meta.env.DEV) {
	DateTime.displayName = "UiRecordForm(DateTime)";
}
