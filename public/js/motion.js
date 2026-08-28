/* GANA R&D — 모션 런타임
 * samsungcnt.com 패턴 참고:
 *  - IntersectionObserver로 뷰포트 진입 시 is-in 클래스 부여 (1회성)
 *  - 숫자 카운트업
 *  - 헤더 스크롤 상태 클래스
 *  - CTA 패럴랙스 글로우
 *  - 히어로 로드 시퀀스 (is-loaded)
 * prefers-reduced-motion 존중.
 */
(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── 히어로 로드 시퀀스 ── */
  const boot = () => {
    document.body.classList.add('is-loaded');
  };
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    requestAnimationFrame(boot);
  } else {
    window.addEventListener('DOMContentLoaded', boot, { once: true });
  }

  if (reduced) {
    // 모션 감소 설정: 모든 리빌 요소를 즉시 표시
    document.querySelectorAll('[data-reveal], [data-reveal-stagger]').forEach((el) => el.classList.add('is-in'));
    return;
  }

  /* ── 스크롤 리빌 (IntersectionObserver) ── */
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
  document.querySelectorAll('[data-reveal], [data-reveal-stagger]').forEach((el) => revealIO.observe(el));

  /* ── 숫자 카운트업 ── */
  const easeOutExpo = (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));
  const animateCount = (el) => {
    const target = parseFloat(el.dataset.count);
    const dur = 1600;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const val = Math.round(target * easeOutExpo(p));
      // 천 단위 구분 없이 표기 (연도·라이선스 번호 등에 쉼표가 들어가면 어색함)
      el.firstChild.nodeValue = String(val);
      if (p < 1) requestAnimationFrame(tick);
      else el.firstChild.nodeValue = String(target);
    };
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
  document.querySelectorAll('[data-count]').forEach((el) => {
    // 초기값 0으로 설정 (첫 텍스트 노드만)
    if (el.firstChild && el.firstChild.nodeType === Node.TEXT_NODE) {
      el.firstChild.nodeValue = '0';
    }
    countIO.observe(el);
  });

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
