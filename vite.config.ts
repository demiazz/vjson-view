import path from "node:path";

import reactPlugin from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

const rootDir = import.meta.dirname;

export default {
	plugins: [reactPlugin(), vanillaExtractPlugin()],

	resolve: {
		alias: [
			{
				find: "@",
				replacement: path.join(rootDir, "./src/"),
			},
		],
	},
};
