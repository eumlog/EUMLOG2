import React from 'react';
import { Headset, MessageCircle, ExternalLink, Instagram } from 'lucide-react';
import { PageHeader } from '../components/Shared';
import Footer from '../components/Footer';

const ContactPage = () => (
    <div className="bg-eum-bg min-h-screen">
        <PageHeader title="만남을 시작하세요" subtitle="Contact Us" />
        <div className="py-16 md:py-24 px-0 max-w-2xl w-[82%] md:w-full mx-auto">
            <div className="text-left md:text-center mb-12 md:mb-16">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-eum-dark text-white rounded-xl md:rounded-2xl mb-5 md:mb-6 shadow-lg"><Headset className="w-6 h-6 md:w-7 md:h-7" /></div>
                <h3 className="text-2xl md:text-3xl font-bold text-eum-dark mb-3">고객센터 안내</h3>
                <p className="text-gray-500 leading-relaxed keep-all font-medium text-sm md:text-lg">가장 편하신 방법으로 말을 걸어주세요.<br className="hidden md:block"/>매니저가 확인 후 상세히 안내해 드립니다.</p>
            </div>
            <div className="space-y-4 md:space-y-5">
                <a href="https://pf.kakao.com/_Cxfxcxon" target="_blank" rel="noopener noreferrer" className="group block bg-white p-6 md:p-8 rounded-2xl md:rounded-[2rem] shadow-sm border border-white hover:border-yellow-400/30 transition-all duration-500">
                    <div className="flex items-center justify-between"><div className="flex items-center gap-4 md:gap-5"><div className="w-12 h-12 md:w-16 md:h-16 bg-[#FEE500] rounded-xl md:rounded-2xl flex items-center justify-center text-eum-dark shadow-sm group-hover:scale-105 transition-transform"><MessageCircle className="w-6 h-6 md:w-8 md:h-8 fill-eum-dark" /></div><div><span className="block text-[9px] md:text-xs font-black text-gray-400 mb-0.5 uppercase tracking-widest">KakaoTalk Channel</span><span className="block text-lg md:text-2xl font-black text-eum-dark">이음로그 상담톡</span></div></div><div className="text-gray-300 group-hover:text-yellow-500 transition-colors"><ExternalLink className="w-4 h-4 md:w-5 md:h-5" /></div></div>
                </a>
                <a href="https://instagram.com/e.um_log" target="_blank" rel="noopener noreferrer" className="group block bg-white p-6 md:p-8 rounded-2xl md:rounded-[2rem] shadow-sm border border-white hover:border-pink-400/30 transition-all duration-500">
                    <div className="flex items-center justify-between"><div className="flex items-center gap-4 md:gap-5"><div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform"><Instagram className="w-6 h-6 md:w-8 md:h-8" /></div><div><span className="block text-[9px] md:text-xs font-black text-gray-400 mb-0.5 uppercase tracking-widest">Instagram</span><span className="block text-lg md:text-2xl font-black text-eum-dark">@e.um_log</span></div></div><div className="text-gray-300 group-hover:text-pink-500 transition-colors"><ExternalLink className="w-4 h-4 md:w-5 md:h-5" /></div></div>
                </a>
            </div>
        </div>
        <div className="bg-[#0f0f0f] text-white"><Footer /></div>
    </div>
);

export default ContactPage;