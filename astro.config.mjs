// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // 公開URL。GitHub Actions(.github/workflows/deploy.yml)が SITE_URL を自動で渡します。
  // 自分のパソコンで確認するときは未設定のままで構いません。
  site: process.env.SITE_URL || 'http://localhost:4321',
  // トップページ(URL の末尾が / だけのページ)を開いたら、プロフィールへ自動で移動します
  redirects: {
    '/': '/profile',
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
    assetsInlineLimit: 10240, // 10KB to inline achievements.css (7.5KB)
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsInlineLimit: 10240,
    }
  },

  integrations: [react()]
});
