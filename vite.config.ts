import path from "node:path";

import reactPlugin from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import svgr from "@svgr/rollup";

const rootDir = import.meta.dirname;

export default {
	plugins: [
		svgr({
			svgo: true,
			svgoConfig: {
				plugins: [
					{
						name: "preset-default",
						params: {
							overrides: {
								cleanupIds: false,
								removeViewBox: false,
							},
						},
					},
				],
			},
		}),
		reactPlugin(),
		vanillaExtractPlugin(),
	],

	resolve: {
		alias: [
			{
				find: "@",
				replacement: path.join(rootDir, "./src/"),
			},
		],
	},
};
