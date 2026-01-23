import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, MessageCircle } from 'lucide-react';
import { PageHeader } from '../components/Shared';
import Footer from '../components/Footer';
import { FAQItem } from '../types';

const FaqPage = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const faqData: FAQItem[] = [{ q: "소개는 얼마나 자주 오나요?", a: "보통 5~7일 간격으로 1명을 기본으로 제안합니다." }, { q: "3개월 동안 정말 계속 소개해주나요?", a: "네. 구독 기간 동안 매칭은 계속 진행됩니다." }, { q: "상대도 저를 선택한 건가요?", a: "아닙니다. 이음로그는 상호 수락 구조입니다." }, { q: "매칭이 아예 안 될 수도 있나요?", a: "가능성은 있습니다. 조건이 매우 제한적이거나, 사진·프로필 경쟁력이 낮은 경우 매칭까지 시간이 오래 걸릴 수 있습니다." }, { q: "지인이 나올 가능성은 정말 없나요?", a: "프로필 제공 전, 상대방의 ‘초성/나이/지역’을 통해 지인 여부를 미리 확인하여 지인을 사전에 차단합니다." }];
    return (
        <div className="bg-eum-bg min-h-screen">
            <PageHeader title="무엇이든 물어보세요" subtitle="F.A.Q" />
            <div className="py-12 md:py-20">
                <section id="faq" className="py-16 md:py-32 px-0 bg-eum-bg">
                    <div className="max-w-[700px] w-[82%] md:w-full mx-auto">
                        <div className="text-left md:text-center mb-10 md:mb-16">
                            <h2 className="font-sans text-xl md:text-3xl font-bold tracking-tight text-eum-dark">자주 묻는 질문</h2>
                        </div>
                        <div className="space-y-3">
                            {faqData.map((item, index) => (
                                <div key={index} className="border-b border-gray-200 pb-3">
                                    <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex justify-between items-center py-3.5 text-left group">
                                        <span className={`text-[14px] md:text-lg font-bold transition-colors ${openIndex === index ? 'text-eum-dark' : 'text-gray-500 group-hover:text-eum-dark'}`}>Q. {item.q}</span>
                                        <div className="text-gray-400">{openIndex === index ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}</div>
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}><p className="pb-5 text-gray-600 font-medium leading-relaxed keep-all text-[13px] md:text-base whitespace-pre-line">{item.a}</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <div className="max-w-[600px] w-[82%] md:w-full mx-auto px-0 mt-12 md:mt-16 text-center"><div className="bg-white p-7 md:p-8 rounded-2xl shadow-sm border border-gray-100"><h3 className="text-base md:text-lg font-bold text-eum-dark mb-2">찾으시는 질문이 없나요?</h3><p className="text-gray-400 text-[11px] md:text-sm mb-6 font-medium">담당 매니저에게 직접 문의하시면 빠르게 답변해 드립니다.</p><Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-2.5 md:px-8 md:py-3 bg-eum-dark text-white font-bold rounded-full hover:bg-black transition-colors text-xs md:text-sm"><MessageCircle className="w-4 h-4" /> 1:1 상담 문의하기</Link></div></div>
            </div>
            <div className="bg-[#0f0f0f] text-white"><Footer /></div>
        </div>
    );
};

export default FaqPage;