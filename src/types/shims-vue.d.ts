/// <reference types="vite/client" />


// 1. Tell TS about Vue files
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}