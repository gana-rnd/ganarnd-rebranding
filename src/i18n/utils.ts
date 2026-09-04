// GANA R&D i18n 유틸리티
import { en, type UIStrings } from './en';
import { ko } from './ko';
import { zh } from './zh';
import { es } from './es';
import { th } from './th';
import { vi } from './vi';
import { ru } from './ru';

export const languages = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'ko', label: 'KO', name: '한국어' },
  { code: 'zh', label: 'ZH', name: '中文' },
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'th', label: 'TH', name: 'ภาษาไทย' },
  { code: 'vi', label: 'VI', name: 'Tiếng Việt' },
  { code: 'ru', label: 'RU', name: 'Русский' },
] as const;

export type LangCode = (typeof languages)[number]['code'];
export const defaultLang: LangCode = 'en';
export const langCodes: LangCode[] = languages.map((l) => l.code);

const translations: Record<LangCode, UIStrings> = { en, ko, zh, es, th, vi, ru };

/** URL에서 언어 코드 추출 — /zh/... → zh, /... → en */
export function getLangFromUrl(url: URL): LangCode {
  const seg = url.pathname.split('/')[1];
  return (langCodes as string[]).includes(seg) ? (seg as LangCode) : defaultLang;
}

/** 언어 코드에 해당하는 번역 객체 반환 */
export function useTranslations(lang: LangCode): UIStrings {
  return translations[lang] ?? en;
}

/** 경로에 언어 prefix 적용 — 기본어(en)는 prefix 없음.
 * 언어 홈은 '/zh/'처럼 슬래시로 끝나야 sitemap·실제 URL(디렉토리 빌드)과 일치한다. */
export function localizePath(path: string, lang: LangCode): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return `/${lang}${clean === '/' ? '/' : clean}`;
}

/** 현재 경로에서 언어 prefix를 제거한 순수 경로 */
export function stripLangFromPath(pathname: string): string {
  const seg = pathname.split('/')[1];
  if ((langCodes as string[]).includes(seg)) {
    const rest = pathname.slice(seg.length + 1);
    return rest || '/';
  }
  return pathname;
}

/** 번역 문자열 내 {placeholder} 치환 */
export function tpl(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`));
}
