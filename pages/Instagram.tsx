import React from 'react';
import { Instagram, Lock } from 'lucide-react';
import { PageHeader } from '../components/Shared';
import Footer from '../components/Footer';

const InstagramRegionsPage = () => (
    <div className="bg-eum-bg min-h-screen">
        <PageHeader title="인스타그램" subtitle="Our Community" />
        <section className="py-24 px-0 bg-eum-bg">
            <div className="max-w-[900px] w-[82%] md:w-full mx-auto">
                <div className="text-center mb-16"><h2 className="text-2xl md:text-3xl font-bold text-eum-dark mb-4">지역을 선택해주세요</h2><p className="text-gray-600 text-base md:text-lg font-medium leading-relaxed keep-all">각 지역별 소식과 매칭 후기를 확인하실 수 있습니다.</p></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[{ id: 'gj', name: '광주 · 전남', status: 'active', desc: '공식 인스타그램으로 연결됩니다.', link: 'https://www.instagram.com/e.um_log/' }, { id: 'dg', name: '대구 · 경북', status: 'preparing', desc: '채널 준비 중입니다.' }, { id: 'bs', name: '부산 · 경남', status: 'preparing', desc: '채널 준비 중입니다.' }, { id: 'dj', name: '대전 · 충청', status: 'preparing', desc: '채널 준비 중입니다.' }].map((region) => (
                        <a key={region.id} href={region.status === 'active' ? region.link : undefined} target={region.status === 'active' ? "_blank" : undefined} className={`relative group p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between min-h-[180px] ${region.status === 'active' ? 'bg-white border-eum-dark hover:shadow-xl hover:-translate-y-1 cursor-pointer' : 'bg-gray-100 border-transparent cursor-not-allowed opacity-70'}`}>
                            <div className="flex justify-between items-start mb-4"><div className={`p-3 rounded-full ${region.status === 'active' ? 'bg-gradient-to-tr from-[#f09433] to-[#bc1888] text-white' : 'bg-gray-200 text-gray-400'}`}><Instagram className="w-5 h-5" /></div>{region.status === 'active' ? <div className="bg-eum-accent/10 text-eum-accent px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Active</div> : <div className="bg-gray-200 text-gray-500 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1"><Lock className="w-3 h-3" /> Soon</div>}</div>
                            <div><h3 className={`text-xl font-bold mb-2 ${region.status === 'active' ? 'text-eum-dark' : 'text-gray-400'}`}>{region.name}</h3><p className={`text-xs font-medium ${region.status === 'active' ? 'text-eum-accent' : 'text-gray-400'}`}>{region.desc}</p></div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
        <div className="bg-[#0f0f0f] text-white"><Footer /></div>
    </div>
);

export default InstagramRegionsPage;