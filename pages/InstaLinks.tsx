
import React from 'react';
import { Link } from 'react-router-dom';
import { 
    FileText, MessageCircle, ChevronRight, Shield, 
    CreditCard, CheckCircle, MapPin, Globe, Share2, 
    Sparkles, Lock, ExternalLink, Calendar 
} from 'lucide-react';

const InstaLinks = () => {
    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: '이음로그 | 광주·전남 1:1 프리미엄 소개팅',
                url: window.location.href,
            });
        } else {
            alert('주소가 복사되었습니다.');
            navigator.clipboard.writeText(window.location.href);
        }
    };

    return (
        <div className="min-h-screen bg-[#FDFDFB] font-sans pb-20 relative">
            {/* Top Navigation */}
            <div className="sticky top-0 z-40 bg-[#FDFDFB]/80 backdrop-blur-md px-5 py-3 flex justify-between items-center">
                <span className="text-base font-black tracking-tighter text-eum-dark">E.UM LOG</span>
                <button onClick={handleShare} className="p-2 bg-white rounded-full border border-gray-100 shadow-sm text-gray-500 hover:text-eum-dark transition-colors">
                    <Share2 className="w-4 h-4" />
                </button>
            </div>

            <div className="max-w-[440px] w-full mx-auto px-5 pt-4">
                
                {/* 1. Header Section */}
                <div className="text-center mb-6 animate-[fadeIn_0.6s_ease-out]">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-eum-dark/5 text-eum-dark rounded-full text-[9px] font-bold tracking-widest uppercase mb-3">
                        <MapPin className="w-3 h-3 text-eum-accent" />
                        Gwangju · Jeonnam
                    </div>
                    <h1 className="text-2xl font-black text-eum-dark leading-tight mb-2">
                        지역 기반 1:1 소개팅
                    </h1>
                    <p className="text-xs text-gray-500 font-medium leading-relaxed">
                        가벼운 앱은 싫고, 결정사는 부담스러운<br/>
                        당신을 위한 <strong>프리미엄 매칭 솔루션</strong>
                    </p>
                </div>

                {/* 2. Main CTA: Apply (Naver Form) */}
                <a 
                    href="https://m.site.naver.com/1Pznd" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative block w-full bg-eum-dark text-white p-5 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 mb-5 overflow-hidden animate-[slideUp_0.5s_0.1s_both]"
                >
                    <div className="relative z-10 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white">
                                <FileText className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                                <div className="flex items-center gap-2 mb-0.5">
                                    <h2 className="text-lg font-black">소개팅 신청하기</h2>
                                    <div className="bg-white/20 backdrop-blur-md px-1.5 py-0.5 rounded text-[9px] font-bold text-white flex items-center gap-1">
                                        <Sparkles className="w-2.5 h-2.5 text-yellow-300" /> 접수 중
                                    </div>
                                </div>
                                <p className="text-xs text-gray-400 font-medium">네이버폼으로 1분 만에 등록</p>
                            </div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center group-hover:bg-white group-hover:text-eum-dark transition-colors">
                            <ChevronRight className="w-4 h-4" />
                        </div>
                    </div>
                    {/* Background Effect */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-eum-accent/20 rounded-full blur-2xl"></div>
                </a>

                {/* 3. Key Info Grid (Quick Access) */}
                <div className="grid grid-cols-2 gap-2.5 mb-5 animate-[slideUp_0.5s_0.2s_both]">
                    <a href="https://m.site.naver.com/2aTSV" target="_blank" rel="noopener noreferrer" className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:border-eum-accent/30 hover:shadow-md transition-all flex flex-col justify-between h-[110px] group">
                        <div className="w-8 h-8 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
                            <CreditCard className="w-4 h-4" />
                        </div>
                        <div className="mt-2">
                            <h3 className="text-xs font-bold text-gray-800 mb-0.5">멤버십 안내</h3>
                            <p className="text-[9px] text-gray-400 font-medium">합리적인 매칭 비용</p>
                        </div>
                    </a>

                    <Link to="/blocking-system" className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:border-eum-accent/30 hover:shadow-md transition-all flex flex-col justify-between h-[110px] group">
                        <div className="w-8 h-8 bg-red-50 text-red-500 rounded-lg flex items-center justify-center group-hover:bg-red-500 group-hover:text-white transition-colors">
                            <Shield className="w-4 h-4" />
                        </div>
                        <div className="mt-2">
                            <h3 className="text-xs font-bold text-gray-800 mb-0.5">지인 차단</h3>
                            <p className="text-[9px] text-gray-400 font-medium">안심 차단 시스템</p>
                        </div>
                    </Link>

                    <Link to="/criteria" className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:border-eum-accent/30 hover:shadow-md transition-all flex flex-col justify-between h-[110px] group">
                        <div className="w-8 h-8 bg-green-50 text-green-500 rounded-lg flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors">
                            <Lock className="w-4 h-4" />
                        </div>
                        <div className="mt-2">
                            <h3 className="text-xs font-bold text-gray-800 mb-0.5">가입 기준</h3>
                            <p className="text-[9px] text-gray-400 font-medium">엄격한 회원 관리</p>
                        </div>
                    </Link>

                    <Link to="/faq" className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:border-eum-accent/30 hover:shadow-md transition-all flex flex-col justify-between h-[110px] group">
                        <div className="w-8 h-8 bg-orange-50 text-orange-500 rounded-lg flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors">
                            <MessageCircle className="w-4 h-4" />
                        </div>
                        <div className="mt-2">
                            <h3 className="text-xs font-bold text-gray-800 mb-0.5">자주 묻는 질문</h3>
                            <p className="text-[9px] text-gray-400 font-medium">Q&A 모음</p>
                        </div>
                    </Link>
                </div>

                {/* Sub Menu: Minimal Text Links */}
                <div className="flex justify-center items-center gap-4 mb-6 mt-1 animate-[slideUp_0.5s_0.3s_both] text-[11px] text-gray-400 font-medium tracking-wide">
                    <Link to="/weekly" className="flex items-center gap-1 hover:text-gray-700 transition-colors">
                        <span>참가자 명단</span>
                        <span className="text-[8px] font-bold text-white bg-eum-accent px-1 py-[1.5px] rounded border border-eum-accent">NEW</span>
                    </Link>
                    <div className="w-[1px] h-2.5 bg-gray-300"></div>
                    <a href="https://m.site.naver.com/2aTSK" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-gray-700 transition-colors">
                        <span>진행 방식 안내</span>
                    </a>
                </div>

                {/* 4. Trust Banner */}
                <Link to="/blocking-system" className="block mb-5 animate-[slideUp_0.5s_0.4s_both]">
                    <div className="bg-eum-bg rounded-xl p-3.5 flex items-center gap-3 border border-eum-accent/10">
                        <div className="bg-white p-1.5 rounded-lg shadow-sm">
                            <Shield className="w-4 h-4 text-eum-accent" />
                        </div>
                        <div className="flex-1">
                            <p className="text-xs font-bold text-eum-dark">아는 사람 만날까봐 걱정되시나요?</p>
                            <p className="text-[10px] text-gray-500 mt-0.5">이름/초성/지역 3단계 차단으로 완벽 보호해드려요.</p>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
                    </div>
                </Link>

                {/* 5. Contact & Homepage Links */}
                <div className="space-y-2.5 mb-8 animate-[slideUp_0.5s_0.5s_both]">
                    <Link to="/contact" className="flex items-center justify-between bg-[#FEE500] p-3.5 rounded-xl shadow-sm hover:shadow-md transition-all">
                        <div className="flex items-center gap-2.5">
                            <MessageCircle className="w-4 h-4 text-[#3c1e1e]" />
                            <span className="text-xs font-bold text-[#3c1e1e]">카카오톡 상담하기</span>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-[#3c1e1e]/50" />
                    </Link>

                    <Link to="/" className="flex items-center justify-between bg-white border border-gray-200 p-3.5 rounded-xl hover:border-eum-dark transition-all group">
                        <div className="flex items-center gap-2.5">
                            <Globe className="w-4 h-4 text-gray-400 group-hover:text-eum-dark transition-colors" />
                            <span className="text-xs font-bold text-gray-600 group-hover:text-eum-dark transition-colors">이음로그 홈페이지 구경하기</span>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
                    </Link>
                </div>

                {/* Footer */}
                <div className="text-center pb-6 border-t border-gray-100 pt-6 animate-[fadeIn_0.5s_0.6s_both]">
                     <p className="text-[9px] text-gray-400">
                        전남 순천시 충효로 15 | 사업자번호: 671-14-02393<br/>
                        © 2025 E.UM LOG. All Rights Reserved.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default InstaLinks;
