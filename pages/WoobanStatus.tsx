import React, { useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { Loader2, ChevronDown, ChevronUp } from 'lucide-react';

function CohortCard({ cohort, defaultExpanded = false }: { cohort: any, defaultExpanded?: boolean }) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const titleMatch = cohort.titleLine.match(/✨\[(.*?)\]\s*(.*)/);
  let badge = '';
  let schedule = '';
  let age = '';
  if (titleMatch) {
    badge = titleMatch[1];
    const restParts = titleMatch[2].split(' / ');
    schedule = restParts[0].trim();
    if (restParts.length > 1) age = restParts.slice(1).join(' / ').trim();
  } else {
    schedule = cohort.titleLine.replace('✨', '').trim();
  }

  const isMenClosed = cohort.menTitle.includes('마감');
  const isWomenClosed = cohort.womenTitle.includes('마감');
  const isFullyClosed = isMenClosed && isWomenClosed;

  const getAvailableCount = (list: string[]) => {
    let count = 0;
    for (const item of list) {
      if (!item) continue;
      const match = item.match(/^([①-⑩])\s*(.*)$/);
      if (match) {
        const desc = match[2];
        if (!desc || desc === '(공석)') count++;
      }
    }
    return count;
  };

  const menAvailable = getAvailableCount(cohort.menList);
  const womenAvailable = getAvailableCount(cohort.womenList);

  return (
    <div className={`bg-white rounded-[24px] border transition-all duration-300 overflow-hidden ${isFullyClosed ? 'border-gray-200 opacity-80' : 'border-[#EBE4FF] hover:border-[#D1C4F9] shadow-[0_4px_20px_-10px_rgba(138,110,229,0.15)] hover:shadow-[0_8px_30px_-10px_rgba(138,110,229,0.2)]'}`}>
      {/* Header (Clickable) */}
      <button 
        onClick={() => setExpanded(!expanded)} 
        className={`w-full px-5 py-4 border-b flex flex-col gap-2.5 cursor-pointer transition-colors text-left ${isFullyClosed ? 'border-gray-100 bg-gray-50/50 hover:bg-gray-100/50' : 'border-[#F4F0FF] bg-[#FCFBFF] hover:bg-[#F8F5FF]'}`}
      >
         {badge && (
           <div>
             <span className={`inline-flex items-center justify-center border font-extrabold text-[12px] px-2.5 py-1 rounded-md tracking-wide ${isFullyClosed ? 'border-gray-300 text-gray-500 bg-white' : 'border-[#8A6EE5] text-[#8A6EE5] bg-white shadow-sm'}`}>
               {badge}
             </span>
           </div>
         )}
         <div className="flex flex-wrap items-center gap-2 w-full">
           <span className={`font-black text-[17px] md:text-[18px] tracking-tight whitespace-nowrap ${isFullyClosed ? 'text-gray-500' : 'text-gray-900'}`}>{schedule}</span>
           {age && <span className="text-gray-300 font-bold mx-0.5">|</span>}
           {age && (
              <span className={`font-bold text-[15px] md:text-[16px] tracking-tight ${isFullyClosed ? 'text-gray-400' : 'text-[#6B21A8]'}`}>
                {age}
              </span>
           )}
           
           <div className={`ml-auto transition-transform duration-300 ${isFullyClosed ? 'text-gray-400' : 'text-[#8A6EE5]'}`}>
             {expanded ? <ChevronUp size={20} strokeWidth={2.5} /> : <ChevronDown size={20} strokeWidth={2.5} />}
           </div>
         </div>
         
         {/* Summary badges when collapsed */}
         {!expanded && (
           <div className="flex flex-wrap gap-2 mt-1">
             {isFullyClosed ? (
               <span className="text-[12px] md:text-[13px] font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md whitespace-nowrap">모집 마감</span>
             ) : (
               <>
                 {isMenClosed ? (
                   <span className="text-[12px] md:text-[13px] font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md whitespace-nowrap">남성 마감</span>
                 ) : menAvailable <= 2 ? (
                   <span className="text-[12px] md:text-[13px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100 whitespace-nowrap">남성 {menAvailable}자리</span>
                 ) : (
                   <span className="text-[12px] md:text-[13px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100 whitespace-nowrap">남성 모집중</span>
                 )}
                 {isWomenClosed ? (
                   <span className="text-[12px] md:text-[13px] font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md whitespace-nowrap">여성 마감</span>
                 ) : womenAvailable <= 2 ? (
                   <span className="text-[12px] md:text-[13px] font-bold text-pink-600 bg-pink-50 px-2.5 py-1 rounded-md border border-pink-100 whitespace-nowrap">여성 {womenAvailable}자리</span>
                 ) : (
                   <span className="text-[12px] md:text-[13px] font-bold text-pink-600 bg-pink-50 px-2.5 py-1 rounded-md border border-pink-100 whitespace-nowrap">여성 모집중</span>
                 )}
               </>
             )}
           </div>
         )}
      </button>
      
      {/* Body grid */}
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col md:flex-row p-5 md:p-6 text-[14.5px] md:text-[15px]">
           {/* Men List */}
           <div className="flex-1 md:pr-5 md:border-r border-gray-100 pb-5 md:pb-0 mb-5 md:mb-0 border-b md:border-b-0">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-100">
                 <span className="font-bold text-gray-800">남성 참가자</span>
                 {isMenClosed ? (
                   <span className="text-white font-bold text-[11px] px-2 py-0.5 rounded uppercase tracking-wider bg-gray-400 ml-auto">마감</span>
                 ) : (
                   <span className="text-blue-600 font-bold text-[11px] px-2 py-0.5 rounded uppercase tracking-widest bg-blue-50 ml-auto">모집중</span>
                 )}
              </div>
              <div className={`flex flex-col gap-1.5 ${isMenClosed ? 'opacity-60' : ''}`}>
                {cohort.menList.map((item: string, i: number) => {
                   if (!item) return null;
                   const match = item.match(/^([①-⑩])\s*(.*)$/);
                   if (!match) return <p key={i} className="font-medium text-gray-600 pl-1">{item}</p>;
                   const num = match[1];
                   const desc = match[2];
                   const isEmpty = !desc || desc === '(공석)';

                   if (isEmpty) {
                     return (
                       <div key={i} className="flex items-center gap-2 py-1">
                         <span className="w-5 text-center font-bold text-gray-300">{num}</span>
                         <span className={`font-semibold tracking-tight ${isMenClosed ? 'text-gray-400' : 'text-blue-500'}`}>
                           {isMenClosed ? '(공석)' : '신청 가능'}
                         </span>
                       </div>
                     );
                   }

                   return (
                     <div key={i} className="flex items-center gap-2 py-1">
                       <span className="w-5 text-center font-bold text-gray-400">{num}</span>
                       <span className="font-semibold tracking-tight text-gray-800">{desc}</span>
                     </div>
                   );
                })}
              </div>
           </div>

           {/* Women List */}
           <div className="flex-1 md:pl-5">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-100">
                 <span className="font-bold text-gray-800">여성 참가자</span>
                 {isWomenClosed ? (
                   <span className="text-white font-bold text-[11px] px-2 py-0.5 rounded uppercase tracking-wider bg-gray-400 ml-auto">마감</span>
                 ) : (
                   <span className="text-pink-600 font-bold text-[11px] px-2 py-0.5 rounded uppercase tracking-widest bg-pink-50 ml-auto">모집중</span>
                 )}
              </div>
              <div className={`flex flex-col gap-1.5 ${isWomenClosed ? 'opacity-60' : ''}`}>
                {cohort.womenList.map((item: string, i: number) => {
                   if (!item) return null;
                   const match = item.match(/^([①-⑩])\s*(.*)$/);
                   if (!match) return <p key={i} className="font-medium text-gray-600 pl-1">{item}</p>;
                   const num = match[1];
                   const desc = match[2];
                   const isEmpty = !desc || desc === '(공석)';

                   if (isEmpty) {
                     return (
                        <div key={i} className="flex items-center gap-2 py-1">
                          <span className="w-5 text-center font-bold text-gray-300">{num}</span>
                          <span className={`font-semibold tracking-tight ${isWomenClosed ? 'text-gray-400' : 'text-pink-500'}`}>
                            {isWomenClosed ? '(공석)' : '신청 가능'}
                          </span>
                        </div>
                     );
                   }

                   return (
                     <div key={i} className="flex items-center gap-2 py-1">
                       <span className="w-5 text-center font-bold text-gray-400">{num}</span>
                       <span className="font-semibold tracking-tight text-gray-800">{desc}</span>
                     </div>
                   );
                })}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

const defaultStatusText = `여순광 6:6 로테이션 소개팅💖참가자 현황💖
✔️ 여자는 나이 제한 없이 참여 가능합니다.
✔️ 여성분 지인 2인 이상 동반 신청 시, 1인당 1만원 할인!
(동반자는 꼭 같은 기수일 필요는 없어요)

✨[160기] 6/5(금) 20시 / 97-89년생
👨남 (모집마감)🚫
① 90 대기업
② 92 공무원
③ 92 대기업
④ 95 대기업
⑤ 91 대기업
⑥ 92 대기업

👩여 (모집마감)🚫
① 94 직장인
② 94 자영업
③ 92 직장인
④ 92 직장인
⑤ 91 공무원
⑥ 96 직장인

———————————————————————
✨[161기] 6/13(토) 11시 30분 / 98-91년생
👨남 (모집마감)🚫
① 98 대기업
② 93 대기업
③ 92 공무원
④ 95 대기업
⑤ 93 대기업
⑥ 92 직장인

👩여 (모집마감)🚫
① 97 교사
② 97 직장인
③ 95 직장인
④ 95 공무원
⑤ 95 공무원
⑥ 95 공무원

———————————————————————
✨[162기] 6/13(토) 2시 / 02-94년생
👨남 (모집마감)🚫
① 98 직장인
② 98 대기업
③ 97 대기업
④ 97 대기업
⑤ 97 직장인
⑥ 94 직장인

👩여 (모집중)
① 00 직장인
② 99 직장인
③ 01 직장인
④ 98 직장인
⑤
⑥

———————————————————————
✨[163기] 6/19(금) 20시 / 00-93년생
👨남 (모집마감)🚫
① 95 대기업
② 99 직장인
③ 95 대기업
④ 98 대기업
⑤ 97 대기업
⑥ 00 대기업

👩여 (모집마감)🚫
① 98 자영업
② 96 직장인
③ 00 직장인
④ 97 교사
⑤ 95 자영업
⑥ 98 직장인

———————————————————————
✨[164기] 6/27(토) 11시 30분 / 98-90년생
👨남 (모집중)
① 95 대기업
② 91 대기업
③
④
⑤
⑥

👩여 (모집중)
① 93 직장인
② 94 직장인
③ 92 공무원
④ 97 직장인
⑤
⑥

———————————————————————
✨[165기] 6/27(토) 2시 / 02-94년생
👨남 (모집중)
① 96 직장인
② 00 대기업
③ 97 대기업
④ 00 대기업
⑤
⑥

👩여 (모집중)
① 95 공무원
②
③ 
④ 
⑤
⑥

✅ 선정된 분께는 개별 문자가 갑니다.(평일기준1~2일 이내)
📍 우연히반하다 커플 매칭 확률이 높은 이유!
- 외모/직업/성격에 따른 이상형 매칭 시스템
- 한번에 6명을 만날 수 있어 효율적인 시간분배
- 지인 만날 확률 0%로 새 인연을 만들기 OK!

서로 만족스러우실 분들로만 신중하게 선별합니다.
의미 있는 데이트 시간이 될 수 있도록 최선을 다하겠습니다 :)

신청은👉 @woo_ban 💕`;

export default function WoobanStatus() {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'wooban', 'status'), (docSnap) => {
      if (docSnap.exists()) {
        setContent(docSnap.data().content);
      } else {
        setContent(defaultStatusText);
      }
      setLoading(false);
    }, (error) => {
      console.error('Error fetching status:', error);
      setLoading(false);
    });
    return unsub;
  }, []);

  const renderFormattedContent = (textContent: string) => {
    const lines = textContent.split('\n');
    const introText: string[] = [];
    const cohorts: any[] = [];
    const footerText: string[] = [];
    
    let currentSection = 'intro';
    let currentCohort: any = null;
    let currentGroup: 'men' | 'women' | null = null;

    for (const line of lines) {
      const trimmed = line.trim();
      
      if (trimmed.startsWith('✅') || trimmed.startsWith('📍') || currentSection === 'footer') {
        currentSection = 'footer';
        if (trimmed) footerText.push(trimmed);
        continue;
      }

      if (trimmed.includes('——————')) continue;

      if (trimmed.startsWith('✨')) {
        currentSection = 'body';
        currentCohort = {
          titleLine: trimmed,
          menTitle: '',
          menList: [],
          womenTitle: '',
          womenList: [],
        };
        cohorts.push(currentCohort);
        currentGroup = null;
        continue;
      }

      if (currentSection === 'intro') {
        if (trimmed) introText.push(trimmed);
      } else if (currentSection === 'body' && currentCohort) {
        if (trimmed.startsWith('👨')) {
          currentCohort.menTitle = trimmed;
          currentGroup = 'men';
        } else if (trimmed.startsWith('👩')) {
          currentCohort.womenTitle = trimmed;
          currentGroup = 'women';
        } else if (currentGroup === 'men') {
          if (trimmed) currentCohort.menList.push(trimmed);
        } else if (currentGroup === 'women') {
          if (trimmed) currentCohort.womenList.push(trimmed);
        }
      }
    }

    // Clean up intro text
    const introBody = Array.from(new Set(introText)).filter(line => {
      return !line.includes('참가자 현황') && line.trim() !== '';
    });

    if (introBody.length === 0 && cohorts.length === 0 && footerText.length === 0) {
      return (
        <div className="bg-white rounded-[24px] p-8 shadow-sm text-center border border-[#EBE4FF]">
          <p className="text-gray-500 font-medium tracking-tight">현황이 업데이트 중입니다.</p>
        </div>
      );
    }

    return (
      <div className="space-y-10">
        
        {/* INTRO */}
        {introBody.length > 0 && (
          <div className="bg-white rounded-[24px] p-6 md:p-8 shadow-sm text-gray-900 border border-[#EBE4FF] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#8A6EE5]"></div>
            <div className="space-y-2">
              {introBody.map((line, i) => {
                  if (line.startsWith('✔️')) {
                    return (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className="text-[#8A6EE5] mt-0.5">✔️</span>
                        <span className="text-[15px] md:text-[16px] font-bold tracking-tight text-gray-800 break-keep leading-tight">
                          {line.replace('✔️', '').trim()}
                        </span>
                      </div>
                    );
                  }
                  if (line.startsWith('(동반자는')) {
                    return <p key={i} className="text-[13.5px] font-medium text-gray-400 ml-7 break-keep">{line}</p>;
                  }
                  if (!line) return null;
                  return <p key={i} className="text-[15px] md:text-[16px] font-medium leading-normal break-keep text-gray-600">{line}</p>;
                })}
              </div>
            </div>
        )}

        {/* COHORTS */}
        {cohorts.length > 0 && (
          <div className="space-y-4 md:space-y-5">
            {cohorts.map((cohort, idx) => (
              <CohortCard key={idx} cohort={cohort} defaultExpanded={false} />
            ))}
          </div>
        )}

        {/* FOOTER */}
        {footerText.length > 0 && (
          <div className="pt-8 border-t border-gray-100 pb-10">
            {footerText.map((line, i) => {
              if (!line) return <div key={i} className="h-4" />;
              if (line.startsWith('✅')) {
                return (
                  <div key={i} className="bg-[#FAF9FF] border border-[#EBE4FF] text-[#6B21A8] font-bold text-[15px] p-5 rounded-2xl mb-8 shadow-sm break-keep flex items-center justify-center text-center">
                    {line.replace('✅', '').trim()}
                  </div>
                );
              }
              if (line.startsWith('📍')) {
                return (
                  <h4 key={i} className="font-bold text-gray-900 text-[17px] mt-2 mb-4 tracking-tight flex items-center gap-2">
                    📍 {line.replace('📍', '').trim()}
                  </h4>
                );
              }
              if (line.startsWith('-')) {
                return (
                  <div key={i} className="flex items-start gap-2 ml-1 mb-2">
                    <span className="text-gray-400 font-bold">-</span>
                    <p className="text-[15px] text-gray-600 font-medium break-keep">
                      {line.replace('-', '').trim()}
                    </p>
                  </div>
                );
              }
              if (line.includes('신청은👉')) {
                return null;
              }
              return <p key={i} className="text-[15px] text-gray-500 font-medium mb-1 break-keep">{line}</p>;
            })}
          </div>
        )}

      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-[#8A6EE5]" />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-24 font-sans selection:bg-[#EBE4FF]">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 pt-16 pb-8 px-6 text-center">
        <div className="max-w-2xl mx-auto">
           <h1 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
             WOOBAN 참가자 현황
           </h1>
           <p className="text-[#8A6EE5] font-semibold text-sm mt-2">실시간으로 업데이트 됩니다.</p>
        </div>
      </div>

      <div className="flex-1 max-w-2xl w-full mx-auto px-4 md:px-6 py-8">
        {/* Content Area */}
        {renderFormattedContent(content || "등록된 현황이 없습니다.")}
      </div>
      
      {/* Floating Banner */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-[#EBE4FF] shadow-[0_-10px_30px_-15px_rgba(138,110,229,0.2)] z-50">
        <div className="max-w-2xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#8A6EE5] to-[#D8B4FE] rounded-[20px] blur opacity-40 group-hover:opacity-60 transition duration-1000 animate-pulse"></div>
          <a
            href="#/wooban"
            className="relative block w-full bg-gradient-to-r from-[#8A6EE5] to-[#7C5EE0] text-white py-4 rounded-2xl text-center font-bold text-[17px] shadow-md hover:shadow-lg active:scale-[0.98] transition-all overflow-hidden"
          >
            <div 
              className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/30" 
              style={{ animation: 'shimmer 2s infinite' }}
            >
              <style>{`
                @keyframes shimmer {
                  0% { transform: translateX(-150%) skewX(-12deg); }
                  100% { transform: translateX(300%) skewX(-12deg); }
                }
              `}</style>
            </div>
            <div className="relative z-10 flex items-center justify-center gap-2">
              <span>6:6 소개팅 신청하기</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
