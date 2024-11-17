import { forwardRef, Ref } from "react";

import { Boolean } from "./UiRecordForm.Boolean";
import { DateTime } from "./UiRecordForm.DateTime";
import { Numeric } from "./UiRecordForm.Numeric";
import { StringLike } from "./UiRecordForm.StringLike";

import { Field as FieldType, ChangeFieldHandler } from "./UiRecordForm.types";

type Props = {
	name: string;
	field: FieldType;
	onChange: ChangeFieldHandler;
};

export const Field = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>(
	({ name, field, onChange }, ref) => {
		switch (field.type) {
			case "boolean": {
				return (
					<Boolean
						name={name}
						field={field}
						onChange={onChange}
						ref={ref as Ref<HTMLInputElement>}
					/>
				);
			}
			case "datetime": {
				return (
					<DateTime
						name={name}
						field={field}
						onChange={onChange}
						ref={ref as Ref<HTMLInputElement>}
					/>
				);
			}
			case "number": {
				return (
					<Numeric
						name={name}
						field={field}
						onChange={onChange}
						ref={ref as Ref<HTMLInputElement>}
					/>
				);
			}
			case "email":
			case "string":
			case "text": {
				return (
					<StringLike name={name} field={field} onChange={onChange} ref={ref} />
				);
			}
		}
	},
);

if (import.meta.env.DEV) {
	Field.displayName = "UiRecordForm(Field)";
}
