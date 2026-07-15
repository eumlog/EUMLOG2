
import React from 'react';
import { MapPin, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/Shared';
import Footer from '../components/Footer';

const ApplyPage = () => (
    <div className="bg-eum-bg min-h-screen">
        <PageHeader title="매칭 신청하기" subtitle="Apply for Match" />
        <section className="py-16 md:py-24 px-0 bg-eum-bg">
            <div className="max-w-[900px] w-[82%] md:w-full mx-auto">
                <div className="text-left md:text-center mb-10 md:mb-16">
                    <h2 className="text-xl md:text-3xl font-bold text-eum-dark mb-3">어디에 거주하시나요?</h2>
                    <p className="text-gray-600 text-sm md:text-lg font-medium leading-relaxed">이음로그는 수도권이 아닌, <br/><span className="text-eum-accent font-bold">지방 거점</span>을 중심으로 운영됩니다.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {/* Active Region: Gwangju/Jeonnam -> Links directly to naver form */}
                    <a href="https://m.site.naver.com/1Pznd" target="_blank" rel="noopener noreferrer" className="relative group p-6 md:p-8 rounded-2xl md:rounded-3xl border transition-all duration-300 flex flex-col justify-between min-h-[140px] md:min-h-[180px] bg-white border-eum-dark hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                        <div className="flex justify-between items-start mb-3 md:mb-4">
                            <div className="p-2.5 md:p-3 rounded-full bg-eum-dark text-white"><MapPin className="w-4 h-4 md:w-5 md:h-5" /></div>
                            <div className="bg-eum-accent/10 text-eum-accent px-2.5 py-1 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-wider">Open</div>
                        </div>
                        <div>
                            <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-eum-dark">광주 · 전남</h3>
                            <p className="text-[11px] md:text-xs font-medium text-eum-accent">지금 바로 신청 가능합니다.</p>
                        </div>
                    </a>

                    {/* Inactive Regions */}
                    {[{ id: 'dg', name: '대구 · 경북' }, { id: 'bs', name: '부산 · 경남' }, { id: 'dj', name: '대전 · 충청' }].map((region) => (
                        <div key={region.id} className="relative group p-6 md:p-8 rounded-2xl md:rounded-3xl border transition-all duration-300 flex flex-col justify-between min-h-[140px] md:min-h-[180px] bg-gray-100 border-transparent cursor-not-allowed opacity-70">
                            <div className="flex justify-between items-start mb-3 md:mb-4">
                                <div className="p-2.5 md:p-3 rounded-full bg-gray-200 text-gray-400"><MapPin className="w-4 h-4 md:w-5 md:h-5" /></div>
                                <div className="bg-gray-200 text-gray-500 px-2.5 py-1 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><Lock className="w-2.5 h-2.5 md:w-3 md:h-3" /> Coming Soon</div>
                            </div>
                            <div>
                                <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-gray-400">{region.name}</h3>
                                <p className="text-[11px] md:text-xs font-medium text-gray-400">오픈 준비 중입니다.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <div className="bg-[#0f0f0f] text-white"><Footer /></div>
    </div>
);

export default ApplyPage;
