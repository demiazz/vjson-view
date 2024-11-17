import { isScalar } from "@/helpers/isScalar";

function isJSONRecord(value: JsonValue): value is JsonRecord {
	if (value == null || isScalar(value)) {
		return false;
	}

	return !Array.isArray(value);
}

function isValid(value: JsonValue): value is JsonRecord[] {
	if (value == null || isScalar(value) || !Array.isArray(value)) {
		return false;
	}

	return value.every((it) => isJSONRecord(it));
}

type ParseResult =
	| {
			ok: true;

			content: JsonRecord[];
	  }
	| {
			ok: false;

			error: string;
	  };

function parse(rawValue: string): ParseResult {
	let content: JsonValue = null;

	try {
		content = JSON.parse(rawValue) as JsonValue;
	} catch {
		return {
			ok: false,

			error: "File contains invalid JSON.",
		};
	}

	if (!isValid(content)) {
		return {
			ok: false,

			error: "JSON must be an array of records.",
		};
	}

	return { ok: true, content };
}

type Result =
	| {
			type: "cancel";
	  }
	| {
			type: "error";

			message: string;
	  }
	| {
			type: "done";

			file: JsonFile;
	  };

export async function openFile(): Promise<Result> {
	return new Promise((resolve) => {
		const input = document.createElement("input");

		input.accept = ".json";
		input.type = "file";

		// eslint-disable-next-line @typescript-eslint/no-empty-function, unicorn/consistent-function-scoping
		let unsubscribe: () => void = () => {};

		const onCancel = () => {
			unsubscribe();

			resolve({ type: "cancel" });
		};

		const onChange = () => {
			unsubscribe();

			if (input.files == null || input.files.length === 0) {
				resolve({ type: "cancel" });

				return;
			}

			const [file] = input.files;

			file
				.text()
				.then((text) => {
					const parseResult = parse(text);

					if (parseResult.ok) {
						resolve({
							type: "done",

							file: {
								name: file.name,
								content: parseResult.content,
							},
						});

						return;
					}

					resolve({
						type: "error",

						message: parseResult.error,
					});
				})
				.catch(() => {
					resolve({
						type: "error",

						message: "Couldn't open a file.",
					});
				});
		};

		unsubscribe = () => {
			input.removeEventListener("cancel", onCancel);
			input.removeEventListener("change", onChange);
		};

		input.addEventListener("cancel", onCancel);
		input.addEventListener("change", onChange);

		input.click();
	});
}
