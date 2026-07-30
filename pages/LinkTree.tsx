import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LinkTree = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ backgroundColor: '#EFEBE4', minHeight: '100vh', display: 'flex', justifyContent: 'center', fontFamily: '"Pretendard Variable", Pretendard, -apple-system, sans-serif' }}>
            <style>
                {`
  :root{
    --beige:#F9F6F1; --green:#233723; --ink:#000000; --white:#FFFFFF;
    --khaki:#C7BAA6; --gray:#6B675C; --line:rgba(35,55,33,0.15);
    --std:#B08F4A; --std-ink:#96763A; --std-tint:#F7F1E2; --std-line:#E2D4B4;
    --prem:#4A6648; --prem-soft:#5B7A59; --prem-tint:#EFF2EC; --prem-line:#CDD6C9;
    --deep:#3B573B;
  }
  .ap-hero{position:relative; width:100%; height:300px; overflow:hidden;}
  .ap-hero img{width:100%; height:100%; object-fit:cover; object-position:center 28%; display:block;}
  .ap-hero .grad{position:absolute; inset:0; background:linear-gradient(180deg, rgba(12,16,10,0.22) 0%, rgba(12,16,10,0.12) 34%, rgba(12,18,10,0.5) 62%, rgba(11,17,9,0.92) 100%);}
  .ap-hero .inner{position:absolute; bottom:0; left:0; right:0; padding:0 28px 30px;}
  .ap-hero .eyebrow{font-style:italic; font-size:12px; letter-spacing:0.18em; color:var(--khaki); margin-bottom:14px;}
  .ap-hero h1{font-size:26px; font-weight:800; color:#fff; line-height:1.5; letter-spacing:-0.01em;}
  .ap-hero h1 .am{color:var(--khaki);}

  .ap-cta{padding:0 24px; margin-top:22px; position:relative;}
  .apply-btn{
    position:relative; overflow:hidden;
    display:flex; align-items:center; justify-content:center; gap:10px;
    width:100%;
    background:linear-gradient(150deg, #3B573B 0%, #486848 55%, #3B573B 100%);
    color:#F6F4EE;
    border-radius:14px; padding:21px 20px;
    border:1px solid rgba(232,220,191,0.55);
    box-shadow:0 12px 30px rgba(35,55,33,0.28);
    text-decoration:none;
    font-size:17px; font-weight:800; letter-spacing:0.01em;
    transition:transform 0.15s;
  }
  .apply-btn:active{transform:scale(0.985);}
  .apply-btn::before{
    content:''; position:absolute; top:0; bottom:0; left:-80%; width:45%;
    background:linear-gradient(105deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.14) 50%, rgba(255,255,255,0) 100%);
    transform:skewX(-20deg);
    animation:apShine 4.2s infinite;
  }
  @keyframes apShine{0%{left:-80%;}40%{left:130%;}100%{left:130%;}}
  .apply-btn .arr{color:#E8DCBF;}
  .apply-btn .mini{
    font-size:11px; font-weight:700; color:#2F452F;
    background:#E8DCBF;
    padding:4px 9px; border-radius:999px;
    letter-spacing:0.02em;
  }

  .must-card{
    margin:22px 26px 0;
    display:flex; align-items:center; gap:14px;
    background:var(--std-tint); border:1px solid var(--std-line);
    border-left:3px solid var(--std);
    border-radius:12px;
    padding:16px 18px; text-decoration:none;
    transition:transform 0.15s;
  }
  .must-card:active{transform:scale(0.985);}
  .must-card .tag{
    flex:0 0 auto;
    font-size:10px; font-weight:800; letter-spacing:0.14em;
    color:#fff; background:var(--std);
    padding:5px 10px; border-radius:6px;
  }
  .must-card .tx b{display:block; font-size:14px; font-weight:750; color:#26221D; letter-spacing:-0.2px;}
  .must-card .tx span{display:block; font-size:11px; color:#9C8E72; margin-top:3px;}
  .must-card .chev{margin-left:auto; width:7px; height:7px; border-right:1.5px solid var(--std-ink); border-top:1.5px solid var(--std-ink); transform:rotate(45deg); flex:0 0 auto;}

  .pair{display:grid; grid-template-columns:1fr 1fr; gap:10px; padding:22px 26px 0;}
  .pc{
    display:flex; flex-direction:column; gap:5px; justify-content:center;
    background:#FFFDFA; border:1px solid rgba(35,55,33,0.12); border-radius:12px;
    padding:15px 16px; text-decoration:none;
  }
  .pc b{font-size:13.5px; font-weight:700; color:#26221D; letter-spacing:-0.2px;}
  .pc span{font-size:10.5px; color:#8FA28B; font-weight:600;}

  .ap-foot{padding:58px 24px 22px; text-align:center;}
  .ap-foot .hr{width:40px; height:1px; background:rgba(35,55,33,0.18); margin:0 auto 26px;}
  .ap-foot .row{display:flex; justify-content:center; flex-wrap:wrap; gap:10px;}
  .ap-foot .row a{
    display:inline-block;
    font-size:12px; font-weight:500; color:#5A6B58;
    border:1px solid rgba(35,55,33,0.28); border-radius:0;
    padding:7px 15px; text-decoration:none;
    transition:background 0.25s, color 0.25s, border-color 0.25s;
  }
  .ap-foot .row a:hover{background:var(--green); color:var(--beige); border-color:var(--green);}
  .ap-sig{padding:14px 24px 56px; text-align:center; font-size:12px; font-style:italic; color:#A39A87;}

  .anim{opacity:1; transform:none;}
  .d1{} .d2{} .d3{} .d4{}
                `}
            </style>
            <div style={{ width: '390px', maxWidth: '100%', backgroundColor: '#F9F6F1', minHeight: '100vh', position: 'relative', overflowX: 'hidden', color: '#000000' }}>
                
                {/* Header matching HTML template */}
                <header style={{ position: 'sticky', top: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '54px', padding: '0 20px', backgroundColor: 'rgba(249,246,241,0.92)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(35,55,33,0.12)' }}>
                    <Link to="/links" style={{ display: 'flex', alignItems: 'baseline', gap: '8px', textDecoration: 'none', color: '#233723' }}>
                        <img className="logoimg" src="data:image/png;base64,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" alt="E·M" style={{ height: '20px', width: 'auto', display: 'block', transform: 'translateY(1px)' }} />
                        <span className="name" style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.24em' }}>E.UM LOG</span>
                    </Link>
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        style={{ width: '40px', height: '40px', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', gap: '5px', padding: '8px' }}
                        aria-label="메뉴 열기"
                    >
                        <span style={{ display: 'block', height: '1.5px', backgroundColor: '#233723', transition: 'all 0.3s', width: isMenuOpen ? '22px' : '22px', transform: isMenuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none' }}></span>
                        <span style={{ display: 'block', height: '1.5px', backgroundColor: '#233723', transition: 'all 0.3s', width: isMenuOpen ? '16px' : '16px', opacity: isMenuOpen ? 0 : 1 }}></span>
                        <span style={{ display: 'block', height: '1.5px', backgroundColor: '#233723', transition: 'all 0.3s', width: isMenuOpen ? '22px' : '22px', transform: isMenuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }}></span>
                    </button>
                </header>

                {/* Mobile Menu */}
                <nav style={{ position: 'fixed', top: '54px', left: '50%', transform: 'translateX(-50%)', width: '390px', maxWidth: '100%', backgroundColor: '#F9F6F1', zIndex: 49, borderBottom: isMenuOpen ? '1px solid rgba(35,55,33,0.15)' : 'none', maxHeight: isMenuOpen ? '640px' : '0', overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
                    <ul style={{ listStyle: 'none', padding: '12px 24px 24px', margin: 0 }}>
                        {[
                            { name: '홈', en: 'HOME', href: '/' },
                            { name: '이음로그 소개', en: 'ABOUT', href: '/about' },
                            { name: '멤버십 안내', en: 'MEMBERSHIP', href: '/pricing' },
                            { name: '진행 방식', en: 'PROCESS', href: '/service' },
                            { name: '가입 기준', en: 'CRITERIA', href: '/criteria' },
                            { name: '자주 묻는 질문', en: 'F.A.Q', href: '/faq' },
                            { name: '상담 문의', en: 'CONTACT', href: '/contact' },
                            { name: '신청하기', en: 'APPLY', href: '/links', isLast: true }
                        ].map((item, idx) => (
                            <li key={idx} style={{ marginTop: item.isLast ? '14px' : '0' }}>
                                <Link to={item.href} onClick={() => setIsMenuOpen(false)} style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', padding: '13px 4px', textDecoration: 'none', color: item.isLast ? '#2F452F' : '#000000', fontSize: '15px', fontWeight: 600, borderBottom: item.isLast ? 'none' : '1px solid rgba(35,55,33,0.12)', backgroundColor: item.isLast ? '#E3EBDF' : 'transparent', border: item.isLast ? '1.5px solid #9DB398' : 'none', borderRadius: item.isLast ? '12px' : '0', boxShadow: item.isLast ? '0 4px 14px rgba(59,87,59,0.12)' : 'none' }}>
                                    {item.name} <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.16em', color: item.isLast ? '#8AA087' : '#9B8F72', fontStyle: 'italic' }}>{item.en}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Main Content */}
                <div className="ap-hero">
                    <img src="https://wooban.co.kr/wp-content/uploads/2026/01/c444221dcc16c2149c5b0ad510f6c3a4-768x1023.jpg" alt="이음로그" />
                    <div className="grad"></div>
                    <div className="inner">
                        <p className="eyebrow anim in d1">Private 1:1 — 광주 · 전남</p>
                        <h1 className="anim in d2">괜찮은 사람과의 만남,<br/><span className="am">이음로그</span>에서 시작됩니다.</h1>
                    </div>
                </div>

                <div className="ap-cta">
                    <a className="apply-btn anim in d3" href="https://m.site.naver.com/1Pznd" target="_blank" rel="noopener noreferrer">
                        <span>소개팅 신청서 작성</span>
                        <span className="mini">1분 완료</span>
                        <span className="arr">&#8594;</span>
                    </a>
                </div>

                <Link className="must-card anim in d2" to="/about">
                    <span className="tag">필독</span>
                    <span className="tx">
                        <b>처음이라면</b>
                        <span>신청 전 꼭 읽어보세요</span>
                    </span>
                    <span className="chev"></span>
                </Link>

                <div className="pair">
                    <a className="pc anim in d3" href="https://m.site.naver.com/20ZdO" target="_blank" rel="noopener noreferrer">
                        <b>참가자 명단</b>
                        <span>매주 화요일 업데이트</span>
                    </a>
                    <Link className="pc anim in d3" to="/service">
                        <b>진행방식 안내</b>
                        <span>&nbsp;</span>
                    </Link>
                </div>

                <div className="ap-foot anim in d4">
                    <div className="hr"></div>
                    <div className="row">
                        <Link to="/pricing">멤버십 가격</Link>
                        <Link to="/contact">상담 문의</Link>
                        <Link to="/faq">자주 묻는 질문</Link>
                    </div>
                </div>
                <p className="ap-sig anim in d4">Near, but not everyone — from 이음로그</p>
            </div>
        </div>
    );
};

export default LinkTree;
