import { uiStyle } from "@/helpers/style";

import { theme } from "@/theme.css";

export const root = uiStyle({
	display: "flex",
	flexDirection: "column",
	justifyContent: "flex-start",
	alignContent: "center",

	minWidth: `calc((${theme.sizes.maxWidth} - 96px) / 1.5)`,
	maxWidth: `calc(${theme.sizes.maxWidth} - 96px)`,
	maxHeight: "calc(100vh - 96px)",

	background: theme.colors.background.primary,

	borderRadius: "12px",

	overflow: "hidden",
});

export const header = uiStyle({
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "center",
	gap: "12px",

	height: "40px",

	padding: "24px 12px",

	borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
});

export const title = uiStyle({
	flex: "1 1 auto",

	margin: "0",

	fontSize: "1rem",

	whiteSpace: "nowrap",
	textOverflow: "ellipsis",
	overflow: "hidden",
});

export const close = uiStyle({
	flex: "0 0 24px",

	height: "24px",

	padding: "0",

	backgroundColor: "transparent",

	border: "none",

	color: theme.colors.content.secondary,
	lineHeight: "0",

	transition: `${theme.duration.fast[1]} ${theme.easing.standard.productive}`,

	cursor: "pointer",

	selectors: {
		"&:hover": {
			color: theme.colors.content.primary,
		},

		"&:focus": {
			outline: `2px solid ${theme.colors.control.focus}`,
		},
	},
});

export const body = uiStyle({
	overflow: "auto",
});

export const footer = uiStyle({
	display: "flex",
	flexDirection: "row",
	justifyContent: "flex-end",
	alignItems: "center",
	gap: "12px",

	padding: "12px",

	borderTop: "1px solid rgba(0, 0, 0, 0.1)",
});

export const overlay = uiStyle({
	position: "fixed",

	top: 0,
	left: 0,

	width: "100vw",
	height: "100vh",

	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",

	background: "rgba(0, 0, 0, 0.5)",
});
