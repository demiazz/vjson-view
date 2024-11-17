type Cursor = {
	index: number;
	record: JsonRecord;
};

export class JsonView {
	private constructor(
		private readonly file: JsonFile,
		private readonly wasChanged: boolean,
		private readonly cursor: Maybe<Cursor>,
	) {}

	public get isChanged(): boolean {
		return this.wasChanged;
	}

	public get name(): string {
		return this.file.name;
	}

	public get content(): JsonRecord[] {
		return this.file.content;
	}

	public get current(): Maybe<JsonRecord> {
		if (this.cursor == null) {
			return null;
		}

		return this.cursor.record;
	}

	public static fromJsonFile(file: JsonFile): JsonView {
		return new JsonView(file, false, null);
	}

	public startRecordEdit(index: number): JsonView {
		if (this.cursor?.index === index) {
			return this;
		}

		const record = this.content.at(index);

		if (record == null) {
			return this;
		}

		return new JsonView(this.file, this.wasChanged, { index, record });
	}

	public cancelRecordEdit(): JsonView {
		if (this.cursor == null) {
			return this;
		}

		return new JsonView(this.file, this.wasChanged, null);
	}

	public updateRecord(next: JsonRecord): JsonView {
		if (this.cursor == null) {
			return this;
		}

		const { index, record } = this.cursor;

		this.content[index] = { ...record, ...next };

		return new JsonView(this.file, true, null);
	}
}
