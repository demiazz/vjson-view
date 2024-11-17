import { createGlobalTheme } from "@vanilla-extract/css";

export const theme = createGlobalTheme(":root", {
	sizes: {
		font: "14px",
		maxWidth: "1000px",
	},

	colors: {
		background: {
			primary: "white",
		},

		content: {
			primary: "#1a1a1a",
			secondary: "#696969",
			contrast: "white",
			disabled: "#b3b3b3",
		},

		status: {
			success: "#00b7a2",
		},

		control: {
			disabled: "rgba(51, 51, 51, 0.05)",
			focus: "rgba(18, 127, 249, 0.4)",
			focusDanger: "rgba(229, 93, 93, 0.4)",
		},
	},

	duration: {
		fast: {
			1: "70ms",
			2: "110ms",
		},
		moderate: {
			1: "150ms",
			2: "240ms",
		},
		slow: {
			1: "400ms",
			2: "700ms",
		},
	},

	easing: {
		standard: {
			productive: "cubic-bezier(0.2, 0, 0.38, 0.9)",
			expressive: "cubic-bezier(0.4, 0.14, 0.3, 1)",
		},
		entrance: {
			productive: "cubic-bezier(0, 0, 0.38, 0.9)",
			expressive: "cubic-bezier(0, 0, 0.3, 1)",
		},
		exit: {
			productive: "cubic-bezier(0.2, 0, 1, 0.9)",
			expressive: "cubic-bezier(0.4, 0.14, 1, 1)",
		},
	},
});
