
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = ({ theme = 'dark' }: { theme?: 'dark' | 'light' }) => {
    const location = useLocation();
    const isPricingPage = location.pathname.includes('/pricing');

    return (
        <div id="contact" className={`w-full flex flex-col justify-center items-center pb-20 pt-16 px-0 ${theme === 'dark' ? 'bg-[#0f0f0f] text-[#888888]' : 'bg-transparent text-[#3a332e]'}`}>
            <div className="flex items-center gap-4 text-[13px] md:text-[14px] font-semibold tracking-wide">
                <Link to="/instagram" className={`transition-colors ${theme === 'dark' ? 'hover:text-white' : 'hover:text-black opacity-80 hover:opacity-100'}`}>인스타그램</Link>
                <div className={`w-[1px] h-3 ${theme === 'dark' ? 'bg-current opacity-40' : 'bg-[#e2d8ce]'}`}></div>
                <Link to="/contact" className={`transition-colors ${theme === 'dark' ? 'hover:text-white' : 'hover:text-black opacity-80 hover:opacity-100'}`}>카카오톡 문의</Link>
                <div className={`w-[1px] h-3 ${theme === 'dark' ? 'bg-current opacity-40' : 'bg-[#e2d8ce]'}`}></div>
                <Link to="/faq" className={`transition-colors ${theme === 'dark' ? 'hover:text-white' : 'hover:text-black opacity-80 hover:opacity-100'}`}>자주 묻는 질문</Link>
            </div>
            
            {!isPricingPage && (
                <div className="mt-12 flex flex-col items-center justify-center">
                    <p className={`text-[12px] font-bold mb-3 tracking-widest ${theme === 'dark' ? 'text-[#a69b8d]' : 'text-[#a69b8d]'}`}>MAKE YOUR MOMENT</p>
                    <Link 
                        to="/links" 
                        className={`text-center text-[32px] md:text-[38px] font-black leading-[1.2] transition-all ${theme === 'dark' ? 'text-[#a3a3a3] hover:text-[#d4a04c]' : 'text-[#6b635b] hover:text-[#d4a04c]'}`}
                    >
                        신청하기
                    </Link>
                </div>
            )}

            <div className="mt-14 text-[11px] font-medium opacity-50 tracking-wider">
                © E.UM LOG. All Rights Reserved.
            </div>
        </div>
    );
};

export default Footer;
