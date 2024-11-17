import { createVar, createThemeContract } from "@vanilla-extract/css";

import { uiStyle } from "@/helpers/style";

export const heightVar = createVar();

export const root = uiStyle({
	position: "relative",

	width: "100%",
	height: heightVar,
});

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
