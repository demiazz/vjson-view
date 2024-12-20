export function isScalar(value: JsonValue): value is boolean | number | string {
	if (value == null) {
		return false;
	}

	if (typeof value === "object" || Array.isArray(value)) {
		return false;
	}

	return true;
}
