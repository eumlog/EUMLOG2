import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Users, Sparkles, Gift } from 'lucide-react';
import { PageHeader } from '../components/Shared';
import Footer from '../components/Footer';

const PricingPage = () => (
  <div className="bg-white min-h-screen">
    <PageHeader title="멤버십 안내" subtitle="Pricing Plan" />
    
    <section id="pricing" className="bg-white">
      <div className="py-16 md:py-32 px-0 max-w-[800px] w-[88%] md:w-full mx-auto">
        
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
          <p className="mt-6 text-gray-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed keep-all font-medium">
            단순히 횟수만 채우는 만남이 아닙니다.<br />
            3개월 동안 매니저가 이상형에 가까운 인연을 <br className="hidden md:block" />
            찾을 때까지 함께합니다.
          </p>
        </div>

        {/* 2. Conditions Section (카키 테두리 + 베이지 박스) */}
        <div className="max-w-[800px] mx-auto mb-12 md:mb-20">
          <div className="bg-white border-[1.5px] border-eum-accent rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 text-center">
            <h3 className="text-base md:text-2xl font-bold text-gray-900 mb-5 md:mb-8 flex items-center justify-center gap-2">
              <div className="w-1.5 h-1.5 bg-eum-accent rounded-full"></div>
              매칭 조건 항목
              <div className="w-1.5 h-1.5 bg-eum-accent rounded-full"></div>
            </h3>
            
            {/* 모바일: 4x2 그리드 */}
            <div className="grid grid-cols-4 gap-2 md:hidden">
              {['나이', '키', '흡연', '종교', '직업', '연봉', '학력', '자녀'].map((item, i) => (
                <span key={i} className="bg-[#FAF6EE] text-gray-900 border border-black/10 px-2 py-2.5 rounded-xl text-[12px] font-bold whitespace-nowrap">
                  {item}
                </span>
              ))}
            </div>
            {/* 데스크탑: flex wrap */}
            <div className="hidden md:flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
              {['나이', '키', '흡연여부', '종교', '직업', '연봉', '학력', '자녀계획'].map((item, i) => (
                <span key={i} className="bg-[#FAF6EE] text-gray-900 border border-black/10 px-4 py-2.5 rounded-2xl text-base font-bold">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Pricing Cards (라이트 → 스탠다드 → 프리미엄) */}
        <div className="flex flex-col gap-4 md:gap-5 mb-12 md:mb-20">
          
          {/* 라이트 카드 */}
          <div className="bg-white border-[0.5px] border-black/[0.12] rounded-[1.4rem] md:rounded-[2rem] p-7 md:p-10">
            <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-7">라이트</h4>
            
            <ul className="space-y-3.5 mb-7">
              <li className="flex items-center gap-3 text-sm md:text-base text-gray-600 font-medium">
                <Check className="w-[17px] h-[17px] text-gray-400 shrink-0" strokeWidth={2.5} />
                <span>3개월 무제한 소개</span>
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base text-gray-400 font-medium">
                <Check className="w-[17px] h-[17px] text-gray-300 shrink-0" strokeWidth={2.5} />
                <span>조건 보장 없음</span>
              </li>
            </ul>

            <div className="border-t border-black/[0.08] pt-5">
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-gray-400 font-bold tracking-wider">MALE</span>
                <span className="text-lg md:text-xl font-black text-gray-900">240,000원</span>
              </div>
              <div className="w-full h-px bg-black/[0.06] my-3"></div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-gray-400 font-bold tracking-wider">FEMALE</span>
                <span className="text-lg md:text-xl font-black text-gray-900">160,000원</span>
              </div>
            </div>
          </div>

          {/* 스탠다드 카드 (POPULAR) */}
          <div className="bg-white border-[0.5px] border-black/[0.12] rounded-[1.4rem] md:rounded-[2rem] p-7 md:p-10 relative">
            <div className="absolute top-5 right-[-2px] bg-eum-accent text-white text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-l-full">
              POPULAR
            </div>
            <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-7">스탠다드</h4>
            
            <ul className="space-y-3.5 mb-7">
              <li className="flex items-center gap-3 text-sm md:text-base text-gray-600 font-medium">
                <Check className="w-[17px] h-[17px] text-eum-accent shrink-0" strokeWidth={2.5} />
                <span>3개월 무제한 소개</span>
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base text-gray-600 font-medium">
                <Check className="w-[17px] h-[17px] text-eum-accent shrink-0" strokeWidth={2.5} />
                <span>조건 <strong className="font-bold text-gray-900">2개</strong> 보장</span>
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base text-gray-900 font-bold">
                <Gift className="w-[17px] h-[17px] text-eum-accent shrink-0" />
                <span>에프터 케어 추가</span>
                <span className="text-[10px] text-eum-accent bg-eum-accent/10 px-2 py-0.5 rounded-full ml-auto whitespace-nowrap font-bold">6개월</span>
              </li>
            </ul>

            <div className="border-t border-eum-accent/20 pt-5">
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-eum-accent/70 font-bold tracking-wider">MALE</span>
                <span className="text-lg md:text-xl font-black text-gray-900">320,000원</span>
              </div>
              <div className="w-full h-px bg-eum-accent/15 my-3"></div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-eum-accent/70 font-bold tracking-wider">FEMALE</span>
                <span className="text-lg md:text-xl font-black text-gray-900">230,000원</span>
              </div>
            </div>
          </div>

          {/* 프리미엄 카드 (BEST) */}
          <div className="bg-[#F5F0E5] border-[0.5px] border-[#B8956A]/40 rounded-[1.4rem] md:rounded-[2rem] p-7 md:p-10 relative">
            <div className="absolute top-5 right-[-2px] bg-[#B8956A] text-white text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-l-full">
              BEST
            </div>
            <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-7">프리미엄</h4>
            
            <ul className="space-y-3.5 mb-4">
              <li className="flex items-center gap-3 text-sm md:text-base text-gray-600 font-medium">
                <Check className="w-[17px] h-[17px] text-[#B8956A] shrink-0" strokeWidth={2.5} />
                <span>3개월 무제한 소개</span>
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base text-gray-600 font-medium">
                <Check className="w-[17px] h-[17px] text-[#B8956A] shrink-0" strokeWidth={2.5} />
                <span>조건 <strong className="font-bold text-gray-900">4개</strong> 완벽 보장</span>
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base text-gray-900 font-bold">
                <Gift className="w-[17px] h-[17px] text-[#B8956A] shrink-0" />
                <span>에프터 케어 추가</span>
                <span className="text-[10px] text-[#8B6E3F] bg-[#B8956A]/20 px-2 py-0.5 rounded-full ml-auto whitespace-nowrap font-bold">6개월</span>
              </li>
            </ul>

            {/* 만남 성사 강조 박스 (파스텔 카멜) */}
            <div className="bg-[#E8D5BC] border-[0.5px] border-[#8B6E3F]/25 rounded-xl px-3.5 py-3.5 mb-7 flex items-center gap-3">
              <Star className="w-[19px] h-[19px] fill-[#8B6E3F] text-[#8B6E3F] shrink-0" />
              <span className="text-sm md:text-base font-bold text-[#5C4929]">
                만남 성사 <span className="text-[#8B6E3F]">3회 보장</span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#8B6E3F] ml-auto" />
            </div>

            <div className="border-t border-[#B8956A]/30 pt-5">
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-[#8B6E3F]/80 font-bold tracking-wider">MALE</span>
                <span className="text-lg md:text-xl font-black text-[#6B4F23]">480,000원</span>
              </div>
              <div className="w-full h-px bg-[#B8956A]/20 my-3"></div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-[#8B6E3F]/80 font-bold tracking-wider">FEMALE</span>
                <span className="text-lg md:text-xl font-black text-[#6B4F23]">360,000원</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4. 에프터케어 / 만남보장 안내 */}
        <div className="max-w-[600px] mx-auto mb-12 md:mb-20 px-1">
          <div className="flex items-start gap-3 mb-4">
            <Gift className="w-[18px] h-[18px] text-eum-accent mt-0.5 shrink-0" />
            <div className="flex-1">
              <div className="text-[13px] md:text-base leading-relaxed">
                <strong className="font-bold text-gray-900">에프터케어</strong>
                <span className="text-[10px] md:text-xs text-eum-accent bg-eum-accent/10 px-2 py-0.5 rounded-full ml-1.5 font-bold align-[1px]">6개월</span>
              </div>
              <div className="text-[13px] md:text-base text-gray-600 mt-1 leading-relaxed">
                3개월 종료 후에도 나를 선택한 상대가 있다면 무료 연결
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Sparkles className="w-[18px] h-[18px] text-[#B8956A] mt-0.5 shrink-0" />
            <div className="flex-1">
              <div className="text-[13px] md:text-base leading-relaxed">
                <strong className="font-bold text-[#8B6E3F]">만남 보장</strong>
                <span className="text-[10px] md:text-xs text-[#B8956A] bg-[#B8956A]/15 px-2 py-0.5 rounded-full ml-1.5 font-bold align-[1px]">3회</span>
              </div>
              <div className="text-[13px] md:text-base text-gray-600 mt-1 leading-relaxed">
                약속된 만남 횟수까지 기간 무제한 연장
              </div>
            </div>
          </div>
        </div>

        {/* 5. 매칭 성사비 */}
        <div className="max-w-[800px] mx-auto">
          <div className="bg-[#FAF6EE] rounded-[1.5rem] md:rounded-[2rem] p-7 md:p-12 text-center">
            <div className="flex flex-col items-center justify-center gap-3 mb-6 md:mb-8">
              <Users className="w-6 h-6 text-gray-900" />
              <h3 className="text-base md:text-2xl font-bold text-gray-900">매칭 성사비란?</h3>
              <p className="text-gray-600 text-sm md:text-base font-medium keep-all max-w-lg mx-auto leading-relaxed">
                서로의 프로필을 확인하고, <span className="text-gray-900 font-bold">실제 만남을 수락했을 때만</span> 발생하는 비용입니다.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-2.5 md:gap-4 max-w-lg mx-auto">
              <div className="bg-white p-3.5 md:p-4 rounded-2xl border border-black/[0.08]">
                <div className="text-[11px] md:text-xs text-gray-500 font-bold mb-1.5">라이트</div>
                <div className="text-[15px] md:text-lg font-black text-gray-900 leading-tight">50,000<span className="text-[11px] md:text-sm font-bold ml-0.5">원</span></div>
              </div>
              <div className="bg-white p-3.5 md:p-4 rounded-2xl border-2 border-eum-accent">
                <div className="text-[11px] md:text-xs text-eum-accent font-bold mb-1.5">스탠다드</div>
                <div className="text-[15px] md:text-lg font-black text-eum-accent leading-tight">30,000<span className="text-[11px] md:text-sm font-bold ml-0.5">원</span></div>
              </div>
              <div className="bg-[#B8956A] p-3.5 md:p-4 rounded-2xl">
                <div className="text-[11px] md:text-xs text-[#FFE7BB] font-bold mb-1.5">프리미엄</div>
                <div className="text-[15px] md:text-lg font-black text-white leading-tight">20,000<span className="text-[11px] md:text-sm font-bold ml-0.5">원</span></div>
              </div>
            </div>
            <p className="text-[11px] md:text-xs text-gray-400 mt-5 md:mt-6 font-medium">* 1회 매칭 성사 시 발생하는 비용입니다.</p>
          </div>
        </div>
        
        {/* 6. CTA */}
        <div className="text-center mt-16 md:mt-32 mb-10">
          <Link to="/apply" className="group relative inline-flex items-center justify-center px-10 py-5 md:px-16 md:py-6 bg-eum-dark text-white font-black rounded-full shadow-2xl overflow-hidden transition-all hover:bg-black active:scale-95">
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