
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { ArrowRight, Check, X, Shield, MessageCircle, Coins } from 'lucide-react';
import { PageHeader } from '../components/Shared';

const Landing = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
        
        {/* Page Header */}
        <PageHeader title="광주·전남 1:1 매칭" subtitle="Local Private Matching" />

        {/* Hero Section */}
        <section className="py-20 md:py-32 px-6 max-w-[900px] mx-auto text-center md:text-left">
            <div className="inline-block bg-eum-bg text-eum-accent text-xs md:text-sm font-black px-4 py-2 rounded-full mb-8 border border-eum-accent/10">
                지역 기반 1:1 소개팅
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-eum-dark leading-tight mb-8">
                솔직히 말할게요.<br />
                지방에서 연애하기<br />
                <span className="text-eum-accent">진짜 힘들잖아요.</span>
            </h1>
            <p className="text-base md:text-xl text-gray-600 mb-10 leading-relaxed font-medium keep-all">
                소개팅 앱? 지방은 사람이 없어서 의미가 없고,<br />
                주변 소개? 다 아는 사람이라 부담스럽고,<br />
                그냥 바쁘게 살다 보면 되겠지 하면서 또 1년.<br /><br />
                6:6 단체 소개팅 100회 넘게 운영하며 400커플을 만들었습니다.<br />
                이제 <strong className="text-eum-dark">1:1 매칭</strong>으로 더 확실하게 연결해드립니다.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
                 <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-eum-dark text-white text-lg font-bold px-10 py-5 rounded-full hover:bg-black transition-all shadow-lg">
                    상담 신청하기 <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/service-detail" className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-600 text-lg font-bold px-10 py-5 rounded-full hover:bg-gray-200 transition-all">
                    자세히 보기
                </Link>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-16 pt-10 border-t border-gray-100">
                <div>
                    <span className="block text-3xl md:text-4xl font-black text-eum-accent">400+</span>
                    <span className="block text-sm text-gray-400 font-bold mt-1 uppercase tracking-wider">Matched Couples</span>
                </div>
                <div>
                    <span className="block text-3xl md:text-4xl font-black text-eum-accent">100+</span>
                    <span className="block text-sm text-gray-400 font-bold mt-1 uppercase tracking-wider">Events Held</span>
                </div>
                <div>
                    <span className="block text-3xl md:text-4xl font-black text-eum-accent">100%</span>
                    <span className="block text-sm text-gray-400 font-bold mt-1 uppercase tracking-wider">Local Verified</span>
                </div>
            </div>
        </section>

        {/* Sympathy Section */}
        <section className="py-20 px-6 bg-gray-50">
            <div className="max-w-[900px] mx-auto">
                <p className="text-eum-accent text-sm font-black mb-4 tracking-widest uppercase">01. Empathy</p>
                <h2 className="text-3xl md:text-4xl font-black text-eum-dark mb-10 leading-tight">
                    이런 경험 있으면<br />손 들어보세요 ✋
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {[
                        { msg: "회사랑 집만 왔다갔다 하는데 어디서 만나요", sub: "새로운 사람 만날 일이 진짜 없는 사람" },
                        { msg: "소개해달라고 하기도 민망하고...", sub: "부탁하기도 애매하고, 어색해질까봐 걱정인 사람" },
                        { msg: "주변에 괜찮은 사람은 다 연애 중임", sub: "만날 사람 풀 자체가 너무 좁은 사람" },
                        { msg: "바쁘다는 핑계로 미루다가 벌써 몇 년째", sub: "언젠간 되겠지 하다가 시간만 가는 사람" }
                    ].map((item, i) => (
                        <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:border-eum-accent/30 transition-all group">
                            <p className="text-lg md:text-xl font-bold text-gray-800 mb-3 group-hover:text-eum-dark">{`"${item.msg}"`}</p>
                            <p className="text-sm md:text-base text-gray-500 font-medium">{item.sub}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Explanation Section */}
        <section className="py-20 px-6 max-w-[900px] mx-auto">
            <p className="text-eum-accent text-sm font-black mb-4 tracking-widest uppercase">02. Solution</p>
            <h2 className="text-3xl md:text-4xl font-black text-eum-dark mb-6 leading-tight">
                그래서 <span className="text-eum-accent">이음로그</span>가 뭔데?
            </h2>
            <p className="text-base md:text-xl text-gray-600 mb-12 leading-relaxed font-medium">
                쉽게 말하면요.<br />
                지방에서 제대로 된 사람 만나게 해주는 <strong className="text-eum-dark">1:1 프라이빗 소개팅</strong> 서비스예요.<br />
                앱처럼 가볍지 않고, 결정사처럼 비싸지도 않아요.
            </p>
            <div className="bg-eum-bg/40 rounded-[2.5rem] p-8 md:p-12 border border-eum-accent/10">
                <h3 className="text-xl md:text-2xl text-eum-dark font-black mb-8">솔직하게 말씀드리면</h3>
                <ul className="space-y-4 md:space-y-5">
                    {[
                        "아무나 안 받아요. 상담하고 괜찮은 분만 등록됨",
                        "지인차단 100% 됨. 초성+나이+지역으로 막아버림",
                        "3개월 동안 맞는 사람 나올 때까지 계속 소개해줌",
                        "가격은 결정사의 1/10. 부담 없이 시작 가능",
                        "400커플 만들어본 사람이 직접 매칭함"
                    ].map((text, i) => (
                        <li key={i} className="flex items-start gap-3 text-base md:text-lg text-gray-700 font-bold">
                            <Check className="w-5 h-5 md:w-6 md:h-6 text-eum-accent flex-shrink-0 mt-0.5" />
                            <span>{text}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-12 text-center md:text-left">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 border-b-2 border-eum-dark pb-1 text-eum-dark text-lg font-bold hover:text-eum-accent hover:border-eum-accent transition-all">
                    일단 상담받아보기 <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        </section>

        {/* Comparison Section */}
        <div className="bg-white py-20 px-6 border-t border-gray-100">
            <div className="max-w-[900px] mx-auto">
                <p className="text-eum-accent text-sm font-black mb-4 tracking-widest uppercase">03. Comparison</p>
                <h2 className="text-3xl md:text-4xl font-black text-eum-dark mb-10">비교해보면 답 나와요</h2>
                <div className="overflow-x-auto border border-gray-200 rounded-3xl shadow-sm">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                                <th className="p-6 text-gray-500 font-bold text-sm uppercase tracking-wider">구분</th>
                                <th className="p-6 text-gray-500 font-bold text-sm uppercase tracking-wider">소개팅 앱</th>
                                <th className="p-6 text-gray-500 font-bold text-sm uppercase tracking-wider">결정사</th>
                                <th className="p-6 text-eum-accent font-black text-sm uppercase tracking-wider bg-eum-accent/5">이음로그</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[
                                { label: "지방 유저", app: "거의 없음", agency: "있긴 함", eum: "지역 특화", eumGood: true, appBad: true },
                                { label: "가격", app: "무료~3만원", agency: "200~500만원", eum: "합리적", eumGood: true, agencyBad: true },
                                { label: "지인차단", app: "안됨", agency: "일부 가능", eum: "100% 가능", eumGood: true, appBad: true },
                                { label: "검증", app: "없음", agency: "있음", eum: "상담 후 선별", eumGood: true, appBad: true },
                                { label: "진지함", app: "가벼움", agency: "너무 무거움", eum: "적당히 진지", eumGood: true, appBad: true }
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-6 text-gray-800 font-bold">{row.label}</td>
                                    <td className={`p-6 font-medium ${row.appBad ? 'text-gray-400' : 'text-gray-600'}`}>{row.app}</td>
                                    <td className={`p-6 font-medium ${row.agencyBad ? 'text-gray-400' : 'text-gray-600'}`}>{row.agency}</td>
                                    <td className={`p-6 font-bold bg-eum-accent/5 ${row.eumGood ? 'text-eum-accent' : 'text-gray-600'}`}>{row.eum}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        {/* Matching Results */}
        <section className="py-20 px-6 max-w-[900px] mx-auto">
            <p className="text-eum-accent text-sm font-black mb-4 tracking-widest uppercase">04. Real Result</p>
            <h2 className="text-3xl md:text-4xl font-black text-eum-dark mb-4">매주 올라오는 매칭 결과</h2>
            <p className="text-base md:text-lg text-gray-500 mb-12 font-medium">인스타에서 실시간으로 확인 가능해요</p>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                {[1, 2, 3, 4, 5].map((n) => (
                    <div key={n} className="aspect-[9/16] bg-gray-100 border border-gray-200 rounded-2xl flex flex-col items-center justify-center text-gray-400 text-xs md:text-sm font-bold shadow-inner">
                        <span className="text-2xl mb-2 grayscale opacity-50">📱</span>인증 {n}
                    </div>
                ))}
            </div>
            <div className="mt-8 text-center">
                 <a href="https://www.instagram.com/e.um_log/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-gray-400 hover:text-eum-dark transition-colors">
                    인스타그램에서 더 보기 →
                 </a>
            </div>
        </section>

        {/* Reviews */}
        <section className="py-20 px-6 bg-gray-50">
            <div className="max-w-[800px] mx-auto">
                <p className="text-eum-accent text-sm font-black mb-4 tracking-widest uppercase">05. Reviews</p>
                <h2 className="text-3xl md:text-4xl font-black text-eum-dark mb-4">실제 후기들</h2>
                <p className="text-base md:text-lg text-gray-500 mb-12 font-medium">가감 없이 그대로 가져왔어요</p>
                <div className="space-y-6">
                    {[
                        { msg: "반신반의했는데 첫 소개에서 만난 분이랑 지금 3개월째 만나고 있어요. 지인차단 되니까 마음 편하게 시작할 수 있었음", info: "광주 / 32세 여" },
                        { msg: "솔직히 지방이라 기대 안 했는데 생각보다 괜찮은 분들 많더라고요. 매니저님이 진짜 신경 많이 써주심", info: "순천 / 34세 남" },
                        { msg: "결정사 가격 보고 포기했었는데 여기는 합리적이어서 좋았어요. 지금 만나는 분이랑 잘 되고 있음 ㅎㅎ", info: "여수 / 29세 여" },
                        { msg: "강요 없이 편하게 진행돼서 좋았음. 프로필 받아보고 제가 직접 선택하는 방식이라 부담 없었어요", info: "광주 / 31세 남" }
                    ].map((item, i) => (
                        <div key={i} className="bg-white rounded-3xl rounded-tl-sm p-8 max-w-[90%] md:max-w-[85%] border border-gray-100 shadow-sm relative">
                            <div className="absolute top-0 left-0 -translate-y-1/2 translate-x-4 bg-eum-accent w-8 h-8 rounded-full flex items-center justify-center text-white">
                                <MessageCircle className="w-4 h-4" />
                            </div>
                            <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-700 font-medium keep-all">"{item.msg}"</p>
                            <p className="text-xs md:text-sm text-gray-400 font-bold uppercase tracking-wider">{item.info}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Steps */}
        <section className="py-20 px-6 max-w-[900px] mx-auto">
            <p className="text-eum-accent text-sm font-black mb-4 tracking-widest uppercase">06. Process</p>
            <h2 className="text-3xl md:text-4xl font-black text-eum-dark mb-4">어떻게 진행되나요?</h2>
            <p className="text-base md:text-lg text-gray-500 mb-12 font-medium">복잡한 거 없어요. 3단계면 끝.</p>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "카톡으로 상담 신청", desc: "간단한 조건 확인하고, 맞으면 다음 단계로" },
                    { title: "설문 작성 + 지인차단", desc: "이상형 설문 쓰고, 차단할 지인 명단 등록" },
                    { title: "3개월 동안 매칭", desc: "맞는 사람 나올 때까지 계속 프로필 보내드림" }
                ].map((step, i) => (
                    <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col items-center text-center">
                        <div className="w-14 h-14 bg-eum-bg text-eum-accent text-xl font-black rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                            {i + 1}
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-eum-dark mb-3">{step.title}</h3>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium keep-all">{step.desc}</p>
                    </div>
                ))}
            </div>
            <div className="mt-16 text-center">
                 <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-eum-dark text-white text-lg font-bold px-12 py-5 rounded-full hover:bg-black transition-all shadow-xl">
                    상담 신청하기 <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6 max-w-[900px] mx-auto border-t border-gray-100">
            <p className="text-eum-accent text-sm font-black mb-4 tracking-widest uppercase">07. Q&A</p>
            <h2 className="text-3xl md:text-4xl font-black text-eum-dark mb-10">자주 묻는 것들</h2>
            <div className="divide-y divide-gray-100">
                {[
                    { q: "진짜 지인한테 안 보여요?", a: "네. 초성+나이+지역으로 등록하면 100% 차단돼요. 이게 저희 핵심이에요." },
                    { q: "가격이 얼마예요?", a: "결정사 대비 1/10 수준이에요. 정확한 금액은 상담 때 말씀드려요." },
                    { q: "3개월 안에 안 되면요?", a: "커플 될 때까지 계속 소개해드려요. 기간 내에 어려우면 연장 상담 진행합니다." },
                    { q: "어떤 사람들이 가입해요?", a: "20대 후반~30대 직장인이 제일 많아요. 진지하게 연애 상대 찾는 분들이요." }
                ].map((item, i) => (
                    <div key={i} className="py-6 md:py-8 group cursor-pointer">
                        <h3 className="text-lg md:text-xl font-bold mb-3 flex items-start gap-3 text-gray-800 group-hover:text-eum-accent transition-colors">
                            <span className="text-eum-accent">Q.</span>
                            {item.q}
                        </h3>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed pl-8 font-medium">{item.a}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6 text-center bg-eum-bg/30">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-black text-eum-dark mb-6 leading-tight">고민만 하다가<br/>1년 지나요</h2>
                <p className="text-lg md:text-xl text-gray-600 mb-10 font-medium">일단 상담은 무료니까,<br/>부담 없이 연락주세요.</p>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-eum-dark text-white text-xl font-black px-14 py-6 rounded-full hover:bg-black transition-all mb-8 shadow-xl hover:-translate-y-1">
                    무료 상담 신청 <ArrowRight className="w-6 h-6" />
                </Link>
                <p className="text-sm text-gray-500 font-bold">
                    카카오톡: 이음로그 ㅣ 인스타: @e.um_log
                </p>
            </div>
        </section>

        {/* Global Footer (contains Admin link) */}
        <Footer />
    </div>
  );
};

export default Landing;
