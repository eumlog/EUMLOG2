import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Share2, Home, FileText, ChevronRight, ClipboardList, ExternalLink, MapPin, Lock, CheckCircle, X, Users } from 'lucide-react';

const IMG_HERO = "https://wooban.co.kr/wp-content/uploads/2026/01/c444221dcc16c2149c5b0ad510f6c3a4-768x1023.jpg";

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
        <div className="min-h-[100dvh] bg-gray-50 flex justify-center">
            <div className="w-full max-w-[480px] min-h-[100dvh] bg-white font-sans relative flex flex-col shadow-xl overflow-hidden">
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
            <div className="relative w-full h-[250px] overflow-hidden">
                <img
                    src={IMG_HERO}
                    alt="이음로그"
                    className="w-full h-full object-cover object-[center_35%]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/90" />
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-5">
                    <div className="inline-flex items-center px-2.5 py-1 bg-[#f0c8b0]/20 border border-[#f0c8b0]/50 rounded-md text-[13px] font-bold text-[#f0c8b0] mb-2">
                        광주 · 전남
                    </div>
                    <h1 className="text-[24px] font-black text-white leading-snug tracking-tight mb-1">
                        괜찮은 사람과의 만남,<br />
                        <span className="text-[#f0c8b0]">이음로그</span>에서 시작됩니다.
                    </h1>
                </div>
            </div>

            {/* ── 2. 링크 버튼들 ── */}
            <div className="px-6 pt-5 pb-3 flex flex-col gap-5">
                <a
                    href="https://m.site.naver.com/1Pznd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-full bg-[#f4ece6] border border-[#8a6b5d] rounded-xl px-4 py-2.5 shadow-sm transition-transform hover:-translate-y-0.5"
                >
                    <div className="w-8 h-8 rounded-lg bg-white/60 flex items-center justify-center text-[14px] flex-shrink-0">📝</div>
                    <div className="flex-1">
                        <p className="text-[13px] font-bold text-gray-900">소개팅 신청서 작성</p>
                        <p className="text-[11px] text-gray-500 font-medium">네이버폼 · 1분 완료</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                </a>

                <a
                    href="https://m.site.naver.com/22ZhB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-full bg-[#f4ece6] border border-transparent rounded-xl px-4 py-2.5 shadow-sm"
                >
                    <div className="w-8 h-8 rounded-lg bg-white/60 flex items-center justify-center text-[14px] flex-shrink-0">📖</div>
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-0.5">
                            <p className="text-[13px] font-bold text-gray-900">처음이라면</p>
                            <span className="bg-[#8a6b5d] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md tracking-wider">필독</span>
                        </div>
                        <p className="text-[11px] text-gray-500">신청 전 꼭 읽어보세요</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300" />
                </a>

                {/* Sub Menu: 2-Column Cards */}
                <div className="grid grid-cols-2 gap-3">
                    <Link to="/weekly" className="flex items-center gap-2.5 bg-white border border-gray-200 py-3 px-3.5 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:border-[#8a6b5d]/50 hover:shadow-md transition-all group">
                        <div className="bg-gray-50 p-1.5 rounded-lg group-hover:bg-[#f4ece6]/50 transition-colors">
                            <Users className="w-4 h-4 text-gray-400 group-hover:text-[#8a6b5d] transition-colors" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[12px] font-bold text-gray-800 leading-none">참가자 명단</span>
                            <span className="text-[9px] font-bold text-[#8a6b5d] tracking-wide leading-none">매주 화요일 업데이트</span>
                        </div>
                    </Link>

                    <a href="https://m.site.naver.com/2aTSK" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 bg-white border border-gray-200 py-3 px-3.5 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:border-[#8a6b5d]/50 hover:shadow-md transition-all group">
                        <div className="bg-gray-50 p-1.5 rounded-lg group-hover:bg-[#f4ece6]/50 transition-colors">
                            <ClipboardList className="w-4 h-4 text-gray-400 group-hover:text-[#8a6b5d] transition-colors" />
                        </div>
                        <div className="flex items-center h-full">
                            <span className="text-[12px] font-bold text-gray-800 leading-none">진행방식 안내</span>
                        </div>
                    </a>
                </div>
            </div>

            {/* ── 8. 하단 브랜딩 ── */}
            <div className="px-6 pb-12 pt-8 mt-auto text-center flex flex-col justify-end items-center">
                <div className="w-10 h-[1px] bg-gray-200 mb-6"></div>
                <div className="flex justify-center items-center divide-x divide-gray-300 text-[12px] font-bold text-gray-500">
                    <a href="https://m.site.naver.com/2aTSV" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition-colors px-4 pl-0">멤버십 가격</a>
                    <Link to="/contact" className="hover:text-gray-800 transition-colors px-4">카카오톡 문의</Link>
                    <Link to="/faq" className="hover:text-gray-800 transition-colors px-4 pr-0">자주 묻는 질문</Link>
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
        </div>
    );
};

export default LinkTree;
