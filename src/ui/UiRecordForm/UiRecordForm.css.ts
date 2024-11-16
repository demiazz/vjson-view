import { uiStyle } from "@/helpers/style";

export const root = uiStyle({});

export const container = uiStyle({
	display: "flex",
	flexDirection: "row",
	justifyContent: "stretch",
	alignItems: "center",

	minHeight: "30px",
});

const cell = uiStyle({
	padding: "4px 8px",
});

export const label = uiStyle([
	cell,
	{
		flex: "0 0 20%",

		alignSelf: "stretch",

		overflowX: "hidden",
		whiteSpace: "nowrap",
		textOverflow: "ellipsis",
	},
]);

export const input = uiStyle([
	cell,
	{
		flex: "0 0 80%",
	},
]);
