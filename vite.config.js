import { defineConfig, loadEnv } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import fs from 'fs';

export default defineConfig({
    plugins: [svelte()],
    server: {
        https: (() => { 
            process.env = {
                ...process.env, 
                ...loadEnv(process.env.NODE_ENV, process.cwd())
            };

            try {
                return {
                    key: fs.readFileSync(process.env.VITE_HTTPS_KEY),
                    cert: fs.readFileSync(process.env.VITE_HTTPS_CERT)
                };
            } catch {
            }
        })()
    }
});