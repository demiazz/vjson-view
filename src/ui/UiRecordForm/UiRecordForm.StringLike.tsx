import { ChangeEventHandler, FC, FocusEventHandler, useState } from "react";

import { Container } from "./UiRecordForm.Container";
import { ChangeFieldHandler, StringLikeField } from "./UiRecordForm.types";

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
				<textarea onBlur={handleBlur} onChange={handleChange} value={value} />
			) : (
				<input
					onBlur={handleBlur}
					onChange={handleChange}
					type={field.type === "string" ? "text" : "email"}
					value={value}
				/>
			)}
		</Container>
	);
};
