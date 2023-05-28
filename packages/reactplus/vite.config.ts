import { defineConfig } from 'vite'
// vite.config.ts
import { createConfig } from './build';

export default defineConfig((params: ConfigEnv): UserConfig => {
    const config = createConfig(params);
    return config;
});
