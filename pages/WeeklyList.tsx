
import React, { useEffect, useState } from 'react';
import { PageHeader } from '../components/Shared';
import Footer from '../components/Footer';
import { Calendar, Users, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WEEKLY_PARTICIPANTS } from '../constants';

// 가장 최근 수요일을 구하는 함수
const getRecentWednesday = () => {
    const now = new Date();
    const dayOfWeek = now.getDay();
    // 0: 일, 1: 월, 2: 화, 3: 수, 4: 목, 5: 금, 6: 토
    // 오늘이 수요일(3)이면 0일 전, 목요일(4)이면 1일 전... 화요일(2)이면 6일 전
    const daysSinceWednesday = (dayOfWeek + 7 - 3) % 7;
    const recentWednesday = new Date(now);
    recentWednesday.setDate(now.getDate() - daysSinceWednesday);
    return recentWednesday;
};

// 날짜를 YYYY-MM-DD 형식으로 포맷팅
const formatDate = (date: Date) => {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
};

// 수요일 날짜를 기반으로 "N월 N주차" 문자열을 반환하는 함수
const getAutoWeekTitle = (region: string) => {
    const date = getRecentWednesday();
    const month = date.getMonth() + 1;
    
    // 주차 계산 (해당 월의 몇 번째 주인지)
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const dayOfWeek = firstDayOfMonth.getDay(); // 0(일) ~ 6(토)
    const dateNum = date.getDate();
    
    const offsetDate = dateNum + dayOfWeek - 1;
    const weekNum = Math.floor(offsetDate / 7) + 1;

    const regionName = region === 'gj' ? '광주' : '전남';
    return `${month}월 ${weekNum}주차 ${regionName} 선정자`;
};

const WeeklyList = () => {
    const [activeTab, setActiveTab] = useState<'gj' | 'jn'>('gj');
    const [fadeKey, setFadeKey] = useState(0);

    useEffect(() => {
        setFadeKey(prev => prev + 1);
    }, [activeTab]);

    const filteredLists = WEEKLY_PARTICIPANTS.filter(item => {
        if (activeTab === 'gj') {
            return item.region === 'gj' || !item.region;
        } else {
            return item.region === 'jn';
        }
    }).map(item => ({
        ...item,
        // 여기서 제목과 날짜를 매주 수요일 기준으로 자동 생성합니다.
        title: getAutoWeekTitle(item.region || 'gj'),
        date: formatDate(getRecentWednesday())
    }));

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
                                <p className="text-xs text-gray-300">업데이트 준비 중입니다.</p>
                            </div>
                        ) : (
                            <div className="space-y-8">
                                {filteredLists.map((item: any, index: number) => (
                                    <div key={index} className="bg-white rounded-[2rem] border border-gray-100 shadow-lg overflow-hidden">
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
                                        <div className="p-2 bg-gray-50">
                                            <div className="rounded-2xl overflow-hidden border border-gray-200">
                                                <img src={item.image} alt={item.title} className="w-full h-auto object-cover block" />
                                            </div>
                                        </div>
                                        <div className="px-6 py-4 bg-white text-center">
                                            <p className="text-[11px] text-gray-400 font-medium">* 개인정보 보호를 위해 상세 정보는 가림 처리되었습니다.</p>
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
                        <a href="https://naver.me/G4GlQVbi" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center px-12 py-5 md:px-16 md:py-6 bg-eum-dark text-white font-black rounded-full shadow-2xl overflow-hidden transition-all hover:bg-black active:scale-95">
                            <span className="relative z-10 flex items-center gap-3 text-base md:text-lg">
                                매칭 신청하기 <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-eum-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </a>
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
