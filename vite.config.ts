import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import { visualizer } from 'rollup-plugin-visualizer';
// import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // viteCompression({
    //   //gzip压缩
    //   deleteOriginFile: true, // 删除源文件
    //   verbose: true,
    //   disable: false,
    //   threshold: 10240,
    //   algorithm: 'gzip',
    //   ext: '.gz'
    // }),
    // visualizer()
  ],
  // build: {
  //   rollupOptions: {
  //     output:{
  //         manualChunks(id) {
  //           if (id.includes('node_modules')) {
  //               return id.toString().split('node_modules/')[1].split('/')[0].toString();
  //           }
  //       }
  //     }
  //   }
  // }
})
