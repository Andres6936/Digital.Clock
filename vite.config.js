import {defineConfig} from "vite";

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
    return {
        build: {
            lib: {
                entry: "src/DigitalClock.ts",
                formats: ["es"],
            },
            rollupOptions: {
                external: mode === "production" ? "" : /^lit-element/,
            },
        },
    };
});