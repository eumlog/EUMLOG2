import React from 'react';
import { Check, Star, Sparkles, Gift } from 'lucide-react';
import { PageHeader } from '../components/Shared';
import Footer from '../components/Footer';

const PricingPage = () => (
  <div className="bg-white min-h-screen">
    <PageHeader title="멤버십 안내" subtitle="Pricing Plan" />
    
    {/* 매칭 조건은 플로팅 배너 대신 내용에 흡수됨 */}
    
    <section id="pricing" className="bg-white">
      <div className="py-12 md:py-32 px-0 max-w-[800px] w-[84%] md:w-full mx-auto">
        
        {/* 1. Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-eng text-[13px] md:text-[14px] font-bold text-gray-400 mb-3 tracking-widest uppercase">
            Membership
          </h2>
          <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 tracking-tight">
            총 12회 프로필 제공 솔루션
          </h3>
          <p className="text-[15px] md:text-[17px] text-gray-600 font-medium leading-relaxed keep-all">
            한 번 시작하면 평균 3개월 동안,<br className="md:hidden" />
            5~7일마다 한 명씩,<br className="md:hidden" />
            총 12명의 프로필을 제공받습니다.
          </p>
        </div>

        {/* 2. 비용은 두 단계 & 왜 이 가격일까요 */}
        <div className="max-w-[640px] mx-auto px-5 md:px-0 mb-16 md:mb-28 space-y-16 md:space-y-20">
            
            {/* 두 단계 설명 */}
            <div className="text-center">
              <h3 className="text-[22px] md:text-[26px] font-black text-[#8B6E3F] mb-6">비용은 두 단계입니다</h3>
              <div className="bg-[#FAF6EE]/50 border border-[#E8D5BC]/50 rounded-[1.5rem] p-7 md:p-10">
                 <p className="text-[15px] md:text-[16px] text-gray-800 font-medium keep-all leading-relaxed mb-6">
                   먼저 이것만 기억하시면 됩니다.
                 </p>
                 <p className="text-[15px] md:text-[16px] text-gray-800 font-medium keep-all leading-relaxed mb-8">
                   <strong className="text-gray-900">멤버십</strong>을 한 번 결제하면 12회 소개가 진행됩니다.<br/>
                   <strong className="text-[#8B6E3F]">성사비</strong>는 실제로 만나기로 정해졌을 때만 더해집니다.
                 </p>
                 <p className="text-[14px] md:text-[15px] text-gray-500 font-medium keep-all leading-relaxed pt-6 border-t border-[#E8D5BC]/60">
                   소개만 받고 끝나면, 더 내는 돈은 없습니다.<br/>
                   억지로 매칭시켜 비용을 쓰게 만들지 않습니다.
                 </p>
              </div>
            </div>

            {/* 왜 이 가격일까요 */}
            <div className="text-center">
              <h3 className="text-[22px] md:text-[26px] font-black text-gray-900 mb-6">왜 이 가격일까요</h3>
              <div className="bg-gray-50 border border-gray-100 rounded-[1.5rem] p-7 md:p-10">
                 <p className="text-[15px] md:text-[16px] text-gray-800 font-medium keep-all leading-relaxed mb-6">
                   결혼정보회사는 가입비만 수백만 원입니다.<br/>
                   그 돈의 대부분은 매니저 영업 수당과 광고비예요.
                 </p>
                 <p className="text-[15px] md:text-[16px] text-gray-800 font-medium keep-all leading-relaxed mb-8">
                   이음로그는 그 <strong className="text-gray-900 border-b border-gray-400 pb-[1px]">거품을 뺐습니다.</strong><br/>
                   소개에 드는 실제 비용만 받고,<br/>
                   나머지는 <strong className="text-[#8B6E3F] border-b border-[#E8D5BC] pb-[1px]">실제로 만났을 때만</strong> 받습니다.
                 </p>
                 <p className="text-[14px] md:text-[15px] text-gray-500 font-bold keep-all pt-6 border-t border-gray-200/80">
                   데이팅 앱처럼 가볍지 않고,<br/>
                   결혼정보회사처럼 부담스럽지도 않습니다.
                 </p>
              </div>
            </div>
            
        </div>

        {/* 3. 1. 멤버십 선택 */}
        <div className="max-w-[760px] mx-auto px-5 md:px-0 mb-8 md:mb-10 text-center">
            <h3 className="text-[22px] md:text-[28px] font-black text-gray-900 tracking-tight leading-tight mb-3">1. 멤버십 선택</h3>
            <p className="text-[14px] md:text-[16px] text-gray-500 font-medium keep-all">
              필요한 조건 보장 수준만 고르시면 됩니다.
            </p>
        </div>

        {/* 멤버십 Cards */}
        <div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-5 md:items-stretch max-w-[760px] mx-auto px-5 md:px-0 mb-14 md:mb-20">
          
          {/* 라이트 카드 */}
          <div className="bg-white border-[1.5px] border-black/[0.15] rounded-[1.4rem] md:rounded-[2rem] p-6 md:p-8 flex flex-col hover:border-gray-400 transition-colors">
            
            <div className="mb-7 md:mb-8 border-b border-black/[0.06] pb-7 md:pb-8">
              <h4 className="text-[13px] md:text-[14px] font-bold text-gray-400 mb-3 tracking-widest uppercase">라이트</h4>
              <div className="text-[24px] md:text-[28px] font-black text-gray-900 tracking-tight leading-tight mb-2.5 break-keep">조건 보장 없음</div>
              <p className="text-[13px] md:text-[14px] text-gray-500 font-medium keep-all leading-relaxed">
                정해진 조건 없이 폭넓게 소개받습니다.
              </p>
            </div>
            
            <div className="flex-1 flex flex-col">
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0"></div>
                  <div className="text-[14px] md:text-[15px] text-gray-700 font-medium keep-all leading-snug">
                    <strong className="text-gray-900">총 12회 프로필 제공</strong> (5~7일마다)
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0"></div>
                  <div className="text-[14px] md:text-[15px] text-gray-400 font-medium keep-all leading-snug line-through decoration-gray-300">
                    애프터케어 없음
                  </div>
                </li>
              </ul>

              <div className="border-t border-black/[0.08] pt-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs text-gray-400 font-bold tracking-wider">남성 MALE</span>
                  <span className="text-[22px] md:text-[26px] font-black text-gray-900 tracking-tight">180,000<span className="text-[14px] md:text-[15px] font-bold text-gray-500 ml-1">원</span></span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400 font-bold tracking-wider">여성 FEMALE</span>
                  <span className="text-[22px] md:text-[26px] font-black text-gray-900 tracking-tight">120,000<span className="text-[14px] md:text-[15px] font-bold text-gray-500 ml-1">원</span></span>
                </div>
              </div>
            </div>
          </div>

          {/* 스탠다드 카드 */}
          <div className="bg-white border-[2.5px] border-[#6E8264] shadow-[0_12px_40px_rgb(110,130,100,0.16)] rounded-[1.4rem] md:rounded-[2rem] p-6 md:p-8 relative flex flex-col scale-[1.02] md:scale-105 z-10">
            <div className="absolute -top-4 right-6 bg-[#6E8264] text-white text-[11px] font-bold tracking-widest px-4 py-1.5 rounded-full shadow-md z-10">
              가장 많이 선택합니다
            </div>
            
            <div className="mb-7 md:mb-8 border-b border-[#6E8264]/10 pb-7 md:pb-8">
              <h4 className="text-[13px] md:text-[14px] font-bold text-[#6E8264]/80 mb-3 tracking-widest uppercase">스탠다드</h4>
              <div className="text-[24px] md:text-[28px] font-black text-[#2e3b29] tracking-tight leading-tight mb-2.5 break-keep">
                필수 조건 <span className="text-[#6E8264]">2개 보장</span>
              </div>
              <p className="text-[13px] md:text-[14px] text-[#5c6b54] font-medium keep-all leading-relaxed">
                나이·직업·키처럼 양보할 수 없는 조건 2가지를 100% 반영합니다.
              </p>
            </div>

            <div className="flex-1 flex flex-col">
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6E8264] mt-2 shrink-0"></div>
                  <div className="text-[14px] md:text-[15px] text-gray-800 font-medium keep-all leading-snug">
                    <strong className="text-gray-900">총 12회 프로필 제공</strong> (5~7일마다)
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6E8264] mt-2 shrink-0"></div>
                  <div className="text-[14px] md:text-[15px] text-gray-800 font-medium keep-all leading-snug">
                    <strong className="text-gray-900">애프터케어 24회 보장 (약 6개월)</strong><br/>
                    <span className="text-[12px] md:text-[13px] text-gray-500 mt-1 block">종료 후에도 나를 선택한 분과 무료로 연결</span>
                  </div>
                </li>
              </ul>

              <div className="border-t border-[#6E8264]/20 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs text-[#6E8264]/80 font-bold tracking-wider">남성 MALE</span>
                  <span className="text-[22px] md:text-[26px] font-black text-gray-900 tracking-tight">320,000<span className="text-[14px] md:text-[15px] font-bold text-gray-500 ml-1">원</span></span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-[#6E8264]/80 font-bold tracking-wider">여성 FEMALE</span>
                  <span className="text-[22px] md:text-[26px] font-black text-gray-900 tracking-tight">230,000<span className="text-[14px] md:text-[15px] font-bold text-gray-500 ml-1">원</span></span>
                </div>
              </div>
            </div>
          </div>

          {/* 프리미엄 카드 */}
          <div className="bg-gradient-to-b from-[#FDFBF7] to-[#F5F0E5] border-[2px] border-[#B8956A]/60 shadow-[0_8px_30px_rgb(184,149,106,0.15)] rounded-[1.4rem] md:rounded-[2rem] p-6 md:p-8 relative flex flex-col">
            <div className="absolute -top-4 right-6 bg-[#B8956A] text-white text-[11px] font-bold tracking-widest px-4 py-1.5 rounded-full shadow-md z-10">
              추천
            </div>
            
            <div className="mb-7 md:mb-8 border-b border-[#B8956A]/20 pb-7 md:pb-8">
              <h4 className="text-[13px] md:text-[14px] font-bold text-[#B8956A]/80 mb-3 tracking-widest uppercase">프리미엄</h4>
              <div className="text-[24px] md:text-[28px] font-black text-[#5C4929] tracking-tight leading-tight mb-2.5 break-keep">
                조건 <span className="text-[#B8956A]">5개</span> 보장<br/>
                <span className="text-[18px] md:text-[20px] text-[#8B6E3F]">+ 만남 <span className="underline underline-offset-2">3회</span> 보장</span>
              </div>
              <p className="text-[13px] md:text-[14px] text-[#8B6E3F]/90 font-medium keep-all leading-relaxed mt-3">
                원하는 조건을 깊이 반영해 이상형에 가장 가까운 매칭을 진행합니다.<br/>
                <span className="font-bold text-[#5C4929]">12회 제공 내에 실제 만남 3회를 보장</span>하고, 채워질 때까지 제공 기간을 연장합니다.
              </p>
            </div>

            <div className="flex-1 flex flex-col">
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B8956A] mt-2 shrink-0"></div>
                  <div className="text-[14px] md:text-[15px] text-gray-900 font-medium keep-all leading-snug">
                    <strong className="text-gray-900">총 12회 프로필 제공</strong> (5~7일마다)
                  </div>
                </li>
                <li className="flex items-start gap-3.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B8956A] mt-2 shrink-0"></div>
                  <div className="text-[14px] md:text-[15px] text-gray-900 font-medium keep-all leading-snug">
                    <strong className="text-gray-900">애프터케어 24회 보장 (약 6개월)</strong><br/>
                    <span className="text-[12px] md:text-[13px] text-[#8B6E3F] mt-1 block">(프리미엄 무료 연결)</span>
                  </div>
                </li>
              </ul>

              <div className="border-t border-[#B8956A]/30 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs text-[#8B6E3F]/80 font-bold tracking-wider">남성 MALE</span>
                  <span className="text-[22px] md:text-[26px] font-black text-[#5C4929] tracking-tight">480,000<span className="text-[14px] md:text-[15px] font-bold text-[#8B6E3F] ml-1">원</span></span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-[#8B6E3F]/80 font-bold tracking-wider">여성 FEMALE</span>
                  <span className="text-[22px] md:text-[26px] font-black text-[#5C4929] tracking-tight">360,000<span className="text-[14px] md:text-[15px] font-bold text-[#8B6E3F] ml-1">원</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. 2. 만남 성사비 */}
        <div className="max-w-[760px] mx-auto px-5 md:px-0 mb-16 md:mb-24">
            <div className="text-center mb-8">
              <h3 className="text-[22px] md:text-[28px] font-black text-gray-900 mb-3">2. 만남 성사비</h3>
              <p className="text-[14px] md:text-[16px] text-gray-500 font-medium keep-all">
                실제로 만나기로 확정됐을 때만, 1회당 한 번 결제합니다.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-3 md:gap-5 max-w-[600px] mx-auto">
              {/* 라이트 성사비 */}
              <div className="bg-white p-4 md:p-6 rounded-[1.2rem] border border-gray-200 shadow-[0_2px_12px_rgb(0,0,0,0.03)] flex flex-col items-center justify-center">
                <div className="text-[12px] md:text-[13px] text-gray-500 font-bold mb-1.5 md:mb-2 whitespace-nowrap">라이트</div>
                <div className="flex items-baseline gap-0.5">
                  <div className="text-[18px] md:text-[24px] font-black text-gray-900 tracking-tight leading-none whitespace-nowrap">50,000</div>
                  <div className="text-[12px] md:text-[14px] font-bold text-gray-900">원</div>
                </div>
              </div>
              {/* 스탠다드 성사비 */}
              <div className="bg-white p-4 md:p-6 rounded-[1.2rem] border-[2px] border-[#6E8264] shadow-md relative scale-105 z-10 flex flex-col items-center justify-center">
                <div className="text-[12px] md:text-[13px] text-[#6E8264] font-bold mb-1.5 md:mb-2 whitespace-nowrap">스탠다드</div>
                <div className="flex items-baseline gap-0.5">
                  <div className="text-[18px] md:text-[24px] font-black text-[#6E8264] tracking-tight leading-none whitespace-nowrap">30,000</div>
                  <div className="text-[12px] md:text-[14px] font-bold text-[#6E8264]">원</div>
                </div>
              </div>
              {/* 프리미엄 성사비 */}
              <div className="bg-[#B8956A] p-4 md:p-6 rounded-[1.2rem] shadow-md text-white flex flex-col items-center justify-center relative">
                <div className="text-[12px] md:text-[13px] text-[#FFE7BB] font-bold mb-1.5 md:mb-2 whitespace-nowrap">프리미엄</div>
                <div className="flex items-baseline gap-0.5">
                  <div className="text-[18px] md:text-[24px] font-black tracking-tight leading-none whitespace-nowrap">20,000</div>
                  <div className="text-[12px] md:text-[14px] font-bold">원</div>
                </div>
              </div>
            </div>
        </div>
        
        {/* 5. 클로징 카피 + CTA */}
        <div className="text-center bg-[#FAF6EE]/50 rounded-[2rem] p-10 md:p-14 max-w-[760px] mx-auto mx-5 md:mx-auto border border-[#E8D5BC]/50 mt-20 mb-10">
            <p className="text-[16px] md:text-[18px] text-gray-800 font-medium keep-all leading-relaxed mb-8 md:mb-10">
              반신반의하며 시작한 분들이<br/>
              지금은 연인으로 만나고 있어요.<br/><br/>
              <strong className="text-xl md:text-2xl font-black text-[#8B6E3F]">다음은 당신 차례입니다.</strong>
            </p>
            <a 
              href="https://www.eumlog.co.kr/links" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 md:px-12 md:py-5 bg-[#8B6E3F] text-white rounded-full font-bold text-[16px] md:text-lg hover:bg-[#7A6037] transition-all shadow-xl active:scale-95"
            >
              지금 신청하기 <Sparkles className="w-5 h-5 ml-2" />
            </a>
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