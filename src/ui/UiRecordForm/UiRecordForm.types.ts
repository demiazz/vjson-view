export type InputRecord = {
	index: number;

	content: JSONRecord;
};

export type BooleanField = {
	type: "boolean";
	value: boolean;
};

export type DateTimeField = {
	type: "datetime";
	value: Date;
};

export type NumberField = {
	type: "number";
	value: number;
};

export type EmailField = {
	type: "email";
	value: string;
};

export type StringField = {
	type: "string";
	value: string;
};

export type TextField = {
	type: "text";
	value: string;
};

export type StringLikeField = EmailField | StringField | TextField;

export type Field =
	| BooleanField
	| DateTimeField
	| NumberField
	| EmailField
	| StringField
	| TextField;

export type Fields = Record<string, Field>;

export type ChangeFieldHandler<T extends Field = Field> = (
	name: string,
	field: T,
) => void;
