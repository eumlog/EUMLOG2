
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, BadgeCheck, Users, ArrowDown, Sparkles } from 'lucide-react';
import { PageHeader } from '../components/Shared';
import Footer from '../components/Footer';

const PricingPage = () => (
  <div className="bg-white min-h-screen">
    <PageHeader title="멤버십 안내" subtitle="Pricing Plan" />
    
    <section id="pricing" className="bg-white">
      <div className="py-16 md:py-32 px-0 max-w-[800px] w-[82%] md:w-full mx-auto">
        {/* 1. Header & Description */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="font-eng text-2xl md:text-4xl font-bold text-eum-accent mb-3 uppercase tracking-widest">
            Membership
          </h2>
          <h3 className="font-sans text-xl md:text-3xl font-bold text-gray-900 leading-tight">
            3개월 구독제 솔루션<br />
            <span className="text-[13px] font-bold text-eum-accent mt-3 inline-block px-3 py-1 bg-eum-accent/10 rounded-full">
              최소 12명 이상의 프로필 제공 보장
            </span>
          </h3>
          <p className="mt-6 text-gray-500 max-w-xl mx-auto text-[13px] md:text-base leading-relaxed keep-all font-medium">
            단순히 횟수만 채우는 만남이 아닙니다. 3개월 동안 매니저가 <br className="hidden md:block" />
            당신의 이상형에 가장 가까운 인연을 찾을 때까지 함께합니다.
          </p>
        </div>

        {/* 2. Conditions Section (Dark) */}
        <div className="max-w-[800px] mx-auto mb-16 md:mb-24">
          <div className="bg-[#1C1C1C] rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-12 text-center shadow-2xl relative overflow-hidden">
             <div className="relative z-10">
                <h3 className="text-lg md:text-2xl font-bold text-white mb-8 md:mb-12 flex items-center justify-center gap-2">
                  <div className="w-1.5 h-1.5 bg-eum-accent rounded-full"></div>
                  매칭 조건 항목
                  <div className="w-1.5 h-1.5 bg-eum-accent rounded-full"></div>
                </h3>
                
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-2xl mx-auto">
                    {['나이', '지역', '키', '흡연여부', '종교', '직업', '연봉', '학력', '자녀계획'].map((item, i) => (
                        <span key={i} className="bg-white/20 text-white border border-white/30 px-4 py-2.5 rounded-2xl text-sm md:text-base font-bold shadow-lg backdrop-blur-sm">
                            {item}
                        </span>
                    ))}
                </div>
             </div>
          </div>
        </div>

        {/* 2. Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-20 md:mb-32">
          {/* Lite Plan */}
          <div className="bg-white rounded-2xl md:rounded-[2rem] p-6 md:p-8 shadow-sm border border-gray-200 hover:-translate-y-1 transition-all duration-500 flex flex-col">
            <div className="mb-6">
              <span className="inline-block bg-gray-100 text-gray-500 text-[10px] font-black px-3 py-1 rounded-full tracking-widest mb-3 uppercase">
                Lite Plan
              </span>
              <h4 className="text-xl md:text-2xl font-bold text-gray-900">라이트</h4>
              <p className="text-xs text-gray-400 mt-2 font-medium">부담 없이 시작하는 플랜</p>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-center gap-2 text-gray-700 text-[13px] font-medium">
                <Check className="w-3.5 h-3.5 text-gray-400" />
                <span>3개월 무제한 소개</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-[13px] font-medium">
                <Check className="w-3.5 h-3.5 text-gray-300" />
                <span>조건 보장 없음</span>
              </li>
            </ul>

            <div className="mt-auto space-y-3 pt-6 border-t border-gray-100">
              <div className="flex justify-between items-center px-1">
                <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">Male</span>
                <span className="text-lg font-black text-gray-900">180,000원</span>
              </div>
              <div className="w-full h-px bg-gray-100"></div>
              <div className="flex justify-between items-center px-1">
                <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">Female</span>
                <span className="text-lg font-black text-gray-900">120,000원</span>
              </div>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="bg-white rounded-2xl md:rounded-[2rem] p-6 md:p-8 shadow-md border-2 border-eum-accent/30 hover:-translate-y-1 transition-all duration-500 flex flex-col relative overflow-hidden">
             <div className="absolute top-0 right-0 bg-eum-accent text-white text-[9px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-tighter shadow-sm">Popular</div>
            <div className="mb-6">
              <span className="inline-block bg-eum-accent/10 text-eum-accent text-[10px] font-black px-3 py-1 rounded-full tracking-widest mb-3 uppercase">
                Standard Plan
              </span>
              <h4 className="text-xl md:text-2xl font-bold text-eum-accent">스탠다드</h4>
              <p className="text-xs text-eum-accent/60 mt-2 font-medium">가장 합리적인 선택</p>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex items-center gap-2 text-gray-700 text-[13px] font-medium">
                <Check className="w-3.5 h-3.5 text-eum-accent" />
                <span>3개월 무제한 소개</span>
              </li>
              <li className="flex items-center gap-2 text-gray-900 font-bold text-[13px] bg-gray-50 p-2 rounded-lg">
                <BadgeCheck className="w-4 h-4 text-eum-accent" />
                <span>조건 2개 보장</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700 text-[13px] font-medium">
                <Check className="w-3.5 h-3.5 text-eum-accent" />
                <span>에프터 케어 포함 (기간 6개월)</span>
              </li>
            </ul>

            <div className="mt-auto space-y-3 pt-6 border-t border-eum-accent/10">
              <div className="flex justify-between items-center px-1">
                <span className="text-eum-accent/60 text-[10px] font-bold uppercase tracking-wider">Male</span>
                <span className="text-lg font-black text-eum-accent">320,000원</span>
              </div>
              <div className="w-full h-px bg-eum-accent/10"></div>
              <div className="flex justify-between items-center px-1">
                <span className="text-eum-accent/60 text-[10px] font-bold uppercase tracking-wider">Female</span>
                <span className="text-lg font-black text-eum-accent">230,000원</span>
              </div>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-[#1C1C1C] rounded-2xl md:rounded-[2rem] p-6 md:p-8 shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-eum-accent/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="mb-6 relative z-10">
              <span className="inline-block bg-white/10 text-white text-[10px] font-black px-3 py-1 rounded-full tracking-widest mb-3 uppercase border border-white/10">
                Premium Plan
              </span>
              <h4 className="text-xl md:text-2xl font-bold text-white">프리미엄</h4>
              <p className="text-xs text-gray-400 mt-2 font-medium">완벽한 만남을 위한 케어</p>
            </div>

            <ul className="space-y-3 mb-8 flex-1 relative z-10">
              <li className="flex items-center gap-2 text-gray-300 text-[13px] font-medium">
                <Check className="w-3.5 h-3.5 text-eum-accent" />
                <span>3개월 무제한 소개</span>
              </li>
              <li className="flex items-center gap-2 text-white font-bold text-[13px] bg-white/10 p-2 rounded-lg border border-white/5">
                <BadgeCheck className="w-4 h-4 text-eum-accent" />
                <span>조건 5개 완벽 보장</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300 text-[13px] font-medium">
                <Check className="w-3.5 h-3.5 text-eum-accent" />
                <span>에프터 케어 포함 (기간 6개월)</span>
              </li>
              <li className="flex items-center gap-2 text-amber-400 text-[13px] font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>만남 성사 3회 보장</span>
              </li>
            </ul>

            <div className="mt-auto space-y-3 pt-6 border-t border-white/10 relative z-10">
              <div className="flex justify-between items-center px-1">
                <span className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">Male</span>
                <span className="text-lg font-black text-white">480,000원</span>
              </div>
              <div className="w-full h-px bg-white/10"></div>
              <div className="flex justify-between items-center px-1">
                <span className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">Female</span>
                <span className="text-lg font-black text-white">360,000원</span>
              </div>
            </div>
          </div>
        </div>

        {/* After Care & Meeting Guarantee Description */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 mb-20 md:mb-32 text-center">
            <div className="flex items-start md:items-center gap-2">
                <BadgeCheck className="w-5 h-5 text-white fill-eum-dark shrink-0 mt-0.5 md:mt-0" />
                <p className="text-sm md:text-base font-bold text-gray-700 text-left">
                    <span className="text-eum-dark font-black">에프터케어</span> : 3개월 종료 후에도 나를 선택한 상대가 있다면 무료 연결
                    <span className="block md:inline-block md:ml-2 text-[11px] md:text-xs text-gray-400 font-medium mt-0.5 md:mt-0">※ 서비스 제공 기간: 6개월</span>
                </p>
            </div>
            <div className="hidden md:block w-px h-4 bg-gray-300"></div>
            <div className="flex items-start md:items-center gap-2">
                <Star className="w-5 h-5 text-amber-400 fill-amber-400 shrink-0 mt-0.5 md:mt-0" />
                <p className="text-sm md:text-base font-bold text-gray-700 text-left">
                    <span className="text-amber-500 font-black">만남 보장</span> : 약속된 만남 횟수까지 기간 무제한 연장
                </p>
            </div>
        </div>

        {/* 3. Matching Success Fee Info */}
        <div className="max-w-[800px] mx-auto mt-16 md:mt-24">
          <div className="bg-gray-50 rounded-[2rem] p-8 md:p-12 text-center border border-gray-100">
             <div className="flex flex-col items-center justify-center gap-3 mb-8">
                <Users className="w-6 h-6 text-eum-dark" />
                <h3 className="text-xl md:text-2xl font-bold text-eum-dark">매칭 성사비란?</h3>
                <p className="text-gray-600 text-sm md:text-base font-medium keep-all max-w-lg mx-auto leading-relaxed">
                  서로의 프로필을 확인하고, <span className="text-eum-dark font-bold">실제 만남을 수락했을 때만</span> 발생하는 비용입니다.
                </p>
             </div>
             
             <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-lg mx-auto">
                <div className="bg-white p-2 md:p-4 rounded-xl md:rounded-2xl border border-gray-200 shadow-sm">
                    <div className="text-[10px] md:text-xs text-gray-400 font-bold mb-1">라이트</div>
                    <div className="text-sm md:text-lg font-black text-eum-dark">50,000원</div>
                </div>
                <div className="bg-white p-2 md:p-4 rounded-xl md:rounded-2xl border border-eum-accent/30 shadow-sm">
                    <div className="text-[10px] md:text-xs text-eum-accent font-bold mb-1">스탠다드</div>
                    <div className="text-sm md:text-lg font-black text-eum-accent">30,000원</div>
                </div>
                <div className="bg-eum-dark p-2 md:p-4 rounded-xl md:rounded-2xl shadow-sm">
                    <div className="text-[10px] md:text-xs text-gray-400 font-bold mb-1">프리미엄</div>
                    <div className="text-sm md:text-lg font-black text-white">20,000원</div>
                </div>
             </div>
             <p className="text-xs text-gray-400 mt-6 font-medium">* 1회 매칭 성사 시 발생하는 비용입니다.</p>
          </div>
        </div>
        
        {/* Call To Action */}
        <div className="text-center mt-20 md:mt-32 mb-10">
           <Link to="/apply" className="group relative inline-flex items-center justify-center px-12 py-5 md:px-16 md:py-6 bg-eum-dark text-white font-black rounded-full shadow-2xl overflow-hidden transition-all hover:bg-black active:scale-95">
              <span className="relative z-10 flex items-center gap-3 text-base md:text-lg">
                  지금 바로 신청하기 <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
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

export default PricingPage;
