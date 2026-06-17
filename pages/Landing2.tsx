
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Landing2 = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="landing-container">
      <style>{`
        .landing-container {
          --bg: #fffaf7;
          --paper: #ffffff;
          --ink: #28221f;
          --sub: #766c64;
          --muted: #a79c94;
          --line: #efe6df;
          --soft: #fbefed;
          --soft2: #f7e3df;
          --accent: #c98f86;
          --deep: #4a3733;
          --btn: #1d1815;
          font-family: "Pretendard", sans-serif;
          background: #e9e2db;
          color: var(--ink);
          line-height: 1.85;
          -webkit-font-smoothing: antialiased;
          min-height: 100vh;
          width: 100%;
        }
        .landing-container * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        .landing-container .wrap {
          max-width: 430px;
          margin: 0 auto;
          background: var(--paper);
          min-height: 100vh;
          padding-bottom: 82px;
          overflow: hidden;
          position: relative;
        }
        .landing-container .hero {
          position: relative;
          min-height: 420px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          color: #fff;
          overflow: hidden;
          background: linear-gradient(180deg, rgba(28,26,23,0.20) 0%, rgba(28,26,23,0.30) 45%, rgba(28,26,23,0.90) 100%), url('https://wooban.co.kr/wp-content/uploads/2026/06/ChatGPT-Image-2026년-6월-17일-오후-05_29_37.png') center/cover no-repeat, #2a2320;
        }
        .landing-container .hero .eyebrow {
          display: inline-block;
          background: rgba(245,221,214,0.20);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          border: 1px solid rgba(255,255,255,0.32);
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.2px;
          padding: 7px 13px;
          border-radius: 10px;
          margin-bottom: 15px;
        }
        .landing-container .brand-pink { color: #efb1a4; }
        .landing-container .hero-photo-hint {
          position: absolute;
          top: 38%;
          left: 0;
          right: 0;
          text-align: center;
          font-size: 11px;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.5px;
          z-index: 1;
        }
        .landing-container .hero-nav {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 22px;
        }
        .landing-container .hero-nav .brand {
          font-weight: 850;
          letter-spacing: 2.2px;
          font-size: 15px;
          color: #fff;
        }
        .landing-container .hero-nav .brand span { color: var(--accent); }
        .landing-container .hero-nav .menu { display: flex; gap: 18px; }
        .landing-container .hero-nav .menu a {
          color: rgba(255,255,255,0.88);
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.3px;
        }
        .landing-container .hero-content {
          position: relative;
          z-index: 2;
          padding: 0 24px 32px;
        }
        .landing-container .hero h1 {
          color: #fff;
          margin-bottom: 14px;
        }
        .landing-container .hero-btns {
          margin-top: 24px;
          display: flex;
          flex-direction: column;
          gap: 9px;
        }
        .landing-container .hero-cta {
          display: block;
          width: 100%;
          background: #fff;
          color: var(--deep);
          text-align: center;
          text-decoration: none;
          border-radius: 999px;
          padding: 16px;
          font-size: 15px;
          font-weight: 850;
          letter-spacing: -0.3px;
        }
        .landing-container .hero-sub {
          display: block;
          width: 100%;
          background: rgba(255,255,255,0.08);
          color: #fff;
          text-align: center;
          text-decoration: none;
          border: 1.5px solid rgba(255,255,255,0.5);
          border-radius: 999px;
          padding: 14px;
          font-size: 14px;
          font-weight: 750;
          letter-spacing: -0.2px;
        }
        .landing-container .statstrip { padding: 22px 24px 6px; }
        .landing-container .stats-src {
          text-align: center;
          font-size: 11px;
          color: var(--muted);
          margin-top: 11px;
          letter-spacing: -0.1px;
        }
        .landing-container .hero-photo {
          height: 245px;
          border-radius: 26px;
          background: linear-gradient(180deg, rgba(39,28,22,0.12), rgba(39,28,22,0.58)), #d8cec4;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          text-align: center;
          color: #fff;
          padding: 22px;
          margin-bottom: 26px;
          overflow: hidden;
        }
        .landing-container .hero-photo .cap {
          font-size: 11px;
          line-height: 1.6;
          opacity: 0.9;
          letter-spacing: -0.1px;
        }
        .landing-container .eyebrow {
          font-size: 12px;
          color: var(--accent);
          font-weight: 800;
          letter-spacing: 1.8px;
          margin-bottom: 12px;
        }
        .landing-container h1 {
          font-size: 27px;
          line-height: 1.36;
          letter-spacing: -0.9px;
          font-weight: 900;
          margin-bottom: 14px;
        }
        .landing-container .lead {
          font-size: 15px;
          color: var(--sub);
          line-height: 1.75;
          letter-spacing: -0.25px;
          margin-bottom: 18px;
        }
        .landing-container .stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 7px;
          margin: 20px 0 18px;
        }
        .landing-container .stat {
          background: var(--soft);
          border-radius: 16px;
          text-align: center;
          padding: 13px 3px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 6px;
        }
        .landing-container .stat b {
          display: block;
          font-size: 18px;
          line-height: 1;
          font-weight: 900;
          color: var(--deep);
          letter-spacing: -0.5px;
          white-space: nowrap;
        }
        .landing-container .stat span {
          display: block;
          font-size: 11.5px;
          font-weight: 700;
          color: var(--sub);
          letter-spacing: -0.3px;
          line-height: 1.3;
        }
        .landing-container .cta {
          display: block;
          width: 100%;
          background: var(--btn);
          color: #fff;
          text-align: center;
          text-decoration: none;
          border-radius: 999px;
          padding: 17px 18px;
          font-size: 15px;
          font-weight: 850;
          margin-top: 12px;
        }
        .landing-container .subcta {
          display: block;
          text-align: center;
          color: var(--deep);
          font-weight: 750;
          font-size: 13px;
          text-decoration: none;
          margin-top: 12px;
        }
        .landing-container .cta-line {
          display: block;
          width: 100%;
          background: transparent;
          color: var(--deep);
          text-align: center;
          text-decoration: none;
          border: 1.5px solid var(--accent);
          border-radius: 999px;
          padding: 15px 18px;
          font-size: 14.5px;
          font-weight: 800;
          margin-top: 14px;
          letter-spacing: -0.2px;
        }
        .landing-container .section {
          padding: 56px 24px;
          border-top: 1px solid var(--line);
        }
        .landing-container .section.compact {
          padding-top: 48px;
          padding-bottom: 48px;
        }
        .landing-container .title {
          font-size: 21px;
          line-height: 1.55;
          letter-spacing: -0.6px;
          font-weight: 900;
          margin-bottom: 18px;
        }
        .landing-container .text {
          font-size: 14.5px;
          color: var(--sub);
          line-height: 1.95;
          letter-spacing: -0.2px;
        }
        .landing-container .reason-box {
          background: var(--soft);
          border-radius: 24px;
          padding: 23px 21px;
          margin-top: 18px;
        }
        .landing-container .story {
          position: relative;
          overflow: hidden;
          background: url('https://wooban.co.kr/wp-content/uploads/2026/06/서술3_복사본-_4_-002-1.png') center/cover no-repeat, var(--soft);
          border-top: 1px solid var(--line);
          padding-top: 72px;
          padding-bottom: 72px;
        }
        .landing-container .story::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(28,26,23,0.55), rgba(28,26,23,0.75));
          z-index: 1;
        }
        .landing-container .story > * {
          position: relative;
          z-index: 2;
        }
        .landing-container .story-photo-hint {
          position: absolute;
          top: 14px;
          left: 0;
          right: 0;
          text-align: center;
          font-size: 10.5px;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.4px;
        }
        .landing-container .story-label {
          display: inline-block;
          font-size: 11px;
          font-weight: 800;
          color: #efb1a4;
          letter-spacing: 1.5px;
          margin-bottom: 24px;
        }
        .landing-container .story-lead {
          font-size: 21px;
          font-weight: 900;
          line-height: 1.6;
          letter-spacing: -0.6px;
          color: #ffffff;
          margin-bottom: 28px;
        }
        .landing-container .story-body {
          font-size: 14.5px;
          color: rgba(255,255,255,0.85);
          line-height: 2.1;
          letter-spacing: -0.2px;
          margin-bottom: 28px;
        }
        .landing-container .story-close {
          font-size: 15.5px;
          color: rgba(255,255,255,0.95);
          line-height: 1.9;
          letter-spacing: -0.3px;
          font-weight: 600;
          margin-top: 36px;
        }
        .landing-container .story-close b {
          font-weight: 900;
          color: #ffffff;
        }
        .landing-container .reason-title {
          font-size: 19px;
          font-weight: 900;
          line-height: 1.45;
          letter-spacing: -0.55px;
          margin-bottom: 16px;
          color: var(--deep);
        }
        .landing-container .reason {
          display: flex;
          gap: 11px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(201,143,134,0.18);
        }
        .landing-container .reason:last-child {
          border-bottom: 0;
          padding-bottom: 2px;
        }
        .landing-container .reason .num {
          width: 25px;
          height: 25px;
          border-radius: 50%;
          background: var(--accent);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 900;
          flex: none;
          margin-top: 1px;
        }
        .landing-container .reason p {
          font-size: 15px;
          color: var(--ink);
          line-height: 1.62;
          font-weight: 750;
          letter-spacing: -0.35px;
        }
        .landing-container .proof-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 18px;
        }
        .landing-container .proof {
          height: 150px;
          border-radius: 20px;
          background-color: #eee6df;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #aaa096;
          font-size: 11px;
          line-height: 1.5;
        }
        .landing-container .proof-1 { background-image: url('https://wooban.co.kr/wp-content/uploads/2026/06/커플인증10-001.png'); }
        .landing-container .proof-2 { background-image: url('https://wooban.co.kr/wp-content/uploads/2026/06/커플인증9_복사본-_2_-001.png'); }
        .landing-container .proof-3 { background-image: url('https://wooban.co.kr/wp-content/uploads/2026/06/커플인증9_복사본-_1_-001.png'); }
        .landing-container .proof-4 { background-image: url('https://wooban.co.kr/wp-content/uploads/2026/06/커플인증9_복사본-001.png'); }
        .landing-container .quote {
          background: var(--soft);
          border-radius: 20px;
          padding: 19px 20px;
          font-size: 14px;
          color: var(--ink);
          line-height: 1.75;
          letter-spacing: -0.25px;
          margin-top: 12px;
        }
        .landing-container .quote span {
          display: block;
          color: var(--muted);
          font-size: 12px;
          margin-top: 10px;
        }
        .landing-container .cards {
          display: grid;
          gap: 10px;
          margin-top: 17px;
        }
        .landing-container .card {
          border: 1px solid var(--line);
          border-radius: 20px;
          padding: 18px;
        }
        .landing-container .card.key-card {
           background: #fdf3f0;
           border-color: rgba(201,143,134,0.28);
        }
        .landing-container .card b {
          display: block;
          font-size: 15px;
        }
        .landing-container .key {
          display: inline-block;
          font-size: 10.5px;
          font-weight: 700;
          color: #a85f54;
          background: transparent;
          border: 1px solid rgba(187,106,93,0.5);
          border-radius: 6px;
          padding: 2px 8px;
          margin-left: 7px;
          letter-spacing: 0.8px;
          vertical-align: middle;
        }
        .landing-container .ex {
          display: inline-block;
          font-size: 12.5px;
          font-weight: 700;
          color: var(--deep);
          background: #fff;
          border: 1px solid var(--line);
          border-radius: 7px;
          padding: 1px 8px;
          letter-spacing: 0.3px;
        }
        .landing-container .card p {
          font-size: 13.5px;
          color: var(--sub);
          line-height: 1.7;
        }
        .landing-container .shield {
           background: var(--soft);
           border-radius: 22px;
           padding: 19px;
           margin-top: 17px;
        }
        .landing-container .shield p {
          font-size: 14px;
          color: var(--sub);
          line-height: 1.7;
          padding: 8px 0;
        }
        .landing-container .shield b {
          color: var(--ink);
          font-weight: 800;
        }
        .landing-container .price {
          margin-top: 17px;
          border-top: 1px solid var(--line);
        }
        .landing-container .price-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 15px 0;
          border-bottom: 1px solid var(--line);
          font-size: 14px;
        }
        .landing-container .price-row b {
          font-size: 15px;
        }
        .landing-container .price-row .tag {
          font-size: 10px;
          background: var(--accent);
          color: #fff;
          border-radius: 999px;
          padding: 3px 7px;
          margin-left: 5px;
        }
        .landing-container .price-row strong {
          font-size: 15px;
        }
        .landing-container .closing {
          background: var(--deep);
          color: #fff;
          text-align: center;
          padding: 43px 24px;
        }
        .landing-container .closing h2 {
          font-size: 22px;
          line-height: 1.45;
          letter-spacing: -0.6px;
          margin-bottom: 12px;
        }
        .landing-container .closing p {
          font-size: 14px;
          color: #eadfd8;
          line-height: 1.75;
        }
        .landing-container .footer-brand {
          text-align: center;
          padding: 28px 24px;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.7;
        }
        .landing-container .sticky-nav {
          position: fixed;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
          width: 100%;
          max-width: 430px;
          background: rgba(255,255,255,0.96);
          backdrop-filter: blur(10px);
          padding: 11px 16px inset(env(safe-area-inset-bottom, 0px) + 11px);
          border-top: 1px solid var(--line);
          z-index: 100;
        }
        .landing-container .sticky-nav a {
          position: relative;
          display: block;
          background: linear-gradient(135deg, #d6a094, #c5847a);
          color: #fff;
          text-decoration: none;
          text-align: center;
          border-radius: 999px;
          padding: 15px;
          font-size: 14.5px;
          font-weight: 850;
          overflow: hidden;
          box-shadow: 0 6px 18px rgba(197,132,122,0.30), inset 0 0 0 1px rgba(255,255,255,0.25);
        }
        .landing-container .sticky-nav a span {
          position: relative;
          z-index: 1;
        }
        .landing-container .sticky-nav a::before {
          content: "";
          position: absolute;
          top: 0;
          left: -60%;
          width: 45%;
          height: 100%;
          background: linear-gradient(100deg, transparent, rgba(255,255,255,0.45), transparent);
          transform: skewX(-20deg);
          animation: shine 4.5s ease-in-out infinite;
        }
        @keyframes shine {
          0% { left: -60% }
          28% { left: 130% }
          100% { left: 130% }
        }
        @media (prefers-reduced-motion: reduce) {
          .landing-container .sticky-nav a::before {
            animation: none;
            display: none;
          }
        }
      `}</style>

      <div className="wrap">
        <header className="hero" id="top">
          <div className="hero-nav">
            <div className="brand">E.UM&nbsp;<span>LOG</span></div>
            <div className="menu"><a href="https://naver.me/G4GlQVbi" target="_blank" rel="noopener noreferrer">신청</a></div>
          </div>
          <div className="hero-content">
            <div className="eyebrow">광주·전남 1:1 소개팅</div>
            <h1>괜찮은 사람과의 만남,<br/><span className="brand-pink">이음로그</span>에서 시작됩니다.</h1>
            <div className="hero-btns">
              <a className="hero-cta" href="https://naver.me/G4GlQVbi" target="_blank" rel="noopener noreferrer">소개팅 신청하기 →</a>
              <Link className="hero-sub" to="/links">이번주 참가자 명단 보기</Link>
            </div>
          </div>
        </header>

        <div className="statstrip">
          <div className="stats">
            <div className="stat"><span>네이버폼 신청</span><b>4,526</b></div>
            <div className="stat"><span>매칭커플</span><b>720</b></div>
            <div className="stat"><span>결혼</span><b>5쌍</b></div>
          </div>
          <p className="stats-src">우반·이음로그 누적 기준</p>
        </div>

        <section className="section compact">
          <div className="title">광주·전남에서 연애가<br/>어려운 이유는 단순합니다.</div>
          <div className="reason-box">
            <div className="reason-title">광주·전남은 생각보다 좁습니다.</div>
            <div className="reason"><div className="num">1</div><p>소개는 점점 끊기고</p></div>
            <div className="reason"><div className="num">2</div><p>생활반경은 늘 비슷하고</p></div>
            <div className="reason"><div className="num">3</div><p>새로운 사람을 만날 기회는 적습니다</p></div>
          </div>
        </section>

        <section className="section compact story">
          <div className="story-label">운영자 이야기</div>
          <p className="story-lead">6:6 로테이션 소개팅을<br/>2년 동안 운영했습니다.</p>
          <p className="story-body">2,500명이 신청했고, 360커플이 만났고,<br/>그중 5쌍은 결혼까지 했습니다.</p>
          <p className="story-body">운영하면서 느낀 건, 로테이션 소개팅에 오는 분들도 가벼운 만남보다 진지한 만남을 원했고, 소개도 더 신중하길 바랐습니다.</p>
          <p className="story-close">그래서 한 사람씩 신중하게 연결하는<br/>1:1 소개를 만들었습니다.<br/><b>이음로그입니다.</b></p>
        </section>

        <section className="section compact">
          <div className="title">이음로그는 한 명씩 봅니다.</div>
          <div className="cards">
            <div className="card"><b>아무나 받지 않습니다</b></div>
            <div className="card key-card"><b>지인부터 차단합니다 <span className="key">핵심</span></b></div>
            <div className="card"><b>만남까지 조율합니다</b></div>
          </div>
        </section>

        <section className="section compact">
          <div className="title">실제로 만난 사람들이<br/>계속 나오고 있습니다.</div>
          <div className="proof-grid">
            <div className="proof proof-1"></div>
            <div className="proof proof-2"></div>
            <div className="proof proof-3"></div>
            <div className="proof proof-4"></div>
          </div>
          <div className="quote">처음엔 기대 안 했어요. 근데 첫 만남부터 대화가 잘 됐고, 자연스럽게 만나게 됐어요.<span>광주 30대 대기업 ♥ 광주 20대 공기업</span></div>
          <a className="cta" href="https://naver.me/G4GlQVbi" target="_blank" rel="noopener noreferrer">나도 신청하기 →</a>
          <Link className="subcta" to="/links">이번주 참가자 명단 확인 →</Link>
        </section>

        <section className="section compact">
          <div className="title">3개월 동안<br/>꾸준히 소개받습니다.</div>
          <div className="price">
            <div className="price-row"><b>라이트</b><strong>남 18만 / 여 12만</strong></div>
            <div className="price-row"><b>스탠다드 <span className="tag">추천</span></b><strong>남 32만 / 여 23만</strong></div>
            <div className="price-row"><b>프리미엄</b><strong>남 48만 / 여 36만</strong></div>
          </div>
          <Link className="cta-line" id="price-detail" to="/pricing">멤버십 가격 자세히 보기 →</Link>
        </section>

        <section className="closing">
          <h2>좋은 사람을 만나고 싶은데<br/>기회가 없었다면.</h2>
          <p>가볍게 넘기는 만남보다,<br/>한 명을 제대로 만나고 싶은 분께 맞습니다.</p>
        </section>

        <div className="footer-brand">
          <b>이음로그</b> · 광주·전남 1:1 소개팅<br/>
          @e.um_log · eumlog.co.kr
        </div>
      </div>

      <div className="sticky-nav">
        <a href="https://naver.me/G4GlQVbi" target="_blank" rel="noopener noreferrer"><span>소개팅 신청하기 →</span></a>
      </div>
    </div>
  );
};

export default Landing2;

