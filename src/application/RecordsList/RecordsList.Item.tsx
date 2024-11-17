import { memo } from "react";

import { areEqual, ListChildComponentProps } from "react-window";

import { UiRecord } from "@/ui/UiRecord";

import { Data } from "./RecordsList.types";

type Props = ListChildComponentProps<Data>;

export const Item = memo<Props>(
	({ index, data: { onEdit, view }, style }) => (
		<UiRecord
			index={index}
			onEdit={onEdit}
			record={view.content[index]}
			style={style}
		/>
	),
	areEqual,
);

if (import.meta.env.DEV) {
	Item.displayName = "RecordsList(Item)";
}
