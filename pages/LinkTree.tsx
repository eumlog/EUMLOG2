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
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[10px] text-white/70 mb-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#e8b49a] animate-pulse" />
                        MATCHING ACTIVE
                    </div>
                    <div className="inline-flex items-center px-2.5 py-1 bg-[#f0c8b0]/20 border border-[#f0c8b0]/50 rounded-md text-[11px] font-bold text-[#f0c8b0] mb-3 ml-2">
                        광주 · 여수 · 순천 · 광양
                    </div>
                    <h1 className="text-[28px] font-black text-white leading-snug tracking-tight mb-2">
                        괜찮은 사람과의 만남,<br />
                        <span className="text-[#f0c8b0]">이음로그</span>에서 시작됩니다.
                    </h1>
                    <p className="text-[13px] text-white/55 leading-relaxed mb-5">
                        지인 차단 100% · 3개월 무제한 소개<br />
                        매니저가 직접 맞는 사람을 찾아드립니다
                    </p>
                    <a
                        href="https://m.site.naver.com/1Pznd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full bg-white text-gray-900 font-bold text-[14px] py-4 rounded-xl"
                    >
                        소개팅 신청서 작성하기 →
                    </a>
                </div>
            </div>

            {/* ── 2. 서비스 특징 ── */}
            <div className="px-6 py-7 border-b border-gray-100">
                <p className="text-[10px] font-bold text-[#b8856a] tracking-widest mb-3">SERVICE</p>
                <div className="grid grid-cols-2 gap-2">
                    {[
                        { num: '100%', label: '지인 차단', sub: '초성·지역 사전 확인, 아는 사람 매칭 없음' },
                        { num: '3개월', label: '무제한 소개', sub: '주 1명씩, 횟수 제한 없이 계속' },
                        { num: '950+', label: '누적 신청자', sub: '매주 실제 커플 성사 중' },
                        { num: '승인제', label: '검증된 회원만', sub: '신청자 중 일부만 선정', accent: true },
                    ].map((item) => (
                        <div key={item.label} className="bg-[#faf7f5] rounded-xl p-4">
                            <div className={`text-[22px] font-black leading-none mb-1 ${item.accent ? 'text-[#b8856a] text-[16px]' : 'text-gray-900'}`}>
                                {item.num}
                            </div>
                            <div className="text-[12px] font-bold text-gray-900 mb-1">{item.label}</div>
                            <div className="text-[11px] text-gray-400 leading-snug">{item.sub}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── 3. 선정 기준 ── */}
            <div className="px-6 py-7 border-b border-gray-100">
                <div className="bg-[#181614] rounded-2xl p-5">
                    <p className="text-[15px] font-bold text-white mb-3">아무나 받지 않습니다</p>
                    <p className="text-[13px] text-white/45 leading-[1.9]">
                        기본적인 외모·스타일 관리가 되어 있는 분,<br />
                        진지한 만남을 준비하신 분을 선정합니다.<br />
                        신청자의 절반 정도만 통과하는 이유가 여기 있어요.<br /><br />
                        가벼운 설렘을 찾는 분이라면 솔직히 여기가 맞지 않을 수 있습니다.<br />
                        <span className="text-white/85 font-medium">괜찮은 사람과의 만남, 이음로그에서 시작해보세요.</span>
                    </p>
                </div>
            </div>

            {/* ── 4. 이미지 브레이크 ── */}
            <div className="relative w-full h-[220px] overflow-hidden">
                <img
                    src={IMG_BREAK}
                    alt=""
                    className="w-full h-full object-cover object-[center_30%]"
                    style={{ filter: 'brightness(0.72) contrast(1.02)' }}
                />
                <div className="absolute inset-0 bg-black/18 flex items-center justify-center px-6">
                    <p className="text-[22px] font-black text-white text-center leading-snug tracking-tight" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.4)' }}>
                        매주 새로운 인연이<br />
                        <span className="text-[#f0c8b0]">이음로그에서 시작됩니다</span>
                    </p>
                </div>
            </div>

            {/* ── 5. 진행 과정 ── */}
            <div className="px-6 py-7 border-b border-gray-100">
                <p className="text-[10px] font-bold text-[#b8856a] tracking-widest mb-4">PROCESS</p>
                <div className="flex flex-col">
                    {[
                        { n: '1', title: '신청서 작성', desc: '네이버폼으로 기본 정보 입력 (1분)' },
                        { n: '2', title: '상세 설문 + 1:1 카톡 상담', desc: '이상형 조건과 보장 카테고리 선택 후 결제' },
                        { n: '3', title: '지인 차단 시스템', desc: '초성·지역 정보로 아는 사람 여부 사전 확인' },
                        { n: '4', title: '매주 1명 프로필 제공', desc: '3개월간 조건에 맞는 분을 순차 소개' },
                        { n: '5', title: '쌍방 수락 → 소개팅 진행', desc: '매니저가 일정·장소 조율까지 함께합니다' },
                    ].map((step, i, arr) => (
                        <div key={step.n} className="flex gap-4 py-2">
                            <div className="flex flex-col items-center">
                                <div className="w-[26px] h-[26px] rounded-full bg-[#181614] text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0">
                                    {step.n}
                                </div>
                                {i < arr.length - 1 && <div className="w-px flex-1 bg-gray-200 my-1 min-h-[12px]" />}
                            </div>
                            <div className="pb-1">
                                <p className="text-[13px] font-bold text-gray-900 mb-0.5">{step.title}</p>
                                <p className="text-[12px] text-gray-400 leading-snug">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── 6. 블로그 카드 ── */}
            <div className="px-6 py-6 bg-[#faf7f5] border-b border-gray-100">
                <p className="text-[10px] font-bold text-[#b8856a] tracking-widest mb-3">READ BEFORE APPLY</p>
                <a
                    href="https://m.site.naver.com/22ZhB"
                    className="block bg-white border border-[#e8e0d8] rounded-xl p-5 relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-[3px] h-full bg-[#b8856a]" />
                    <p className="text-[16px] font-black text-gray-900 mb-2 leading-snug">신청 전에 꼭 읽어보세요</p>
                    <p className="text-[12px] text-gray-400 leading-relaxed mb-4">
                        950명이 넘는 신청자 데이터, 매주 성사되는 실제 커플,<br />
                        그리고 왜 이 서비스를 만들었는지까지 담았습니다.
                    </p>
                    <div className="flex items-center justify-between bg-[#181614] rounded-lg px-4 py-3">
                        <span className="text-[13px] font-bold text-white">이음로그 소개글 보러가기</span>
                        <span className="text-[#f0c8b0] text-[14px]">→</span>
                    </div>
                </a>
            </div>

            {/* ── 7. 링크 버튼들 ── */}
            <div className="px-6 py-6 flex flex-col gap-2">
                <a
                    href="https://m.site.naver.com/1Pznd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-full bg-[#faf7f5] rounded-xl px-4 py-4"
                >
                    <div className="w-8 h-8 rounded-lg bg-[#ede8e3] flex items-center justify-center text-[14px] flex-shrink-0">📋</div>
                    <div className="flex-1">
                        <p className="text-[13px] font-bold text-gray-900">소개팅 신청서 작성</p>
                        <p className="text-[11px] text-gray-400">네이버폼 · 1분 완료</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300" />
                </a>

                <Link
                    to="/service"
                    className="flex items-center gap-3 w-full bg-[#faf7f5] rounded-xl px-4 py-4"
                >
                    <div className="w-8 h-8 rounded-lg bg-[#ede8e3] flex items-center justify-center flex-shrink-0">
                        <ClipboardList className="w-4 h-4 text-gray-500" />
                    </div>
                    <div className="flex-1">
                        <p className="text-[13px] font-bold text-gray-900">진행 방식</p>
                        <p className="text-[11px] text-gray-400">어떻게 진행되나요?</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300" />
                </Link>

                <Link
                    to="/weekly"
                    className="flex items-center gap-3 w-full bg-[#faf7f5] rounded-xl px-4 py-4"
                >
                    <div className="w-8 h-8 rounded-lg bg-[#ede8e3] flex items-center justify-center text-[14px] flex-shrink-0">👥</div>
                    <div className="flex-1">
                        <p className="text-[13px] font-bold text-gray-900">이번주 참가자 명단</p>
                        <p className="text-[11px] text-gray-400">실제 참가자 현황</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300" />
                </Link>

                <Link
                    to="/"
                    className="flex items-center gap-3 w-full bg-[#181614] rounded-xl px-4 py-4"
                >
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Home className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                        <p className="text-[13px] font-bold text-white">이음로그 홈페이지</p>
                        <p className="text-[11px] text-white/40">공식 웹사이트</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-white/30" />
                </Link>
            </div>

            {/* ── 8. 하단 브랜딩 ── */}
            <div className="px-6 pb-16 text-center">
                <p className="text-[11px] font-bold text-gray-400 mb-2">광주·전남 프리미엄 1:1 매칭 서비스</p>
                <h2 className="text-[28px] font-black text-gray-200 tracking-[0.2em] uppercase mb-8">E.UM LOG</h2>
                <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-[11px] font-bold text-gray-400">
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