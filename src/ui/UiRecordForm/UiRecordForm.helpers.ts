import { isScalar } from "@/helpers/isScalar";

import { Fields, Field } from "./UiRecordForm.types";

const EMAIL_REGEX = /^[A-Z0-9+_.-]+@[A-Z0-9.-]+$/;

export function parseDate(value: string): Maybe<Date> {
	const date = new Date(value);

	return Number.isNaN(date.getDate()) ? null : date;
}

function parseField(name: string, value: JsonValue): Maybe<Field> {
	if (name === "id" || !isScalar(value)) {
		return null;
	}

	if (typeof value === "boolean") {
		return {
			type: "boolean",
			value,
		};
	}

	if (typeof value === "number") {
		return {
			type: "number",
			value,
		};
	}

	const date = parseDate(value);

	if (date != null) {
		return {
			type: "datetime",
			value: date,
		};
	}

	// NOTE: Try to detect email by field name (can have false positive cases),
	//       or by regexp (not super stupid, but not super restrictive).
	if (name.toLowerCase().includes("email") || EMAIL_REGEX.test(value)) {
		return {
			type: "email",
			value,
		};
	}

	const type = value.length > 50 ? "text" : "string";

	return { type, value };
}

export function parseRecord(record: Maybe<JsonRecord>): Maybe<Fields> {
	if (record == null) {
		return null;
	}

	const fields: Fields = {};

	for (const [name, value] of Object.entries(record)) {
		const field = parseField(name, value);

		if (field == null) {
			continue;
		}

		fields[name] = field;
	}

	return fields;
}
