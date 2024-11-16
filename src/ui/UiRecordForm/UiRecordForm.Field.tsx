import { FC, memo } from "react";

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

export const Field: FC<Props> = memo(({ name, field, onChange }) => {
	switch (field.type) {
		case "boolean": {
			return <Boolean name={name} field={field} onChange={onChange} />;
		}
		case "datetime": {
			return <DateTime name={name} field={field} onChange={onChange} />;
		}
		case "number": {
			return <Numeric name={name} field={field} onChange={onChange} />;
		}
		case "email":
		case "string":
		case "text": {
			return <StringLike name={name} field={field} onChange={onChange} />;
		}
	}
});

if (import.meta.env.DEV) {
	Field.displayName = "UiRecordForm(Field)";
}
