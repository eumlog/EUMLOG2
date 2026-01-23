
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { CreditCard, ClipboardList, PenLine, UserCheck, ChevronLeft, ChevronRight } from 'lucide-react';

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const barRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const safetyTimeout = setTimeout(() => {
            onComplete();
        }, 3500);

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    clearTimeout(safetyTimeout);
                    onComplete();
                }
            });
            
            if (containerRef.current) {
                gsap.set(containerRef.current, { opacity: 1 });
                tl.to(barRef.current, { width: '100%', duration: 1.2, ease: 'power2.inOut' })
                  .to(textRef.current, { y: -20, opacity: 0, duration: 0.4 })
                  .to(containerRef.current, { yPercent: -100, duration: 0.6, ease: 'power4.inOut' }, "-=0.1");
            }
        });

        return () => {
            clearTimeout(safetyTimeout);
            ctx.revert();
        };
    }, [onComplete]);

    return (
        <div ref={containerRef} className="fixed inset-0 z-[9999] bg-[#1a1a1a] flex flex-col items-center justify-center text-white">
            <div ref={textRef} className="font-sans font-bold text-2xl tracking-[0.2em] mb-8">E.UM LOG</div>
            <div className="w-64 h-[2px] bg-white/20 relative overflow-hidden">
                <div ref={barRef} className="absolute left-0 top-0 h-full w-0 bg-white"></div>
            </div>
        </div>
    );
};

export const PageHeader = ({ title, subtitle }: { title: string; subtitle: string }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.header-reveal', { 
                y: 30, 
                opacity: 0, 
                duration: 0.8, 
                stagger: 0.15, 
                ease: 'power3.out' 
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);
    return (
        <div ref={containerRef} className="pt-36 md:pt-48 pb-20 md:pb-24 px-0 bg-eum-dark text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[60vh] h-[60vh] bg-white/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
            <div className="max-w-[1000px] w-[90%] mx-auto relative z-10">
                <div className="header-reveal font-eng text-[9px] md:text-xs font-bold tracking-[0.3em] text-eum-accent uppercase mb-6">{subtitle}</div>
                <h1 className="header-reveal font-sans text-3xl md:text-5xl font-black tracking-tight leading-tight text-left">{title}</h1>
            </div>
        </div>
    );
};

export const FloatingMenu = () => {
    const [isOpen, setIsOpen] = useState(true);

    const items = [
        { name: '멤버십 안내', icon: CreditCard, href: '/pricing' },
        { name: '진행방식', icon: ClipboardList, href: '/service' },
        { name: '가입기준', icon: UserCheck, href: '/criteria' },
        { name: '신청하기', icon: PenLine, href: '/apply' },
    ];

    return (
        <div 
            className={`fixed right-0 top-1/2 transform -translate-y-1/2 z-[100] flex items-center transition-transform duration-500 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-[48px] md:translate-x-[58px]'}`}
        >
            {/* Toggle Button (Side tab) */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center w-[12px] h-[32px] md:w-[15px] md:h-[40px] bg-[#7d7d7d]/70 backdrop-blur-md text-white/50 border border-white/10 rounded-l-md hover:text-white transition-all shadow-xl group"
                aria-label={isOpen ? "메뉴 숨기기" : "메뉴 보기"}
            >
                {isOpen ? <ChevronRight className="w-2 md:w-3 h-2 md:h-3 group-hover:scale-125 transition-transform" /> : <ChevronLeft className="w-2 md:w-3 h-2 md:h-3 group-hover:scale-125 transition-transform" />}
            </button>

            {/* Menu Items (More Compact Grey Bar with Larger Text & Rounded Corners on left) */}
            <div className="flex flex-col bg-[#7d7d7d]/70 backdrop-blur-md shadow-2xl border-l border-white/10 overflow-hidden rounded-l-[1.2rem] md:rounded-l-[1.8rem]">
                {items.map((item, idx) => (
                    <Link 
                        key={idx} 
                        to={item.href} 
                        className={`group flex flex-col items-center justify-center w-[48px] h-[58px] md:w-[58px] md:h-[70px] ${idx !== items.length - 1 ? 'border-b border-white/10' : ''} hover:bg-black/10 transition-all duration-300`}
                    >
                        <item.icon className="w-3.5 h-3.5 md:w-4.5 md:h-4.5 text-white/90 group-hover:text-white group-hover:scale-110 transition-all mb-1" />
                        <span className="text-[8.5px] md:text-[10.5px] font-black text-white group-hover:text-white transition-colors tracking-tighter text-center leading-tight whitespace-pre-wrap">
                            {item.name.includes(' ') ? item.name.split(' ').join('\n') : item.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
};
