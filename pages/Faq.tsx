import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, MessageCircle } from 'lucide-react';
import { PageHeader } from '../components/Shared';
import Footer from '../components/Footer';
import { FAQItem } from '../types';

const FaqPage = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const faqData: FAQItem[] = [
        { q: "지인 차단이 진짜 되나요?", a: "지인 이름 등록 후 프로필 공개 전 초성·나이·지역을 먼저 확인합니다. 아는 사람이 나올 수 없는 구조입니다." },
        { q: "아무나 가입 가능한가요?", a: "아닙니다. 외모·스타일·상담 분위기까지 보고 선정합니다. 선정률 50~60%." },
        { q: "소개는 얼마나 자주 오나요?", a: "5~7일 간격으로 1명씩, 3개월 최소 12명 이상 보장됩니다." },
        { q: "소개팅은 어디서 하나요?", a: "여성 거주지 카페에서 진행됩니다. 매니저가 직접 조율합니다." },
        { q: "사진이 유출될까 걱정돼요.", a: "캡처 시 운영자에게 자동 알림이 전송되고 즉시 영구 퇴출됩니다." },
        { q: "매칭됐는데 다음 주에도 프로필이 오나요?", a: "실제 커플이 되기 전까지는 계속 제공됩니다." },
        { q: "비용 구조가 헷갈려요.", a: "멤버십비(3개월 소개 비용)와 성사비(만남 확정 시에만 발생) 두 가지입니다. 소개만 받고 만남이 없으면 추가 비용 없습니다." },
        { q: "애프터케어가 뭔가요?", a: "3개월 이후에도 나를 선택한 사람이 생기면 연결해 드립니다. 총 6개월." },
        { q: "프리미엄 성사 3회 보장이 뭔가요?", a: "3회 미만이면 성사될 때까지 서비스가 연장됩니다." }
    ];
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