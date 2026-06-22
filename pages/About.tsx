
import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/Shared';
import Footer from '../components/Footer';
import { MessageCircle, Heart, Shield, CheckCircle2, UserCheck, Smartphone, Lock, AlertCircle, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-[#fcfbf9] min-h-screen font-sans">
      <PageHeader 
        title="이음로그 이야기" 
        subtitle="About Us" 
      />
      
      {/* 1. Intro Section */}
      <section className="pt-20 pb-16 px-6 max-w-[640px] mx-auto">
        <h1 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight mb-10 keep-all text-center">
          3,200명이 선택한 광주·전남 1:1 소개팅,<br/>
          <span className="text-eum-accent">이음로그</span> 입니다.
        </h1>

        <div className="space-y-6 text-[15px] md:text-[17px] text-gray-700 leading-[1.8] keep-all font-medium">
          <p className="font-bold text-gray-900 text-lg">광주, 전남.</p>
          <p>
            아는 사람은 많은데, 생각보다 소개받기는 더 어려운 곳입니다.
          </p>
          <p>
            직장, 학교, 지인이 흔히 다 연결되어 있어서 누굴 소개받아도 어디선가 마주칠까 걱정이고 부담스럽죠.
          </p>
          <div className="pl-4 border-l-2 border-eum-accent text-gray-900 font-bold my-8">
            <p>소개팅을 안 하는 게 아닙니다.</p>
            <p>못 하는 겁니다.</p>
          </div>
          <p>
            앱은 너무 가볍고, 결혼정보회사는 수백만 원..
            그렇게 고민만 하다 시간이 지납니다.
          </p>
          <p className="font-bold">
            이음로그를 만든 가장 큰 이유입니다.
          </p>
        </div>
      </section>

      {/* 2. History Section */}
      <section className="py-16 px-6 max-w-[640px] mx-auto border-t border-gray-200">
        <div className="flex items-center gap-2 mb-6">
          <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold tracking-wide">시작</span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 keep-all">
          6:6 소개팅 '우연히 반하다'
        </h2>
        <div className="space-y-6 text-[15px] md:text-[17px] text-gray-700 leading-[1.8] keep-all">
          <img src="https://wooban.co.kr/wp-content/uploads/2026/06/서술3_복사본-_4_-002-1.png" alt="6:6 소개팅 우연히 반하다" className="w-full rounded-2xl shadow-sm mb-6 object-cover aspect-video" />
          <p>
            괜찮은 친구들이 다들 <span className="font-bold text-gray-900">"주변에 만날 사람이 없다"</span>는 말만 했어요. 
          </p>
          <p>
            그래서 몇 명을 조심스레 연결해 줬는데, 연애를 넘어 결혼까지 한 친구들도 생겼어요. 그게 계기가 돼서 <span className="bg-orange-50 px-1 font-bold text-gray-900">6:6 소개팅 '우연히 반하다'</span>를 처음 만들었습니다.
          </p>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm my-8 flex flex-col md:flex-row gap-6 justify-around text-center">
            <div>
              <p className="text-gray-400 text-sm font-bold mb-1">운영 기간</p>
              <p className="text-2xl font-black text-gray-900">2년</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm font-bold mb-1">누적 신청</p>
              <p className="text-2xl font-black text-gray-900">3,200명</p>
            </div>
            <div>
              <p className="text-orange-400 text-sm font-bold mb-1">결혼 성사</p>
              <p className="text-2xl font-black text-orange-600">5 커플</p>
            </div>
          </div>
          <p>
            2년을 꼬박 운영하면서 확실히 알게 됐습니다.<br/>
            이 지역에서 좋은 인연을 못 만나는 건 '사람이 없어서'가 아니라, <strong className="text-gray-900">만날 자리가 없었던 겁니다.</strong>
          </p>
          <p>
            그리고 하나 더 확신이 생겼습니다.<br/>
            여러 명을 한꺼번에 보는 것보다, 나한테 맞는 한 사람을 만나는 자리가 꼭 필요하다는 것을.
          </p>
          <p className="font-bold text-lg text-gray-900 mt-8">
            그래서 1:1 맞춤형 소개팅,<br/>
            이음로그가 생겼습니다. 💍
          </p>
        </div>
      </section>

      {/* 3. Positioning Section */}
      <section className="py-20 px-6 bg-white border-t border-gray-100">
        <div className="max-w-[640px] mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 keep-all text-center">
            앱도, 결혼정보회사도 아니에요.
          </h2>
          <div className="space-y-6 text-[15px] md:text-[17px] text-gray-700 leading-[1.8] keep-all text-center">
            <p>
              앱은 너무 가볍고,<br/>
              결혼정보회사는 너무 부담스럽고.<br/>
              단체로 진행하는 로테이션 소개팅은 어색한 분들도 있죠.
            </p>
            <div className="w-12 h-px bg-gray-300 mx-auto my-8"></div>
            <p className="font-bold text-xl text-gray-900">
              이음로그는 좋은 점만 담았습니다.
            </p>
            <p className="text-gray-600 bg-gray-50 p-6 rounded-2xl mx-auto mt-6 inline-block">
              광주·전남에서<br/>
              <strong className="text-gray-900">괜찮은 한 사람</strong>을<br/>
              신중하게 1:1로 연결합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Exclusiveness Section */}
      <section className="py-20 px-6 bg-[#252525] text-white">
        <div className="max-w-[640px] mx-auto text-center">
          <div className="w-12 h-12 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center mx-auto mb-6">
            <Lock className="w-6 h-6" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-8 keep-all">
            이음로그는 깐깐하게 받습니다. 🚫
          </h2>
          <div className="space-y-6 text-[15px] md:text-[17px] text-gray-300 leading-[1.8] keep-all">
            <p>
              신청하면 외모와 스타일을 봅니다. 상담할 때 느껴지는 분위기도 봐요.<br/>
              솔직하게 말씀드리면 <strong className="text-white">신청자의 50~60%만</strong> 최종 선정됩니다.
            </p>
            <p>
              심사라는 과정이 다소 불편하게 느껴지실 수도 있어요.<br/>
              하지만 명확한 이유가 있습니다.
            </p>
            <div className="bg-white/10 p-6 rounded-2xl mt-8">
              <p className="font-bold text-white text-lg">
                이음로그에 들어오는 사람은<br/>
                전부 검증된 괜찮은 분들입니다.
              </p>
              <p className="mt-4 text-[#f0c8b0]">
                매너 있고 검증된 분들끼리만 만나니까,<br/>
                만남의 질이 확연히 다릅니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-[640px] mx-auto">
          <div className="flex items-center justify-center gap-2 mb-8 text-pink-500 font-bold">
            <Heart className="w-5 h-5 fill-current" />
            <h2 className="text-xl md:text-2xl text-gray-900">
              실제로 연인이 된 분들의 카톡입니다 💘
            </h2>
          </div>
          
          <div className="space-y-6 mb-10">
            <div className="bg-white p-6 rounded-[2rem] rounded-tl-none shadow-sm border border-gray-100 max-w-[85%]">
              <p className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed">
                "서로 잘 맞는 사람을 소개해주셔서 자연스럽게 가까워질 수 있었습니다 ㅎㅎ<br/>주변에 소개팅 고민하는 사람이 있다면 한 번쯤 추천해주고 싶어요 "
              </p>
            </div>

            <div className="bg-[#e4eed7] p-6 rounded-[2rem] rounded-tr-none shadow-sm border border-[#d2e0c1] max-w-[85%] ml-auto">
              <p className="text-[14px] md:text-[15px] text-gray-800 leading-relaxed text-right">
                "솔직히 처음엔 기대 안 했거든요. 소개팅 몇 번 해봤는데 다 별로여서요. 근데 이번엔 첫만남부터 대화가 잘 됐어요. 크리스마스부터 만나고 있는데, 요즘이 제일 행복해요."
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <img src="https://wooban.co.kr/wp-content/uploads/2026/06/커플인증9_복사본-001.png" alt="커플 후기" className="w-full h-auto" />
            </div>
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <img src="https://wooban.co.kr/wp-content/uploads/2026/06/커플인증9_복사본-_2_-001.png" alt="커플 후기" className="w-full h-auto" />
            </div>
             <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <img src="https://wooban.co.kr/wp-content/uploads/2026/06/커플인증9_복사본-_1_-001.png" alt="커플 후기" className="w-full h-auto" />
            </div>
             <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <img src="https://wooban.co.kr/wp-content/uploads/2026/06/커플인증10-001.png" alt="커플 후기" className="w-full h-auto" />
            </div>
          </div>

          <div className="text-center mt-12 bg-white px-6 py-4 rounded-xl shadow-sm border border-gray-100 inline-block w-full">
            <p className="font-bold text-gray-900">실제로 만나서 예쁘게 연애 중인</p>
            <p className="text-eum-accent font-bold mb-2">광주/전남 커플들 후기 👩‍❤️‍👨</p>
            <p className="text-xs text-gray-400 font-medium">인스타에서 매주 업데이트 중입니다</p>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section className="py-20 px-6 max-w-[640px] mx-auto border-t border-gray-200">
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center text-2xl">
            🙋
          </div>
        </div>
        <h2 className="text-2xl font-black text-center text-gray-900 mb-10 tracking-tight">자주 묻는 질문</h2>
        
        <div className="space-y-8">
          <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
            <div className="flex gap-3 items-start mb-3">
              <span className="text-eum-accent font-black text-lg">Q.</span>
              <p className="font-bold text-gray-900 mt-0.5">지인 차단이 진짜 확실히 되나요?</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-gray-400 font-black text-lg">A.</span>
              <div className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed space-y-2 mt-0.5">
                <p>마주치기 싫은 지인 이름을 사전에 입력하면, 매칭풀에서 <span className="font-bold text-red-500">원천 차단</span>됩니다.</p>
                <p>또, 프로필 사진을 보기 전에 '초성·나이·지역'이 먼저 공개됩니다. 지인 같으면 즉시 다른 프로필로 교체해 드립니다.</p>
                <p className="bg-gray-50 p-3 rounded-lg text-sm font-bold text-gray-900">두 단계로 철저하게 막기 때문에, 아는 사람이 나올 수 없는 구조예요.</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
            <div className="flex gap-3 items-start mb-3">
              <span className="text-eum-accent font-black text-lg">Q.</span>
              <p className="font-bold text-gray-900 mt-0.5">아무나 가입 가능한가요?</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-gray-400 font-black text-lg">A.</span>
              <div className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed mt-0.5">
                <p>아닙니다. 신청서를 바탕으로 <strong>외모·스타일·가치관·상담 분위기</strong>까지 꼼꼼히 보고 선정합니다.</p>
                <p className="font-bold mt-2 text-gray-900">솔직한 선정률은 50~60% 정도입니다.</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
            <div className="flex gap-3 items-start mb-3">
              <span className="text-eum-accent font-black text-lg">Q.</span>
              <p className="font-bold text-gray-900 mt-0.5">사진이 유출될까 너무 걱정돼요.</p>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-gray-400 font-black text-lg">A.</span>
              <div className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed mt-0.5">
                <p>프로필 캡처 시도 시, 보안 시스템에 의해 운영자에게 <strong className="text-red-500">캡처 알림이 즉시 자동 전송</strong>됩니다.</p>
                <p>유출 시도 시 경고 없이 즉시 <strong className="text-gray-900">영구 퇴출 및 법적 조치</strong>됩니다. 안심하셔도 좋습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Conclusion Section */}
      <section className="py-24 px-6 bg-eum-dark text-white text-center">
        <div className="max-w-[640px] mx-auto space-y-6 text-[16px] md:text-[18px] font-medium leading-[1.8] keep-all">
          <p className="text-gray-400 text-sm mb-8">마무리하며</p>
          <p>
            솔직히 말씀드려, 이음로그가 모든 분께 맞는 서비스는 아닐 겁니다.<br/>
            가볍게 외로움만 달랠 분을 찾고 계시다면 이음로그와는 결이 맞지 않을 수 있어요.
          </p>
          <div className="py-6">
            <Sparkles className="w-8 h-8 mx-auto text-eum-accent mb-6" />
            <p className="font-bold text-xl md:text-2xl leading-tight">
              다만 <span className="text-eum-accent">"이제 제대로 된 사람 만나고 싶다."</span>는<br/>
              생각이 드신다면,
            </p>
            <p className="font-bold text-xl md:text-2xl mt-2">
              이음로그가 그 확실한 시작이 되어줄 거예요.
            </p>
          </div>
          <div className="w-12 h-px bg-gray-600 mx-auto my-6"></div>
          <p className="text-gray-300">
            당신이 망설이는 지금 이 순간에도,<br/>
            매주 누군가는 이곳에서 진짜 연애를 시작하고 있습니다.
          </p>

          <div className="mt-12 pt-8">
            <Link to="/links" className="inline-block bg-white text-eum-dark px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              이음로그 신청하기
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

