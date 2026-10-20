// 언어별 페이지 생성 — gen-lang-pages.py의 Node 판(이 PC에 Python이 없음).
// 영어 페이지(src/pages/…)를 zh/es/th/vi/ru 디렉터리로 복사하고, 상대 import 경로를 한 단계 올린다.
// 사용: node gen-lang-pages.mjs                → 아래 PAGES 전부
//       node gen-lang-pages.mjs aesthetics 'aesthetics/[slug]'  → 지정한 페이지만
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';

const LANGS = ['zh', 'es', 'th', 'vi', 'ru'];
const PAGES = ['index', 'aesthetics', 'aesthetics/[slug]', 'co-development', 'market-access', 'training', 'about', 'contact'];
const pages = process.argv.slice(2).length ? process.argv.slice(2) : PAGES;

for (const lang of LANGS) {
  for (const page of pages) {
    const src = join('src/pages', `${page}.astro`);
    const dst = join('src/pages', lang, `${page}.astro`);
    const depth = page.split('/').length;
    const from = `from '${'../'.repeat(depth)}`;
    const to = `from '${'../'.repeat(depth + 1)}`;
    const out = readFileSync(src, 'utf8').split(from).join(to);
    mkdirSync(dirname(dst), { recursive: true });
    writeFileSync(dst, out);
    console.log(`${lang}/${page}.astro`);
  }
}
console.log(`Done: ${LANGS.length} languages × ${pages.length} pages`);
