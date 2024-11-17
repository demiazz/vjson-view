import { JsonView } from "@helpers/JsonView";

export type Data = {
	view: JsonView;

	onEdit: (index: number) => void;
};
