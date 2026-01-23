
import React from 'react';
import { Check, Star, BadgeCheck, Users } from 'lucide-react';
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
                <h3 className="text-lg md:text-2xl font-bold text-white mb-6 md:mb-10 flex items-center justify-center gap-2">
                  <div className="w-1 h-1 bg-eum-accent rounded-full"></div>
                  매칭 조건 항목
                  <div className="w-1 h-1 bg-eum-accent rounded-full"></div>
                </h3>
                
                <div className="flex flex-wrap justify-center gap-x-3 md:gap-x-6 gap-y-2 md:gap-y-4 mb-8 md:mb-10 text-gray-300 font-bold text-[13px] md:text-xl">
                    {['나이', '지역', '키', '흡연여부', '종교', '직업', '연봉', '학력', '자녀계획'].map((item, i) => (
                        <span key={i} className="hover:text-white transition-colors bg-white/5 px-3 py-1 rounded-full md:bg-transparent md:px-0 md:py-0">{item}</span>
                    ))}
                </div>

                <div className="bg-white/5 md:bg-white/10 rounded-xl p-4 md:p-6 text-[12px] md:text-base text-gray-400 md:text-gray-300 leading-relaxed border border-white/5">
                    위 조건들 중 <span className="text-eum-accent font-bold">가장 중요한 항목을 선택</span>하시면,<br className="hidden md:block" />
                    해당 조건을 중심으로 최적의 상대를 매칭해드립니다.
                </div>
             </div>
          </div>
        </div>

        {/* 2. Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-20 md:mb-32">
          {/* Basic Plan */}
          <div className="bg-white rounded-2xl md:rounded-[2.5rem] p-7 md:p-10 shadow-sm border border-gray-100 hover:-translate-y-1 transition-all duration-500 flex flex-col">
            <div className="mb-6 md:mb-8">
              <span className="inline-block bg-gray-100 text-gray-500 text-[9px] font-black px-3 py-1 rounded-full tracking-widest mb-4 md:mb-6 uppercase">
                Basic Plan
              </span>
              <h4 className="text-xl md:text-2xl font-bold text-gray-900">베이직</h4>
              <p className="text-gray-500 text-[11px] mt-2 md:mt-4 font-medium leading-relaxed">합리적인 비용으로 시작하는<br />실속형 1:1 매칭 플랜</p>
            </div>

            <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-1">
              <li className="flex items-center gap-2.5 text-gray-700 text-[13px] font-medium">
                <Check className="w-3.5 h-3.5 text-eum-accent" />
                <span>3개월 무제한 프로필 제공</span>
              </li>
              <li className="flex items-center gap-2.5 text-gray-900 font-bold text-[13px] bg-gray-50 p-3.5 rounded-xl md:p-4 md:rounded-2xl">
                <BadgeCheck className="w-4 h-4 text-eum-accent" />
                <span>[조건 2개] 우선 매칭 보장</span>
              </li>
            </ul>

            <div className="mt-auto space-y-3 pt-6 border-t border-gray-50">
              <div className="flex justify-between items-center px-1">
                <span className="text-gray-400 text-[9px] font-bold uppercase tracking-wider">Male</span>
                <span className="text-lg font-black text-gray-900">180,000원</span>
              </div>
              <div className="w-full h-px bg-gray-100"></div>
              <div className="flex justify-between items-center px-1">
                <span className="text-gray-400 text-[9px] font-bold uppercase tracking-wider">Female</span>
                <span className="text-lg font-black text-gray-900">120,000원</span>
              </div>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-2xl md:rounded-[2.5rem] p-7 md:p-10 shadow-md border-2 border-eum-accent/20 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 bg-eum-accent text-white text-[9px] font-black px-4 py-1.5 rounded-bl-xl uppercase tracking-tighter shadow-sm">Recommended</div>
            <div className="mb-6 md:mb-8">
              <span className="inline-block bg-eum-accent/10 text-eum-accent text-[9px] font-black px-3 py-1 rounded-full tracking-widest mb-4 md:mb-6 uppercase">
                Premium Plan
              </span>
              <h4 className="text-xl md:text-2xl font-bold text-eum-accent">프리미엄</h4>
              <p className="text-gray-500 text-[11px] mt-2 md:mt-4 font-medium leading-relaxed">디테일한 조건까지 반영하여<br />엄선된 인연을 소개합니다</p>
            </div>

            <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-1">
              <li className="flex items-center gap-2.5 text-gray-700 text-[13px] font-medium">
                <Check className="w-3.5 h-3.5 text-eum-accent" />
                <span>3개월 무제한 프로필 제공</span>
              </li>
              <li className="flex items-center gap-2.5 text-eum-accent font-bold text-[13px] bg-eum-accent/5 p-3.5 rounded-xl md:p-4 md:rounded-2xl">
                <BadgeCheck className="w-4 h-4 text-eum-accent" />
                <span>[조건 5개] 정밀 매칭 보장</span>
              </li>
              <li className="flex items-center gap-2 text-amber-600 text-[10px] md:text-[11px] font-bold px-1">
                <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                <span>매칭 실패 시, '우반(6:6)' 참가권 증정</span>
              </li>
            </ul>

            <div className="mt-auto space-y-3 pt-6 border-t border-eum-accent/10">
              <div className="flex justify-between items-center px-1">
                <span className="text-eum-accent/60 text-[9px] font-bold uppercase tracking-wider">Male</span>
                <span className="text-lg font-black text-eum-accent">360,000원</span>
              </div>
              <div className="w-full h-px bg-eum-accent/10"></div>
              <div className="flex justify-between items-center px-1">
                <span className="text-eum-accent/60 text-[9px] font-bold uppercase tracking-wider">Female</span>
                <span className="text-lg font-black text-eum-accent">240,000원</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Matching Success Fee Table */}
        <div className="max-w-[800px] mx-auto mt-16 md:mt-24">
          <div className="bg-[#1C1C1C] rounded-[2rem] md:rounded-[3rem] p-8 md:p-14 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-eum-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col items-center justify-center gap-2 mb-3 md:mb-4">
                <Users className="w-5 h-5 md:w-6 md:h-6 text-eum-accent" />
                <h3 className="text-lg md:text-2xl font-bold text-center">매칭 성사비</h3>
              </div>
              <p className="text-center text-gray-400 text-[10px] md:text-xs mb-8 md:mb-14">서로의 프로필을 보고 만남을 수락했을 때만 발생합니다.</p>
              
              <div className="grid md:grid-cols-2 gap-8 md:divide-x md:divide-white/10">
                <div className="space-y-5 md:pr-10">
                  <h4 className="text-center text-[11px] md:text-sm font-bold text-eum-accent pb-3 border-b border-white/10 uppercase tracking-widest">Men's Fee</h4>
                  <div className="space-y-3.5 text-[13px] px-1">
                    <div className="flex justify-between items-center text-gray-400"><span className="font-medium">25세 이하</span><span className="text-white font-bold">20,000원</span></div>
                    <div className="flex justify-between items-center text-gray-400"><span className="font-medium">26 - 30세</span><span className="text-white font-bold">30,000원</span></div>
                    <div className="flex justify-between items-center text-gray-400"><span className="font-medium">31 - 34세</span><span className="text-white font-bold">40,000원</span></div>
                    <div className="flex justify-between items-center text-gray-400"><span className="font-medium">35 - 38세</span><span className="text-white font-bold">50,000원</span></div>
                    <div className="flex justify-between items-center text-gray-400"><span className="font-medium">38세 이상</span><span className="text-white font-bold">60,000원</span></div>
                  </div>
                </div>
                
                <div className="md:pl-10 space-y-5">
                  <h4 className="text-center text-[11px] md:text-sm font-bold text-[#FF8A8A] pb-3 border-b border-white/10 uppercase tracking-widest">Women's Fee</h4>
                  <div className="space-y-3.5 text-[13px] px-1">
                    <div className="flex justify-between items-center text-gray-400"><span className="font-medium">25세 이하</span><span className="text-white font-bold">20,000원</span></div>
                    <div className="flex justify-between items-center text-gray-400"><span className="font-medium">26 - 28세</span><span className="text-white font-bold">30,000원</span></div>
                    <div className="flex justify-between items-center text-gray-400"><span className="font-medium">29 - 31세</span><span className="text-white font-bold">40,000원</span></div>
                    <div className="flex justify-between items-center text-gray-400"><span className="font-medium">32 - 34세</span><span className="text-white font-bold">50,000원</span></div>
                    <div className="flex justify-between items-center text-gray-400"><span className="font-medium">35세 이상</span><span className="text-white font-bold">60,000원</span></div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/10 text-center">
                <p className="text-gray-500 text-[9px] font-medium uppercase tracking-tighter">※ 위 금액은 1회 매칭 성사 시 발생하는 비용입니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="bg-[#0f0f0f] text-white">
      <Footer />
    </div>
  </div>
);

export default PricingPage;
