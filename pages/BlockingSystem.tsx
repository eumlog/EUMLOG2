
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PageHeader } from '../components/Shared';
import Footer from '../components/Footer';
import { Shield, UserX, CheckCircle, X, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const BlockingSystem = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Intro Section Animation
            gsap.from('.intro-content', {
                y: 20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.intro-section',
                    start: 'top 85%',
                }
            });

            // Feature 1 Animation
            const tl1 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.feature-1',
                    start: 'top 80%',
                }
            });
            tl1.from('.feature-1-num', { scale: 0, opacity: 0, duration: 0.4, ease: 'back.out(1.7)' })
               .from('.feature-1-title', { x: -20, opacity: 0, duration: 0.6 }, '-=0.2')
               .from('.feature-1-card', { y: 30, opacity: 0, duration: 0.8 }, '-=0.4');

            // Feature 2 Animation
            const tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.feature-2',
                    start: 'top 80%',
                }
            });
            tl2.from('.feature-2-num', { scale: 0, opacity: 0, duration: 0.4, ease: 'back.out(1.7)' })
               .from('.feature-2-title', { x: -20, opacity: 0, duration: 0.6 }, '-=0.2')
               .from('.feature-2-card', { y: 30, opacity: 0, duration: 0.8 }, '-=0.4');

            // CTA Animation
            gsap.from('.cta-section', {
                scale: 0.98,
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.cta-section',
                    start: 'top 90%',
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="bg-eum-bg min-h-screen font-sans">
            <PageHeader title="지인 차단 시스템" subtitle="Zero Acquaintance Policy" />

            <section className="intro-section py-12 md:py-20 px-0">
                <div className="max-w-[800px] w-[88%] md:w-[90%] mx-auto">
                    
                    {/* Intro */}
                    <div className="text-center mb-12 md:mb-20 intro-content">
                        <div className="intro-content inline-flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-sm text-eum-accent mb-4 border border-gray-100">
                            <Shield className="w-6 h-6" />
                        </div>
                        <h2 className="intro-content text-xl md:text-3xl font-black text-eum-dark mb-4 leading-snug keep-all">
                            지역이 좁아서,<br/>
                            <span className="text-eum-accent">한다리 건너면 아는 사이일까 봐</span><br/>
                            걱정되시죠?
                        </h2>
                        <p className="intro-content text-gray-500 text-sm md:text-base leading-relaxed font-medium keep-all">
                            이음로그는 <strong>2중 안심 차단 시스템</strong>을 통해<br className="md:hidden" />
                            지인 매칭 가능성을 확실하게 차단합니다.
                        </p>
                    </div>

                    {/* Feature 1: Name Blocking */}
                    <div className="feature-1 mb-16 md:mb-28">
                         <div className="flex items-center gap-3 mb-6 md:mb-8">
                            <div className="feature-1-num bg-eum-dark text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-black text-sm md:text-base shrink-0 shadow-md">1</div>
                            <h3 className="feature-1-title text-lg md:text-2xl font-black text-eum-dark">지인입력 사전 차단</h3>
                         </div>
                         
                         <div className="feature-1-card bg-white p-6 md:p-10 rounded-3xl md:rounded-[2rem] shadow-lg border border-gray-100 relative overflow-hidden">
                            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                                {/* Mock UI */}
                                <div className="order-2 md:order-1 bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden transform md:rotate-[-1deg] transition-transform hover:rotate-0 max-w-sm mx-auto w-full">
                                    <div className="p-3 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                                        <span className="font-bold text-gray-700 flex items-center gap-1.5 text-xs"><UserX className="w-3.5 h-3.5 text-red-500"/> 지인 차단 등록</span>
                                        <X className="w-3.5 h-3.5 text-gray-400" />
                                    </div>
                                    <div className="p-5 md:p-6 space-y-4">
                                        <p className="text-[11px] text-gray-400 font-medium text-center keep-all">
                                            차단할 지인의 이름을 입력하세요.
                                        </p>
                                        <div className="flex flex-wrap gap-1.5 justify-center">
                                            <span className="bg-red-50 text-red-500 px-2 py-1 rounded-md text-[11px] font-bold flex items-center gap-1 border border-red-100">
                                                김영호 <X className="w-2.5 h-2.5 cursor-pointer opacity-50"/>
                                            </span>
                                            <span className="bg-red-50 text-red-500 px-2 py-1 rounded-md text-[11px] font-bold flex items-center gap-1 border border-red-100">
                                                박영식 <X className="w-2.5 h-2.5 cursor-pointer opacity-50"/>
                                            </span>
                                            <div className="flex items-center gap-1 text-[10px] font-bold text-gray-300 border border-gray-100 px-2 py-1 rounded-md">
                                                이름 + Enter
                                            </div>
                                        </div>
                                        <div className="pt-1">
                                            <button className="w-full bg-[#E03131] text-white font-bold py-2.5 rounded-lg shadow-sm text-xs hover:bg-[#c92a2a] transition-colors">
                                                저장하기
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Description */}
                                <div className="order-1 md:order-2 text-left">
                                    <h4 className="text-xl md:text-2xl font-black text-gray-800 mb-4 leading-snug">
                                        이름을 미리 등록하면<br/>
                                        <span className="text-red-500 inline-block border-b-2 border-red-100">100% 원천 차단됩니다.</span>
                                    </h4>
                                    <p className="text-gray-500 leading-relaxed font-medium text-xs md:text-sm keep-all">
                                        회사 동료, 전 연인, 동창 등 마주치기 불편한 사람의 이름을 등록해주세요. <strong>해당 이름의 회원은 매칭 대상에서 영구 제외</strong>됩니다.
                                    </p>
                                </div>
                            </div>
                         </div>
                    </div>

                    {/* Feature 2: Initial/Region Check */}
                    <div className="feature-2 mb-16 md:mb-20">
                         <div className="flex items-center gap-3 mb-6 md:mb-8">
                            <div className="feature-2-num bg-eum-dark text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-black text-sm md:text-base shrink-0 shadow-md">2</div>
                            <h3 className="feature-2-title text-lg md:text-2xl font-black text-eum-dark">초성 / 나이 / 지역 확인</h3>
                         </div>

                         <div className="feature-2-card bg-[#1C1C1C] p-6 md:p-10 rounded-3xl md:rounded-[2rem] shadow-xl relative overflow-hidden mb-8">
                             <div className="absolute top-0 right-0 w-48 h-48 bg-eum-accent/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                             <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
                                 {/* Mock UI Dark Side (Col 1) */}
                                 <div className="order-2 md:order-1 w-full max-w-sm mx-auto flex flex-col gap-4">
                                     <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg text-center font-sans relative w-full">
                                         <div className="space-y-4 text-base md:text-lg font-black text-gray-800 tracking-tight">
                                             <div className="pb-3 border-b border-gray-100 flex justify-center items-center gap-2">
                                                 <span className="text-eum-dark">ㄱ ㅁ ㅅ</span> <span className="text-gray-200 font-thin">|</span> <span>92년</span> <span className="text-gray-200 font-thin">|</span> <span>광주</span>
                                             </div>
                                             <div className="pb-3 border-b border-gray-100 flex justify-center items-center gap-2 opacity-40 grayscale">
                                                 <span>ㅈ ㄱ ㅈ</span> <span className="text-gray-200 font-thin">|</span> <span>96년</span> <span className="text-gray-200 font-thin">|</span> <span>순천</span>
                                             </div>
                                             <div className="flex justify-center items-center gap-2 opacity-40 grayscale">
                                                 <span>ㅈ ㅇ ㅎ</span> <span className="text-gray-200 font-thin">|</span> <span>94년</span> <span className="text-gray-200 font-thin">|</span> <span>광양</span>
                                             </div>
                                         </div>
                                         <div className="mt-6 pt-4 border-t border-gray-100 text-[10px] md:text-xs font-bold text-gray-500 bg-gray-50 rounded-lg p-2.5">
                                             ※ 이 중 <span className="text-eum-dark">"1명만"</span> 실제 상대방,<br/>
                                             나머지 2명은 랜덤 정보입니다
                                         </div>
                                     </div>
                                     
                                     {/* Moved Info Block Here */}
                                     <div className="bg-white/10 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
                                         <div className="flex items-start gap-2.5">
                                             <Info className="w-4 h-4 text-eum-accent shrink-0 mt-0.5" />
                                             <div className="text-xs text-left">
                                                 <p className="font-bold text-white mb-0.5">실제 상대방을 안다면?</p>
                                                 <p className="text-gray-400 font-medium">
                                                     → <span className="text-eum-accent font-bold underline">다른 프로필로 즉시 변경</span>해 드립니다.
                                                 </p>
                                             </div>
                                         </div>
                                     </div>
                                 </div>

                                 {/* Description Side (Col 2) */}
                                 <div className="text-white order-1 md:order-2">
                                     <h4 className="text-xl md:text-2xl font-black mb-4 leading-snug">
                                         프로필 공개 전,<br/>
                                         <span className="text-eum-accent">"초성 / 나이 / 지역"</span>을<br/>
                                         먼저 보여드립니다.
                                     </h4>
                                     
                                     <div className="space-y-3">
                                         <p className="text-gray-400 leading-relaxed font-medium text-xs md:text-sm keep-all">
                                             혹시라도 이름 차단을 놓쳤더라도 걱정 마세요. 사진과 상세 정보를 보기 전에 <strong>기본 정보</strong>를 먼저 확인시켜 드립니다.
                                         </p>
                                     </div>
                                 </div>
                             </div>
                         </div>
                    </div>

                    {/* CTA */}
                    <div className="cta-section text-center py-10 bg-gray-50 rounded-3xl border border-gray-100">
                        <p className="text-gray-500 font-bold mb-5 text-xs md:text-sm">이제 마음 편하게 만남에만 집중하세요.</p>
                         <Link to="/apply" className="inline-flex items-center justify-center gap-2 bg-eum-dark text-white text-base font-black px-10 py-4 rounded-full hover:bg-black transition-all shadow-lg hover:-translate-y-0.5">
                            안심하고 매칭 신청하기 <CheckCircle className="w-4 h-4" />
                        </Link>
                    </div>

                </div>
            </section>
            
            <div className="bg-[#0f0f0f] text-white">
                <Footer />
            </div>
        </div>
    );
};

export default BlockingSystem;
