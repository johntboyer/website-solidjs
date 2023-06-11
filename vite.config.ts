import rehypeHighlight from "rehype-highlight/lib";
import remarkGfm from "remark-gfm";
import solid from "solid-start/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		{
			...(await import("@mdx-js/rollup")).default({
				jsx: true,
				jsxImportSource: "solid-js",
				providerImportSource: "solid-mdx",
				rehypePlugins: [rehypeHighlight],
				remarkPlugins: [remarkGfm],
			}),
			enforce: "pre",
		},
		solid({ ssr: false, extensions: [".mdx", ".md"] }),
	],
});
