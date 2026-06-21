import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import Footer from '../components/Footer';

const PricingPage2 = () => (
  <div className="bg-[#fdf8f1] min-h-screen">
    
    <style>{`
      :root{
        --bg:#fdf8f1; --card:#ffffff; --border:#ebe3d6;
        --text:#3a332e; --text-soft:#6b635b; --muted:#9a9088; --faint:#b8afa4;
        
        /* Premium - Purple/Lavender */
        --prem:#9b72cf; --prem-ink:#714cb2; --prem-tint:#f5f2fb; --prem-line:#e2d6f4;
        
        /* Standard - Yellow/Beige */
        --olive:#d4a04c; --olive-tint:#fef6e5; --olive-tint-2:#fdfbf7; --olive-line:#efdfbc;
        
        /* General Accent (using Standard color) */
        --amber: var(--olive); --amber-ink: #b8853a; --amber-tint: var(--olive-tint); --amber-line: var(--olive-line);
        
        --rose-bg:#f8ece8; --rose:#c87f6e; --cream:#feefc5;
      }
      .pr-pg {
        color: var(--text);
        font-family: "Pretendard Variable",Pretendard,-apple-system,sans-serif;
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
      }
      .pr-pg * { box-sizing: border-box; }
      .p-wrap { max-width: 480px; margin: 0 auto; padding: 0 22px; }
      .p-section { padding: 40px 0; }
      .p-section.p-major { padding: 54px 0 40px; border-top: 1px solid var(--border); }
      .p-sec-title { font-size: 20px; font-weight: 700; color: var(--text); letter-spacing: -0.5px; line-height: 1.4; }
      .p-sec-sub { font-size: 13.5px; color: var(--muted); margin-top: 8px; line-height: 1.6; }
      .p-center { text-align: center; }
      .p-pillar { font-size: 26px; font-weight: 800; color: var(--text); letter-spacing: -0.8px; line-height: 1.3; }
      .p-pillar .p-num { color: var(--amber); font-weight: 800; }
      .p-pillar-sub { font-size: 13px; color: var(--muted); margin-top: 10px; line-height: 1.6; }

      /* HERO */
      .p-hero { padding: 92px 0 16px; text-align: center; }
      .p-hero .p-loc { font-size: 14px; color: var(--amber-ink); letter-spacing: 2px; font-weight: 700; margin-bottom: 18px; }
      .p-hero h1 { font-size: 32px; font-weight: 800; color: var(--text); letter-spacing: -1px; line-height: 1.3; margin:0; }
      .p-hero h1 .p-am { color: var(--amber); }
      .p-hero p { font-size: 14px; color: var(--text-soft); margin-top: 18px; line-height: 1.85; }
      .p-hero p b { color: var(--text); font-weight: 700; }

      /* PLAN CARDS */
      .p-plans { display: flex; flex-direction: column; gap: 14px; margin-top: 26px; }
      .p-plan { position: relative; background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 24px 22px 20px; text-align: left; margin-top: 10px; }
      .p-plan.p-std { background: var(--olive-tint-2); border-color: var(--olive-line); border-top: 3px solid var(--olive); }
      .p-plan.p-prem { background: var(--prem-tint); border: 1.5px solid var(--prem-line); border-top: 3px solid var(--prem); }
      .p-plan.p-lite { background: #f3efe8; border-color: #e6ddcf; opacity: 0.92; }
      .p-pbadge.p-gray { background: transparent; border: 1px solid var(--faint); color: var(--muted); font-weight: 600; }
      .p-pbadge { position: absolute; top: -11px; left: 22px; font-size: 11px; font-weight: 600; padding: 4px 13px; border-radius: 20px; }
      .p-pbadge.p-olive { background: var(--olive); color: #fff; }
      .p-pbadge.p-prem { background: var(--prem); color: #fff; }
      .p-ptier { font-size: 22px; font-weight: 800; color: var(--muted); letter-spacing: -0.5px; line-height: 1.2; }
      .p-plan.p-std .p-ptier { color: var(--olive); }
      .p-plan.p-prem .p-ptier { color: var(--prem-ink); }
      .p-pvalue { font-size: 15.5px; font-weight: 600; color: var(--text); line-height: 1.45; margin-top: 7px; }
      .p-pvalue .p-am { color: var(--prem-ink); font-weight: 700; }
      .p-pbody { font-size: 12.5px; color: var(--text-soft); line-height: 1.7; margin-top: 8px; }
      .p-pprice { display: flex; gap: 16px; margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--border); font-size: 14px; font-weight: 600; }
      .p-plan.p-prem .p-pprice { border-top-color: var(--prem-line); }
      .p-pprice span { color: var(--text); }
      .p-pprice span i { color: var(--muted); font-weight: 500; font-style: normal; font-size: 12px; margin-right: 4px; }
      .p-pbase { display: inline-flex; align-items: center; gap: 4px; font-size: 11.5px; color: #fff; background: var(--muted); border-radius: 7px; padding: 5px 11px; margin-top: 14px; font-weight: 700; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
      .p-plan.p-std .p-pbase { background: var(--olive); }
      .p-plan.p-prem .p-pbase { background: var(--prem-ink); }
      .p-pbase::before { content: "✓"; color: rgba(255,255,255,0.8); font-weight: 800; font-size: 10px; }
      .p-pmeta { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; }
      .p-chip { font-size: 11.5px; padding: 5px 11px; border-radius: 7px; font-weight: 600; display: inline-flex; align-items: center; gap: 4px; }
      .p-chip::before { font-weight: 800; font-size: 10px; }
      .p-chip.p-on { background: #fff; border: 1px solid var(--olive-line); color: var(--olive); }
      .p-chip.p-on::before { content: "✓"; }
      .p-chip.p-gold { background: #fff; border: 1px solid var(--prem-line); color: var(--prem-ink); }
      .p-chip.p-gold::before { content: "✓"; }
      .p-chip.p-off { background: transparent; border: 1px dashed var(--border); color: var(--faint); font-weight: 500; }
      .p-chip.p-off::before { content: "✕"; }
      .p-pnote { margin-top: 20px; display: flex; flex-direction: column; gap: 11px; text-align: left; }
      .p-pnote .p-row { display: flex; gap: 10px; align-items: flex-start; font-size: 12.5px; line-height: 1.6; }
      .p-pnote .p-row .p-t { flex: 0 0 auto; font-weight: 700; color: var(--text); }
      .p-pnote .p-row .p-d { color: var(--text-soft); }

      /* FEE */
      .p-grid-fee { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; margin-top: 24px; }
      .p-fee { border-radius: 12px; padding: 26px 8px; text-align: center; background: var(--card); border: 1px solid var(--border); }
      .p-fee.p-std { background: var(--olive-tint-2); border-color: var(--olive-line); }
      .p-fee.p-prem { background: var(--prem-tint); border-color: var(--prem-line); }
      .p-fee.p-lite { opacity: 0.85; }
      .p-fee .p-fname { font-size: 15px; font-weight: 600; color: var(--text-soft); }
      .p-fee.p-prem .p-fname { color: var(--prem-ink); }
      .p-fee .p-fdiv { border-top: 1px solid var(--border); margin: 16px 0; }
      .p-fee.p-prem .p-fdiv { border-top-color: var(--prem-line); }
      .p-fee .p-famt { font-size: 17px; font-weight: 700; color: var(--text); word-break: keep-all; }
      @media (min-width: 400px){ .p-fee .p-famt { font-size: 20px; } }
      .p-fee.p-prem .p-famt { color: var(--prem); }
      .p-fee-note { font-size: 13.5px; color: var(--text-soft); line-height: 1.9; text-align: center; margin-top: 22px; font-weight: 500; }

      /* CONDITIONS */
      .p-cond-box { background: var(--card); border: 1px solid var(--border); border-radius: 14px; padding: 24px 18px; text-align: center; margin-top: 20px; }
      .p-cond-box .p-ttl { font-size: 13px; color: var(--olive); font-weight: 700; margin-bottom: 14px; }
      .p-cond-box .p-items { font-size: 14px; color: var(--text); line-height: 2.2; font-weight: 500; }

      /* SUBSCRIPTION INTRO BLOCK */
      .p-subintro { margin-top: 24px; }
      .p-subintro .p-duo { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
      .p-subintro .p-duo .p-cell { background: var(--card); border: 1px solid var(--border); border-radius: 14px; padding: 22px 14px; text-align: center; }
      .p-subintro .p-duo .p-ic { color: var(--amber); margin-bottom: 10px; opacity: 0.9; display: flex; justify-content: center; }
      .p-subintro .p-duo .p-big { font-size: 17px; font-weight: 800; color: var(--text); letter-spacing: -0.3px; }
      .p-subintro .p-duo .p-sm { font-size: 12px; color: var(--muted); margin-top: 5px; }

      .p-vlist { display: flex; flex-direction: column; gap: 12px; margin-top: 26px; }
      .p-vcard { background: var(--card); border: 1px solid var(--border); border-radius: 14px; padding: 20px 22px; display: flex; gap: 15px; align-items: flex-start; text-align: left; }
      .p-vcard .p-vnum { flex: 0 0 auto; width: 30px; height: 30px; border-radius: 9px; background: var(--amber-tint); border: 1px solid var(--amber-line); color: var(--amber-ink); font-size: 15px; font-weight: 800; display: flex; align-items: center; justify-content: center; margin-top: 2px; }
      .p-vcard .p-vbody { flex: 1; }
      .p-vcard .p-vh { font-size: 16px; font-weight: 700; color: var(--text); letter-spacing: -0.3px; }
      .p-vcard .p-vp { font-size: 13px; color: var(--text-soft); line-height: 1.7; margin-top: 6px; }
      .p-vclose { text-align: center; font-size: 18px; color: var(--text); font-weight: 700; line-height: 1.6; margin-top: 36px; letter-spacing: -0.4px; }
      .p-vclose .p-am { color: var(--amber); }

      /* LOSS AVERSION */
      .p-loss-box { background: var(--rose-bg); border-radius: 16px; padding: 40px 26px; text-align: center; }
      .p-loss-box p { font-size: 16px; color: var(--text); font-weight: 700; line-height: 1.65; letter-spacing: -0.4px; margin: 0; }
      .p-loss-box p .p-rs { color: var(--rose); }

      /* CTA */
      @keyframes floatPulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.03); }
        100% { transform: scale(1); }
      }
      .anim-float { animation: floatPulse 2.5s infinite ease-in-out; }
      .p-cta { text-align: center; padding: 18px 0 64px; }
      .p-cta .p-line { font-size: 13.5px; color: var(--text-soft); line-height: 1.9; }
      .p-cta a.p-btn { display: inline-block; margin-top: 24px; background: var(--amber); color: #fff; font-size: 15px; font-weight: 700; text-decoration: none; padding: 16px 42px; border-radius: 11px; transition: transform .15s ease, box-shadow .15s ease; cursor: pointer; }
      .p-cta a.p-btn:hover { transform: translateY(-1px); box-shadow: 0 8px 22px rgba(212,160,76,0.3); }
      .p-foot { font-size: 11px; color: var(--faint); margin-top: 26px; letter-spacing: 0.5px; }

      @media (max-width:360px){
        .p-hero h1 { font-size: 28px; }
        .p-ptier { font-size: 20px; }
        .p-fee .p-famt { font-size: 15px; }
      }
    `}</style>

    <div className="pr-pg">
      <header className="p-hero">
        <div className="p-wrap">
          <div className="p-loc">광주 · 전남 1:1 소개팅</div>
          <h1><span className="p-am">멤버십</span> 비용</h1>
          <p>앱처럼 가볍지 않고,<br/>결혼정보회사처럼 부담스럽지 않게.<br/>
             비용은 <b>구독료</b>와 <b>성사비</b>, 두 가지입니다.</p>
        </div>
      </header>

      <section className="p-section p-major">
        <div className="p-wrap">
          <div className="p-center">
            <div className="p-pillar"><span className="p-num">①</span> 3개월 구독료</div>
            <div className="p-pillar-sub">가입할 때 한 일 결제</div>
          </div>

          <div className="p-subintro">
            <div className="p-duo">
              <div className="p-cell">
                <div className="p-ic">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="16" y1="2" x2="16" y2="6"/></svg>
                </div>
                <div className="p-big">5~7일마다</div>
                <div className="p-sm">새로운 프로필 제공</div>
              </div>
              <div className="p-cell">
                <div className="p-ic">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <div className="p-big">최소 12명 이상</div>
                <div className="p-sm">소개 보장</div>
              </div>
            </div>
          </div>

          <div className="p-plans">
            {/* LITE */}
            <div className="p-plan p-lite">
              <div className="p-ptier">라이트</div>
              <div className="p-pvalue">조건 보장 없음</div>
              <div className="p-pbody">정해진 조건 없이 폭넓게 소개받는 최소 구성입니다.</div>
              <div className="p-pprice"><span><i>남</i>180,000원</span><span><i>여</i>120,000원</span></div>
              <div className="p-pbase">12회 프로필 제공</div>
              <div className="p-pmeta">
                <span className="p-chip p-off">애프터케어</span>
                <span className="p-chip p-off">만남 보장</span>
              </div>
            </div>
            {/* STANDARD */}
            <div className="p-plan p-std">
              <span className="p-pbadge p-olive">합리적인 선택</span>
              <div className="p-ptier">스탠다드</div>
              <div className="p-pvalue">조건 2개 보장</div>
              <div className="p-pbody">나이·직업·키처럼 양보할 수 없는 조건 2가지를 100% 반영합니다.</div>
              <div className="p-pprice"><span><i>남</i>320,000원</span><span><i>여</i>230,000원</span></div>
              <div className="p-pbase">12회 프로필 제공</div>
              <div className="p-pmeta">
                <span className="p-chip p-on">애프터케어 6개월</span>
                <span className="p-chip p-off">만남 보장</span>
              </div>
            </div>
            {/* PREMIUM */}
            <div className="p-plan p-prem">
              <span className="p-pbadge p-prem">확실한 만남을 위한</span>
              <div className="p-ptier">프리미엄</div>
              <div className="p-pvalue">조건 4개 보장 <span className="p-am">+ 만남 3회 보장</span></div>
              <div className="p-pbody">조건 4개까지 깊이 반영하고,<br/>3개월 안에 실제 만남 3회를 보장합니다.</div>
              <div className="p-pprice"><span><i>남</i>480,000원</span><span><i>여</i>360,000원</span></div>
              <div className="p-pbase">12회 프로필 제공</div>
              <div className="p-pmeta">
                <span className="p-chip p-gold">애프터케어 6개월</span>
                <span className="p-chip p-gold">만남 3회 보장</span>
              </div>
            </div>
          </div>

          <div className="p-pnote">
            <div className="p-row">
              <span className="p-t">애프터케어<br/><span style={{fontSize:'11.5px', color:'var(--muted)', fontWeight:500, display:'block', marginTop:'-2px'}}>6개월 보장</span></span>
              <span className="p-d">
                서비스가 끝난 뒤에도 나를 선택한 상대가 생기면 무료로 소개합니다.
                <br/><span style={{display:'inline-block', padding:'3px 8px', background:'var(--olive-tint)', color:'var(--olive)', border:'1px solid var(--olive-line)', borderRadius:'5px', fontSize:'11px', fontWeight:700, marginTop:'6px'}}>스탠다드·프리미엄 적용</span>
              </span>
            </div>
            <div className="p-row" style={{marginTop: '4px'}}>
              <span className="p-t">만남 3회 보장</span>
              <span className="p-d">
                만남 3회가 성사될때까지 기간이 연장됩니다.
                <br/><span style={{display:'inline-block', padding:'3px 8px', background:'var(--prem-tint)', color:'var(--prem-ink)', border:'1px solid var(--prem-line)', borderRadius:'5px', fontSize:'11px', fontWeight:700, marginTop:'6px'}}>프리미엄 전용</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="p-section p-major">
        <div className="p-wrap">
          <div className="p-center">
            <div className="p-pillar"><span className="p-num">②</span> 성사비</div>
            <div className="p-pillar-sub">서로 수락해 만남이 잡힐 때 발생</div>
          </div>
          <div className="p-grid-fee">
            <div className="p-fee p-lite"><div className="p-fname">라이트</div><div className="p-fdiv"></div><div className="p-famt">50,000원</div></div>
            <div className="p-fee p-std"><div className="p-fname">스탠다드</div><div className="p-fdiv"></div><div className="p-famt">30,000원</div></div>
            <div className="p-fee p-prem"><div className="p-fname">프리미엄</div><div className="p-fdiv"></div><div className="p-famt">20,000원</div></div>
          </div>
          <div className="p-fee-note">성사비는 진지한 만남을 위한 장치입니다.<br/>이음로그는 가벼운 만남을 만들지 않으려 합니다.</div>
        </div>
      </section>

      <section className="p-section">
        <div className="p-wrap">
          <div className="p-center">
            <div className="p-sec-title">조건 보장 항목</div>
            <div className="p-sec-sub">스탠다드 2개, 프리미엄 4개까지 보장</div>
          </div>
          <div className="p-cond-box">
            <div className="p-ttl">조건 8가지</div>
            <div className="p-items">나이 &nbsp;·&nbsp; 키 &nbsp;·&nbsp; 종교 &nbsp;·&nbsp; 흡연여부<br/>직업 &nbsp;·&nbsp; 연봉 &nbsp;·&nbsp; 학력 &nbsp;·&nbsp; 자녀계획</div>
          </div>
        </div>
      </section>

      <section className="p-section" style={{ paddingBottom: '22px' }}>
        <div className="p-wrap">
          <div className="p-center">
            <div className="p-sec-title">아무나 만나는 곳이<br/>아닙니다</div>
            <div className="p-sec-sub">괜찮은 사람만, 진지한 사람만 모았습니다</div>
          </div>

          <div className="p-vlist">
            <div className="p-vcard">
              <div className="p-vnum">1</div>
              <div className="p-vbody">
                <div className="p-vh">검증된 사람만 들어옵니다</div>
                <div className="p-vp">외모·스타일·상담까지 보고 선정합니다.</div>
              </div>
            </div>
            <div className="p-vcard">
              <div className="p-vnum">2</div>
              <div className="p-vbody">
                <div className="p-vh">지인은 만나지 않습니다</div>
                <div className="p-vp">2단계 시스템으로 지인을 확실하게 차단합니다.</div>
              </div>
            </div>
            <div className="p-vcard">
              <div className="p-vnum">3</div>
              <div className="p-vbody">
                <div className="p-vh">가벼운 만남은 없습니다</div>
                <div className="p-vp">성사비가 있어 가벼운 사람은 걸러집니다.</div>
              </div>
            </div>
            <div className="p-vcard">
              <div className="p-vnum">4</div>
              <div className="p-vbody">
                <div className="p-vh">3개월 동안 함께합니다</div>
                <div className="p-vp">3개월 동안 꾸준히 소개를 진행합니다.</div>
              </div>
            </div>
          </div>

          <div className="p-vclose">괜찮은 사람을, 진지하게,<br/><span className="p-am">3개월 내내</span> 만날 수 있는 자리입니다.</div>
        </div>
      </section>

      <section className="p-section" style={{ padding: '22px 0 18px' }}>
        <div className="p-wrap">
          <div className="p-loss-box">
            <p>괜찮은 사람을 못 만난 채<br/><span className="p-rs">흘려보낸 시간</span>은<br/>어떤 비용으로도 되돌릴 수 없습니다.</p>
          </div>
        </div>
      </section>

      <section className="p-cta">
        <div className="p-wrap">
          <div className="p-line">
            광주·전남에서<br/>
            괜찮은 사람을 만나고 싶다면
          </div>
          <a className="p-btn" href="https://naver.me/G4GlQVbi" target="_blank" rel="noopener noreferrer">이음로그 신청하기</a>
        </div>
      </section>
    </div>

    <div className="bg-[#0f0f0f] text-white pb-24 md:pb-0">
      <Footer />
    </div>

    {/* 하단 플로팅 CTA */}
    <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
      <div className="bg-gradient-to-t from-white via-white/95 to-white/0 pt-8 pb-4 md:pb-5 px-4 md:px-6 flex justify-center">
        <a 
          href="https://naver.me/G4GlQVbi" 
          target="_blank" 
          rel="noopener noreferrer"
          className="pointer-events-auto anim-float flex w-full max-w-[320px] md:max-w-[400px] items-center justify-center gap-2 bg-[#3a332e] hover:bg-black text-white font-bold rounded-full py-3.5 shadow-2xl active:scale-95 transition-transform"
        >
          <span className="text-[14px] md:text-[15px]">지금 바로 신청하기</span>
          <Sparkles className="w-[16px] h-[16px]" />
        </a>
      </div>
    </div>
  </div>
);

export default PricingPage2;
