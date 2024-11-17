import { styleVariants } from "@vanilla-extract/css";

import { uiStyle, wrapUiStyle } from "@/helpers/style";

import { theme } from "@/theme.css";

export const root = uiStyle({
	display: "flex",
	flexDirection: "column",
	alignItems: "stretch",
	justifyContent: "flex-start",
	gap: "6px",

	padding: "12px",
});

export const container = uiStyle({
	display: "flex",
	flexDirection: "row",
	justifyContent: "stretch",
	alignItems: "center",
	gap: "8px",

	minHeight: "30px",
});

const cell = uiStyle({
	padding: "4px 0",
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

		paddingTop: "8px",

		fontSize: theme.sizes.font,

		cursor: "pointer",
	},
]);

export const input = uiStyle([
	cell,
	{
		flex: "1 1 70%",

		display: "flex",
		flexDirection: "row",
		justifyContent: "stretch",
		alignItems: "center",
	},
]);

export const textControl = uiStyle({
	padding: "6px 8px",

	border: "1px solid rgba(0, 0, 0, 0.1)",
	borderRadius: "6px",

	fontFamily: "inherit",
	fontSize: theme.sizes.font,

	transition: `${theme.duration.fast["1"]} ${theme.easing.standard.productive}`,

	selectors: {
		"&:focus": {
			outlineOffset: "0",
			outline: `2px solid ${theme.colors.control.focus}`,
		},

		"&:hover, &:focus": {
			borderColor: "rgba(0, 0, 0, 0.4)",
		},
	},
});

export const control = styleVariants({
	checkbox: wrapUiStyle({
		margin: "4px 0 0 0",

		cursor: "pointer",
	}),

	input: [
		textControl,
		wrapUiStyle({
			flex: "1 1 auto",
		}),
	],

	textarea: [
		textControl,
		wrapUiStyle({
			flex: "1 1 auto",
			resize: "vertical",
		}),
	],
});
