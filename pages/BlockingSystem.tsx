
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
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.intro-section',
                    start: 'top 80%',
                }
            });

            // Feature 1 Animation (Slide in from sides)
            const tl1 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.feature-1',
                    start: 'top 75%',
                }
            });
            tl1.from('.feature-1-num', { scale: 0, opacity: 0, duration: 0.5, ease: 'back.out(1.7)' })
               .from('.feature-1-title', { x: -30, opacity: 0, duration: 0.8 }, '-=0.3')
               .from('.feature-1-card', { y: 50, opacity: 0, duration: 1 }, '-=0.5');

            // Feature 2 Animation
            const tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.feature-2',
                    start: 'top 75%',
                }
            });
            tl2.from('.feature-2-num', { scale: 0, opacity: 0, duration: 0.5, ease: 'back.out(1.7)' })
               .from('.feature-2-title', { x: -30, opacity: 0, duration: 0.8 }, '-=0.3')
               .from('.feature-2-card', { y: 50, opacity: 0, duration: 1 }, '-=0.5');

            // CTA Animation
            gsap.from('.cta-section', {
                scale: 0.95,
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.cta-section',
                    start: 'top 85%',
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="bg-eum-bg min-h-screen">
            <PageHeader title="지인 차단 시스템" subtitle="Zero Acquaintance Policy" />

            <section className="intro-section py-16 md:py-24 px-4">
                <div className="max-w-[850px] w-full mx-auto">
                    
                    {/* Intro */}
                    <div className="text-center mb-16 md:mb-28 intro-content">
                        <div className="intro-content inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-sm text-eum-accent mb-6">
                            <Shield className="w-8 h-8" />
                        </div>
                        <h2 className="intro-content text-2xl md:text-4xl font-black text-eum-dark mb-6 leading-tight keep-all">
                            지역이 좁아서,<br/>
                            <span className="text-eum-accent">한다리 건너면 아는 사이일까 봐</span><br/>
                            걱정되시죠?
                        </h2>
                        <p className="intro-content text-gray-600 text-sm md:text-lg leading-relaxed font-medium keep-all">
                            이음로그는 <strong>2중 안심 차단 시스템</strong>을 통해<br className="md:hidden" />
                            지인 매칭 가능성을 확실하게 차단합니다.
                        </p>
                    </div>

                    {/* Feature 1: Name Blocking */}
                    <div className="feature-1 mb-24 md:mb-40">
                         <div className="flex items-center gap-4 mb-8 md:mb-12">
                            <div className="feature-1-num bg-eum-dark text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-black text-lg md:text-xl shrink-0 shadow-lg">1</div>
                            <h3 className="feature-1-title text-xl md:text-3xl font-black text-eum-dark">지인입력 사전 차단</h3>
                         </div>
                         
                         <div className="feature-1-card bg-white p-6 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100 relative overflow-hidden">
                            <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
                                {/* Mock UI */}
                                <div className="order-2 md:order-1 bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden transform md:rotate-[-2deg] transition-transform hover:rotate-0">
                                    <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                                        <span className="font-bold text-gray-700 flex items-center gap-2 text-sm"><UserX className="w-4 h-4 text-red-500"/> 지인 차단 등록</span>
                                        <X className="w-4 h-4 text-gray-400" />
                                    </div>
                                    <div className="p-6 md:p-8 space-y-6">
                                        <p className="text-xs text-gray-500 font-medium text-center keep-all">
                                            이름을 입력하고 [저장하기]를 누르세요.<br/>(차단되기를 원하는 지인의 이름을 모두 입력하세요.)
                                        </p>
                                        <div className="flex flex-wrap gap-2 justify-center">
                                            <span className="bg-red-50 text-red-500 px-3 py-2 rounded-lg text-sm font-bold flex items-center gap-1 border border-red-100">
                                                김영호 <X className="w-3 h-3 cursor-pointer opacity-50 hover:opacity-100"/>
                                            </span>
                                            <span className="bg-red-50 text-red-500 px-3 py-2 rounded-lg text-sm font-bold flex items-center gap-1 border border-red-100">
                                                김영수 <X className="w-3 h-3 cursor-pointer opacity-50 hover:opacity-100"/>
                                            </span>
                                            <span className="bg-red-50 text-red-500 px-3 py-2 rounded-lg text-sm font-bold flex items-center gap-1 border border-red-100">
                                                박영식 <X className="w-3 h-3 cursor-pointer opacity-50 hover:opacity-100"/>
                                            </span>
                                            <div className="flex items-center gap-1 text-xs font-bold text-gray-300 border border-gray-100 px-3 py-2 rounded-lg">
                                                이름 입력 + Enter
                                            </div>
                                        </div>
                                        <div className="pt-2">
                                            <button className="w-full bg-[#E03131] text-white font-bold py-3.5 rounded-xl shadow-md text-sm hover:bg-[#c92a2a] transition-colors">
                                                저장하기
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Description */}
                                <div className="order-1 md:order-2 text-left">
                                    <h4 className="text-2xl md:text-3xl font-black text-gray-800 mb-6 leading-snug">
                                        지인의 이름을<br/>
                                        미리 등록하면<br/>
                                        <span className="text-red-500 inline-block border-b-4 border-red-100">100% 원천 차단됩니다.</span>
                                    </h4>
                                    <p className="text-gray-600 leading-relaxed font-medium text-sm md:text-base keep-all">
                                        회사 동료, 전 연인, 동창 등 마주치기 불편한 사람의 이름을 등록해주세요.<br/><br/>
                                        시스템에서 해당 이름을 가진 회원은 <strong>매칭 대상에서 영구적으로 제외</strong>됩니다.
                                    </p>
                                </div>
                            </div>
                         </div>
                    </div>

                    {/* Feature 2: Initial/Region Check */}
                    <div className="feature-2 mb-20">
                         <div className="flex items-center gap-4 mb-8 md:mb-12">
                            <div className="feature-2-num bg-eum-dark text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-black text-lg md:text-xl shrink-0 shadow-lg">2</div>
                            <h3 className="feature-2-title text-xl md:text-3xl font-black text-eum-dark">초성 / 나이 / 지역 차단</h3>
                         </div>

                         <div className="feature-2-card bg-[#1C1C1C] p-6 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden mb-8">
                             {/* Background blur effect */}
                             <div className="absolute top-0 right-0 w-64 h-64 bg-eum-accent/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                             <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                                 {/* Mock UI Dark */}
                                 <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg text-center font-sans relative order-2 md:order-1">
                                     <div className="space-y-6 text-lg md:text-xl font-black text-gray-800 tracking-tight">
                                         <div className="pb-4 border-b border-gray-100 flex justify-center items-center gap-2 md:gap-3">
                                             <span className="text-eum-dark">ㄱ ㅁ ㅅ</span> <span className="text-gray-200 font-thin">|</span> <span>92년생</span> <span className="text-gray-200 font-thin">|</span> <span>광주</span>
                                         </div>
                                         <div className="pb-4 border-b border-gray-100 flex justify-center items-center gap-2 md:gap-3 opacity-40 grayscale">
                                             <span>ㅈ ㄱ ㅈ</span> <span className="text-gray-200 font-thin">|</span> <span>96년생</span> <span className="text-gray-200 font-thin">|</span> <span>순천</span>
                                         </div>
                                         <div className="flex justify-center items-center gap-2 md:gap-3 opacity-40 grayscale">
                                             <span>ㅈ ㅇ ㅎ</span> <span className="text-gray-200 font-thin">|</span> <span>94년생</span> <span className="text-gray-200 font-thin">|</span> <span>광양</span>
                                         </div>
                                     </div>
                                     <div className="mt-8 pt-6 border-t border-gray-100 text-xs md:text-sm font-bold text-gray-500 bg-gray-50 rounded-xl p-3">
                                         ※ 이 중 <span className="text-eum-dark">"1명만"</span> 실제 상대방,<br/>
                                         나머지 2명은 랜덤 정보입니다
                                     </div>
                                 </div>

                                 {/* Description */}
                                 <div className="text-white order-1 md:order-2">
                                     <h4 className="text-2xl md:text-3xl font-black mb-6 leading-snug">
                                         프로필 공개 전,<br/>
                                         <span className="text-eum-accent">"초성 / 나이 / 지역"</span>을<br/>
                                         보여드립니다.
                                     </h4>
                                     
                                     <div className="space-y-4">
                                         <p className="text-gray-300 leading-relaxed font-medium text-sm md:text-base keep-all">
                                             혹시라도 이름 차단을 놓쳤더라도 걱정 마세요. 사진과 상세 정보를 보기 전에 <strong>초성 정보</strong>를 먼저 확인시켜 드립니다.
                                         </p>
                                         
                                         <div className="bg-white/10 p-5 rounded-2xl border border-white/5 backdrop-blur-sm mt-4">
                                             <div className="flex items-start gap-3">
                                                 <Info className="w-5 h-5 text-eum-accent shrink-0 mt-0.5" />
                                                 <div className="text-sm">
                                                     <p className="font-bold text-white mb-1">실제 상대방을 안다면?</p>
                                                     <p className="text-gray-400 font-medium">
                                                         → <span className="text-eum-accent font-bold underline">다른 프로필로 즉시 변경</span>해 드립니다.
                                                     </p>
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                    </div>

                    {/* CTA */}
                    <div className="cta-section text-center py-12 bg-gray-50 rounded-[2.5rem] border border-gray-100">
                        <p className="text-gray-500 font-bold mb-6 text-sm md:text-base">이제 마음 편하게 만남에만 집중하세요.</p>
                         <Link to="/apply" className="inline-flex items-center justify-center gap-3 bg-eum-dark text-white text-lg font-black px-12 py-5 rounded-full hover:bg-black transition-all shadow-xl hover:-translate-y-1">
                            안심하고 매칭 신청하기 <CheckCircle className="w-5 h-5" />
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
