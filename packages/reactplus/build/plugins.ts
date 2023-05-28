// build/plugins.ts
export function createPlugins(isBuild: boolean) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [react()];
  return vitePlugins;
}