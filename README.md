# vite-plugin-pre-pre

A vite plugin that allows you to use `enforce: "pre-pre"` to mark plugins that should execute even before ones that use `enforce: "pre"`.

## Usage

Install the plugin:

```
npm add -D vite-plugin-pre-pre
```

Add it to your config:

```js
import vitePluginPrePre from "vite-plugin-pre-pre";

export default defineConfig({
	plugins: [
		…otherVitePlugins,
		vitePluginPrePre(),
	]
});
```

Now add `enforce: "pre-pre"` to any plugins that should be moved to the very beginning.

```js
{
	name: "my-vite-plugin",
	enforce: "pre-pre",
	// …
}
```
