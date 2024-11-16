import reactPlugin from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default {
	plugins: [reactPlugin(), vanillaExtractPlugin()],
};
