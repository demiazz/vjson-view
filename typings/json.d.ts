type JsonValue =
	| null
	| string
	| number
	| boolean
	| { [x: string]: JsonValue }
	| JsonValue[];

type JsonRecord = Exclude<
	JsonValue,
	boolean | null | number | string | JsonValue[]
>;

type JsonFile = {
	name: string;
	content: JsonRecord[];
};

type JsonItem = {
	index: number;
	content: JsonRecord;
};
