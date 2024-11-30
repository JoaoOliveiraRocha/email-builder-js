import path from 'path';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/email-builder-js/',
  alias: {
    react: path.resolve(__dirname, 'node_modules/react'),
    'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
  },
});
