import { keyframes } from "@vanilla-extract/css";

import { uiStyle } from "@/helpers/style";
import { theme } from "@/theme.css";

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

export const root = uiStyle({
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
