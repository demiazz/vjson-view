type JSONFile = {
	name: string;
	content: JSONValue;
};

export async function openFile(): Promise<Maybe<JSONFile>> {
	return new Promise((resolve, reject) => {
		const input = document.createElement("input");

		input.accept = ".json";
		input.type = "file";

		// eslint-disable-next-line @typescript-eslint/no-empty-function, unicorn/consistent-function-scoping
		let unsubscribe: () => void = () => {};

		const onCancel = () => {
			unsubscribe();

			resolve(null);
		};

		const onChange = () => {
			unsubscribe();

			if (input.files == null || input.files.length === 0) {
				resolve(null);

				return;
			}

			const [file] = input.files;

			file
				.text()
				.then((text) => {
					resolve({
						name: file.name,
						content: JSON.parse(text) as JSONValue,
					});
				})
				.catch((error: unknown) => {
					reject(error as Error);
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
