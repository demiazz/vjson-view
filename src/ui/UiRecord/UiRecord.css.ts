import { uiStyle } from "@/helpers/style";

export const HEADER_HEIGHT = 48;
export const ROW_HEIGHT = 30;

export const root = uiStyle({});

export const header = uiStyle({
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "center",
	gap: "24px",

	height: `${HEADER_HEIGHT}px`,

	padding: "0 8px",

	backgroundColor: "rgba(0, 0, 0, 0.15)",
});

export const id = uiStyle({
	overflowX: "hidden",
	whiteSpace: "nowrap",
	textOverflow: "ellipsis",
});

export const row = uiStyle({
	display: "flex",
	flexDirection: "row",
	justifyContent: "stretch",
	alignItems: "center",

	height: `${ROW_HEIGHT}px`,

	selectors: {
		"&:nth-child(2n + 1)": {
			backgroundColor: "rgba(0, 0, 0, 0.05)",
		},
	},
});

const cell = uiStyle({
	padding: "4px 8px",
});

export const field = uiStyle([
	cell,
	{
		flex: "0 0 20%",

		alignSelf: "stretch",

		overflowX: "hidden",
		whiteSpace: "nowrap",
		textOverflow: "ellipsis",
	},
]);

export const value = uiStyle([
	cell,
	{
		flex: "0 0 80%",

		borderLeft: "1px solid rgba(0, 0, 0, 0.1)",

		overflowX: "hidden",
		whiteSpace: "nowrap",
		textOverflow: "ellipsis",
	},
]);
