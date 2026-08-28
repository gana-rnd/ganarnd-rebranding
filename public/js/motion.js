/* GANA R&D — 모션 런타임
 * samsungcnt.com 패턴 참고:
 *  - IntersectionObserver로 뷰포트 진입 시 is-in 클래스 부여 (1회성)
 *  - 숫자 카운트업 (수량에만 — 등록번호·연도에는 쓰지 않는다)
 *  - 헤더 스크롤 상태 클래스
 *  - CTA 패럴랙스 글로우
 *  - 히어로 로드 시퀀스 (is-loaded)
 *  - 마르퀴: 화면 밖에서는 정지
 * 안전장치:
 *  - 숨김 초기 상태는 CSS에서 html.js 가 있을 때만 적용된다 (JS 없으면 전부 보임)
 *  - 카운트업은 요소가 화면에 들어올 때 시작한다 (그 전까지 실제 값 유지 → 인쇄 안전)
 *  - IntersectionObserver 미지원 시 전부 즉시 표시
 * prefers-reduced-motion 존중.
 */
(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealEls = document.querySelectorAll('[data-reveal], [data-reveal-stagger]');
  const showAll = () => revealEls.forEach((el) => el.classList.add('is-in'));

  /* ── 히어로 로드 시퀀스 ── */
  const boot = () => document.body.classList.add('is-loaded');
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    requestAnimationFrame(boot);
  } else {
    window.addEventListener('DOMContentLoaded', boot, { once: true });
  }

  if (reduced || !('IntersectionObserver' in window)) {
    showAll();
    return;
  }

  /* ── 스크롤 리빌 ── */
  const revealIO = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          revealIO.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );
  revealEls.forEach((el) => revealIO.observe(el));

  /* 인쇄 직전엔 전부 표시 (Ctrl+P 시 beforeprint 발생) */
  window.addEventListener('beforeprint', showAll);

  /* ── 숫자 카운트업 — 화면 진입 시 0에서 시작, 그 전까진 실제 값 ── */
  const easeOutExpo = (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));
  const animateCount = (el) => {
    const node = el.firstChild;
    if (!node || node.nodeType !== Node.TEXT_NODE) return;
    const target = parseFloat(el.dataset.count);
    if (!Number.isFinite(target)) return;
    const dur = 1600;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      node.nodeValue = String(Math.round(target * easeOutExpo(p)));
      if (p < 1) requestAnimationFrame(tick);
      else node.nodeValue = String(target);
    };
    node.nodeValue = '0';
    requestAnimationFrame(tick);
  };
  const countIO = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          countIO.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.4 }
  );
  document.querySelectorAll('[data-count]').forEach((el) => countIO.observe(el));

  /* ── 마르퀴 — 화면 밖이면 정지 ── */
  const marquees = document.querySelectorAll('.marquee-band');
  if (marquees.length) {
    const mIO = new IntersectionObserver((entries) => {
      for (const entry of entries) entry.target.classList.toggle('is-paused', !entry.isIntersecting);
    });
    marquees.forEach((el) => mIO.observe(el));
  }

  /* ── 헤더 스크롤 상태 ── */
  const hdr = document.querySelector('.hdr');
  if (hdr) {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        hdr.classList.toggle('is-scrolled', window.scrollY > 24);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── CTA 패럴랙스 글로우 ── */
  const cta = document.querySelector('.cta');
  if (cta) {
    let ctaTicking = false;
    const onCtaScroll = () => {
      if (ctaTicking) return;
      ctaTicking = true;
      requestAnimationFrame(() => {
        const rect = cta.getBoundingClientRect();
        const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        const clamped = Math.max(0, Math.min(1, progress));
        cta.style.setProperty('--cta-parallax', `${(clamped - 0.5) * 120}px`);
        ctaTicking = false;
      });
    };
    window.addEventListener('scroll', onCtaScroll, { passive: true });
    onCtaScroll();
  }

  /* ── 이미지 패럴랙스 (data-parallax) ── */
  const parallaxEls = document.querySelectorAll('[data-parallax]');
  if (parallaxEls.length) {
    let pTicking = false;
    const onPScroll = () => {
      if (pTicking) return;
      pTicking = true;
      requestAnimationFrame(() => {
        for (const el of parallaxEls) {
          const rect = el.getBoundingClientRect();
          if (rect.bottom < 0 || rect.top > window.innerHeight) continue;
          const speed = parseFloat(el.dataset.parallax) || 0.08;
          const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * speed;
          el.style.transform = `translateY(${offset.toFixed(1)}px)`;
        }
        pTicking = false;
      });
    };
    window.addEventListener('scroll', onPScroll, { passive: true });
    onPScroll();
  }
})();
