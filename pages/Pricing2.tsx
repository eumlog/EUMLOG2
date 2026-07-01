import React, { useState, useEffect, useRef } from 'react';
import Footer from '../components/Footer';

const PricingPage2 = () => {
  const [showCondBtn, setShowCondBtn] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const stdRef = useRef(null);
  const premRef = useRef(null);

  useEffect(() => {
    const zones = [stdRef.current, premRef.current].filter(Boolean);
    if (zones.length === 0) return;
    const visible = new Set();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) visible.add(e.target);
        else visible.delete(e.target);
      });
      setShowCondBtn(visible.size > 0);
    }, { threshold: 0.4 });
    zones.forEach((z) => io.observe(z));
    return () => io.disconnect();
  }, []);

  useEffect(() => { if (!showCondBtn) setPopupOpen(false); }, [showCondBtn]);

  return (
    <div className="pr-pg" style={{ background: 'var(--bg)', paddingBottom: '90px' }}>
      <style>{`
        :root{
          --bg:#fdf8f1; --card:#ffffff; --border:#ebe3d6;
          --text:#3a332e; --text-soft:#6b635b; --muted:#9a9088; --faint:#b8afa4;
          --prem:#9b72cf; --prem-ink:#714cb2; --prem-tint:#f5f2fb; --prem-line:#e2d6f4;
          --olive:#d4a04c; --olive-tint:#fef6e5; --olive-tint-2:#fdfbf7; --olive-line:#efdfbc;
          --amber: var(--olive); --amber-ink: #b8853a; --amber-tint: var(--olive-tint); --amber-line: var(--olive-line);
          --rose-bg:#f8ece8; --rose:#c87f6e; --cream:#feefc5;
        }
        .pr-pg { color: var(--text); font-family:"Pretendard Variable",Pretendard,-apple-system,sans-serif; line-height:1.6; -webkit-font-smoothing:antialiased; }
        .pr-pg * { box-sizing: border-box; margin: 0; padding: 0; }
        .p-wrap { max-width: 480px; margin: 0 auto; padding: 0 22px; }
        .p-section { padding: 40px 0; }
        .p-section.p-major { padding: 54px 0 40px; border-top: 1px solid var(--border); }
        .p-sec-title { font-size: 20px; font-weight: 700; color: var(--text); letter-spacing: -0.5px; line-height: 1.4; }
        .p-sec-sub { font-size: 13.5px; color: var(--muted); margin-top: 8px; line-height: 1.6; }
        .p-center { text-align: center; }
        .p-pillar { font-size: 26px; font-weight: 800; color: var(--text); letter-spacing: -0.8px; line-height: 1.3; }
        .p-pillar .p-num { color: var(--amber); font-weight: 800; }
        .p-pillar-sub { font-size: 13px; color: var(--muted); margin-top: 10px; line-height: 1.6; }
        .p-hero { padding: 70px 0 16px; text-align: center; }
        .p-hero .p-loc { font-size: 14px; color: var(--amber-ink); letter-spacing: 2px; font-weight: 700; margin-bottom: 18px; }
        .p-hero h1 { font-size: 32px; font-weight: 800; color: var(--text); letter-spacing: -1px; line-height: 1.3; margin:0; }
        .p-hero h1 .p-am { color: var(--amber); }
        .p-hero p { font-size: 14px; color: var(--text-soft); margin-top: 18px; line-height: 1.85; }
        .p-hero p b { color: var(--text); font-weight: 700; }

        .p-intro-wrapper { background: #faf9f7; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); display: flex; justify-content: center; width: 100%; }
        .p-intro-page { width: 100%; max-width: 540px; padding: 48px 26px; color: var(--text); }
        .p-intro-head { font-size: 26px; font-weight: 700; color: var(--text); letter-spacing: -0.9px; line-height: 1.45; text-align: left; }
        .p-intro-head mark { background: #fcedc4; color: #8a5a14; padding: 1px 6px; border-radius: 4px; }
        .p-intro-sub { margin-top: 20px; font-size: 18px; color: var(--text-soft); line-height: 1.7; letter-spacing: -0.4px; text-align: left; }
        .p-intro-sub b { color: var(--text); font-weight: 600; }
        .p-intro-stat { display: flex; margin-top: 32px; background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 24px 4px; box-shadow: 0 4px 16px rgba(0,0,0,0.03); }
        .p-intro-stat .c { flex: 1; text-align: center; padding: 0 4px; }
        .p-intro-stat .c + .c { border-left: 1px solid var(--border); }
        .p-intro-stat .n { font-size: 23px; font-weight: 800; color: var(--text); letter-spacing: -0.6px; word-break: keep-all; }
        .p-intro-stat .n small { font-size: 15px; font-weight: 700; }
        .p-intro-stat .l { font-size: 13.5px; font-weight: 600; color: var(--muted); margin-top: 8px; }
        @media (max-width: 360px) { .p-intro-head { font-size: 23px; } .p-intro-sub { font-size: 16px; } .p-intro-stat .n { font-size: 20px; } .p-intro-stat .l { font-size: 12.5px; } }

        .p-plans { display: flex; flex-direction: column; gap: 14px; margin-top: 26px; }
        .p-plan { position: relative; background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 24px 22px 20px; text-align: left; margin-top: 10px; }
        .p-plan.p-std { background: var(--olive-tint-2); border-color: var(--olive-line); border-top: 3px solid var(--olive); }
        .p-plan.p-prem { background: var(--prem-tint); border: 1.5px solid var(--prem-line); border-top: 3px solid var(--prem); }
        .p-plan.p-lite { background: #f3efe8; border-color: #e6ddcf; opacity: 0.92; }
        .p-pbadge { position: absolute; top: -11px; left: 22px; font-size: 11px; font-weight: 600; padding: 4px 13px; border-radius: 20px; }
        .p-pbadge.p-olive { background: var(--olive); color: #fff; }
        .p-pbadge.p-prem { background: var(--prem); color: #fff; }
        .p-ptier { font-size: 22px; font-weight: 800; color: var(--muted); letter-spacing: -0.5px; line-height: 1.2; }
        .p-plan.p-std .p-ptier { color: var(--olive); }
        .p-plan.p-prem .p-ptier { color: var(--prem-ink); }
        .p-pvalue { font-size: 15.5px; font-weight: 600; color: var(--text); line-height: 1.45; margin-top: 7px; }
        .p-pvalue .p-am { color: var(--prem-ink); font-weight: 700; }
        .p-pvalue .p-em { color: var(--olive); font-weight: 800; font-size: 17.5px; }
        .p-plan.p-prem .p-pvalue .p-em { color: var(--prem-ink); }
        .p-pbody { font-size: 12.5px; color: var(--text-soft); line-height: 1.7; margin-top: 8px; }
        .p-pprice { display: flex; gap: 16px; margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--border); font-size: 14px; font-weight: 600; }
        .p-plan.p-prem .p-pprice { border-top-color: var(--prem-line); }
        .p-pprice span { color: var(--text); }
        .p-pprice span i { color: var(--muted); font-weight: 500; font-style: normal; font-size: 12px; margin-right: 4px; }
        .p-pbase { display: inline-flex; align-items: center; gap: 4px; font-size: 11.5px; font-weight: 700; color: #fff; background: #8a8178; border-radius: 8px; padding: 6px 11px; margin-top: 12px; }
        .p-chip::before { content: "✓"; font-weight: 800; font-size: 10px; }
        .p-plan.p-std .p-pbase { background: var(--olive); }
        .p-plan.p-prem .p-pbase { background: var(--prem); }
        .p-pmeta { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; }
        .p-chip { font-size: 11.5px; padding: 6px 11px; border-radius: 8px; font-weight: 700; display: inline-flex; align-items: center; gap: 4px; }
        .p-chip::before { font-weight: 800; font-size: 10px; }
        .p-chip.p-on { background: var(--olive); color: #fff; border: none; }
        .p-chip.p-on::before { content: "✓"; }
        .p-chip.p-gold { background: var(--prem); color: #fff; border: none; }
        .p-chip.p-gold::before { content: "✓"; }
        .p-chip.p-spark { color: #fff; border: none; position: relative; overflow: hidden; background: linear-gradient(110deg, #9b72cf 0%, #b88ee8 50%, #9b72cf 100%); background-size: 200% 100%; box-shadow: 0 3px 12px rgba(155,114,207,0.5); animation: sparkShimmer 2.6s infinite linear, sparkPulse 1.8s infinite ease-in-out; }
        .p-chip.p-spark::before { content: "✨"; font-size: 11px; }
        @keyframes sparkShimmer { 0%{ background-position: 200% 0; } 100%{ background-position: -200% 0; } }
        @keyframes sparkPulse { 0%,100%{ box-shadow: 0 3px 12px rgba(155,114,207,0.45); transform: scale(1); } 50%{ box-shadow: 0 5px 20px rgba(155,114,207,0.85); transform: scale(1.04); } }
        .p-chip.p-off { background: transparent; border: 1px dashed var(--border); color: var(--faint); font-weight: 600; }
        .p-chip.p-off::before { content: "✕"; }
        .p-pnote { margin-top: 0; display: flex; flex-direction: column; gap: 0; text-align: left; }
        .p-pnote .p-row { display: flex; gap: 10px; align-items: flex-start; font-size: 12.5px; line-height: 1.35; padding: 7px 4px; }
        .p-pnote .p-row .p-t { flex: 0 0 auto; font-weight: 700; color: var(--text); }
        .p-pnote .p-row .p-d { color: var(--text-soft); }
        .pc-br { display: none; }
        .p-grid-fee { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; margin-top: 24px; }
        .p-fee { border-radius: 12px; padding: 26px 8px; text-align: center; background: var(--card); border: 1px solid var(--border); }
        .p-fee.p-std { background: var(--olive-tint-2); border-color: var(--olive-line); }
        .p-fee.p-prem { background: var(--prem-tint); border-color: var(--prem-line); }
        .p-fee.p-lite { background: #faf6f0; border-color: #ece4d8; }
        .p-fee.p-lite .p-fname, .p-fee.p-lite .p-famt { color: var(--muted); }
        .p-fee .p-fname { font-size: 15px; font-weight: 600; color: var(--text-soft); }
        .p-fee.p-prem .p-fname { color: var(--prem-ink); }
        .p-fee.p-std .p-fname { color: var(--olive); }
        .p-fee .p-fdiv { border-top: 1px solid var(--border); margin: 16px 0; }
        .p-fee.p-prem .p-fdiv { border-top-color: var(--prem-line); }
        .p-fee .p-famt { font-size: 17px; font-weight: 700; color: var(--text); word-break: keep-all; }
        @media (min-width: 400px){ .p-fee .p-famt { font-size: 20px; } }
        .p-fee.p-prem .p-famt { color: var(--prem); }
        .p-fee.p-std .p-famt { color: var(--olive); }
        .p-fee-note { font-size: 13.5px; color: var(--text-soft); line-height: 1.9; text-align: center; margin-top: 22px; font-weight: 500; }
        .p-two { display: flex; flex-direction: column; gap: 10px; margin-top: 24px; }
        .p-twobox { background: var(--card); border: 1px solid var(--border); border-radius: 14px; padding: 18px 20px; display: flex; align-items: center; gap: 14px; }
        .p-twobox .p-thead { display: flex; align-items: center; gap: 9px; flex: 0 0 auto; }
        .p-twobox .p-tnum { width: 26px; height: 26px; border-radius: 50%; background: var(--amber); color: #fff; font-size: 13px; font-weight: 800; display: flex; align-items: center; justify-content: center; flex: 0 0 auto; }
        .p-twobox .p-tname { font-size: 18px; font-weight: 800; color: var(--text); letter-spacing: -0.4px; }
        .p-twobox .p-tdesc { font-size: 13px; color: var(--text-soft); font-weight: 500; line-height: 1.5; margin-left: auto; text-align: right; }
        .p-twobox .p-tdesc b { color: var(--amber-ink); font-weight: 800; }
        .p-twobox .p-tdesc .p-tbig { font-size: 16px; }
        .p-tplus { text-align: center; font-size: 19px; font-weight: 800; color: var(--muted); margin: -3px 0; }
        .p-vlist { display: flex; flex-direction: column; gap: 11px; margin-top: 20px; }
        .p-vcard { background: var(--card); border: 1px solid var(--border); border-radius: 12px; padding: 14px 16px; display: flex; gap: 12px; align-items: flex-start; text-align: left; }
        .p-vcard .p-vnum { flex: 0 0 auto; width: 24px; height: 24px; border-radius: 7px; background: var(--amber-tint); border: 1px solid var(--amber-line); color: var(--amber-ink); font-size: 13px; font-weight: 800; display: flex; align-items: center; justify-content: center; margin-top: 1px; }
        .p-vcard .p-vbody { flex: 1; }
        .p-vcard .p-vh { font-size: 15.5px; font-weight: 700; color: var(--text); letter-spacing: -0.3px; }
        .p-vcard .p-vp { font-size: 12px; color: var(--text-soft); line-height: 1.5; margin-top: 4px; }
        .p-vclose { text-align: center; font-size: 15px; color: var(--text); font-weight: 700; line-height: 1.6; margin-top: 30px; letter-spacing: -0.4px; }
        .p-vclose .p-am { color: var(--amber); }
        .p-loss-box { background: var(--rose-bg); border-radius: 16px; padding: 40px 26px; text-align: center; }
        .p-loss-box p { font-size: 16px; color: var(--text); font-weight: 700; line-height: 1.65; letter-spacing: -0.4px; margin: 0; }
        .p-loss-box p .p-rs { color: var(--rose); }
        .p-cta { text-align: center; padding: 18px 0 30px; }
        .p-cta .p-line { font-size: 13.5px; color: var(--text-soft); line-height: 1.9; }
        .p-cta a.p-btn { display: inline-block; margin-top: 24px; background: var(--amber); color: #fff; font-size: 15px; font-weight: 700; text-decoration: none; padding: 16px 42px; border-radius: 11px; }
        .p-floatcta { position: fixed; bottom:0; left:0; right:0; z-index:50; pointer-events:none; }
        .p-floatcta .w { background: linear-gradient(to top,#fff,rgba(255,255,255,.95),rgba(255,255,255,0)); padding:32px 16px 16px; display:flex; justify-content:center; }
        @keyframes floatPulseBtn { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.03); } }
        .p-floatcta a { pointer-events:auto; display:flex; width:100%; max-width:210px; align-items:center; justify-content:center; gap:6px; background:var(--olive); color:#fff; font-size:13.5px; font-weight:700; border-radius:999px; padding:12px 16px; box-shadow:0 10px 24px rgba(212,160,76,0.35); border: 1px solid var(--olive); text-decoration:none; animation: floatPulseBtn 2.4s infinite ease-in-out; transition: transform 0.2s, box-shadow 0.2s; }
        .p-floatcta a svg { color: #fff; }
        .p-floatcta a:active { transform: scale(0.96); }
        @media (max-width:360px){ .p-hero h1 { font-size: 28px; } .p-ptier { font-size: 20px; } .p-fee .p-famt { font-size: 15px; } .p-floatcta a { max-width: 190px; font-size: 13px; } }

        .cond-btn{ position: fixed; right: 14px; top: max(400px, 45vh); z-index: 45; background: #3a332e; color: #fff; border: none; cursor: pointer; font-family: inherit; font-size: 11px; font-weight: 700; letter-spacing: -0.2px; line-height: 1; padding: 8px 12px; border-radius: 999px; box-shadow: 0 4px 14px rgba(58,51,46,0.3); display: none; align-items: center; gap: 5px; opacity: 0; transform: translateY(-8px); transition: opacity .3s ease, transform .3s ease; }
        .cond-btn.avail{ display: inline-flex; }
        .cond-btn.avail.show{ opacity: 1; transform: translateY(0); }
        .cond-btn .cb-ic{ display: inline-block; font-size: 14px; color: var(--olive); animation: condIcPulse 1.6s infinite ease-in-out; }
        .cond-btn .cb-tx{ text-align: left; }
        @keyframes condIcPulse{ 0%,100%{ transform: scale(1); opacity: 0.9; } 50%{ transform: scale(1.35); opacity: 1; } }
        .cond-backdrop{ position: fixed; inset: 0; background: rgba(0,0,0,0.18); z-index: 46; opacity: 0; pointer-events: none; transition: opacity .25s ease; }
        .cond-backdrop.open{ opacity: 1; pointer-events: auto; }
        .cond-popup{ position: fixed; left: 50%; bottom: 150px; transform: translateX(-50%) translateY(14px); width: min(300px, calc(100vw - 48px)); background: var(--card); border: 1px solid var(--olive-line); border-radius: 16px; padding: 22px 18px; box-shadow: 0 16px 40px rgba(0,0,0,0.18); z-index: 47; text-align: center; opacity: 0; pointer-events: none; transition: opacity .25s ease, transform .25s ease; }
        .cond-popup.open{ opacity: 1; transform: translateX(-50%) translateY(0); pointer-events: auto; }
        .cond-popup .cp-ttl{ font-size: 13px; font-weight: 800; color: var(--olive); margin-bottom: 14px; }
        .cond-popup .cp-items{ font-size: 15px; color: var(--text); font-weight: 600; line-height: 2.1; }

        @media (min-width: 800px) {
          .p-wrap { max-width: 1000px; padding: 0 40px; }
          .p-hero { padding: 90px 0 30px; }
          .p-hero h1 { font-size: 42px; }
          .p-hero p { font-size: 16px; margin-top: 24px; }
          .p-intro-page { max-width: 600px; padding: 50px 40px; }
          .p-intro-head { font-size: 28px; text-align: left; }
          .p-intro-sub { font-size: 17px; text-align: left; }
          .p-intro-stat { margin: 30px auto 0; }
          .p-intro-stat .n { font-size: 22px; }
          .p-intro-stat .l { font-size: 13px; }
          .p-two { flex-direction: column; align-items: center; gap: 20px; margin-top: 40px; }
          .p-twobox { width: 100%; max-width: 500px; padding: 28px 30px; }
          .p-tplus { margin: 4px 0; }
          .p-plans { flex-direction: row; align-items: stretch; gap: 20px; }
          .p-plan { margin-top: 0; flex: 1; display: flex; flex-direction: column; }
          .p-plan .p-pmeta { margin-top: 14px; }
          .p-pnote { max-width: 460px; margin: 40px auto 0; }
          .p-pnote .p-row { font-size: 14.5px; padding: 8px 0; gap: 24px; }
          .p-pnote .p-row .p-t { font-size: 15.5px; }
          .pc-br { display: inline; }
          .p-grid-fee { gap: 16px; max-width: 440px; margin: 30px auto 0; }
          .p-fee { padding: 30px 16px; }
          .p-fee .p-fname { font-size: 16px; }
          .p-fee .p-famt { font-size: 20px; }
          .p-vlist { display: flex; flex-direction: column; max-width: 500px; margin: 30px auto 0; gap: 14px; }
          .p-vcard { padding: 20px 20px; gap: 16px; }
          .p-loss-box { padding: 40px 30px; max-width: 500px; margin: 0 auto; }
          .p-loss-box p { font-size: 19px; }
          .p-cta { padding: 40px 0 60px; }
          .p-cta .p-line { font-size: 16px; }
          .p-cta a.p-btn { font-size: 17px; padding: 18px 54px; }
          .cond-btn { right: max(20px, calc(50vw - 500px + 20px)); left: auto; top: max(400px, 50vh); }
        }
      `}</style>

      <header className="p-hero">
        <div className="p-wrap">
          <div className="p-loc">광주 · 전남 1:1 소개팅</div>
          <h1><span className="p-am">멤버십</span> 비용</h1>
          <p>앱처럼 가볍지 않고,<br/>결혼정보회사처럼 부담스럽지 않게.</p>
        </div>
      </header>

      <div className="p-intro-wrapper">
        <div className="p-intro-page">
          <h1 className="p-intro-head">한 번 보고 끝이 아니라,<br/><mark>3개월 내내</mark> 만나는 자리입니다.</h1>
          <p className="p-intro-sub">광주·전남에서 괜찮은 사람을,<br/><b>실제 커플이 될 때까지</b> 계속 소개합니다.</p>

          <div className="p-intro-stat">
            <div className="c"><div className="n">4,500<small>+</small></div><div className="l">누적 신청</div></div>
            <div className="c"><div className="n">검증된 분만</div><div className="l">선별 승인</div></div>
            <div className="c"><div className="n">매달 40<small>쌍+</small></div><div className="l">매칭 성사</div></div>
          </div>
        </div>
      </div>

      <section className="p-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="p-wrap">
          <div className="p-center">
            <div className="p-pillar">비용은 <span className="p-num">두 가지</span></div>
          </div>
          <div className="p-two">
            <div className="p-twobox">
              <div className="p-thead">
                <div className="p-tnum">1</div>
                <div className="p-tname">가입비</div>
              </div>
              <div className="p-tdesc"><b className="p-tbig">3개월 동안</b><br/>매주 수요일 프로필 제공</div>
            </div>
            <div className="p-tplus">+</div>
            <div className="p-twobox">
              <div className="p-thead">
                <div className="p-tnum">2</div>
                <div className="p-tname">성사비</div>
              </div>
              <div className="p-tdesc">서로 수락해<br/>만남이 잡힐 때마다</div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-section" style={{ borderTop: '1px solid var(--border)', paddingBottom: '8px' }}>
        <div className="p-wrap">
          <div className="p-center">
            <div className="p-pillar"><span className="p-num">①</span> 가입비</div>
            <div className="p-pillar-sub">3개월 동안 프로필 제공</div>
          </div>

          <div className="p-plans">
            <div className="p-plan p-lite">
              <div className="p-ptier">라이트</div>
              <div className="p-pvalue">조건 보장 없음</div>
              <div className="p-pbody">정해진 조건 없이 소개받습니다.</div>
              <div className="p-pprice"><span><i>남</i>180,000원</span><span><i>여</i>120,000원</span></div>
              <div className="p-pbase">3개월 프로필 제공</div>
              <div className="p-pmeta">
                <span className="p-chip p-off">애프터케어</span>
                <span className="p-chip p-off">만남 보장</span>
              </div>
            </div>
            <div className="p-plan p-std" ref={stdRef}>
              <span className="p-pbadge p-olive">합리적인 선택</span>
              <div className="p-ptier">스탠다드</div>
              <div className="p-pvalue">조건 <span className="p-em">2개</span> 보장</div>
              <div className="p-pbody">나이·직업·키 같은 조건 2개를 반영합니다.</div>
              <div className="p-pprice"><span><i>남</i>320,000원</span><span><i>여</i>230,000원</span></div>
              <div className="p-pbase">3개월 프로필 제공</div>
              <div className="p-pmeta">
                <span className="p-chip p-on">애프터케어 6개월</span>
                <span className="p-chip p-off">만남 보장</span>
              </div>
            </div>
            <div className="p-plan p-prem" ref={premRef}>
              <span className="p-pbadge p-prem">확실한 만남을 위한</span>
              <div className="p-ptier">프리미엄</div>
              <div className="p-pvalue">조건 <span className="p-em">4개</span> 보장</div>
              <div className="p-pbody">조건 4개까지 반영하고,<br/>만남 3회를 보장합니다.</div>
              <div className="p-pprice"><span><i>남</i>480,000원</span><span><i>여</i>360,000원</span></div>
              <div className="p-pbase">3개월 프로필 제공</div>
              <div className="p-pmeta">
                <span className="p-chip p-gold">애프터케어 6개월</span>
                <span className="p-chip p-spark">만남 3회 보장</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-section" style={{ padding: '0 0 24px' }}>
        <div className="p-wrap">
          <div className="p-pnote">
            <div className="p-row">
              <span className="p-t">애프터케어<br/><span style={{ fontSize: '13.5px', color: 'var(--olive)', fontWeight: 800, display: 'block', marginTop: 2 }}>6개월</span></span>
              <span className="p-d">3개월 이용 후 <b style={{ color: 'var(--olive)', fontWeight: 800 }}>6개월 더</b>. 끝난 뒤에도 나를 선택한 상대가 <span className="pc-br"><br/></span>생기면 무료로 소개합니다.<br/><span style={{ display: 'inline-block', padding: '4px 10px', background: 'var(--olive-tint)', color: 'var(--olive)', border: '1px solid var(--olive-line)', borderRadius: '6px', fontSize: '11.5px', fontWeight: 700, marginTop: '8px' }}>스탠다드·프리미엄 적용</span></span>
            </div>
            <div className="p-row">
              <span className="p-t">만남 보장<br/><span style={{ fontSize: '13.5px', color: 'var(--prem-ink)', fontWeight: 800, display: 'block', marginTop: 2 }}>3회</span></span>
              <span className="p-d">만남 3회가 성사될 때까지 기간이 연장됩니다.<br/><span style={{ display: 'inline-block', padding: '4px 10px', background: 'var(--prem-tint)', color: 'var(--prem-ink)', border: '1px solid var(--prem-line)', borderRadius: '6px', fontSize: '11.5px', fontWeight: 700, marginTop: '8px' }}>프리미엄 전용</span></span>
            </div>
          </div>
        </div>
      </section>

      <section className="p-section p-major" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="p-wrap">
          <div className="p-center">
            <div className="p-pillar"><span className="p-num">②</span> 성사비</div>
            <div className="p-pillar-sub">서로 수락해 만남이 잡힐 때마다</div>
          </div>
          <div className="p-grid-fee">
            <div className="p-fee p-lite"><div className="p-fname">라이트</div><div className="p-fdiv"></div><div className="p-famt">50,000원</div></div>
            <div className="p-fee p-std"><div className="p-fname">스탠다드</div><div className="p-fdiv"></div><div className="p-famt">30,000원</div></div>
            <div className="p-fee p-prem"><div className="p-fname">프리미엄</div><div className="p-fdiv"></div><div className="p-famt">20,000원</div></div>
          </div>
          <div className="p-fee-note">성사비는 진지한 만남을 위한 장치입니다.<br/>이음로그는 가벼운 만남을 만들지 않으려 합니다.</div>
        </div>
      </section>

      <section className="p-section" style={{ paddingBottom: '22px', borderTop: '1px solid var(--border)' }}>
        <div className="p-wrap">
          <div className="p-center">
            <div className="p-sec-title">아무나 만나는 곳이<br/>아닙니다</div>
            <div className="p-sec-sub">괜찮은 사람만, 진지한 사람만 모았습니다</div>
          </div>
          <div className="p-vlist">
            <div className="p-vcard"><div className="p-vnum">1</div><div className="p-vbody"><div className="p-vh">검증된 사람만 들어옵니다</div><div className="p-vp">외모·스타일·상담까지 보고 선정합니다.</div></div></div>
            <div className="p-vcard"><div className="p-vnum">2</div><div className="p-vbody"><div className="p-vh">지인은 만나지 않습니다</div><div className="p-vp">2단계 시스템으로 지인을 확실하게 차단합니다.</div></div></div>
            <div className="p-vcard"><div className="p-vnum">3</div><div className="p-vbody"><div className="p-vh">가벼운 만남은 없습니다</div><div className="p-vp">성사비가 있어 가벼운 사람은 걸러집니다.</div></div></div>
            <div className="p-vcard"><div className="p-vnum">4</div><div className="p-vbody"><div className="p-vh">한 번 소개하고 끝나지 않습니다</div><div className="p-vp">3개월 동안 꾸준히 소개를 진행합니다.</div></div></div>
          </div>

        </div>
      </section>

      <section className="p-section" style={{ padding: '22px 0 18px' }}>
        <div className="p-wrap">
          <div className="p-loss-box"><p>괜찮은 사람을, 진지하게,<br/><span className="p-rs">3개월 내내</span><br/>만날 수 있는 자리입니다.</p></div>
        </div>
      </section>

      <section className="p-cta">
        <div className="p-wrap">
          <div className="p-line">광주·전남에서<br/>괜찮은 사람을 만나고 싶다면</div>
          <a className="p-btn" href="https://naver.me/G4GlQVbi" target="_blank" rel="noopener noreferrer">이음로그 신청하기</a>
        </div>
      </section>

      <Footer theme="light" />

      <div className="p-floatcta">
        <div className="w">
          <a href="https://naver.me/G4GlQVbi" target="_blank" rel="noopener noreferrer">
            <span>1분 신청서 작성</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>
          </a>
        </div>
      </div>

      <button
        className={`cond-btn ${showCondBtn ? 'avail show' : ''}`}
        aria-expanded={popupOpen}
        onClick={(e) => { e.stopPropagation(); setPopupOpen((o) => !o); }}
      >
        <span className="cb-ic">&#9432;</span><span className="cb-tx">조건 보기</span>
      </button>
      <div className={`cond-backdrop ${popupOpen ? 'open' : ''}`} onClick={() => setPopupOpen(false)}></div>
      <div className={`cond-popup ${popupOpen ? 'open' : ''}`}>
        <div className="cp-ttl">보장 가능한 조건</div>
        <div className="cp-items">나이 · 키 · 종교 · 흡연여부<br/>직업 · 연봉 · 학력 · 자녀계획</div>
      </div>
    </div>
  );
};

export default PricingPage2;
