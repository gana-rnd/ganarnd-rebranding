#!/usr/bin/env python3
"""언어별 페이지 디렉토리 생성.
src/pages/*.astro (영어, 기본)를 읽어서 src/pages/{zh,es,th,vi,ru}/ 에 복사.
상대 경로(../)를 한 단계 더 올라가도록(../../) 수정.
"""
import os
import re

PAGES = ['index', 'aesthetics', 'wound-care', 'co-development', 'market-access', 'contact']
LANGS = ['zh', 'es', 'th', 'vi', 'ru']
SRC = 'src/pages'

for lang in LANGS:
    lang_dir = os.path.join(SRC, lang)
    os.makedirs(lang_dir, exist_ok=True)
    for page in PAGES:
        src_file = os.path.join(SRC, f'{page}.astro')
        dst_file = os.path.join(lang_dir, f'{page}.astro')
        with open(src_file) as f:
            content = f.read()
        # 상대 경로 한 단계 추가: '../' → '../../'
        content = content.replace("from '../", "from '../../")
        with open(dst_file, 'w') as f:
            f.write(content)
        print(f'{lang}/{page}.astro')

print(f'\nDone: {len(LANGS)} languages × {len(PAGES)} pages = {len(LANGS) * len(PAGES)} files')
