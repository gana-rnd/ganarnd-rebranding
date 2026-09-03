// 사이트 전역 설정.
//
// FORM_ENDPOINT — 문의 폼 수신처. 설정하면 폼이 실제로 전송된다.
//   가입 없이 이메일만으로:  'https://formsubmit.co/ajax/<받을이메일>'
//     (최초 제출 1회 때 해당 이메일로 활성화 확인 메일이 온다)
//   Formspree 계정이 있다면:  'https://formspree.io/f/<폼ID>'
// 빈 문자열이면 폼은 제출을 막고 우측 주소로 안내한다.
export const FORM_ENDPOINT = '';
