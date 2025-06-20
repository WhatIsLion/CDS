import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), dts(), tsconfigPaths()],
  build: {
    // @note: 👇 라이브러리 모드로 빌드하겠다는 설정
    lib: {
      entry: 'src/index.ts',
      formats: ['es'], // ESM 모듈로 출력
      fileName: () => 'index.js', // 출력될 파일명 형식 설정
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // 번들에서 제외
    },
  },
});
