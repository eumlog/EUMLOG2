import React from 'react';
import { Check, Star, Sparkles, Gift } from 'lucide-react';
import { PageHeader } from '../components/Shared';
import Footer from '../components/Footer';

const PricingPage = () => (
  <div className="bg-white min-h-screen">
    <PageHeader title="멤버십 안내" subtitle="Pricing Plan" />
    
    {/* 🔥 매칭 조건 floating banner (스크롤 시 상단 플로팅, Navbar 아래 고정) */}
    <div className="sticky top-[80px] md:top-[90px] z-40 w-full px-4 mb-4 md:mb-8 pointer-events-none">
      <div className="max-w-fit mx-auto pointer-events-auto">
        <div className="bg-white/95 backdrop-blur-md shadow-[0_2px_12px_rgb(0,0,0,0.06)] border border-[#E4E0D6] rounded-full px-2.5 py-1.5 md:px-3 flex items-center justify-center gap-1.5 md:gap-2">
          <div className="text-[10px] md:text-[11px] text-[#6E8264] font-extrabold tracking-tight whitespace-nowrap shrink-0 pl-1.5">매칭조건</div>
          <div className="flex gap-1 shrink-0 overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {['나이', '키', '흡연', '종교', '직업', '연봉', '학력', '자녀'].map((item, i) => (
              <span key={i} className="bg-[#FAF6EE]/70 text-gray-700 px-1.5 md:px-2 py-[1px] md:py-[1.5px] rounded-[5px] text-[9.5px] md:text-[10.5px] font-bold border border-[#E4E0D6] whitespace-nowrap">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
    
    <section id="pricing" className="bg-white">
      <div className="py-12 md:py-32 px-0 max-w-[800px] w-[84%] md:w-full mx-auto">
        
        {/* 1. Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-eng text-2xl md:text-4xl font-bold text-eum-accent mb-3 uppercase tracking-widest">
            Membership
          </h2>
          <h3 className="font-sans text-xl md:text-3xl font-bold text-gray-900 leading-tight">
            3개월 구독제 솔루션
          </h3>
        </div>

        {/* 2. 약속 카드 (소개 주기 + 최소 보장) */}
        <div className="max-w-[600px] mx-auto px-5 md:px-0 mb-10 md:mb-14">
          <div className="bg-[#FAF6EE] rounded-2xl p-5 md:p-7 grid grid-cols-[1fr_1px_1fr] gap-4 md:gap-6 items-center">
            <div className="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6E8264" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
              <div className="text-[11px] md:text-xs text-gray-500 mt-2">소개 주기</div>
              <div className="text-base md:text-xl font-bold text-gray-900 mt-0.5">5~7일마다</div>
            </div>
            <div className="w-px h-14 bg-[#6E8264]/15"></div>
            <div className="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6E8264" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              <div className="text-[11px] md:text-xs text-gray-500 mt-2">최소 보장</div>
              <div className="text-base md:text-xl font-bold text-gray-900 mt-0.5">12명+</div>
            </div>
          </div>
        </div>

        {/* 3. 비용 안내 카피 */}
        <div className="max-w-[600px] mx-auto mb-10 md:mb-14 text-center px-2">
          <p className="text-sm md:text-base text-gray-900 font-medium leading-relaxed">
            이음로그 비용은<br />
            <span className="font-bold text-base md:text-xl">2단계 입니다.</span>
          </p>
        </div>

        {/* 4. ① 3개월 구독료 섹션 헤더 */}
        <div className="max-w-[760px] mx-auto flex items-center gap-3 mb-5 md:mb-7 px-5 md:px-1">
          <div className="bg-[#6E8264] text-white w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</div>
          <div className="flex-1">
            <div className="text-base md:text-xl font-bold text-gray-900 leading-tight">3개월 구독료</div>
            <div className="text-[11px] md:text-sm text-gray-500 mt-0.5">아래 3가지 멤버십 중 선택하세요</div>
          </div>
        </div>

        {/* 5. Pricing Cards (라이트 → 스탠다드 → 프리미엄) */}
        <div className="flex flex-col gap-5 md:grid md:grid-cols-3 md:gap-5 md:items-stretch max-w-[760px] mx-auto px-5 md:px-0 mb-14 md:mb-20">
          
          {/* 라이트 카드 */}
          <div className="bg-white border-[1.5px] border-black/[0.18] rounded-[1.4rem] md:rounded-[2rem] p-7 md:p-10 flex flex-col">
            <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-7">라이트</h4>
            
            <ul className="space-y-3.5 mb-7 flex-1">
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
          <div className="bg-white border-[1.5px] border-[#6E8264]/50 rounded-[1.4rem] md:rounded-[2rem] p-7 md:p-10 relative flex flex-col">
            <div className="absolute top-5 right-[-2px] bg-[#6E8264] text-white text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-l-full">
              POPULAR
            </div>
            <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-7">스탠다드</h4>
            
            <ul className="space-y-3.5 mb-7 flex-1">
              <li className="flex items-center gap-3 text-sm md:text-base text-gray-600 font-medium">
                <Check className="w-[17px] h-[17px] text-[#6E8264] shrink-0" strokeWidth={2.5} />
                <span>3개월 무제한 소개</span>
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base text-gray-600 font-medium">
                <Check className="w-[17px] h-[17px] text-[#6E8264] shrink-0" strokeWidth={2.5} />
                <span>조건 <strong className="font-bold text-gray-900">2개</strong> 보장</span>
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base text-gray-900 font-bold">
                <Gift className="w-[17px] h-[17px] text-[#6E8264] shrink-0" />
                <span>에프터 케어 추가</span>
                <span className="text-[10px] text-[#6E8264] bg-[#6E8264]/10 px-2 py-0.5 rounded-full ml-auto whitespace-nowrap font-bold">6개월</span>
              </li>
            </ul>

            <div className="border-t border-[#6E8264]/20 pt-5">
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-[#6E8264]/70 font-bold tracking-wider">MALE</span>
                <span className="text-lg md:text-xl font-black text-gray-900">320,000원</span>
              </div>
              <div className="w-full h-px bg-[#6E8264]/15 my-3"></div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-[#6E8264]/70 font-bold tracking-wider">FEMALE</span>
                <span className="text-lg md:text-xl font-black text-gray-900">230,000원</span>
              </div>
            </div>
          </div>

          {/* 프리미엄 카드 (BEST) */}
          <div className="bg-[#F5F0E5] border-[1.5px] border-[#B8956A]/55 rounded-[1.4rem] md:rounded-[2rem] p-7 md:p-10 relative flex flex-col">
            <div className="absolute top-5 right-[-2px] bg-[#B8956A] text-white text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-l-full">
              BEST
            </div>
            <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-7">프리미엄</h4>
            
            <ul className="space-y-3.5 mb-4 flex-1">
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
                만남 <span className="text-[#8B6E3F]">3회 보장</span>
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
            <Gift className="w-[18px] h-[18px] text-[#6E8264] mt-0.5 shrink-0" />
            <div className="flex-1">
              <div className="text-[13px] md:text-base leading-relaxed">
                <strong className="font-bold text-gray-900">에프터케어</strong>
                <span className="text-[10px] md:text-xs text-[#6E8264] bg-[#6E8264]/10 px-2 py-0.5 rounded-full ml-1.5 font-bold align-[1px]">6개월</span>
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

        {/* 5. ② 만남 성사비 섹션 헤더 */}
        <div className="flex items-center gap-3 mb-5 md:mb-7 px-1">
          <div className="bg-[#B8956A] text-white w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</div>
          <div className="flex-1">
            <div className="text-base md:text-xl font-bold text-gray-900 leading-tight">만남 성사비</div>
            <div className="text-[11px] md:text-sm text-gray-500 mt-0.5">실제 만남을 수락했을 때만 발생해요</div>
          </div>
          <div className="text-[10px] md:text-xs text-[#B8956A] bg-[#B8956A]/18 px-2.5 py-1 rounded-full font-bold whitespace-nowrap">1회당</div>
        </div>

        {/* 만남 성사비 박스 */}
        <div className="max-w-[800px] mx-auto">
          <div className="bg-[#FAF6EE] rounded-[1.5rem] md:rounded-[2rem] p-7 md:p-12 text-center">
            <p className="text-gray-600 text-sm md:text-base font-medium keep-all max-w-lg mx-auto leading-relaxed mb-6 md:mb-8">
              서로의 프로필을 확인하고, <span className="text-gray-900 font-bold">실제 만남을 수락했을 때만</span> 발생하는 비용입니다.
            </p>
            
            <div className="grid grid-cols-3 gap-2.5 md:gap-4 max-w-lg mx-auto">
              <div className="bg-white p-3.5 md:p-4 rounded-2xl border border-black/[0.08]">
                <div className="text-[11px] md:text-xs text-gray-500 font-bold mb-1.5">라이트</div>
                <div className="text-[15px] md:text-lg font-black text-gray-900 leading-tight">50,000<span className="text-[11px] md:text-sm font-bold ml-0.5">원</span></div>
              </div>
              <div className="bg-white p-3.5 md:p-4 rounded-2xl border-2 border-[#6E8264]">
                <div className="text-[11px] md:text-xs text-[#6E8264] font-bold mb-1.5">스탠다드</div>
                <div className="text-[15px] md:text-lg font-black text-[#6E8264] leading-tight">30,000<span className="text-[11px] md:text-sm font-bold ml-0.5">원</span></div>
              </div>
              <div className="bg-[#B8956A] p-3.5 md:p-4 rounded-2xl">
                <div className="text-[11px] md:text-xs text-[#FFE7BB] font-bold mb-1.5">프리미엄</div>
                <div className="text-[15px] md:text-lg font-black text-white leading-tight">20,000<span className="text-[11px] md:text-sm font-bold ml-0.5">원</span></div>
              </div>
            </div>
            <p className="text-[11px] md:text-xs text-gray-400 mt-5 md:mt-6 font-medium">* 1회 만남 성사 시 발생하는 비용입니다.</p>
          </div>
        </div>
        
        {/* 6. 클로징 카피 + CTA */}
        <div className="mt-20 md:mt-32 mb-10">
          {/* 클로징 메시지 */}
          <div className="text-center mb-10 md:mb-12">
            <h3 className="text-xl md:text-3xl font-black text-gray-900 mb-5 md:mb-7 leading-snug">
              "평생의 인연을 위한 3개월"
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed keep-all font-medium">
              반신반의하면서 시작한 분들이<br />
              지금은 연인으로 만나고 있어요.
            </p>
            <p className="text-base md:text-lg text-gray-900 font-bold mt-6 keep-all">
              다음은 당신 차례입니다.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a 
              href="https://www.eumlog.co.kr/links" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-10 py-5 md:px-16 md:py-6 bg-eum-dark text-white font-black rounded-full shadow-2xl overflow-hidden transition-all hover:bg-black active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-3 text-base md:text-lg">
                지금 바로 신청하기 <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-eum-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
          </div>
        </div>

      </div>
    </section>

    <div className="bg-[#0f0f0f] text-white pb-24 md:pb-0">
      <Footer />
    </div>

    {/* 🔥 하단 플로팅 CTA (페이지 어디서든 항상 보임) */}
    <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
      <div className="bg-gradient-to-t from-white via-white/95 to-white/0 pt-8 pb-4 md:pb-5 px-4 md:px-6">
        <div className="max-w-[600px] mx-auto pointer-events-auto">
          <a 
            href="https://www.eumlog.co.kr/links" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 bg-eum-dark text-white font-bold rounded-full py-4 md:py-5 shadow-2xl active:scale-95 transition-transform hover:bg-black"
          >
            <span className="text-[15px] md:text-base">지금 바로 신청하기</span>
            <Sparkles className="w-[18px] h-[18px] md:w-5 md:h-5" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default PricingPage;