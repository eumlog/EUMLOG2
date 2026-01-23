
import React from 'react';
import { PageHeader } from '../components/Shared';
import Footer from '../components/Footer';

const PolicyPage: React.FC = () => {
  return (
    <div className="bg-eum-bg min-h-screen">
      <PageHeader 
        title="운영 규정 및 환불 약관 V2" 
        subtitle="Operational Policy" 
      />

      <section className="py-8 md:py-16 px-4 md:px-6">
        <div className="max-w-[900px] mx-auto bg-white p-6 md:p-12 rounded-[2rem] md:rounded-3xl border border-gray-100 shadow-sm text-gray-800 leading-relaxed">
          
          {/* Intro */}
          <div className="mb-8 md:mb-12 border-b border-gray-100 pb-6 md:pb-8">
             <p className="text-[13px] md:text-lg font-medium text-gray-700 keep-all">
               본 규정은 단순 매칭이 아닌 <span className="font-bold text-eum-dark">'3개월 솔루션'</span>에 대한 약관이며, 모든 조항은 고객님의 성공적인 인연 찾기를 지원하는 투명하고 공정한 기준입니다.
             </p>
          </div>

          {/* I. 서비스 개요 및 기간 */}
          <div className="mb-10 md:mb-16">
            <h3 className="text-lg md:text-2xl font-black text-eum-dark mb-2">I. 서비스 개요 및 기간</h3>
            <p className="text-gray-500 mb-4 md:mb-6 font-medium text-[11px] md:text-sm">저희는 '횟수'만 채우고 끝나는 서비스가 아닙니다. 3개월(90일) 동안 매니저가 함께 완주합니다.</p>
            
            <div className="overflow-x-auto -mx-2 px-2 pb-2">
              <table className="w-full text-[10px] md:text-sm border-t border-gray-200 min-w-[320px]">
                <thead className="bg-gray-50/50">
                  <tr>
                    <th className="py-2.5 px-3 text-left font-bold text-gray-600 w-[100px] md:w-[140px] border-b border-gray-100">항목</th>
                    <th className="py-2.5 px-3 text-left font-bold text-gray-600 border-b border-gray-100">상세 내용</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                   <tr>
                     <td className="py-2 px-3 font-bold text-gray-500 bg-gray-50/30">서비스 모델</td>
                     <td className="py-2 px-3">3개월 기간제 책임 솔루션 (구독형 모델)</td>
                   </tr>
                   <tr>
                     <td className="py-2 px-3 font-bold text-gray-500 bg-gray-50/30">이용 기간</td>
                     <td className="py-2 px-3 font-bold text-eum-dark">결제일로부터 3개월 (90일)</td>
                   </tr>
                   <tr>
                     <td className="py-2 px-3 font-bold text-gray-500 bg-gray-50/30">소개 방식</td>
                     <td className="py-2 px-3">3개월간 횟수 제한 없이 1명씩 순차 제공 (주 1회 / 5~7일 주기)</td>
                   </tr>
                   <tr>
                     <td className="py-2 px-3 font-bold text-gray-500 bg-gray-50/30">최소 보장</td>
                     <td className="py-2 px-3">
                       기간 내 <span className="font-bold text-eum-accent text-[11px] md:text-base">최소 12명 프로필 제공</span> 시까지 의무 이행<br/>
                       <span className="text-[9px] md:text-xs text-gray-400">(기간 종료 후에도 12명을 못 받았다면 무료 연장)</span>
                     </td>
                   </tr>
                   <tr>
                     <td className="py-2 px-3 font-bold text-gray-500 bg-gray-50/30">지속성 보장</td>
                     <td className="py-2 px-3">
                       매칭 성사 후에도 3개월 내라면 프로필 지속 제공<br/>
                       <span className="text-[9px] md:text-xs text-gray-400">※ 단, 교제 시작 시 서비스는 목적 달성으로 종료</span>
                     </td>
                   </tr>
                   <tr className="bg-amber-50/30">
                     <td className="py-2 px-3 font-bold text-amber-700 bg-amber-50/50">유효 기간</td>
                     <td className="py-2 px-3 text-amber-800 font-bold">
                       서비스 이용 및 환불 권리의 <span className="underline">최장 유효기간은 4개월</span>입니다.<br/>
                       <span className="text-[9px] md:text-xs">(4개월 경과 시 모든 권리 소멸)</span>
                     </td>
                   </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* II. 플랜별 가격 및 보장 */}
          <div className="mb-10 md:mb-16">
            <h3 className="text-lg md:text-2xl font-black text-eum-dark mb-4 md:mb-6">II. 플랜별 가격 및 보장</h3>
            
            <h4 className="font-bold text-sm md:text-lg mb-3 text-gray-800 border-l-4 border-eum-accent pl-2.5 md:pl-3">1. 멤버십 구독권 (3개월 이용료)</h4>
            <div className="overflow-x-auto -mx-2 px-2 pb-4">
              <table className="w-full text-[10px] md:text-sm border-t border-gray-200 text-center min-w-[320px]">
                <thead className="bg-gray-50/80">
                  <tr>
                    <th className="py-2.5 px-2 font-bold text-gray-600 border-b border-gray-100">구분</th>
                    <th className="py-2.5 px-2 font-bold text-gray-600 border-b border-gray-100">베이직 플랜</th>
                    <th className="py-2.5 px-2 font-bold text-eum-accent border-b border-gray-100">프리미엄 플랜</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                   <tr>
                     <td className="py-3 px-2 font-bold bg-gray-50/50">보장 조건</td>
                     <td className="py-3 px-2">필수 조건 2가지 고정 보장</td>
                     <td className="py-3 px-2 font-bold text-eum-accent">핵심 조건 5가지 완벽 고정 보장</td>
                   </tr>
                   <tr>
                     <td className="py-3 px-2 font-bold bg-gray-50/50">남성 이용권</td>
                     <td className="py-3 px-2">180,000원</td>
                     <td className="py-3 px-2 font-bold">320,000원</td>
                   </tr>
                   <tr>
                     <td className="py-3 px-2 font-bold bg-gray-50/50">여성 이용권</td>
                     <td className="py-3 px-2">120,000원</td>
                     <td className="py-3 px-2 font-bold">210,000원</td>
                   </tr>
                   <tr className="bg-eum-bg/20">
                     <td className="py-3 px-2 font-bold bg-gray-100/50">추가 혜택</td>
                     <td className="py-3 px-2 text-gray-400">-</td>
                     <td className="py-3 px-2 text-[9px] md:text-xs font-bold text-eum-accent">'우반' 참가권 1회 무료 증정</td>
                   </tr>
                </tbody>
              </table>
            </div>

            <h4 className="font-bold text-sm md:text-lg mb-3 mt-6 text-gray-800 border-l-4 border-red-400 pl-2.5 md:pl-3">2. 매칭 성사비 (건당 발생)</h4>
            <div className="overflow-x-auto -mx-2 px-2 pb-2">
              <table className="w-full text-[10px] md:text-sm border-t border-gray-200 text-center min-w-[320px]">
                <thead className="bg-gray-50/80">
                  <tr>
                    <th className="py-2.5 px-2 font-bold text-gray-600 border-b border-gray-100">금액 (건당)</th>
                    <th className="py-2.5 px-2 font-bold text-gray-600 border-b border-gray-100">남성 (나이)</th>
                    <th className="py-2.5 px-2 font-bold text-gray-600 border-b border-gray-100">여성 (나이)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                   <tr>
                     <td className="py-2.5 px-2 font-bold text-gray-700 bg-gray-50/50">20,000원</td>
                     <td className="py-2.5 px-2">25세 이하</td>
                     <td className="py-2.5 px-2">25세 이하</td>
                   </tr>
                   <tr>
                     <td className="py-2.5 px-2 font-bold text-gray-700 bg-gray-50/50">30,000원</td>
                     <td className="py-2.5 px-2">26 - 30세</td>
                     <td className="py-2.5 px-2">26 - 28세</td>
                   </tr>
                   <tr>
                     <td className="py-2.5 px-2 font-bold text-gray-700 bg-gray-50/50">40,000원</td>
                     <td className="py-2.5 px-2">31 - 34세</td>
                     <td className="py-2.5 px-2">29 - 31세</td>
                   </tr>
                   <tr>
                     <td className="py-2.5 px-2 font-bold text-gray-700 bg-gray-50/50">50,000원</td>
                     <td className="py-2.5 px-2">35 - 38세</td>
                     <td className="py-2.5 px-2">32 - 34세</td>
                   </tr>
                   <tr>
                     <td className="py-2.5 px-2 font-bold text-gray-700 bg-gray-50/50">60,000원</td>
                     <td className="py-2.5 px-2">38세 이상</td>
                     <td className="py-2.5 px-2">35세 이상</td>
                   </tr>
                </tbody>
              </table>
              <p className="mt-2 text-[9px] md:text-xs text-gray-400 font-medium">※ 한국식 나이(세는 나이) 기준으로 산정됩니다.</p>
            </div>
          </div>

          {/* III. 매칭 진행 및 이용 수칙 */}
          <div className="mb-10 md:mb-16">
            <h3 className="text-lg md:text-2xl font-black text-eum-dark mb-4">III. 매칭 진행 및 이용 수칙</h3>
            <div className="overflow-x-auto -mx-2 px-2 pb-2">
              <table className="w-full text-[10px] md:text-sm border-t border-gray-200 min-w-[320px]">
                <thead className="bg-gray-50/50">
                  <tr>
                    <th className="py-2.5 px-3 text-left font-bold text-gray-600 w-[100px] md:w-[140px] border-b border-gray-100">항목</th>
                    <th className="py-2.5 px-3 text-left font-bold text-gray-600 border-b border-gray-100">규정 및 처리 기준</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                   <tr>
                     <td className="py-2.5 px-3 font-bold text-gray-500 bg-gray-50/30">응답 의무</td>
                     <td className="py-2.5 px-3 font-medium">
                       프로필 발송 후 <span className="font-bold text-red-600">24시간(1일) 이내 무응답</span> 시, <span className="font-bold">거절</span>한 것으로 간주하여 횟수 차감
                     </td>
                   </tr>
                   <tr>
                     <td className="py-2.5 px-3 font-bold text-gray-500 bg-gray-50/30">매칭 효율화</td>
                     <td className="py-2.5 px-3">
                        회원님의 프로필은 3명 내외에게 동시에 전달될 수 있으며, 선택을 받을 시 추가 프로필이 제공됩니다. (지인 차단 선 적용)
                     </td>
                   </tr>
                   <tr className="bg-red-50/30">
                     <td className="py-2.5 px-3 font-bold text-red-600 bg-red-50/50">🚫 번복 패널티</td>
                     <td className="py-2.5 px-3 text-red-800 font-bold">
                       쌍방 수락 후 단순 변심으로 취소 시, <span className="underline">향후 4회(4주간) 프로필 제공 제한</span><br/>
                       <span className="text-[9px] md:text-xs font-medium">(최소 보장 횟수 12회에서 자동 차감 처리됨)</span>
                     </td>
                   </tr>
                   <tr>
                     <td className="py-2.5 px-3 font-bold text-gray-500 bg-gray-50/30">주관적 불만</td>
                     <td className="py-2.5 px-3 font-medium">
                        약속된 '보장 카테고리(스펙/조건)'를 충족했다면 회사는 의무를 다한 것임. 단순 느낌/분위기 등 주관적 불만족은 환불 사유 불가
                     </td>
                   </tr>
                   <tr>
                     <td className="py-2.5 px-3 font-bold text-gray-500 bg-gray-50/30">기간 정지</td>
                     <td className="py-2.5 px-3 font-medium">
                       장기 입원/출장 증빙 시 1회, <span className="font-bold">최대 30일 정지</span> 가능 (단순 변심/바쁨/정지 기간 중 환불 불가)
                     </td>
                   </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* IV. 이용권(선불) 환불 규정 */}
          <div className="mb-10 md:mb-16">
            <h3 className="text-lg md:text-2xl font-black text-eum-dark mb-4 md:mb-6">IV. 이용권 환불 규정</h3>
            
            <div className="space-y-6">
              <div className="bg-gray-50/80 p-5 rounded-2xl border border-gray-100 shadow-inner">
                <h4 className="font-bold text-sm md:text-base text-gray-900 mb-2">1. 회사 귀책 사유 환불</h4>
                <p className="text-[10px] md:text-sm text-gray-600 mb-3">회사가 약속된 주기 내에 프로필을 제공하지 못하고 고객이 연장을 원치 않을 경우</p>
                <div className="p-3 bg-white rounded-xl border border-gray-100">
                    <p className="font-bold text-eum-accent text-[11px] md:text-base leading-tight">
                        환불액 = [결제금액] - [(결제금액 ÷ 12) × 제공된 프로필 수]
                    </p>
                    <p className="text-[9px] md:text-xs text-gray-400 mt-1">※ 나머지 횟수에 해당하는 금액을 100% 환불합니다.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <div className="p-4 bg-gray-50/50 border-b border-gray-100">
                    <h4 className="font-bold text-sm md:text-base text-gray-900">2. 고객 변심에 의한 중도 해지</h4>
                    <p className="text-[9px] md:text-xs text-gray-500 mt-1">회사는 제공 준비가 되었으나 고객의 개인 사정으로 중단하는 경우</p>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-[10px] md:text-sm text-center min-w-[320px]">
                        <thead className="bg-gray-50/30">
                            <tr>
                                <th className="py-2.5 px-2 font-bold text-gray-500 w-[60px]">단계</th>
                                <th className="py-2.5 px-2 font-bold text-gray-500">시점</th>
                                <th className="py-2.5 px-2 font-bold text-gray-500">환불액 및 차감 기준</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            <tr>
                                <td className="py-3 px-2 font-bold">1단계</td>
                                <td className="py-3 px-2">상담 완료 전</td>
                                <td className="py-3 px-2 font-bold text-blue-600">전액 환불</td>
                            </tr>
                            <tr>
                                <td className="py-3 px-2 font-bold">2단계</td>
                                <td className="py-3 px-2">상담 완료 후<br/><span className="text-[9px] text-gray-400">(매칭 개시 전)</span></td>
                                <td className="py-3 px-2 font-bold text-red-600 leading-tight">
                                    50% 공제 후 환불<br/>
                                    <span className="text-[8px] md:text-[10px] font-medium text-gray-400">(분석 및 프로필 제작비용)</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="py-3 px-2 font-bold">3단계</td>
                                <td className="py-3 px-2">서비스 개시 후<br/><span className="text-[9px] text-gray-400">(1회 이상 제공)</span></td>
                                <td className="py-3 px-2 leading-snug">
                                    <span className="font-bold text-red-600">잔여금의 일할 계산 - 위약금 10%</span><br/>
                                    <span className="text-[8px] md:text-[10px] text-gray-400 font-medium">
                                        (남은 50% 금액에서 프로필 수만큼 차감)
                                    </span>
                                </td>
                            </tr>
                            <tr className="bg-gray-50/30">
                                <td className="py-3 px-2 font-bold">4단계</td>
                                <td className="py-3 px-2 font-bold text-gray-400">목적 달성</td>
                                <td className="py-3 px-2 font-bold text-gray-400">환불 불가</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
              </div>
            </div>
          </div>

          {/* V. 매칭비(후불) 환불 규정 */}
          <div>
             <h3 className="text-lg md:text-2xl font-black text-eum-dark mb-4">V. 매칭비(후불) 환불 규정</h3>
             <div className="overflow-x-auto -mx-2 px-2 pb-2">
                 <table className="w-full text-[10px] md:text-sm border-t border-gray-200 min-w-[320px]">
                     <thead className="bg-gray-50/50">
                         <tr>
                             <th className="py-2.5 px-3 text-left font-bold text-gray-600 w-1/4 border-b border-gray-100">상황</th>
                             <th className="py-2.5 px-3 text-left font-bold text-gray-600 w-1/4 border-b border-gray-100">환불 여부</th>
                             <th className="py-2.5 px-3 text-left font-bold text-gray-600 border-b border-gray-100">상세 이유 및 패널티</th>
                         </tr>
                     </thead>
                     <tbody className="divide-y divide-gray-50">
                         <tr>
                             <td className="py-3 px-3 font-bold bg-gray-50/30">약속 확정 전 취소</td>
                             <td className="py-3 px-3 font-bold text-red-500">불가</td>
                             <td className="py-3 px-3 text-[11px] md:text-sm">이미 상대 수락을 얻어낸 대가이므로 환불 불가</td>
                         </tr>
                         <tr className="bg-red-50/30">
                             <td className="py-3 px-3 font-bold bg-red-50/50 text-red-600">약속 확정 후 취소</td>
                             <td className="py-3 px-3 font-bold text-red-600">불가</td>
                             <td className="py-3 px-3 text-red-600 font-bold text-[11px] md:text-sm">
                                매칭비 소멸 + 향후 4주간 제공 제한 (차감)
                             </td>
                         </tr>
                         <tr>
                             <td className="py-3 px-3 font-bold bg-blue-50/50 text-blue-700">상대방 노쇼</td>
                             <td className="py-3 px-3 font-bold text-blue-600">전액 환불</td>
                             <td className="py-3 px-3 font-bold text-blue-600 text-[11px] md:text-sm leading-tight">
                                100% 환불 및 최우선 매칭 지원<br/>
                                <span className="text-[9px] md:text-[11px]">(가해 회원은 즉시 영구제명 및 잔여금 몰수)</span>
                             </td>
                         </tr>
                     </tbody>
                 </table>
             </div>
          </div>

        </div>
      </section>

      <div className="bg-[#0f0f0f] text-white">
        <Footer />
      </div>
    </div>
  );
};

export default PolicyPage;
