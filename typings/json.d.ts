type JSONValue =
	| null
	| string
	| number
	| boolean
	| { [x: string]: JSONValue }
	| JSONValue[];

type JSONRecord = Exclude<
	JSONValue,
	boolean | null | number | string | JSONValue[]
>;
