import { uiStyle, wrapUiStyle } from "@/helpers/style";
import { styleVariants } from "@vanilla-extract/css";

export const root = uiStyle({
	margin: "0 48px",
});

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
		flex: "0 0 30%",

		alignSelf: "stretch",

		overflowX: "hidden",
		whiteSpace: "nowrap",
		textOverflow: "ellipsis",
		textAlign: "right",
	},
]);

export const input = uiStyle([
	cell,
	{
		flex: "0 0 70%",

		display: "flex",
		flexDirection: "row",
		justifyContent: "stretch",
		alignItems: "center",
	},
]);

export const control = styleVariants({
	checkbox: wrapUiStyle({
		margin: "0,",
	}),

	input: wrapUiStyle({
		flex: "1 1 auto",
	}),

	textarea: wrapUiStyle({
		flex: "1 1 auto",
		resize: "vertical",
	}),
});
