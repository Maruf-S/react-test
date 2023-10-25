import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import viteTsconfigPaths from "vite-tsconfig-paths"
import svgrPlugin from "vite-plugin-svgr"
// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: parseInt(process.env.PORT || "3000"),
        watch: {
            // WSL sucks so we need to use polling for windows
            usePolling: true,
        },
    },
    plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
})
