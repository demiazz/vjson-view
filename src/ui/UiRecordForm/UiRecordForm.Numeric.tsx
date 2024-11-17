import {
	ChangeEventHandler,
	FocusEventHandler,
	forwardRef,
	useState,
} from "react";

import { Container } from "./UiRecordForm.Container";
import { NumberField, ChangeFieldHandler } from "./UiRecordForm.types";

import * as styles from "./UiRecordForm.css";

type Props = {
	name: string;
	field: NumberField;
	onChange: ChangeFieldHandler<NumberField>;
};

export const Numeric = forwardRef<HTMLInputElement, Props>(
	({ name, field, onChange }, ref) => {
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
					ref={ref}
					tabIndex={0}
					type="number"
					value={value}
				/>
			</Container>
		);
	},
);

if (import.meta.env.DEV) {
	Numeric.displayName = "UiRecordForm(Numeric)";
}
