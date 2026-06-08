import React from 'react';
import Footer from '../components/Footer';
import { UserPlus, RotateCcw, Heart } from 'lucide-react';

const Wooban = () => {
  return (

    <div className="bg-[#F8F6FC] min-h-screen flex flex-col pt-12 md:pt-16">
      <div className="flex-1 flex items-start justify-center py-10 px-6">
        <div className="max-w-md w-full space-y-8 mt-4 md:mt-8">
          
          {/* Header Title */}
          <div className="text-center pb-2">
            <div className="inline-flex items-center justify-center bg-purple-900 text-purple-100 px-4 py-1.5 rounded-full text-xs font-bold mb-4 shadow-sm border border-purple-800/30">
              <Heart className="w-3.5 h-3.5 text-purple-300 mr-1.5 fill-purple-300" />
              우연히반하다
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
              6:6 소개팅 신청
            </h1>
          </div>

          <div className="space-y-4">
            {/* New Participant Button (Larger) */}
            <a 
              href="https://m.site.naver.com/1nLMG"
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full bg-[#8A6EE5] text-white rounded-[2rem] p-8 text-center shadow-lg shadow-purple-500/20 hover:bg-[#775BD1] hover:-translate-y-1 transition-all duration-300"
            >
              <UserPlus className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4 text-purple-200 group-hover:scale-110 transition-transform duration-300" />
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-2">신규 참가</h2>
              <p className="text-[13px] md:text-[14px] text-white/80 font-medium">우연히반하다에 처음 참여하시는 분</p>
            </a>

            {/* Re-participant Button (Smaller) */}
            <a 
              href="https://m.site.naver.com/29PBf"
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full bg-white border-2 border-[#EAE3FA] text-gray-800 rounded-[1.5rem] p-5 text-center shadow-sm hover:border-[#8A6EE5] hover:text-[#8A6EE5] transition-all duration-300"
            >
              <div className="flex items-center justify-center gap-2">
                <RotateCcw className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-lg md:text-xl font-bold">재참가</h3>
              </div>
              <p className="mt-1 text-[11px] md:text-xs text-gray-500 font-medium">
                기존에 참여하신 이력이 있는 분
              </p>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Wooban;
