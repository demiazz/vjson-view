import { uiStyle } from "@/helpers/style";

import { theme } from "@/theme.css";
import { createThemeContract } from "@vanilla-extract/css";

export const root = uiStyle({
	position: "relative",

	display: "flex",
	flexDirection: "column",
	justifyContent: "stretch",
	alignItems: "center",

	height: "100vh",

	margin: "0 auto",
});

const section = uiStyle({
	width: "100%",
});

export const header = uiStyle([
	section,
	{
		flex: "0 0 auto",

		minWidth: theme.sizes.maxWidth,

		padding: `0 calc((100% - ${theme.sizes.maxWidth}) / 2)`,

		borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
		boxShadow: "0 0 6px 0px rgba(0, 0, 0, 0.1)",
	},
]);

export const content = uiStyle([
	section,
	{
		position: "relative",

		flex: "1 1 auto",

		width: theme.sizes.maxWidth,

		overflow: "auto",
	},
]);

export const itemVars = createThemeContract({
	height: null,
	translate: null,
});

export const item = uiStyle({
	position: "absolute",
	top: "0",
	left: "0",
	width: "100%",
	height: itemVars.height,
	transform: `translateY(${itemVars.translate})`,
});
