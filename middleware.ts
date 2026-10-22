// ganarnd.com 비공개 (회장 지시 2026-10-22: 2026년 12월 말까지 주소를 쳐도 안 열려야 함).
// Vercel Edge Middleware — 모든 요청을 가로채서, 미리보기 쿠키가 있는 브라우저만 실제 사이트로 보낸다.
//   미리보기 열기: https://ganarnd.com/preview?key=<KEY>  → 쿠키 90일 → 그 브라우저는 사이트가 보인다.
//   나머지: 503 "준비 중" 화면 (검색엔진 noindex, 캐시 금지).
// 2027년 1월 공개 시: 이 파일을 지우면 끝. (Base.astro robots meta, vercel.json X-Robots-Tag, robots.txt Sitemap도 함께 복구)

const KEY = 'gr26-k7x3p9';
const COOKIE = 'gana_preview';

export const config = { matcher: '/:path*' };

const HOLDING = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow, noarchive">
<title>GANA R&amp;D</title>
<style>
  html, body { margin: 0; min-height: 100%; }
  body { display: grid; place-items: center; background: #0e2139; color: #f7f9f8; font-family: "Manrope", "Segoe UI", system-ui, sans-serif; }
  main { text-align: center; padding: 48px 24px; }
  .mark { font-family: Georgia, "Times New Roman", serif; font-size: clamp(28px, 5vw, 44px); letter-spacing: .02em; }
  .mark b { font-weight: 700; }
  p { margin: 18px 0 0; font-size: 15px; line-height: 1.6; color: rgba(247,249,248,.72); }
  .tel { margin-top: 28px; font-size: 13px; letter-spacing: .08em; text-transform: uppercase; color: rgba(247,249,248,.55); }
  .tel a { color: inherit; text-decoration: none; }
</style>
</head>
<body>
<main>
  <div class="mark">GANA <b>R&amp;D</b></div>
  <p>This website is being prepared.<br>사이트를 준비하고 있습니다.</p>
  <p class="tel">GANA R&amp;D Co., Ltd. · <a href="tel:+82317330242">+82-31-733-0242</a></p>
</main>
</body>
</html>`;

export default function middleware(req: Request): Response | undefined {
  const url = new URL(req.url);
  const cookie = req.headers.get('cookie') ?? '';

  // 미리보기 쿠키가 있으면 그대로 통과 (사이트 본체 + 정적 파일 전부)
  if (cookie.includes(`${COOKIE}=${KEY}`)) return undefined;

  // 비밀 링크: 쿠키를 심고 홈으로
  if (url.pathname === '/preview' && url.searchParams.get('key') === KEY) {
    return new Response(null, {
      status: 302,
      headers: {
        Location: '/',
        'Set-Cookie': `${COOKIE}=${KEY}; Path=/; Max-Age=7776000; HttpOnly; Secure; SameSite=Lax`,
        'Cache-Control': 'no-store',
      },
    });
  }

  // 그 외 전부: 준비 중 화면
  return new Response(HOLDING, {
    status: 503,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
      'Retry-After': '86400',
      'X-Robots-Tag': 'noindex, nofollow, noarchive',
    },
  });
}
