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

/** 공급 범위 — KR 등재만 export_only 값을 가진다 (RU/BR/UK는 null → 표에서 class 등 대체 표기) */
export function scopeOf(r: Reg): 'export' | 'domestic' | null {
  return r.export_only === true ? 'export' : r.export_only === false ? 'domestic' : null;
}

export function fmtDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}
