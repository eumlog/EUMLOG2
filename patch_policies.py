import re

def read_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

def write_file(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

base_html = read_file('public/policy.html')

# Remove Section VI
sec_vi_pattern = re.compile(r'<h2 class="anim"><span class="n">VI\.</span> 프리미엄 만남 보장 환불 규정</h2>.*?</section>', re.DOTALL)
base_no_vi = sec_vi_pattern.sub('', base_html)

# Define target for Section I for Policy 3 & 4
# We want to replace <p class="lead anim">... up to </dl>
sec_i_target = re.compile(r'<p class="lead anim">기본 진행은 월 평균 4회, 총 12회 프로필 제공 기준으로 진행됩니다.*?</dl>', re.DOTALL)

sec_i_replacement = """<p class="lead anim">저희는 '횟수'만 채우고 끝나는 서비스가 아닙니다. 3개월(90일) 동안 매니저가 함께 완주합니다.</p>
    <dl class="dl anim d1">
      <div class="row"><dt>서비스 모델</dt><dd>3개월 기간제 책임 솔루션 (구독형 모델)</dd></div>
      <div class="row"><dt>이용 기간</dt><dd><b>결제일로부터 3개월 (90일)</b></dd></div>
      <div class="row"><dt>소개 방식</dt><dd>3개월간 횟수 제한 없이 1명씩 순차 제공 (기본 5~7일 주기) <span class="note">※ 프로필은 주 1회 제공을 원칙으로 하나, 상황에 따라 지연될 수 있으며 총 12명 제공은 보장됩니다.</span></dd></div>
      <div class="row"><dt>만남 보장</dt><dd>약속된 만남 횟수(프리미엄 3회)가 성사될 때까지 <b>서비스 기간 무제한 연장</b> <span class="note">기간 종료 후에도 만남 횟수를 채울 때까지 프로필 지속 제공</span></dd></div>
      <div class="row"><dt>애프터케어</dt><dd>3개월 기간이 종료된 후에도, 나를 선택한 상대가 있다면 <b>해당 프로필 무료 제공</b> <span class="note">※ 기간 종료 후 매칭 기회를 놓치지 않도록 지원하는 서비스 (기간 6개월)</span></dd></div>
      <div class="row"><dt>유효 기간</dt><dd>서비스 이용 및 환불 권리의 <b>최장 유효기간은 4개월</b>입니다. <span class="note">4개월 경과 시 모든 권리 소멸</span></dd></div>
    </dl>"""

# ----------------- POLICY 5 -----------------
p5_html = base_no_vi
write_file('public/policy5.html', p5_html)

# ----------------- POLICY 4 -----------------
p4_html = sec_i_target.sub(sec_i_replacement, base_no_vi)
p4_html = p4_html.replace('<h3 class="anim">1. 멤버십 구독권 (기본 12회 진행)</h3>', '<h3 class="anim">1. 멤버십 구독권 (3개월 이용료)</h3>')
write_file('public/policy4.html', p4_html)

# ----------------- POLICY 3 -----------------
p3_html = sec_i_target.sub(sec_i_replacement, base_no_vi)
p3_html = p3_html.replace('<h3 class="anim">1. 멤버십 구독권 (기본 12회 진행)</h3>', '<h3 class="anim">1. 멤버십 구독권 (3개월 이용료)</h3>')
table_target = re.compile(r'(<table class="pt anim d1">.*?<tr><td>남성</td><td>)180,000(원</td>.*?<tr><td>여성</td><td>)120,000(원</td>.*?</table>)', re.DOTALL)
p3_html = table_target.sub(r'\g<1>260,000\g<2>180,000\g<3>', p3_html)
write_file('public/policy3.html', p3_html)

print("Policy 3, 4, 5 re-generated successfully.")
