
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Share2, MessageCircle, Instagram, Home, FileText, ChevronRight, ClipboardList, ExternalLink, MapPin, Lock, CheckCircle, X, Calendar, Users } from 'lucide-react';
import { PageHeader } from '../components/Shared';

const LinkTree = () => {
    const [isRegionModalOpen, setIsRegionModalOpen] = useState(false);

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

    const regions = [
        { id: 'gj', name: '광주 · 전남', status: 'active', desc: '지금 바로 신청 가능' },
        { id: 'dg', name: '대구 · 경북', status: 'coming', desc: '서비스 준비 중' },
        { id: 'bs', name: '부산 · 경남', status: 'coming', desc: '서비스 준비 중' },
        { id: 'dj', name: '대전 · 충청', status: 'coming', desc: '서비스 준비 중' },
    ];

    return (
        <div className="min-h-screen bg-eum-bg font-sans pb-20 relative">
            {/* Header / Navigation Bar for this page */}
            <div className="sticky top-0 z-40 bg-eum-bg/80 backdrop-blur-md px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-lg font-black tracking-tighter text-eum-dark">E.UM LOG</Link>
                <button onClick={handleShare} className="p-2 bg-white rounded-full shadow-sm text-gray-600 hover:text-eum-dark transition-colors">
                    <Share2 className="w-4 h-4" />
                </button>
            </div>

            <div className="max-w-[440px] w-full mx-auto px-8 pt-8 md:pt-12">
                
                {/* 1. Region Title Section */}
                <div className="text-left mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-eum-dark text-white rounded-full text-[10px] font-bold tracking-widest uppercase">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                            Matching Active
                        </div>
                        {/* Region Selector Trigger */}
                        <button 
                            onClick={() => setIsRegionModalOpen(true)}
                            className="flex items-center gap-1.5 px-3 py-1 bg-white border border-gray-200 rounded-full text-[10px] font-bold text-gray-500 hover:border-eum-accent hover:text-eum-accent transition-colors"
                        >
                            <MapPin className="w-3 h-3" />
                            지역 선택
                        </button>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-black text-eum-dark leading-snug mb-3">
                        광주 · 전남<br/>
                        <span className="text-eum-accent text-xl md:text-2xl">프리미엄 1:1 소개팅</span>
                    </h1>
                    <p className="text-sm text-gray-600 font-medium leading-relaxed">
                        "아무나 만나기엔 시간이 아깝잖아요."<br/>
                        <Link to="/blocking-system" className="text-eum-dark font-bold underline decoration-eum-accent/30 decoration-2 underline-offset-2 hover:text-eum-accent transition-colors">지인 차단 100%</Link>, 검증된 분과의 진지한 만남.
                    </p>
                </div>

                {/* 2. Main Action: Apply (Naver Form) */}
                <a 
                    href="https://m.site.naver.com/1Pznd" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative block w-full bg-eum-dark text-white p-6 rounded-[1.8rem] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 mb-5 overflow-hidden"
                >
                    <div className="relative z-10 flex justify-between items-start">
                        <div>
                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-4 text-white">
                                <FileText className="w-5 h-5" />
                            </div>
                            <h2 className="text-xl font-bold mb-1">소개팅 신청서 작성</h2>
                            <p className="text-xs text-gray-400 font-medium">네이버폼으로 1분 만에 신청</p>
                        </div>
                        <div className="bg-white text-eum-dark rounded-full p-2 group-hover:bg-eum-accent group-hover:text-white transition-colors">
                            <ChevronRight className="w-5 h-5" />
                        </div>
                    </div>
                    {/* Decorative Gradient */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                </a>

                {/* 3. Secondary Actions: Process & Weekly List */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                    {/* Process (Internal) - Visually Enhanced */}
                    <Link to="/service" className="block bg-white p-5 rounded-[1.5rem] border-2 border-eum-accent/20 hover:border-eum-accent shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden">
                         {/* Decorative shape */}
                        <div className="absolute top-0 right-0 bg-eum-accent/5 w-16 h-16 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150"></div>
                        
                        <div className="w-10 h-10 bg-eum-bg rounded-2xl flex items-center justify-center mb-3 text-eum-accent group-hover:bg-eum-accent group-hover:text-white transition-colors relative z-10">
                            <ClipboardList className="w-5 h-5" />
                        </div>
                        <h3 className="text-sm font-bold text-gray-800 relative z-10">진행 방식</h3>
                        <p className="text-[10px] text-gray-500 mt-1 font-medium relative z-10">어떻게 진행되나요?</p>
                    </Link>

                    {/* Weekly List (External Link) - Opens in SAME window */}
                    <a 
                        href="https://m.site.naver.com/20ZdO" 
                        className="block bg-white p-5 rounded-[1.5rem] border-2 border-eum-accent/20 hover:border-eum-accent shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 bg-eum-accent/5 w-16 h-16 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150"></div>
                        
                        {/* NEW Badge - Pink Outline Style */}
                        <div className="absolute top-4 right-4 bg-white border border-pink-400 text-pink-500 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm z-20">
                            NEW
                        </div>

                        <div className="w-10 h-10 bg-eum-bg rounded-2xl flex items-center justify-center mb-3 text-eum-accent group-hover:bg-eum-accent group-hover:text-white transition-colors relative z-10">
                            <Users className="w-5 h-5" />
                        </div>
                        <h3 className="text-sm font-bold text-gray-800 relative z-10 leading-tight">이번주 참가자<br/>명단</h3>
                        <p className="text-[10px] text-gray-500 mt-1 font-medium relative z-10">실제 참여자 현황</p>
                    </a>
                </div>

                {/* 4. Instagram Link (List Style) */}
                <div className="mb-4">
                    <a 
                        href="https://www.instagram.com/woo_ban/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 hover:border-pink-200 transition-colors group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-[2px]">
                            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                                <Instagram className="w-5 h-5 text-pink-600" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-sm font-bold text-gray-800 flex items-center gap-1">
                                6:6 소개팅 : 우연히반하다 <ExternalLink className="w-3 h-3 text-gray-300" />
                            </h3>
                            <p className="text-[10px] text-gray-400 font-medium">여·순·광 로테이션 소개팅</p>
                        </div>
                    </a>
                </div>

                {/* 5. Homepage Link - Centered & Larger Box */}
                <Link 
                    to="/" 
                    className="flex flex-col items-center justify-center w-full bg-white p-6 rounded-[2rem] border border-gray-100 hover:border-eum-dark hover:shadow-lg transition-all duration-300 group mb-12"
                >
                    <div className="flex items-center gap-2 mb-2">
                        <Home className="w-5 h-5 text-eum-accent group-hover:text-eum-dark transition-colors" />
                        <h3 className="text-lg font-black text-gray-800 group-hover:text-eum-dark transition-colors">이음로그 홈페이지</h3>
                    </div>
                    <p className="text-xs text-gray-400 font-medium group-hover:text-gray-600 transition-colors">
                        공식 웹사이트 바로가기
                    </p>
                </Link>

                {/* 6. Bottom Branding */}
                <div className="text-center">
                    <p className="text-sm font-bold text-gray-500 mb-3">수도권이 아닌 지역기반 1:1 소개팅</p>
                    <h2 className="text-3xl font-black text-eum-dark/30 tracking-[0.2em] uppercase mb-8">E.UM LOG</h2>
                </div>

                {/* 7. Footer Links */}
                <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-xs font-bold text-gray-400">
                    <Link to="/instagram" className="hover:text-eum-dark transition-colors">인스타그램</Link>
                    <Link to="/contact" className="hover:text-eum-dark transition-colors">카카오톡 문의</Link>
                    <Link to="/faq" className="hover:text-eum-dark transition-colors">자주 묻는 질문</Link>
                </div>

                {/* Footer Info */}
                <div className="text-center border-t border-gray-200/50 pt-8">
                    <p className="text-[10px] text-gray-400">
                        전남 순천시 충효로 15 | 사업자번호: 671-14-02393<br/>
                        © 2025 E.UM LOG. All Rights Reserved.
                    </p>
                </div>
            </div>

            {/* Region Selection Modal */}
            {isRegionModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-6">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsRegionModalOpen(false)}></div>
                    <div className="relative bg-white w-full max-w-[450px] rounded-t-[2rem] md:rounded-[2.5rem] p-8 shadow-2xl animate-[slideUp_0.3s_ease-out] md:animate-[fadeIn_0.3s_ease-out]">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h3 className="text-xl font-black text-eum-dark">지역 선택</h3>
                                <p className="text-xs text-gray-500 font-medium mt-1">이음로그는 전국 거점으로 확장 중입니다.</p>
                            </div>
                            <button onClick={() => setIsRegionModalOpen(false)} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                                <X className="w-5 h-5 text-gray-500" />
                            </button>
                        </div>
                        
                        <div className="space-y-3 max-h-[60vh] overflow-y-auto">
                            {regions.map((region) => (
                                <div 
                                    key={region.id}
                                    className={`flex items-center justify-between p-5 rounded-2xl border transition-all ${
                                        region.status === 'active' 
                                        ? 'bg-eum-dark text-white border-eum-dark' 
                                        : 'bg-gray-50 text-gray-400 border-gray-100'
                                    }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${region.status === 'active' ? 'bg-white/20' : 'bg-white border border-gray-200'}`}>
                                            <MapPin className={`w-5 h-5 ${region.status === 'active' ? 'text-white' : 'text-gray-300'}`} />
                                        </div>
                                        <div>
                                            <h4 className={`font-bold text-base ${region.status === 'active' ? 'text-white' : 'text-gray-800'}`}>{region.name}</h4>
                                            <p className={`text-[10px] ${region.status === 'active' ? 'text-gray-300' : 'text-gray-400'}`}>{region.desc}</p>
                                        </div>
                                    </div>
                                    <div>
                                        {region.status === 'active' ? (
                                            <CheckCircle className="w-5 h-5 text-eum-accent" />
                                        ) : (
                                            <div className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-lg">
                                                <Lock className="w-3 h-3 text-gray-500" />
                                                <span className="text-[9px] font-bold text-gray-500 uppercase">Soon</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                            <p className="text-[10px] text-gray-400 font-medium">
                                * 오픈 알림을 원하시면 인스타그램(@e.um_log)을 팔로우해주세요.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LinkTree;
