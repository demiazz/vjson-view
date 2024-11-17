import { isScalar } from "./isScalar";

const PERCENTILE = 75;

function estimateSize(records: JsonRecord[]): number {
	const sizes = records
		.map((it) => {
			const count = Object.keys(it).length;

			return "id" in it ? count - 1 : count;
		})
		.sort((a, b) => a - b);

	const index = Math.ceil((PERCENTILE / 100) * sizes.length) - 1;

	return sizes[index];
}

type Cursor = {
	index: number;
	record: JsonRecord;
};

type CopyOptions = Partial<{
	wasChanged: boolean;
	cursor: Maybe<Cursor>;
}>;

export class JsonView {
	private constructor(
		public readonly name: string,
		public readonly content: JsonRecord[],
		private readonly wasChanged: boolean,
		private readonly cursor: Maybe<Cursor>,
		public readonly estimatedSize: number,
		private readonly cache: WeakMap<JsonRecord, number>,
	) {}

	public get size(): number {
		return this.content.length;
	}

	public get isChanged(): boolean {
		return this.wasChanged;
	}

	public get current(): Maybe<JsonRecord> {
		if (this.cursor == null) {
			return null;
		}

		return this.cursor.record;
	}

	public static fromJsonFile(file: JsonFile): JsonView {
		const estimatedSize = estimateSize(file.content);

		return new JsonView(
			file.name,
			file.content,
			false,
			null,
			estimatedSize,
			new WeakMap(),
		);
	}

	public sizeOf(index: number): number {
		const record = this.content.at(index);

		if (record == null) {
			return 0;
		}

		const cache = this.cache.get(record);

		if (cache != null) {
			return cache;
		}

		let count = 0;

		for (const [key, value] of Object.entries(record)) {
			if (key === "id" || value == null || !isScalar(value)) {
				continue;
			}

			count += 1;
		}

		this.cache.set(record, count);

		return count;
	}

	public startRecordEdit(index: number): JsonView {
		if (this.cursor?.index === index) {
			return this;
		}

		const record = this.content.at(index);

		if (record == null) {
			return this;
		}

		return this.copyWith({ cursor: { index, record } });
	}

	public cancelRecordEdit(): JsonView {
		if (this.cursor == null) {
			return this;
		}

		return this.copyWith({ cursor: null });
	}

	public updateRecord(next: JsonRecord): JsonView {
		if (this.cursor == null) {
			return this;
		}

		const { index, record } = this.cursor;

		this.cache.delete(record);

		this.content[index] = { ...record, ...next };

		return this.copyWith({ wasChanged: true, cursor: null });
	}

	private copyWith(options: CopyOptions): JsonView {
		return new JsonView(
			this.name,
			this.content,
			options.wasChanged ?? this.wasChanged,
			options.cursor === undefined ? this.cursor : options.cursor,
			this.estimatedSize,
			this.cache,
		);
	}
}
