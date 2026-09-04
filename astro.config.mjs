import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GANA R&D — 허가 의료기기 제조사 사이트 (4사이트 계획의 ②)
// 도메인 미정. 컷오버 전까지 Vercel 프리뷰 URL로 운영.
export default defineConfig({
  site: 'https://ganarnd.co.kr',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', ko: 'ko', zh: 'zh', es: 'es', th: 'th', vi: 'vi', ru: 'ru' },
      },
    }),
  ],
});
