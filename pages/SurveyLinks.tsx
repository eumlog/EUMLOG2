import React from 'react';
import { PageHeader } from '../components/Shared';
import Footer from '../components/Footer';
import { ClipboardList, UserCircle } from 'lucide-react';

const SurveyLinks = () => {
  return (
    <div className="bg-eum-bg min-h-screen flex flex-col">
      <PageHeader title="설문 및 프로필 작성" subtitle="Survey & Profile" />
      
      <div className="flex-1 flex items-center justify-center py-16 px-6">
        <div className="max-w-md w-full space-y-8">
          {/* 상세 설문 작성 (크게) */}
          <a 
            href="https://tally.so/r/KYoR4D" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full bg-eum-dark text-white rounded-[2rem] p-8 md:p-10 text-center shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-800"
          >
            <ClipboardList className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 text-eum-accent" />
            <h2 className="text-2xl md:text-3xl font-black mb-2">상세 설문 작성</h2>
            <p className="text-sm md:text-base text-gray-400 font-medium">매칭을 위한 상세 정보를 입력해 주세요.</p>
          </a>

          {/* 프로필 카드 작성 (작게) */}
          <div className="text-center pt-4">
            <a 
              href="https://m.site.naver.com/1ZJQn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full bg-white border-2 border-gray-200 text-gray-700 rounded-2xl p-5 text-center shadow-sm hover:border-eum-accent hover:text-eum-accent transition-all duration-300"
            >
              <UserCircle className="w-8 h-8 mx-auto mb-2 opacity-80" />
              <h3 className="text-lg md:text-xl font-bold">프로필 카드 작성</h3>
            </a>
            <p className="mt-3 text-xs md:text-sm text-gray-500 font-bold bg-gray-100 inline-block px-4 py-2 rounded-full">
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
