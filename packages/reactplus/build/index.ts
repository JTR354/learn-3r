// build/index.ts
import merge from 'deepmerge'
export const createConfig = (params: ConfigEnv, configure?: Configure): UserConfig => {
  const isBuild = params.command === 'build';
  return merge<UserConfig>(
      {
          resolve: {
              alias: {
                  '@': pathResolve('src'),
              },
          },
          css: {
              modules: {
                  localsConvention: 'camelCaseOnly',
              },
          },
          plugins: createPlugins(isBuild),
      },
      typeof configure === 'function' ? configure(params, isBuild) : {},
      {
          arrayMerge: (_d, s, _o) => Array.from(new Set([..._d, ...s])),
      },
  );
};