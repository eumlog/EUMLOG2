
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, X, Check, Shield, MessageCircle, Coins } from 'lucide-react';
import { IMAGES } from '../lib/assets';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.5 });
            tl.to('.hero-label', { y: 0, opacity: 1, duration: 1, ease: 'power3.out' })
                .to('.hero-text-reveal', { y: 0, stagger: 0.2, duration: 1.4, ease: 'power3.out' }, '-=0.5')
                .to('.hero-subtitle', { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.8')
                .to('.hero-scroll', { opacity: 1, duration: 1 }, '-=0.5');
            gsap.to(imgRef.current, { yPercent: 30, ease: 'none', scrollTrigger: { trigger: containerRef.current, start: 'top top', end: 'bottom top', scrub: true } });
        }, containerRef);
        return () => ctx.revert();
    }, []);
    return (
        <section ref={containerRef} className="h-screen relative flex items-center justify-center overflow-hidden">
            <img ref={imgRef} src={IMAGES.heroBackground} className="absolute inset-0 w-full h-full object-cover brightness-[0.4] scale-110 grayscale-[20%]" alt="Hero Background" />
            <div ref={textRef} className="relative z-10 text-center text-white w-[90%] md:w-full mx-auto flex flex-col items-center">
                <div className="hero-label opacity-0 translate-y-6 mb-6 md:mb-10">
                    <span className="text-eum-accent font-bold tracking-[0.2em] text-[12px] md:text-base uppercase border border-eum-accent/30 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-black/20 backdrop-blur-sm">수도권이 아닌 지역기반 소개팅</span>
                </div>
                <h1 className="font-sans text-[16vw] md:text-[7.5vw] font-black leading-[1.2] tracking-tighter mb-6 md:mb-12 text-white">
                    <div className="overflow-hidden"><span className="hero-text-reveal block translate-y-full">진심을</span></div>
                    <div className="overflow-hidden"><span className="hero-text-reveal block translate-y-full">잇다</span></div>
                </h1>
                <div className="hero-subtitle opacity-0 translate-y-6 space-y-2 md:space-y-3 px-4">
                    <p className="text-[11px] md:text-[15px] font-medium text-gray-200 tracking-wide break-keep">빠른 만남보다, 맞는 사람을 한 번 제대로 만나는 것.</p>
                    <p className="text-[11px] md:text-[15px] font-medium text-gray-200 tracking-wide break-keep">성공할 때까지 책임지는 3개월의 동행.</p>
                </div>
            </div>
            <div className="hero-scroll absolute bottom-10 left-0 w-full flex justify-center opacity-0"><div className="animate-bounce"><ArrowDown className="text-white opacity-50 w-5 h-5 md:w-6 md:h-6" /></div></div>
        </section>
    );
};

const Philosophy = () => (
    <section className="py-16 md:py-32 px-0 bg-[#F5F5F0] overflow-hidden">
        <div className="max-w-[850px] w-[82%] md:w-full mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
                <div className="md:w-1/2 text-left">
                    <div className="mb-6 md:mb-10">
                        <span className="font-eng text-[9px] md:text-xs font-bold text-eum-accent tracking-widest uppercase mb-2 block">Brand Philosophy</span>
                        <h2 className="font-sans text-xl md:text-4xl font-bold text-[#1C1C1C] leading-[1.3] tracking-tight">우리 지역에서,<br />실제로 만날 수 있는 사람</h2>
                    </div>
                    <p className="font-sans text-xs md:text-lg text-gray-700 leading-relaxed font-medium keep-all mb-6 md:mb-12">수도권 중심 매칭이 아닙니다.<br />이음로그는 지역 거점 기준으로<br />지금 이 생활권 안에서 만날 수 있는 사람만 연결합니다.<br /><br />알고리즘이 아닌,<br /><span className="text-[#1C1C1C] font-bold">지역을 아는 매니저가 직접 1:1로 잇습니다.</span></p>
                    <div className="flex gap-8 md:gap-12 border-t border-gray-300 pt-6 md:pt-10">
                        <div><div className="font-eng text-[8px] md:text-xs font-bold text-gray-400 tracking-widest mb-1 uppercase">Base</div><div className="font-eng text-xs md:text-lg font-bold text-[#1C1C1C] tracking-wide uppercase">Local Regions</div></div>
                        <div><div className="font-eng text-[8px] md:text-xs font-bold text-gray-400 tracking-widest mb-1 uppercase">Service</div><div className="font-eng text-xs md:text-lg font-bold text-[#1C1C1C] tracking-wide uppercase">Private 1:1</div></div>
                    </div>
                </div>
                <div className="md:w-1/2 w-full h-[240px] md:h-[550px] relative">
                    <div className="absolute inset-0 bg-gray-200 rounded-xl md:rounded-[2.5rem] overflow-hidden shadow-lg">
                        <img src={IMAGES.philosophy} alt="Brand Philosophy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s]" />
                    </div>
                </div>
            </div>
            <div className="mt-10 md:mt-24 text-center">
                <Link to="/about" className="group inline-flex items-center gap-3 text-eum-dark hover:text-eum-accent transition-all duration-300">
                    <span className="text-base md:text-2xl font-bold border-b-2 border-eum-dark/10 group-hover:border-eum-accent pb-1">이음로그 자세히보기</span>
                    <div className="w-7 h-7 md:w-12 md:h-12 rounded-full border border-eum-dark/10 flex items-center justify-center group-hover:border-eum-accent group-hover:bg-eum-accent group-hover:text-white transition-all duration-300"><ArrowRight className="w-3.5 h-3.5 md:w-6 md:h-6" /></div>
                </Link>
            </div>
        </div>
    </section>
);

const Intro = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".intro-fade", { y: 30, opacity: 0, duration: 1, stagger: 0.2, scrollTrigger: { trigger: containerRef.current, start: "top 70%" } });
        }, containerRef);
        return () => ctx.revert();
    }, []);
    return (
        <section ref={containerRef} className="pt-16 md:pt-40 pb-0 px-0 bg-white">
            <div className="max-w-[850px] w-[82%] md:w-full mx-auto">
                <div className="text-left md:text-center mb-10 md:mb-24 intro-fade max-w-2xl md:mx-auto">
                    <div className="font-eng text-[9px] md:text-sm font-bold tracking-widest text-eum-accent uppercase mb-2 md:mb-5">Our Method</div>
                    <h2 className="font-sans text-xl md:text-4xl font-black leading-tight text-eum-dark keep-all">소개팅 앱 안 해요.<br className="hidden md:block" /> 결정사는 부담스럽고요.</h2>
                    <p className="mt-3 md:mt-8 text-xs md:text-lg text-gray-600 font-medium">알고 있습니다. 그래서 이렇게 합니다.</p>
                </div>
                <div className="intro-fade grid md:grid-cols-2 gap-0 border border-gray-100 rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg">
                    <div className="bg-gray-50 p-7 md:p-12 flex flex-col justify-center">
                        <h3 className="text-[9px] font-black text-gray-400 mb-6 md:mb-10 text-left uppercase tracking-widest">Old Style</h3>
                        <ul className="space-y-4 md:space-y-7">
                            <li className="flex items-start gap-3 text-gray-400"><X className="w-3.5 h-3.5 text-gray-300 mt-1 flex-shrink-0" /><div><span className="block text-sm md:text-xl font-bold mb-0.5">가입비 수백만원</span><span className="text-[10px] md:text-sm font-medium">초기 비용 부담이 매우 큼</span></div></li>
                            <li className="flex items-start gap-3 text-gray-400"><X className="w-3.5 h-3.5 text-gray-300 mt-1 flex-shrink-0" /><div><span className="block text-sm md:text-xl font-bold mb-0.5">횟수 채우면 끝</span><span className="text-[10px] md:text-sm font-medium">만남의 질보다 횟수 차감이 우선</span></div></li>
                            <li className="flex items-start gap-3 text-gray-400"><X className="w-3.5 h-3.5 text-gray-300 mt-1 flex-shrink-0" /><div><span className="block text-sm md:text-xl font-bold mb-0.5">기계적 매칭</span><span className="text-[10px] md:text-sm font-medium">등급표에 따른 단순 조건 연결</span></div></li>
                        </ul>
                    </div>
                    <div className="bg-[#1C1C1C] p-7 md:p-12 text-white relative overflow-hidden flex flex-col justify-center">
                        <h3 className="text-[9px] font-black text-eum-accent mb-6 md:mb-10 text-left uppercase tracking-widest">E.UM LOG</h3>
                        <ul className="space-y-4 md:space-y-7 relative z-10">
                            <li className="flex items-start gap-3"><div className="bg-eum-accent/20 p-1 rounded-full mt-1"><Check className="w-3 h-3 text-eum-accent flex-shrink-0" /></div><div><span className="block text-sm md:text-xl font-black mb-0.5 text-white">월 4~6만원대</span><span className="text-[10px] md:text-sm text-gray-400 font-medium">3개월 멤버십으로 합리적인 시작</span></div></li>
                            <li className="flex items-start gap-3"><div className="bg-eum-accent/20 p-1 rounded-full mt-1"><Check className="w-3 h-3 text-eum-accent flex-shrink-0" /></div><div><span className="block text-sm md:text-xl font-black mb-0.5 text-white">3개월동안 무제한 소개</span><span className="text-[10px] md:text-sm text-gray-400 font-medium">실제 연인 생기기 전까지 계속 소개</span></div></li>
                            <li className="flex items-start gap-3"><div className="bg-eum-accent/20 p-1 rounded-full mt-1"><Check className="w-3 h-3 text-eum-accent flex-shrink-0" /></div><div><span className="block text-sm md:text-xl font-black mb-0.5 text-white">1:1 수동 매칭</span><span className="text-[10px] md:text-sm text-gray-400 font-medium">지역 거점 기반, 매니저가 직접 상담 후 연결</span></div></li>
                        </ul>
                    </div>
                </div>
                <div className="intro-fade text-center mt-10 md:mt-24 mb-6 md:mb-12">
                    <h3 className="text-base md:text-3xl font-black text-eum-dark leading-relaxed keep-all">우리는 넓게 연결하지 않습니다.<br /><span className="text-eum-accent">지금 이 지역에서, 실제로 만날 수 있는 사람만 연결합니다.</span></h3>
                </div>
            </div>
        </section>
    );
};

const SystemFeatures = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.feature-content', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: containerRef.current, start: 'top 70%' } });
            gsap.from('.feature-item', { x: 30, opacity: 0, duration: 0.8, stagger: 0.2, delay: 0.2, scrollTrigger: { trigger: containerRef.current, start: 'top 70%' } });
        }, containerRef);
        return () => ctx.revert();
    }, []);
    return (
        <section ref={containerRef} className="pt-8 pb-16 md:pt-16 md:pb-32 bg-white overflow-hidden">
            <div className="max-w-[800px] w-[82%] md:w-full mx-auto">
                <div className="feature-content grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    <div className="relative h-[280px] md:h-[600px] rounded-xl md:rounded-[2.5rem] overflow-hidden shadow-lg">
                        <img src={IMAGES.systemFeatures} alt="E.UM LOG Promise" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="absolute bottom-6 left-5 right-5 text-white">
                            <p className="font-eng text-[9px] md:text-sm font-bold tracking-widest uppercase mb-1 text-eum-accent">Private & Premium</p>
                            <p className="font-sans text-lg md:text-3xl font-black leading-snug keep-all">3개월 동안,<br />인연이 나타날 때까지 소개합니다.</p>
                        </div>
                    </div>
                    <div>
                        <div className="mb-8 md:mb-12">
                            <h2 className="font-eng text-[8px] md:text-sm font-bold tracking-widest text-eum-accent uppercase mb-1.5">Why E.UM LOG?</h2>
                            <h3 className="font-sans text-xl md:text-3xl font-black text-eum-dark leading-tight">이음로그만의 <br /><span className="text-eum-accent">특별한 3가지 약속</span></h3>
                        </div>
                        <div className="space-y-6 md:space-y-10">
                            <div className="feature-item flex gap-3.5 md:gap-5 group"><div className="flex-shrink-0 w-9 h-9 md:w-14 md:h-14 rounded-lg md:rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-eum-accent group-hover:text-white transition-all duration-300"><Shield className="w-4 h-4 md:w-7 h-7" /></div><div><h4 className="text-sm md:text-lg font-black text-gray-900 mb-1 md:mb-2">철저한 지인 차단</h4><p className="text-gray-600 leading-relaxed font-medium text-[11px] md:text-base break-keep">프로필 제공 전, 상대방의 ‘초성/나이/지역’을 통해 지인 여부를 미리 확인합니다.</p></div></div>
                            <div className="feature-item flex gap-3.5 md:gap-5 group"><div className="flex-shrink-0 w-9 h-9 md:w-14 md:h-14 rounded-lg md:rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-eum-accent group-hover:text-white transition-all duration-300"><MessageCircle className="w-4 h-4 md:w-7 h-7" /></div><div><h4 className="text-sm md:text-lg font-black text-gray-900 mb-1 md:mb-2">1:1 카톡 상담</h4><p className="text-gray-600 leading-relaxed font-medium text-[11px] md:text-base break-keep">카톡으로 5~10분간 선택한 필수 조건들에 대해 상담합니다.</p></div></div>
                            <div className="feature-item flex gap-3.5 md:gap-5 group"><div className="flex-shrink-0 w-9 h-9 md:w-14 md:h-14 rounded-lg md:rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-eum-accent group-hover:text-white transition-all duration-300"><Coins className="w-4 h-4 md:w-7 h-7" /></div><div><h4 className="text-sm md:text-lg font-black text-gray-900 mb-1 md:mb-2">3개월 구독제</h4><p className="text-gray-600 leading-relaxed font-medium text-[11px] md:text-base break-keep">단순히 횟수만 채우는 만남이 아닙니다. 인연이 나타날 때까지 지속적으로 소개합니다.</p></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Fixed the export issue by using a function declaration and direct default export
export default function Home() {
    return (
        <div className="flex flex-col">
            <Hero />
            <Philosophy />
            <Intro />
            <SystemFeatures />
            <section className="py-16 md:py-32 bg-gray-50">
                <div className="max-w-[750px] w-[82%] md:w-full mx-auto">
                    <div className="text-left md:text-center mb-10 md:mb-20">
                        <h2 className="text-xl md:text-3xl font-black text-eum-dark">자주 묻는 질문</h2>
                        <p className="text-gray-400 font-bold mt-1 uppercase tracking-[0.2em] text-[8px] md:text-xs">F.A.Q</p>
                    </div>
                    <div className="grid gap-3.5">
                        <div className="bg-white p-6 md:p-9 rounded-2xl md:rounded-[2rem] shadow-sm border border-gray-100 hover:border-eum-accent/30 transition-colors"><h3 className="text-sm md:text-lg font-bold text-eum-dark mb-1.5">Q. 지인이 나올 가능성은 정말 없나요?</h3><p className="text-[11px] md:text-base text-gray-600 leading-relaxed font-medium">프로필 제공 전, 상대방의 ‘초성/나이/지역’을 통해 지인 여부를 미리 확인하여 지인을 사전에 차단합니다.</p></div>
                        <div className="bg-white p-6 md:p-9 rounded-2xl md:rounded-[2rem] shadow-sm border border-gray-100 hover:border-eum-accent/30 transition-colors"><h3 className="text-sm md:text-lg font-bold text-eum-dark mb-1.5">Q. 3개월 동안 정말 계속 소개해주나요?</h3><p className="text-[11px] md:text-base text-gray-600 leading-relaxed font-medium">네. 구독 기간 동안 매칭은 계속 진행됩니다. 다만, 연인이 생긴 경우에는 소개가 중단됩니다.</p></div>
                        <div className="bg-white p-6 md:p-9 rounded-2xl md:rounded-[2rem] shadow-sm border border-gray-100 hover:border-eum-accent/30 transition-colors"><h3 className="text-sm md:text-lg font-bold text-eum-dark mb-1.5">Q. 소개는 얼마나 자주 오나요?</h3><p className="text-[11px] md:text-base text-gray-600 leading-relaxed font-medium">보통 5~7일 간격으로 1명을 기본으로 제안합니다. 상황에 따라 간격은 달라질 수 있습니다.</p></div>
                    </div>
                </div>
            </section>
            <div className="relative bg-[#0f0f0f] text-white">
                <Footer />
            </div>
        </div>
    );
};