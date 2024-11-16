import { ChangeEventHandler, FC, FocusEventHandler, useState } from "react";

import { Container } from "./UiRecordForm.Container";
import { ChangeFieldHandler, StringLikeField } from "./UiRecordForm.types";

import * as styles from "./UiRecordForm.css";

type Props<Field extends StringLikeField = StringLikeField> = {
	name: string;
	field: Field;
	onChange: ChangeFieldHandler<Field>;
};

export const StringLike: FC<Props> = ({
	name,
	field,
	onChange: onChangeField,
}) => {
	const [value, setValue] = useState(field.value);

	const handleChange: ChangeEventHandler<
		HTMLInputElement | HTMLTextAreaElement
	> = (event) => {
		setValue(event.target.value);
	};

	const handleBlur: FocusEventHandler = () => {
		if (field.value !== value) {
			onChangeField(name, { ...field, value });
		}
	};

	return (
		<Container name={name}>
			{field.type === "text" ? (
				<textarea
					className={styles.control.textarea}
					onBlur={handleBlur}
					onChange={handleChange}
					rows={5}
					value={value}
				/>
			) : (
				<input
					className={styles.control.input}
					onBlur={handleBlur}
					onChange={handleChange}
					type={field.type === "string" ? "text" : "email"}
					value={value}
				/>
			)}
		</Container>
	);
};
