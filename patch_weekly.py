import sys

with open('public/weekly.html', 'r', encoding='utf-8') as f:
    html = f.read()

target = """    <div class="panel" id="p2">
      <div class="meta"><b>여수 · 순천 · 광양 선정자</b><span>7월 5주차</span></div>
      <img src="./weekly/005-2.png" alt="7월 5주차 여순광 선정자 명단">
    </div>"""

replacement = """    <div class="panel" id="p2">
      <div class="meta"><b>여수 · 순천 · 광양 선정자</b><span>2026-07-29 업데이트</span></div>
      <img class="anim d2" src="./weekly/005-2.png" alt="7월 5주차 여순광 선정자 명단">
    </div>"""

if target in html:
    html = html.replace(target, replacement)
    with open('public/weekly.html', 'w', encoding='utf-8') as f:
        f.write(html)
    print("Patched successfully")
else:
    print("Target string not found in public/weekly.html")
