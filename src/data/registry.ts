// registrations.json 접근 헬퍼 — 사이트의 모든 숫자는 여기서 계산한다.
import data from './registrations.json';

export type Reg = Record<string, any>;

export const manufacturer = data.manufacturer as Record<string, any>;
export const credentials = manufacturer.credentials as Reg[];
export const marketAccess = data.market_access as Reg[];

export const all: Reg[] = data.registrations as Reg[];

/** 사이트에 게시 가능한 등재: publish=true 이고 status=active 인 것만 */
export const published: Reg[] = all.filter((r) => r.publish === true && r.status === 'active');

export const jurisdictionName: Record<string, string> = {
  KR: 'South Korea',
  RU: 'Russia',
  BR: 'Brazil',
  UK: 'United Kingdom',
  EU: 'European Union',
  US: 'United States',
};

export const authorityName: Record<string, string> = {
  KR: 'MFDS',
  RU: 'Roszdravnadzor',
  BR: 'ANVISA',
  UK: 'MHRA',
};

export function countBy(list: Reg[], key: string): Record<string, number> {
  return list.reduce((acc, r) => {
    const k = String(r[key] ?? 'other');
    acc[k] = (acc[k] ?? 0) + 1;
    return acc;
  }, {} as Record<string, number>);
}

export const counts = {
  published: published.length,
  jurisdictions: Object.keys(countBy(published, 'jurisdiction')).length,
  byJurisdiction: countBy(published, 'jurisdiction'),
  byDepth: countBy(published, 'depth'),
};

export const surface = published.filter((r) => r.depth === 'surface');
export const tissue = published.filter((r) => r.depth === 'tissue');

/** 성분 계열별 묶음 (표면 제품). chemistry 미확인은 'Other'로 */
export function chemistryGroups(list: Reg[]): { name: string; items: Reg[] }[] {
  const order = ['HA', 'PLLA', 'PCL', 'calcium', 'PN/PDRN'];
  const groups: Record<string, Reg[]> = {};
  for (const r of list) {
    const c: string = r.chemistry ?? '';
    const key = order.find((o) => c.toLowerCase().startsWith(o.toLowerCase())) ?? 'Other';
    (groups[key] ??= []).push(r);
  }
  const named: Record<string, string> = { HA: 'Hyaluronic acid', PLLA: 'PLLA', PCL: 'PCL', calcium: 'Calcium', 'PN/PDRN': 'PN / PDRN', Other: 'Other tissue-repair materials' };
  return [...order, 'Other'].filter((k) => groups[k]).map((k) => ({ name: named[k], items: groups[k] }));
}

export const gmp = credentials.find((c) => c.id === 'mfds-gmp')!;
export const licence = credentials.find((c) => c.id === 'mfds-licence')!;
export const eudamed = credentials.find((c) => c.id === 'eudamed-srn')!;
export const mhra = credentials.find((c) => c.id === 'mhra-man')!;

/** 표의 품목 라벨 — category_en → chemistry 순 (lang은 호출부 호환용) */
export function catLabel(r: Reg, _lang?: string): string {
  return r.category_en ?? r.chemistry ?? '';
}
/** 표에 보이는 제품명 — 위탁 브랜드 확인 전(brand_check)인 등재는 이름 대신 "파트너 브랜드"로,
 *  표시명이 따로 있으면(display_product, 예: 위탁 브랜드 괄호를 뺀 이름) 그걸 쓴다. 등록번호는 그대로 게시. */
export function productName(r: Reg, partnerLabel: string): string {
  if (r.brand_check) return partnerLabel;
  return r.display_product ?? r.product;
}
/** 총괄 허가 비고 */
export function umbrellaNote(r: Reg, _lang?: string): string | null {
  return r.umbrella_note_en ?? null;
}
/** 공급 범위 — KR 등재만 export_only 값을 가진다 (RU/BR/UK는 null → 표에서 class 등 대체 표기) */
export function scopeOf(r: Reg): 'export' | 'domestic' | null {
  return r.export_only === true ? 'export' : r.export_only === false ? 'domestic' : null;
}

const dateLocale: Record<string, string> = { en: 'en-GB', zh: 'zh-CN', es: 'es-ES', th: 'th-TH-u-ca-gregory', vi: 'vi-VN', ru: 'ru-RU' };
/** 언어별 날짜 표기 — 태국어는 불기 대신 서기 달력으로 고정 */
export function fmtDate(iso: string, lang = 'en'): string {
  const d = new Date(iso);
  return d.toLocaleDateString(dateLocale[lang] ?? 'en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

/** id로 게시 가능한 등재 한 건 찾기 — 없으면 undefined (status 변경 시 홈에서 조용히 빠지도록) */
export function byId(id: string): Reg | undefined {
  return published.find((r) => r.id === id);
}

/** 홈 대표 제품 2종 — 회장 지시(2026-09-15): "ganafill and gana patch are main products, use two products on first page" */
export const featured: { key: 'fill' | 'patch'; name: string; page: string; regs: Reg[] }[] = [
  { key: 'fill', name: 'GANA FILL', page: '/aesthetics', regs: ['kr-14-652'].map(byId).filter(Boolean) as Reg[] },
  { key: 'patch', name: 'GANA PATCH', page: '/wound-care', regs: ['kr-20-4997', 'ru-2024-22431', 'kr-15-4197'].map(byId).filter(Boolean) as Reg[] },
];
