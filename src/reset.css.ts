import { globalStyle } from "@vanilla-extract/css";

globalStyle("*, :after, :before", {
	"@layer": {
		reset: {
			// NOTE: Change from `box-sizing: content-box` so that `width` is not affected by `padding` or `border`.
			boxSizing: "border-box",
		},
	},
});

globalStyle(":where(html)", {
	"@layer": {
		reset: {
			width: "100vw",
			height: "100vh",
			WebkitFontSmoothing: "antialiased",
			MozOsxFontSmoothing: "grayscale",

			"@media": {
				"(prefers-reduced-motion: no-preference)": {
					scrollBehavior: "smooth",
				},
			},
		},
	},
});

globalStyle(":where(body)", {
	"@layer": {
		reset: {
			width: "100vw",
			height: "100vh",
			// NOTE: Remove the margin in all browsers.
			margin: "0",
			// NOTE: As a best practice, apply a default `body-background`.
			backgroundColor: "#fff",
			color: "rgba(0, 0, 0, 0.85)",
			fontFamily: '"Source Code Pro Variable", monospace',
			fontWeight: 500,
			fontStyle: "normal",
			fontSize: "14px",
			lineHeight: "22px",
		},
	},
});
