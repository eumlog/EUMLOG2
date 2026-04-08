import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Share2, Home, FileText, ChevronRight, ClipboardList, ExternalLink, MapPin, Lock, CheckCircle, X, Users } from 'lucide-react';

const IMG_HERO = "https://wooban.co.kr/wp-content/uploads/2026/01/c444221dcc16c2149c5b0ad510f6c3a4-768x1023.jpg";
const IMG_BREAK = "https://wooban.co.kr/wp-content/uploads/2026/01/%EC%9D%B4%EC%9D%8C%EB%A1%9C%EA%B7%B8%EB%9E%80v2_%EB%B3%B5%EC%82%AC%EB%B3%B8-_1_-002-819x1024.png";

const LinkTree = () => {
    const [isRegionModalOpen, setIsRegionModalOpen] = useState(false);

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: '이음로그 | 광주·전남 1:1 프리미엄 소개팅',
                url: window.location.href,
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('주소가 복사되었습니다.');
        }
    };

    const regions = [
        { id: 'gj', name: '광주 · 전남', status: 'active', desc: '지금 바로 신청 가능' },
        { id: 'dg', name: '대구 · 경북', status: 'coming', desc: '서비스 준비 중' },
        { id: 'bs', name: '부산 · 경남', status: 'coming', desc: '서비스 준비 중' },
        { id: 'dj', name: '대전 · 충청', status: 'coming', desc: '서비스 준비 중' },
    ];

    return (
        <div className="min-h-screen bg-white font-sans relative">

            {/* 상단 네비 */}
            <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md px-6 py-4 flex justify-between items-center border-b border-gray-100">
                <Link to="/" className="text-lg font-black tracking-tighter text-gray-900">E.UM LOG</Link>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setIsRegionModalOpen(true)}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-full text-[10px] font-bold text-gray-500 hover:bg-gray-200 transition-colors"
                    >
                        <MapPin className="w-3 h-3" />
                        지역 선택
                    </button>
                    <button onClick={handleShare} className="p-2 bg-gray-100 rounded-full text-gray-500 hover:bg-gray-200 transition-colors">
                        <Share2 className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* ── 1. HERO 이미지 ── */}
            <div className="relative w-full h-[540px] overflow-hidden">
                <img
                    src={IMG_HERO}
                    alt="이음로그"
                    className="w-full h-full object-cover object-[center_15%]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/35 to-black/80" />
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-8">
                    <div className="inline-flex items-center px-2.5 py-1 bg-[#f0c8b0]/20 border border-[#f0c8b0]/50 rounded-md text-[11px] font-bold text-[#f0c8b0] mb-3">
                        광주 · 여수 · 순천 · 광양 · 목포
                    </div>
                    <h1 className="text-[28px] font-black text-white leading-snug tracking-tight mb-2">
                        괜찮은 사람과의 만남,<br />
                        <span className="text-[#f0c8b0]">이음로그</span>에서 시작됩니다.
                    </h1>
                    <p className="text-[13px] text-white/55 leading-relaxed mb-5">
                        지인 차단 100% · 3개월 무제한 소개<br />
                        매니저가 직접 맞는 사람을 찾아드립니다
                    </p>
                </div>
            </div>

            {/* ── 2. 링크 버튼들 ── */}
            <div className="px-6 py-6 flex flex-col gap-3">
                <a
                    href="https://m.site.naver.com/22ZhB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-full bg-[#f4ece6] border border-transparent rounded-xl px-4 py-4 shadow-sm"
                >
                    <div className="w-8 h-8 rounded-lg bg-white/60 flex items-center justify-center text-[14px] flex-shrink-0">📖</div>
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-0.5">
                            <p className="text-[13px] font-bold text-gray-900">이음로그가 처음이라면</p>
                            <span className="bg-[#8a6b5d] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md tracking-wider">필독</span>
                        </div>
                        <p className="text-[11px] text-gray-500">신청 전 꼭 읽어보세요</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300" />
                </a>

                <a
                    href="https://m.site.naver.com/1Pznd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-full bg-[#f4ece6] border border-[#8a6b5d] rounded-xl px-4 py-4 shadow-sm transition-transform hover:-translate-y-0.5"
                >
                    <div className="w-8 h-8 rounded-lg bg-white/60 flex items-center justify-center text-[14px] flex-shrink-0">📝</div>
                    <div className="flex-1">
                        <p className="text-[13px] font-bold text-gray-900">소개팅 신청서 작성</p>
                        <p className="text-[11px] text-gray-500 font-medium">네이버폼 · 1분 완료</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                </a>

                <div className="flex justify-center my-4">
                    <div className="w-12 h-px bg-gray-200"></div>
                </div>

                <a
                    href="https://m.site.naver.com/20ZdO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-full bg-[#f4ece6] border border-transparent rounded-xl px-4 py-4 shadow-sm"
                >
                    <div className="w-8 h-8 rounded-lg bg-white/60 flex items-center justify-center text-[14px] flex-shrink-0">👥</div>
                    <div className="flex-1 flex items-center gap-2">
                        <p className="text-[13px] font-bold text-gray-900">이번주 참가자 명단</p>
                        <span className="border border-[#b8856a] text-[#b8856a] text-[9px] font-bold px-1.5 py-0.5 rounded-md tracking-wider bg-white/50">NEW</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300" />
                </a>

                <Link
                    to="/service"
                    className="flex items-center gap-3 w-full bg-[#f4ece6] border border-transparent rounded-xl px-4 py-4 shadow-sm"
                >
                    <div className="w-8 h-8 rounded-lg bg-white/60 flex items-center justify-center text-[14px] flex-shrink-0">📌</div>
                    <div className="flex-1">
                        <p className="text-[13px] font-bold text-gray-900">진행 방식</p>
                        <p className="text-[11px] text-gray-500">어떻게 진행되나요?</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300" />
                </Link>
            </div>

            {/* ── 8. 하단 브랜딩 ── */}
            <div className="px-6 pb-16 text-center">
                <p className="text-[11px] font-bold text-gray-400 mb-2">광주·전남 프리미엄 1:1 매칭 서비스</p>
                <h2 className="text-[28px] font-black text-gray-200 tracking-[0.2em] uppercase mb-8">E.UM LOG</h2>
                <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-[11px] font-bold text-gray-400">
                    <Link to="/" className="hover:text-gray-700 transition-colors">홈페이지</Link>
                    <Link to="/instagram" className="hover:text-gray-700 transition-colors">인스타그램</Link>
                    <Link to="/contact" className="hover:text-gray-700 transition-colors">카카오톡 문의</Link>
                    <Link to="/faq" className="hover:text-gray-700 transition-colors">자주 묻는 질문</Link>
                </div>
                <div className="border-t border-gray-100 pt-6">
                    <p className="text-[10px] text-gray-400">
                        전남 순천시 충효로 15 | 사업자번호: 671-14-02393<br />
                        © 2025 E.UM LOG. All Rights Reserved.
                    </p>
                </div>
            </div>

            {/* ── 지역 선택 모달 ── */}
            {isRegionModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-6">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsRegionModalOpen(false)} />
                    <div className="relative bg-white w-full max-w-[450px] rounded-t-[2rem] md:rounded-[2.5rem] p-8 shadow-2xl">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h3 className="text-xl font-black text-gray-900">지역 선택</h3>
                                <p className="text-xs text-gray-500 mt-1">이음로그는 전국 거점으로 확장 중입니다.</p>
                            </div>
                            <button onClick={() => setIsRegionModalOpen(false)} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                                <X className="w-5 h-5 text-gray-500" />
                            </button>
                        </div>
                        <div className="space-y-3">
                            {regions.map((region) => (
                                <div
                                    key={region.id}
                                    className={`flex items-center justify-between p-5 rounded-2xl border transition-all ${
                                        region.status === 'active'
                                            ? 'bg-gray-900 text-white border-gray-900'
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
                                    {region.status === 'active' ? (
                                        <CheckCircle className="w-5 h-5 text-[#b8856a]" />
                                    ) : (
                                        <div className="flex items-center gap-1 bg-gray-200 px-2 py-1 rounded-lg">
                                            <Lock className="w-3 h-3 text-gray-500" />
                                            <span className="text-[9px] font-bold text-gray-500 uppercase">Soon</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                            <p className="text-[10px] text-gray-400">
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