import React from 'react';
import Footer from '../components/Footer';
import { ClipboardList, UserCircle } from 'lucide-react';

const SurveyLinks = () => {
  return (
    <div className="bg-eum-bg min-h-screen flex flex-col pt-24 md:pt-32">
      <div className="flex-1 flex items-center justify-center py-10 md:py-16 px-6">
        <div className="max-w-sm w-full space-y-6">
          {/* 상단 안내 문구 */}
          <div className="text-center pb-4">
            <div className="inline-block bg-eum-dark text-white px-4 py-1 rounded-full text-[10px] md:text-xs font-bold mb-3">
              중요
            </div>
            <h1 className="text-xl md:text-2xl font-black text-eum-dark leading-tight space-y-1">
              <div>1. <span className="text-eum-accent">상세 설문</span> 작성 후</div>
              <div>2. <span className="text-eum-accent">프로필 카드</span>를 작성해 주세요.</div>
            </h1>
          </div>

          {/* 상세 설문 작성 (크게) */}
          <a 
            href="https://tally.so/r/kdJB7d" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full bg-eum-dark text-white rounded-[2rem] p-6 md:p-8 text-center shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-800"
          >
            <ClipboardList className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 text-eum-accent" />
            <h2 className="text-xl md:text-2xl font-black mb-1">상세 설문 작성</h2>
            <p className="text-[11px] md:text-sm text-gray-400 font-medium">매칭을 위한 상세 정보를 입력해 주세요.</p>
          </a>

          {/* 프로필 카드 작성 (작게) */}
          <div className="text-center pt-2">
            <a 
              href="https://m.site.naver.com/1ZJQn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-white border-2 border-gray-200 text-gray-700 rounded-2xl p-4 text-center shadow-sm hover:border-eum-accent hover:text-eum-accent transition-all duration-300"
            >
              <UserCircle className="w-6 h-6 mx-auto mb-1.5 opacity-80" />
              <h3 className="text-base md:text-lg font-bold">프로필 카드 작성</h3>
            </a>
            <p className="mt-3 text-[10px] md:text-xs text-gray-500 font-bold bg-gray-100 inline-block px-4 py-2 rounded-full">
              ※ <span className="text-eum-accent">상세 설문 작성을 완료해야만</span> 프로필 카드 작성이 가능합니다.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#0f0f0f] text-white">
        <Footer />
      </div>
    </div>
  );
};

export default SurveyLinks;
