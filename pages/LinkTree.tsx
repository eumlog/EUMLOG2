
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Share2, MessageCircle, Instagram, Home, FileText, ChevronRight, Info, ExternalLink, MapPin, Lock, CheckCircle, X } from 'lucide-react';
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

            <div className="max-w-[500px] w-full mx-auto px-6 pt-6 md:pt-10">
                
                {/* 1. Region Title Section */}
                <div className="text-left mb-10">
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
                            다른 지역 보기
                        </button>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-black text-eum-dark leading-tight mb-2">
                        광주 · 전남<br/>
                        <span className="text-eum-accent">1:1 매칭 신청</span>
                    </h1>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed">
                        가벼운 만남이 아닌, <br/>
                        지인 걱정 없이 진지한 인연을 찾는 곳.
                    </p>
                </div>

                {/* 2. Main Action: Apply (Naver Form) */}
                <a 
                    href="https://m.site.naver.com/1Pznd" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative block w-full bg-eum-dark text-white p-7 rounded-[2rem] shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 mb-6 overflow-hidden"
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

                {/* 3. Secondary Actions: Process & Kakao */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    {/* Process (Internal) */}
                    <Link to="/service" className="block bg-white p-6 rounded-[1.8rem] border border-gray-100 shadow-sm hover:border-eum-accent/30 hover:shadow-md transition-all duration-300 group">
                        <div className="w-8 h-8 bg-eum-bg rounded-full flex items-center justify-center mb-3 text-eum-dark group-hover:bg-eum-dark group-hover:text-white transition-colors">
                            <Info className="w-4 h-4" />
                        </div>
                        <h3 className="text-sm font-bold text-gray-800">진행 방식</h3>
                        <p className="text-[10px] text-gray-400 mt-1">상세 절차 확인</p>
                    </Link>

                    {/* Kakao (Internal) */}
                    <Link to="/contact" className="block bg-[#FEE500] p-6 rounded-[1.8rem] shadow-sm hover:shadow-md transition-all duration-300 group">
                        <div className="w-8 h-8 bg-white/40 rounded-full flex items-center justify-center mb-3 text-[#3c1e1e]">
                            <MessageCircle className="w-4 h-4 fill-current" />
                        </div>
                        <h3 className="text-sm font-bold text-[#3c1e1e]">카톡 문의</h3>
                        <p className="text-[10px] text-[#3c1e1e]/60 mt-1">1:1 채팅 상담</p>
                    </Link>
                </div>

                {/* 4. Other Links (List Style) */}
                <div className="space-y-3">
                    {/* 6:6 Instagram Link (Updated Text) */}
                    <a 
                        href="https://www.instagram.com/woo_ban/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-100 hover:border-pink-200 transition-colors group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-[2px]">
                            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                                <Instagram className="w-5 h-5 text-pink-600" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-sm font-bold text-gray-800 flex items-center gap-1">
                                6:6 미팅 : 우연히반하다 <ExternalLink className="w-3 h-3 text-gray-300" />
                            </h3>
                            <p className="text-[10px] text-gray-400 font-medium">여·순·광 6대6 로테이션 소개팅</p>
                        </div>
                    </a>

                    {/* Homepage Link */}
                    <Link 
                        to="/" 
                        className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-100 hover:border-eum-accent/30 transition-colors group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-eum-accent">
                            <Home className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-sm font-bold text-gray-800">이음로그 홈페이지</h3>
                            <p className="text-[10px] text-gray-400 font-medium">메인 화면으로 이동</p>
                        </div>
                    </Link>
                </div>

                {/* Footer Info */}
                <div className="mt-12 text-center border-t border-gray-200/50 pt-8">
                    <p className="text-lg font-black text-eum-dark/20 uppercase tracking-widest mb-2">E.UM LOG</p>
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
