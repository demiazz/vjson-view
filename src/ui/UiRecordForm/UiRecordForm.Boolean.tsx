import { ChangeEventHandler, forwardRef } from "react";

import { Container } from "./UiRecordForm.Container";
import { BooleanField, ChangeFieldHandler } from "./UiRecordForm.types";

import * as styles from "./UiRecordForm.css";

type Props = {
	name: string;
	field: BooleanField;
	onChange: ChangeFieldHandler<BooleanField>;
};

export const Boolean = forwardRef<HTMLInputElement, Props>(
	({ name, field, onChange }, ref) => {
		const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
			onChange(name, { ...field, value: event.target.checked });
		};

		return (
			<Container name={name}>
				<input
					className={styles.control.checkbox}
					checked={field.value}
					onChange={handleChange}
					ref={ref}
					tabIndex={0}
					type="checkbox"
				/>
			</Container>
		);
	},
);

if (import.meta.env.DEV) {
	Boolean.displayName = "UiRecordForm(Boolean)";
}
