import {defineConfig} from 'vite'
import wasm from 'vite-plugin-wasm'
import {svelte} from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [wasm(), svelte()]
})
