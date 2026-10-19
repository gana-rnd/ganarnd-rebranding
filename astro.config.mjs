import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GANA R&D — 허가 의료기기 제조사 사이트 (4사이트 계획의 ②)
// 도메인 미정. 컷오버 전까지 Vercel 프로덕션 URL로 운영 — canonical·hreflang·sitemap이 이 값을 쓰므로
// ganarnd.co.kr이 실제로 이 사이트를 가리키게 된 뒤에 'https://ganarnd.co.kr'로 바꾼다 (public/robots.txt의 Sitemap도 함께).
export default defineConfig({
  site: 'https://ganarnd.com',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', zh: 'zh', es: 'es', th: 'th', vi: 'vi', ru: 'ru' },
      },
    }),
  ],
});
