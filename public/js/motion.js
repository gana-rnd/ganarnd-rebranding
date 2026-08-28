/* GANA R&D — 모션 런타임 (기능 모션만)
 * 하는 일 하나: 스크롤 위치에 따라 헤더에 .is-scrolled 를 토글한다.
 * 이 파일이 로드되지 않아도 사이트의 어떤 콘텐츠도 숨겨지지 않는다.
 */
(() => {
  const hdr = document.querySelector('.hdr');
  if (!hdr) return;
  let ticking = false;
  const update = () => {
    hdr.classList.toggle('is-scrolled', window.scrollY > 24);
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }, { passive: true });
  update();
})();
