import { HEADER_HEIGHT, ROW_HEIGHT } from "./UiRecord.css";

export function heightOf(recordsCount: number): number {
	return HEADER_HEIGHT + recordsCount * ROW_HEIGHT;
}
