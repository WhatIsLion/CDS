import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [react(), dts()],
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
