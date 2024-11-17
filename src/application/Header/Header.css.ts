import { keyframes, style } from "@vanilla-extract/css";

import { theme } from "@/theme.css";

export const root = style({
	display: "flex",
	flexDirection: "row",
	justifyContent: "space-between",
	alignItems: "center",

	height: "60px",

	padding: "0 8px",
});

const blink = keyframes({
	"0%": {
		opacity: 0,
	},
	"50%": {
		opacity: 1,
	},
	"100%": {
		opacity: 0,
	},
});

export const indicator = style({
	display: "flex",
	flexDirection: "row",
	justifyContent: "flex-start",
	alignItems: "center",
	gap: "12px",

	selectors: {
		"&::before": {
			content: "",

			display: "block",

			width: "8px",
			height: "8px",

			borderRadius: "4px",

			background: theme.colors.status.success,

			boxShadow: `0 0 4px 0 ${theme.colors.status.success}`,

			animation: `${blink} 2s infinite 4s`,
		},
	},
});

export const actions = style({
	flex: "1 1 auto",

	display: "flex",
	flexDirection: "row",
	justifyContent: "flex-end",
	gap: "8px",
});
