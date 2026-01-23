
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { Menu, X, MessageSquare } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) gsap.to('.mobile-menu', { x: 0, opacity: 1, duration: 0.4, ease: 'power3.out' });
        else gsap.to('.mobile-menu', { x: '100%', opacity: 0, duration: 0.4, ease: 'power3.in' });
    }, [mobileMenuOpen]);

    const isActive = (path: string) => (path === '/' && location.pathname === '/') || (path !== '/' && location.pathname.startsWith(path));
    
    const handleLogoClick = (e: React.MouseEvent) => {
        if (location.pathname === '/') { 
            e.preventDefault(); 
            window.scrollTo({ top: 0, behavior: 'smooth' }); 
        } else {
            navigate('/');
        }
    };

    // 이미지와 동일한 메뉴 구성
    const navLinks = [
        { name: '소개', href: '/about' }, 
        { name: '멤버십 안내', href: '/pricing' }, 
        { name: '진행방식', href: '/service' }, 
        { name: '가입기준', href: '/criteria' }, 
        { name: '자주 묻는 질문', href: '/faq' }
    ];

    return (
        <>
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || mobileMenuOpen ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 text-black shadow-sm' : 'text-white'}`}>
                <div className="max-w-[1000px] w-[92%] mx-auto py-5 md:py-6 flex justify-between items-center">
                    <div className="z-50 relative">
                        <Link to="/" onClick={handleLogoClick} className="block group">
                            {/* 로고 텍스트 크기 축소 (md:text-2xl) 및 색상 유지 */}
                            <span className={`font-sans font-black text-2xl md:text-2xl tracking-tighter uppercase transition-colors duration-300 ${isScrolled ? 'text-eum-dark' : 'text-[#D4D4C8]'}`}>
                                E.UM LOG
                            </span>
                        </Link>
                    </div>
                    
                    {/* PC 중앙 메뉴 - 크기 13px -> 15px로 확대 및 간격 조정 */}
                    <div className="hidden lg:flex gap-10 text-[15px] font-bold tracking-tight">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.name} 
                                to={link.href} 
                                className={`relative py-2 transition-colors duration-300 hover:text-eum-accent ${isActive(link.href) ? 'text-eum-accent' : (isScrolled ? 'text-eum-dark' : 'text-[#D4D4C8]')}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* PC 우측 버튼 */}
                    <div className="hidden md:flex items-center gap-5">
                        <Link to="/contact" className={`text-[12px] font-bold flex items-center gap-1.5 transition-colors ${isScrolled ? 'text-eum-dark hover:text-eum-accent' : 'text-[#D4D4C8] hover:text-white'}`}>
                            <MessageSquare className="w-4 h-4" /> 상담문의
                        </Link>
                        <Link to="/apply" className={`px-5 py-2 rounded-full text-[12px] font-black transition-all duration-300 border ${isScrolled ? 'bg-eum-dark text-white border-eum-dark hover:bg-white hover:text-eum-dark' : 'bg-white/10 text-[#D4D4C8] border-[#D4D4C8]/30 hover:bg-[#D4D4C8] hover:text-eum-dark'}`}>
                            신청하기
                        </Link>
                    </div>

                    {/* 모바일 햄버거 버튼 */}
                    <div className="lg:hidden z-50 cursor-pointer p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className={`w-8 h-8 ${isScrolled ? 'text-black' : 'text-white'}`} />}
                    </div>
                </div>
            </nav>

            {/* 모바일 메뉴 오버레이 */}
            <div className="mobile-menu fixed inset-0 bg-white z-40 transform translate-x-full opacity-0 flex flex-col justify-center items-center gap-8 text-lg font-bold text-eum-dark lg:hidden px-8 text-center">
                {navLinks.map((link) => (
                    <Link key={link.name} to={link.href} onClick={() => setMobileMenuOpen(false)} className={`hover:text-eum-accent transition-colors ${isActive(link.href) ? 'text-eum-accent' : ''}`}>
                        {link.name}
                    </Link>
                ))}
                <div className="flex flex-col gap-4 mt-8 items-center w-full">
                    <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-sm font-bold flex items-center gap-2 text-gray-400">
                        <MessageSquare className="w-4 h-4" /> 1:1 상담하기
                    </Link>
                    <Link to="/apply" onClick={() => setMobileMenuOpen(false)} className="w-full max-w-xs py-4 bg-eum-dark text-white rounded-full text-sm font-black shadow-xl">
                        매칭 신청하기
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;
