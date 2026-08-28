@echo off
rem GANA R&D 사이트 로컬 실행 — 더블클릭하면 dev 서버 + 브라우저
cd /d "%~dp0"
npm run dev -- --open --port 4321
