#!/usr/bin/env python3
"""GANA R&D 이미지 최적화 — WebP 변환 + 리사이즈.

규칙:
- 히어로/밴드용 대형 이미지: 최대 폭 1920px
- 콘텐츠 비주얼: 최대 폭 1600px
- PNG(합성 제품컷)는 투명 알파가 없으면 WebP로, JPG도 WebP로
- 원본은 public/images/original/ 에 백업
"""
import os
import shutil
from PIL import Image

SRC = 'public/images'
BACKUP = os.path.join(SRC, 'original')
os.makedirs(BACKUP, exist_ok=True)

# 파일별 최대 폭 (렌더링 용도 기준)
PLAN = {
    'syringes-set.png': 1920,   # 메인 + aesthetics 히어로
    'vial-stone.png': 1600,     # split visual / contact
    'vial-marble.png': 1600,    # co-development
    'vial-box.png': 1600,       # aesthetics split
    'filler-x-box.jpg': 1600,   # market-access
    'gana-patch-1.jpg': 1400,   # wound-care split
    'gana-patch-2.jpg': 1200,   # wound-care grid
    'gana-patch-3.jpg': 1400,   # wound-care grid (large)
    'gana-patch-4.jpg': 1200,   # wound-care grid
    'syringe-blue.png': 800,    # 소형 제품컷 (현재 미사용이지만 최적화)
    'syringe-green.png': 800,
    'syringe-red.png': 800,
    'syringe-yellow.png': 800,
}

QUALITY = 82

results = []
for name, max_w in PLAN.items():
    path = os.path.join(SRC, name)
    if not os.path.exists(path):
        print(f'SKIP {name} (없음)')
        continue
    orig_size = os.path.getsize(path)
    img = Image.open(path)
    has_alpha = img.mode in ('RGBA', 'LA') and img.getextrema()[-1][0] < 255

    # 리사이즈
    if img.width > max_w:
        ratio = max_w / img.width
        img = img.resize((max_w, round(img.height * ratio)), Image.LANCZOS)

    # 백업
    shutil.copy2(path, os.path.join(BACKUP, name))

    # WebP 저장 (알파 있으면 무손실 알파 유지)
    out_name = os.path.splitext(name)[0] + '.webp'
    out_path = os.path.join(SRC, out_name)
    if has_alpha:
        img.save(out_path, 'WEBP', quality=QUALITY, method=6)
    else:
        img.convert('RGB').save(out_path, 'WEBP', quality=QUALITY, method=6)

    new_size = os.path.getsize(out_path)
    results.append((name, out_name, orig_size, new_size, img.size))

print(f'\n{"원본":<22}{"변환":<22}{"원본 크기":>10}{"변환 크기":>10}{"절감":>8}  해상도')
total_o = total_n = 0
for name, out_name, o, n, size in results:
    total_o += o
    total_n += n
    print(f'{name:<22}{out_name:<22}{o//1024:>8}KB{n//1024:>8}KB{(1 - n / o) * 100:>7.0f}%  {size[0]}x{size[1]}')
print(f'\n합계: {total_o//1024}KB → {total_n//1024}KB ({(1 - total_n / total_o) * 100:.0f}% 절감)')
