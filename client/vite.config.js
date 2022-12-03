import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            jsxRuntime: 'classic'
        }),
        svgrPlugin(),
    ],
    esbuild: {
        loader: "jsx",
        include: /src\/.*\.jsx?$/,
        exclude: [],
    },
    optimizeDeps: {
        esbuildOptions: {
        loader: {
            ".js": "jsx"
        },
        },
    },
    server: {
        port: 3000,
        proxy: {
            '/api': 'http://localhost:1337/api'
        }
    }
});