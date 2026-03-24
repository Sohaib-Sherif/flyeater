/// <reference types="vite/client" />


// 1. Tell TS about Vue files
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

interface ViteTypeOptions {
  // By adding this line, you can make the type of ImportMetaEnv strict
  // to disallow unknown keys.
  strictImportMetaEnv: unknown
}

interface ImportMetaEnv {
  readonly VITE_FLY_API_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}