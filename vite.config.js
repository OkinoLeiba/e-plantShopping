import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/shoppingreact",
  plugins: [react()],
  build: {
    input: "src/main.jsx",

    outDir: "./build",
    
    emptyOutDir: true
  }
})
