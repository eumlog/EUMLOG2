
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowDown, ArrowRight, Check, X, Shield, 
  MessageSquare, Coins, Sparkles
} from 'lucide-react';
import { IMAGES } from '../lib/assets';

gsap.registerPlugin(ScrollTrigger);

// --- 1. 히어로 섹션 (Hero) ---
const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });
      tl.to('.hero-label', { y: 0, opacity: 1, duration: 1, ease: 'power3.out' })
        .to('.hero-text-reveal', { y: 0, stagger: 0.2, duration: 1.4, ease: 'power3.out' }, '-=0.5')
        .to('.hero-subtitle', { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.8')
        .to('.hero-scroll', { opacity: 1, duration: 1 }, '-=0.5');

      gsap.to(imgRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-screen relative flex items-center justify-center overflow-hidden">
      <img ref={imgRef} src={IMAGES.heroBackground} className="absolute inset-0 w-full h-full object-cover brightness-[0.4] scale-110" alt="Background" />
      <div className="relative z-10 text-center text-white px-4 flex flex-col items-center">
        <div className="hero-label opacity-0 translate-y-6 mb-6 md:mb-8">
           <span className="text-eum-accent font-bold tracking-[0.1em] md:tracking-[0.2em] text-xs md:text-lg uppercase border border-eum-accent/30 px-5 py-2 rounded-full bg-black/20 backdrop-blur-sm">
             수도권이 아닌 지역기반 소개팅
           </span>
        </div>
        <h1 className="font-sans text-[16vw] md:text-[8.5vw] font-black leading-[1.1] md:leading-[1.2] tracking-tighter mb-8">
          <div className="overflow-hidden"><span className="hero-text-reveal block translate-y-full">진심을</span></div>
          <div className="overflow-hidden"><span className="hero-text-reveal block translate-y-full">잇다</span></div>
        </h1>
        <div className="hero-subtitle opacity-0 translate-y-6 space-y-2 md:space-y-3">
           <p className="text-sm md:text-xl font-medium text-gray-200 tracking-wide keep-all leading-relaxed">
             빠른 만남보다, 맞는 사람을 한 번 제대로 만나는 것.<br/>
             성공할 때까지 책임지는 3개월의 동행.
           </p>
        </div>
      </div>
      <div className="hero-scroll absolute bottom-10 left-0 w-full flex justify-center opacity-0 animate-bounce">
        <ArrowDown className="text-white opacity-50 w-6 h-6" />
      </div>
    </section>
  );
};

// --- 2. 브랜드 철학 (Philosophy) ---
const Philosophy: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-0 bg-[#F5F5F0] overflow-hidden">
      <div className="max-w-[1000px] mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="md:w-1/2 w-full px-2 md:px-0">
              <div className="mb-8">
                  <span className="font-eng text-xs font-bold text-eum-accent tracking-widest uppercase mb-2 block">Brand Philosophy</span>
                  <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C1C1C] leading-[1.2] tracking-tight mb-8">
                      우리 지역에서,<br />실제로 만날 수 있는 사람
                  </h2>
              </div>
              <p className="font-sans text-base md:text-lg text-gray-700 leading-relaxed font-medium keep-all mb-10">
                  수도권 중심 매칭이 아닙니다.<br />
                  이음로그는 지역 거점 기준으로<br />
                  지금 이 생활권 안에서 만날 수 있는 사람만 연결합니다.<br /><br />
                  알고리즘이 아닌,<br />
                  <span className="text-[#1C1C1C] font-bold">지역을 아는 매니저가 직접 1:1로 잇습니다.</span>
              </p>
              <div className="flex gap-8 border-t border-gray-300 pt-8">
                  <div>
                    <div className="font-eng text-[10px] md:text-xs font-bold text-gray-400 tracking-widest mb-1 uppercase">Base</div>
                    <div className="font-eng text-base md:text-lg font-bold text-[#1C1C1C] tracking-wide uppercase">Local Regions</div>
                  </div>
                  <div>
                    <div className="font-eng text-[10px] md:text-xs font-bold text-gray-400 tracking-widest mb-1 uppercase">Service</div>
                    <div className="font-eng text-base md:text-lg font-bold text-[#1C1C1C] tracking-wide uppercase">Private 1:1</div>
                  </div>
              </div>
          </div>
          <div className="md:w-1/2 w-full h-[350px] md:h-[600px] relative">
              <div className="absolute inset-0 bg-gray-200 md:rounded-l-[3rem] rounded-3xl overflow-hidden shadow-2xl bg-white p-4">
                  <img src={IMAGES.philosophy} className="w-full h-full object-cover rounded-2xl md:rounded-[2.5rem] hover:scale-105 transition-transform duration-[1.5s]" alt="Philosophy" />
              </div>
          </div>
        </div>
        <div className="mt-16 text-center md:text-left">
            <Link to="/about" className="group inline-flex items-center gap-3 text-eum-dark hover:text-eum-accent transition-all duration-300">
              <span className="text-lg md:text-2xl font-bold border-b-2 border-eum-dark/10 group-hover:border-eum-accent pb-1">이음로그 자세히보기</span>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-eum-dark/10 flex items-center justify-center group-hover:bg-eum-accent group-hover:text-white transition-all">
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </div>
            </Link>
        </div>
      </div>
    </section>
  );
};

// --- 3. 서비스 비교 (Our Method) ---
const Intro: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
       gsap.from(".intro-fade", { y: 30, opacity: 0, duration: 1, stagger: 0.2, scrollTrigger: { trigger: containerRef.current, start: "top 75%" } });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="pt-24 pb-4 px-6 bg-white">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-16 intro-fade px-4">
            <div className="font-eng text-sm font-bold tracking-widest text-eum-accent uppercase mb-4">Our Method</div>
            <h2 className="font-sans text-3xl md:text-5xl font-bold leading-tight text-eum-dark keep-all">
                소개팅 앱 안 해요.<br className="hidden md:block" /> 결정사는 부담스럽고요.
            </h2>
            <p className="mt-6 text-lg md:text-xl text-gray-600 font-medium">알고 있습니다. 그래서 이렇게 합니다.</p>
        </div>

        <div className="intro-fade grid md:grid-cols-2 gap-0 border border-gray-200 rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-xl">
            {/* 결정사 (Left) */}
            <div className="bg-gray-50 p-8 md:p-16">
                <h3 className="text-xl md:text-2xl font-bold text-gray-400 mb-8 md:mb-14">결혼정보회사</h3>
                <ul className="space-y-8 md:space-y-12">
                    <li className="flex gap-4 md:gap-6 text-gray-400 opacity-60">
                        <X className="w-5 h-5 md:w-8 md:h-8 flex-shrink-0 mt-1" />
                        <div><span className="block text-lg md:text-3xl font-bold mb-2">가입비 수백만원</span><span className="text-xs md:text-lg font-medium text-gray-400">초기 비용 부담이 매우 큼</span></div>
                    </li>
                    <li className="flex gap-4 md:gap-6 text-gray-400 opacity-60">
                        <X className="w-5 h-5 md:w-8 md:h-8 flex-shrink-0 mt-1" />
                        <div><span className="block text-lg md:text-3xl font-bold mb-2">횟수 채우면 끝</span><span className="text-xs md:text-lg font-medium text-gray-400">만남의 질보다 횟수 차감이 우선</span></div>
                    </li>
                    <li className="flex gap-4 md:gap-6 text-gray-400 opacity-60">
                        <X className="w-5 h-5 md:w-8 md:h-8 flex-shrink-0 mt-1" />
                        <div><span className="block text-lg md:text-3xl font-bold mb-2">기계적 매칭</span><span className="text-xs md:text-lg font-medium text-gray-400">등급표에 따른 단순 조건 연결</span></div>
                    </li>
                </ul>
            </div>
            {/* 이음로그 (Right) - 사용자가 요청한 이미지 디자인 반영 및 좌측과 사이즈 통일 */}
            <div className="bg-[#1C1C1C] p-8 md:p-16 text-white relative">
                <div className="font-eng text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#8E7F70] mb-8 md:mb-14 uppercase">E.UM LOG</div>
                <ul className="space-y-8 md:space-y-12">
                    <li className="flex gap-4 md:gap-6 text-white">
                        <div className="w-8 h-8 md:w-11 md:h-11 rounded-full bg-[#2A2A2A] flex items-center justify-center flex-shrink-0 mt-1 shadow-inner">
                          <Check className="w-4 h-4 md:w-6 md:h-6 text-gray-400" />
                        </div>
                        <div>
                          <span className="block text-lg md:text-3xl font-bold mb-2">월 4~6만원대</span>
                          <span className="text-xs md:text-lg font-medium text-[#777777] keep-all">3개월 멤버십으로 합리적인 시작</span>
                        </div>
                    </li>
                    <li className="flex gap-4 md:gap-6 text-white">
                        <div className="w-8 h-8 md:w-11 md:h-11 rounded-full bg-[#2A2A2A] flex items-center justify-center flex-shrink-0 mt-1 shadow-inner">
                          <Check className="w-4 h-4 md:w-6 md:h-6 text-gray-400" />
                        </div>
                        <div>
                          <span className="block text-lg md:text-3xl font-bold mb-2">3개월동안 무제한 소개</span>
                          <span className="text-xs md:text-lg font-medium text-[#777777] keep-all">실제 연인 생기기 전까지 계속 소개</span>
                        </div>
                    </li>
                    <li className="flex gap-4 md:gap-6 text-white">
                        <div className="w-8 h-8 md:w-11 md:h-11 rounded-full bg-[#2A2A2A] flex items-center justify-center flex-shrink-0 mt-1 shadow-inner">
                          <Check className="w-4 h-4 md:w-6 md:h-6 text-gray-400" />
                        </div>
                        <div>
                          <span className="block text-lg md:text-3xl font-bold mb-2">1:1 수동 매칭</span>
                          <span className="text-xs md:text-lg font-medium text-[#777777] keep-all">지역 거점 기반, 매니저가 직접 상담 후 연결</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className="intro-fade text-center mt-12 px-4">
            <h3 className="text-xl md:text-3xl font-bold text-eum-dark leading-relaxed keep-all">
                우리는 넓게 연결하지 않습니다.<br />
                <span className="text-eum-accent">지금 이 지역에서, 실제로 만날 수 있는 사람만 연결합니다.</span>
            </h3>
        </div>
      </div>
    </section>
  );
};

// --- 4. 특별한 약속 (Why E.UM LOG?) ---
const SystemFeatures: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-content', { y: 50, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 75%' } });
      gsap.from('.feature-item', { x: 30, opacity: 0, duration: 0.8, stagger: 0.2, scrollTrigger: { trigger: containerRef.current, start: 'top 75%' } });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="pt-12 pb-24 bg-white overflow-hidden px-6">
      <div className="max-w-[1000px] mx-auto">
        <div className="feature-content grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative h-[450px] md:h-[650px] rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img src={IMAGES.systemFeatures} className="w-full h-full object-cover" alt="System" />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white pr-6">
                 <p className="font-eng text-xs md:text-sm font-bold tracking-widest uppercase mb-2 text-eum-accent">E.UM LOG Promise</p>
                 <p className="font-sans text-xl md:text-2xl font-bold leading-tight">Private & Premium<br/>3개월 동안 인연이 나타날 때까지.</p>
              </div>
            </div>
            <div className="lg:pl-6">
               <div className="mb-10 text-center md:text-left">
                  <h2 className="font-eng text-xs font-bold tracking-widest text-eum-accent uppercase mb-4">Why E.UM LOG?</h2>
                  <h3 className="font-sans text-3xl md:text-4xl font-bold text-eum-dark leading-tight">이음로그만의<br/><span className="text-eum-accent">특별한 3가지 약속</span></h3>
               </div>
               <div className="space-y-8 md:space-y-10">
                   <div className="feature-item flex gap-5 md:gap-6 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-eum-accent group-hover:text-white transition-all duration-300"><Shield className="w-6 h-6" /></div>
                      <div><h4 className="text-lg font-bold text-gray-900 mb-1 md:mb-2">철저한 지인 차단</h4><p className="text-gray-600 font-medium text-sm md:text-base keep-all">프로필 제공 전, 상대방의 ‘초성/나이/지역’을 통해 지인 여부를 미리 확인합니다.</p></div>
                   </div>
                   <div className="feature-item flex gap-5 md:gap-6 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-eum-accent group-hover:text-white transition-all duration-300"><MessageSquare className="w-6 h-6" /></div>
                      <div><h4 className="text-lg font-bold text-gray-900 mb-1 md:mb-2">1:1 카톡 상담</h4><p className="text-gray-600 font-medium text-sm md:text-base keep-all">카톡으로 5~10분간 선택한 필수 조건들에 대해 상담합니다.</p></div>
                   </div>
                   <div className="feature-item flex gap-5 md:gap-6 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-eum-accent group-hover:text-white transition-all duration-300"><Coins className="w-6 h-6" /></div>
                      <div><h4 className="text-lg font-bold text-gray-900 mb-1 md:mb-2">3개월 구독제</h4><p className="text-gray-600 font-medium text-sm md:text-base keep-all">단순히 횟수만 채우는 만남이 아닙니다. 인연이 나타날 때까지 지속적으로 소개합니다.</p></div>
                   </div>
               </div>
            </div>
        </div>
      </div>
    </section>
  );
};

// --- 5. 자주 묻는 질문 (FAQ) ---
const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  const faqData = [
    { q: "지인이 나올 가능성은 정말 없나요?", a: "프로필 제공 전, 상대방의 ‘초성/나이/지역’을 통해 지인 여부를 미리 확인하여 지인을 사전에 차단합니다." },
    { q: "3개월 동안 정말 계속 소개해주나요?", a: "네. 구독 기간 동안 매칭은 계속 진행됩니다. 다만, 연인이 생긴 경우에는 소개가 중단됩니다." },
    { q: "소개는 얼마나 자주 오나요?", a: "보통 5~7일 간격으로 1명을 기본으로 제안합니다. 상황에 따라 간격은 달라질 수 있습니다." }
  ];

  return (
    <section className="py-20 md:py-32 px-6 md:px-8 bg-gray-50">
        <div className="max-w-[800px] mx-auto">
             <div className="text-center mb-16 px-4">
                 <h2 className="text-2xl md:text-4xl font-bold text-eum-dark mb-4">자주 묻는 질문</h2>
                 <p className="font-eng text-[10px] text-gray-300 tracking-[0.4em] uppercase">F. A. Q</p>
             </div>
             
             <div className="grid gap-4 md:gap-6">
                {faqData.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-[1.5rem] md:rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md">
                        <button 
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            className="w-full flex justify-between items-center p-7 md:p-8 text-left"
                        >
                            <span className="text-base md:text-lg font-bold text-eum-dark leading-tight">Q. {item.q}</span>
                            <div className="text-gray-300 ml-4 flex-shrink-0">
                                {openIndex === idx ? <X className="w-4 h-4 rotate-45" /> : <X className="w-4 h-4" />}
                            </div>
                        </button>
                        {openIndex === idx && (
                            <div className="px-7 md:px-8 pb-8 text-sm md:text-base text-gray-500 font-medium leading-relaxed keep-all border-t border-gray-50 pt-6">
                                {item.a}
                            </div>
                        )}
                    </div>
                ))}
             </div>
        </div>
    </section>
  );
};

// --- 6. 푸터 (Footer) ---
const HomeFooter: React.FC = () => {
  return (
    <footer id="contact" className="relative w-full flex flex-col justify-center items-center py-24 md:py-48 bg-[#0f0f0f] text-white overflow-hidden">
      <div className="relative z-10 text-center px-4 w-full max-w-[800px] mx-auto">
        <div className="font-eng text-sm md:text-lg font-bold tracking-[0.2em] mb-6 mt-8 text-gray-500 uppercase">
          만남을 시작하세요
        </div>
        
        <Link to="/apply" className="group relative inline-block">
          <span className="block font-sans text-4xl md:text-7xl font-black leading-none text-white group-hover:text-gray-400 transition-colors tracking-tighter">
            매칭 신청하기
          </span>
          <span className="block text-xs md:text-lg font-medium text-gray-500 mt-6 group-hover:text-white transition-colors flex items-center justify-center gap-1">
            지금 바로 프로필 등록하기 <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
          </span>
        </Link>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 mt-16 md:mt-24 text-xs md:text-sm font-semibold tracking-wider text-gray-400">
          <Link to="/instagram" className="hover:text-white transition-colors px-2">인스타그램</Link>
          <a href="https://pf.kakao.com/_Cxfxcxon" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors px-2">카카오톡 문의</a>
          <Link to="/faq" className="hover:text-white transition-colors px-2">자주 묻는 질문</Link>
        </div>
        
        <div className="mt-16 md:mt-20 w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto text-[9px] md:text-xs text-gray-600 font-medium px-6 gap-4 md:gap-0">
          <div className="flex items-center gap-4">
             <p>© 2025 E.UM LOG. All Rights Reserved.</p>
             <Link to="/admin" className="opacity-5 hover:opacity-100 hover:text-white transition-all duration-300 ml-4">Admin</Link>
          </div>
          <p className="text-center md:text-right leading-relaxed keep-all">
            이음로그 전남 순천시 충효로 15 | 사업자등록번호: 671-14-02393<br className="md:hidden"/> 
            대표자 : 임상현 | E-MAIL: mono5686@naver.com
          </p>
        </div>
      </div>
      <img src={IMAGES.footerTexture} className="absolute inset-0 w-full h-full object-cover opacity-[0.05] pointer-events-none grayscale" alt="Texture" />
    </footer>
  );
};

// --- 메인 홈 통합 컴포넌트 ---
const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Philosophy />
      <Intro />
      <SystemFeatures />
      <FAQSection />
      <HomeFooter />
    </div>
  );
};

export default Home;
