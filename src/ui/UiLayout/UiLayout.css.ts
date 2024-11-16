import { uiStyle } from "@/helpers/style";

export const root = uiStyle({
	position: "relative",

	display: "flex",
	flexDirection: "column",
	justifyContent: "stretch",
	alignItems: "center",

	width: "1000px",
	height: "100vh",

	margin: "0 auto",

	borderWidth: "0px 1px 0px 1px",
	borderStyle: "solid",
	borderColor: "rgba(0, 0, 0, 0.1)",
});

const section = uiStyle({
	width: "100%",
});

export const header = uiStyle([
	section,
	{
		flex: "0 0 auto",
	},
]);

export const content = uiStyle([
	section,
	{
		flex: "1 1 auto",
	},
]);
