// vite.config.js
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";

const _dirname = typeof __dirname !== 'undefined'
  ? __dirname
  : dirname(fileURLToPath(import.meta.url))

const outDir = resolve(_dirname, "dist");

export default defineConfig({
	build: {
		rollupOptions: {
			outDir,
			emptyOutDir: true,
			input: {
				main: resolve(_dirname, "index.html"),
				public: resolve(_dirname, "favourites.html"),
			},
		},
	},
});
