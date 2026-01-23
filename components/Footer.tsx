
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '../lib/assets';

const Footer = () => (
    <div id="contact" className="relative w-full flex flex-col justify-center items-center footer-content py-20 md:py-32 px-0 bg-[#0f0f0f] text-white">
        <div className="relative z-10 text-center w-[92%] mx-auto max-w-6xl">
            <div className="font-eng text-[10px] md:text-lg font-bold tracking-[0.2em] mb-4 md:mb-6 mt-8 text-gray-500 uppercase">만남을 시작하세요</div>
            <Link to="/apply" className="group relative inline-block">
                <span className="block font-sans text-3xl md:text-7xl font-black leading-none text-white group-hover:text-gray-400 transition-colors tracking-tighter">매칭 신청하기</span>
                <span className="block text-xs md:text-lg font-medium text-gray-500 mt-4 md:mt-6 group-hover:text-white transition-colors flex items-center justify-center gap-1">지금 바로 프로필 등록하기 <ArrowRight className="w-3 h-3 md:w-4 md:h-4" /></span>
            </Link>
            <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-8 gap-y-4 mt-16 md:mt-24 text-[10px] md:text-sm font-semibold tracking-wider text-gray-400">
                <Link to="/instagram" className="hover:text-white transition-colors">인스타그램</Link>
                <a href="https://pf.kakao.com/_Cxfxcxon" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">카카오톡 문의</a>
                <Link to="/faq" className="hover:text-white transition-colors">자주 묻는 질문</Link>
            </div>
            <div className="mt-12 md:mt-20 w-full border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[9px] md:text-xs text-gray-600 font-medium gap-6 md:gap-0">
                <div className="flex items-center gap-4">
                    <p>© 2025 E.UM LOG. All Rights Reserved.</p>
                    <Link to="/admin" className="opacity-10 hover:opacity-100 hover:text-white transition-all duration-300 ml-2 md:ml-4">Admin</Link>
                </div>
                <p className="text-center md:text-right leading-relaxed max-w-xs md:max-w-none">전남 순천시 충효로 15 | 사업자번호: 671-14-02393<br className="md:hidden" /> 대표자 : 임상현 | E-MAIL: mono5686@naver.com</p>
            </div>
        </div>
        <img src={IMAGES.footerTexture} className="absolute inset-0 w-full h-full object-cover opacity-[0.07] pointer-events-none grayscale" alt="Texture" />
    </div>
);

export default Footer;
