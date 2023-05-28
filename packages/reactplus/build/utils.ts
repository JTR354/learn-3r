import {resolve} from 'path'
// build/utils.ts
export const pathResolve = (dir: string) => resolve(__dirname, '../', dir);