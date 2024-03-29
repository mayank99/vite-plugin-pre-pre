export default function vitePluginPrePre() {
	return {
		name: "vite-plugin-pre-pre",
		configResolved(config) {
			config.plugins = [
				...config.plugins.filter((p) => p.enforce !== "pre-pre"),
				...config.plugins.filter((p) => p.enforce === "pre-pre"),
			];
		},
	};
}
