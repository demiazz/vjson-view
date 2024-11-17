export class JsonView {
	private readonly wasChanged = false;

	private constructor(private readonly file: JsonFile) {}

	public get isChanged(): boolean {
		return this.wasChanged;
	}

	public get name(): string {
		return this.file.name;
	}

	public get content(): JsonValue {
		return this.file.content;
	}

	public static fromJsonFile(file: JsonFile): JsonView {
		return new JsonView(file);
	}
}
