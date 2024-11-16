import { uiStyle } from "@/helpers/style";

const width = "1000px";

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

		minWidth: width,

		padding: `0 calc((100% - ${width}) / 2)`,

		borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
		boxShadow: "0 0 6px 0px rgba(0, 0, 0, 0.1)",
	},
]);

export const content = uiStyle([
	section,
	{
		flex: "1 1 auto",

		width,
	},
]);
