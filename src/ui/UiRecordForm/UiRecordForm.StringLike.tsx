import {
	ChangeEventHandler,
	FocusEventHandler,
	forwardRef,
	Ref,
	useState,
} from "react";

import { Container } from "./UiRecordForm.Container";
import { ChangeFieldHandler, StringLikeField } from "./UiRecordForm.types";

import * as styles from "./UiRecordForm.css";

type Props<Field extends StringLikeField = StringLikeField> = {
	name: string;
	field: Field;
	onChange: ChangeFieldHandler<Field>;
};

export const StringLike = forwardRef<
	HTMLInputElement | HTMLTextAreaElement,
	Props
>(({ name, field, onChange: onChangeField }, ref) => {
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
					ref={ref as Ref<HTMLTextAreaElement>}
					rows={5}
					tabIndex={0}
					value={value}
				/>
			) : (
				<input
					className={styles.control.input}
					onBlur={handleBlur}
					onChange={handleChange}
					tabIndex={0}
					ref={ref as Ref<HTMLInputElement>}
					type={field.type === "string" ? "text" : "email"}
					value={value}
				/>
			)}
		</Container>
	);
});

if (import.meta.env.DEV) {
	StringLike.displayName = "UiRecordForm(StringLike)";
}
