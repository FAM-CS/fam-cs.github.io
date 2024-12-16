import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react({
        jsxImportSource: "@emotion/react",     //? changes where JSX is imported from
    })],
    base: "https://fam-cs.github.io/"
})