
import React, { useEffect, useState } from 'react';
import { PageHeader } from '../components/Shared';
import Footer from '../components/Footer';
import { Calendar, Users, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface WeeklyItem {
    id: string;
    title: string;
    image: string;
    date: string;
    region?: 'gj' | 'jn'; // gj: Gwangju, jn: Jeonnam
}

const WeeklyList = () => {
    const [lists, setLists] = useState<WeeklyItem[]>([]);
    const [activeTab, setActiveTab] = useState<'gj' | 'jn'>('gj');
    const [fadeKey, setFadeKey] = useState(0);

    useEffect(() => {
        try {
            const stored = localStorage.getItem('EUM_WEEKLY_LISTS');
            if (stored) {
                const parsed = JSON.parse(stored);
                // 최신순 정렬
                parsed.sort((a: WeeklyItem, b: WeeklyItem) => Number(b.id) - Number(a.id));
                setLists(parsed);
            }
        } catch (e) {
            console.error("Failed to load weekly lists", e);
        }
    }, []);

    // 탭 변경 시 페이드 애니메이션 재실행을 위한 키 업데이트
    useEffect(() => {
        setFadeKey(prev => prev + 1);
    }, [activeTab]);

    const filteredLists = lists.filter(item => {
        // gj 탭: region이 'gj'이거나 region 정보가 없는(구 데이터) 경우
        if (activeTab === 'gj') {
            return item.region === 'gj' || !item.region;
        } 
        // jn 탭: region이 'jn'인 경우
        else {
            return item.region === 'jn';
        }
    });

    return (
        <div className="bg-eum-bg min-h-screen">
            <PageHeader title="이번주 참가자 명단" subtitle="Weekly Participants" />
            
            <section className="py-12 md:py-20 px-0">
                <div className="max-w-[700px] w-[90%] mx-auto">
                    
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-black text-eum-dark mb-4">
                            매주 업데이트되는<br/>
                            <span className="text-eum-accent">실제 참여자 현황</span>
                        </h2>
                        <p className="text-gray-500 font-medium text-sm md:text-base leading-relaxed keep-all">
                            이음로그는 매주 검증된 분들과 함께합니다.<br/>
                            투명하게 공개되는 참여자 현황을 확인해보세요.
                        </p>
                    </div>

                    {/* Region Tabs */}
                    <div className="flex p-1.5 bg-white rounded-2xl border border-gray-100 shadow-sm mb-10 max-w-sm mx-auto">
                        <button 
                            onClick={() => setActiveTab('gj')}
                            className={`flex-1 py-3 rounded-xl text-sm font-black transition-all duration-300 ${activeTab === 'gj' ? 'bg-eum-dark text-white shadow-md' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            광주 지역
                        </button>
                        <button 
                            onClick={() => setActiveTab('jn')}
                            className={`flex-1 py-3 rounded-xl text-sm font-black transition-all duration-300 ${activeTab === 'jn' ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            전남 (여순광)
                        </button>
                    </div>

                    <div key={fadeKey} className="animate-[fadeIn_0.5s_ease-out]">
                        {filteredLists.length === 0 ? (
                            <div className="text-center py-20 bg-white rounded-[2rem] border border-gray-100 shadow-sm">
                                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-gray-300">
                                    <Users className="w-8 h-8" />
                                </div>
                                <p className="text-gray-400 font-bold text-sm mb-1">
                                    {activeTab === 'gj' ? '광주 지역' : '전남 지역'} 등록된 명단이 없습니다.
                                </p>
                                <p className="text-xs text-gray-300">관리자 페이지에서 명단을 등록해주세요.</p>
                            </div>
                        ) : (
                            <div className="space-y-8">
                                {filteredLists.map((item) => (
                                    <div key={item.id} className="bg-white rounded-[2rem] border border-gray-100 shadow-lg overflow-hidden">
                                        {/* Card Header */}
                                        <div className="px-6 py-5 border-b border-gray-50 flex justify-between items-center bg-white">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-10 h-10 text-white rounded-xl flex items-center justify-center shadow-md ${item.region === 'jn' ? 'bg-indigo-600' : 'bg-eum-dark'}`}>
                                                    <Calendar className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-black text-eum-dark">{item.title}</h3>
                                                    <div className="flex items-center gap-2 mt-0.5">
                                                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded text-white ${item.region === 'jn' ? 'bg-indigo-500' : 'bg-eum-accent'}`}>
                                                            {item.region === 'jn' ? '전남(여순광)' : '광주'}
                                                        </span>
                                                        <p className="text-[10px] text-gray-400 font-medium">{item.date} 업데이트</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Image Area */}
                                        <div className="p-2 bg-gray-50">
                                            <div className="rounded-2xl overflow-hidden border border-gray-200">
                                                <img 
                                                    src={item.image} 
                                                    alt={item.title} 
                                                    className="w-full h-auto object-cover block"
                                                />
                                            </div>
                                        </div>
                                        
                                        <div className="px-6 py-4 bg-white text-center">
                                            <p className="text-[11px] text-gray-400 font-medium">
                                                * 개인정보 보호를 위해 상세 정보는 가림 처리되었습니다.
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 text-center">
                        <h3 className="text-xl md:text-2xl font-black text-eum-dark mb-6 leading-tight">
                            이번주 명단의<br/>주인공이 되어보세요
                        </h3>
                        <Link to="/apply" className="group relative inline-flex items-center justify-center px-12 py-5 md:px-16 md:py-6 bg-eum-dark text-white font-black rounded-full shadow-2xl overflow-hidden transition-all hover:bg-black active:scale-95">
                            <span className="relative z-10 flex items-center gap-3 text-base md:text-lg">
                                매칭 신청하기 <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-eum-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </Link>
                    </div>

                </div>
            </section>

            <div className="bg-[#0f0f0f] text-white">
                <Footer />
            </div>
        </div>
    );
};

export default WeeklyList;
