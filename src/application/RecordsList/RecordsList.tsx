import { FC, useCallback, useMemo } from "react";

import { VariableSizeList as List } from "react-window";
import { useSize } from "@tabula/use-size";

import { JsonView } from "@/helpers/JsonView";

import { heightOf } from "@/ui/UiRecord";

import { Item } from "./RecordsList.Item";
import { Data } from "./RecordsList.types";

type Props = {
	className?: string;
	onEdit: (index: number) => void;
	view: JsonView;
};

export const RecordsList: FC<Props> = ({ className, onEdit, view }) => {
	const [parentRef, size] = useSize();

	const data = useMemo<Data>(() => ({ onEdit, view }), [onEdit, view]);

	const estimatedSize = useMemo(
		() => heightOf(view.estimatedSize),
		[view.estimatedSize],
	);

	const itemSize = useCallback(
		(index: number) => heightOf(view.sizeOf(index)),
		[view],
	);

	return (
		<main className={className} ref={parentRef}>
			<List
				estimatedItemSize={estimatedSize}
				height={size.height}
				itemCount={view.size}
				itemData={data}
				itemSize={itemSize}
				width="100%"
			>
				{Item}
			</List>
		</main>
	);
};
