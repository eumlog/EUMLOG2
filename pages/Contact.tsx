
import React from 'react';
import { Link } from 'react-router-dom';
import { Headset, MessageCircle, ExternalLink, Instagram, ClipboardList, CreditCard, UserCheck, ArrowRight } from 'lucide-react';
import { PageHeader } from '../components/Shared';
import Footer from '../components/Footer';

const ContactPage = () => (
    <div className="bg-eum-bg min-h-screen">
        <PageHeader title="문의하기" subtitle="Contact Us" />
        
        {/* Pre-check Information Section */}
        <section className="py-16 md:py-24 px-0 bg-white">
            <div className="max-w-[1000px] w-[90%] mx-auto">
                <div className="text-center mb-12 md:mb-16">
                    <span className="text-eum-accent text-xs md:text-sm font-black tracking-widest uppercase mb-3 block">Before Asking</span>
                    <h2 className="text-2xl md:text-3xl font-black text-eum-dark mb-4">문의 전, 읽어주세요</h2>
                    <p className="text-gray-500 font-medium text-sm md:text-base leading-relaxed">
                        궁금한 점이 있다면<br className="md:hidden"/> 아래 내용을 먼저 확인해주세요.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Link to="/service" className="group bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-100 hover:border-eum-accent/30 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 group-hover:bg-eum-accent group-hover:text-white transition-colors">
                            <ClipboardList className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-lg font-bold text-eum-dark mb-1 group-hover:text-eum-accent transition-colors">진행 방식</h3>
                        <p className="text-xs text-gray-400 mb-4 font-medium">전체 진행 과정</p>
                        <div className="mt-auto flex items-center text-[10px] font-bold text-gray-400 group-hover:text-eum-dark transition-colors border border-gray-200 rounded-full px-3 py-1 group-hover:border-eum-dark">
                            VIEW <ArrowRight className="w-2.5 h-2.5 ml-1" />
                        </div>
                    </Link>

                    <Link to="/pricing" className="group bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-100 hover:border-eum-accent/30 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 group-hover:bg-eum-accent group-hover:text-white transition-colors">
                            <CreditCard className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-lg font-bold text-eum-dark mb-1 group-hover:text-eum-accent transition-colors">가격 안내</h3>
                        <p className="text-xs text-gray-400 mb-4 font-medium">비용 상세 확인</p>
                        <div className="mt-auto flex items-center text-[10px] font-bold text-gray-400 group-hover:text-eum-dark transition-colors border border-gray-200 rounded-full px-3 py-1 group-hover:border-eum-dark">
                            VIEW <ArrowRight className="w-2.5 h-2.5 ml-1" />
                        </div>
                    </Link>

                    <Link to="/criteria" className="group bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-100 hover:border-eum-accent/30 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 group-hover:bg-eum-accent group-hover:text-white transition-colors">
                            <UserCheck className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="text-lg font-bold text-eum-dark mb-1 group-hover:text-eum-accent transition-colors">가입 기준</h3>
                        <p className="text-xs text-gray-400 mb-4 font-medium">필수 가입 조건</p>
                        <div className="mt-auto flex items-center text-[10px] font-bold text-gray-400 group-hover:text-eum-dark transition-colors border border-gray-200 rounded-full px-3 py-1 group-hover:border-eum-dark">
                            VIEW <ArrowRight className="w-2.5 h-2.5 ml-1" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>

        {/* Contact Buttons Section */}
        <section className="py-16 md:py-24 px-0 bg-eum-bg">
            <div className="max-w-2xl w-[90%] md:w-full mx-auto text-center">
                <div className="mb-10 md:mb-12">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-eum-dark text-white rounded-2xl mb-5 shadow-lg">
                        <Headset className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-eum-dark mb-3">상담이 필요하신가요?</h3>
                    <p className="text-gray-500 font-medium text-sm md:text-base leading-relaxed">
                        매니저가 직접<br className="md:hidden"/> 친절하게 안내해 드립니다.
                    </p>
                </div>
                
                <div className="space-y-4">
                    <a 
                        href="https://open.kakao.com/o/s7H0XpBh" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group block bg-[#FEE500] p-6 md:p-8 rounded-2xl md:rounded-[2rem] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-left relative overflow-hidden"
                    >
                        <div className="flex items-center justify-between relative z-10">
                            <div className="flex items-center gap-4 md:gap-6">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/50 rounded-xl md:rounded-2xl flex items-center justify-center text-[#3c1e1e]">
                                    <MessageCircle className="w-6 h-6 md:w-8 md:h-8 fill-current" />
                                </div>
                                <div>
                                    <span className="block text-[10px] md:text-xs font-black text-[#3c1e1e]/60 mb-1 uppercase tracking-widest">KakaoTalk</span>
                                    <span className="block text-lg md:text-2xl font-black text-[#3c1e1e]">문의하기</span>
                                </div>
                            </div>
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-white/50 rounded-full flex items-center justify-center text-[#3c1e1e] group-hover:bg-white transition-colors">
                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                            </div>
                        </div>
                    </a>

                    <a 
                        href="https://instagram.com/e.um_log" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group block bg-white p-6 md:p-8 rounded-2xl md:rounded-[2rem] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-left border border-white hover:border-pink-200"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 md:gap-6">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-md">
                                    <Instagram className="w-6 h-6 md:w-8 md:h-8" />
                                </div>
                                <div>
                                    <span className="block text-[10px] md:text-xs font-black text-gray-400 mb-1 uppercase tracking-widest">Instagram DM</span>
                                    <span className="block text-lg md:text-2xl font-black text-eum-dark">@e.um_log</span>
                                </div>
                            </div>
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 group-hover:text-eum-dark transition-colors">
                                <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>

        <div className="bg-[#0f0f0f] text-white"><Footer /></div>
    </div>
);

export default ContactPage;
