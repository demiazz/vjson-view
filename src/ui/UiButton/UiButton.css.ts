import {
	styleVariants,
	createThemeContract,
	assignVars,
} from "@vanilla-extract/css";

import { uiStyle, wrapUiStyle } from "@/helpers/style";

import { theme } from "@/theme.css";

const vars = createThemeContract({
	color: null,

	background: {
		default: null,
		hover: null,
		active: null,
	},

	outline: null,
});

export const variants = styleVariants(
	{
		primary: {
			vars: assignVars(vars, {
				color: theme.colors.content.contrast,

				background: {
					default: "#127ff9",
					hover: "#3192fe",
					active: "#0b72e4",
				},

				outline: theme.colors.control.focus,
			}),
		},

		danger: {
			vars: assignVars(vars, {
				color: theme.colors.content.contrast,

				background: {
					default: "#e55d5d",
					hover: "#f27373",
					active: "#d22e2e",
				},

				outline: theme.colors.control.focusDanger,
			}),
		},
	},
	wrapUiStyle,
);

export const root = uiStyle({
	display: "flex",
	flexDirection: "row",
	justifyContent: "center",
	alignItems: "center",
	gap: "8px",

	height: "32px",

	padding: "0 12px",

	border: "none",
	borderRadius: "6px",

	background: vars.background.default,

	color: vars.color,

	fontFamily: "inherit",
	fontSize: theme.sizes.font,

	whiteSpace: "nowrap",
	userSelect: "none",

	transition: `${theme.duration.fast["1"]} ${theme.easing.standard.productive}`,

	cursor: "pointer",

	selectors: {
		"&:focus": {
			background: vars.background.hover,

			outlineOffset: "0",
			outline: `2px solid ${vars.outline}`,
		},

		"&:hover": {
			background: vars.background.hover,
		},

		"&:active": {
			background: vars.background.active,
			transition: "none",
		},

		"&:disabled": {
			background: theme.colors.control.disabled,
			color: theme.colors.content.disabled,
			cursor: "pointer",
		},
	},
});
