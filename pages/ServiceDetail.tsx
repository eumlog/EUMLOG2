
import React from 'react';
import { PageHeader } from '../components/Shared';
import Footer from '../components/Footer';
import { ExternalLink } from 'lucide-react';

const ServiceDetail = () => {
    return (
        <div className="bg-white min-h-screen">
            <PageHeader title="상세 진행 방식" subtitle="Detailed Process" />
            
            <section className="py-16 md:py-24 px-4 bg-white">
                <div className="max-w-[800px] w-full mx-auto text-gray-800">
                    
                    {/* Intro */}
                    <div className="mb-16 md:mb-24 text-center">
                        <h5 className="text-xl md:text-2xl font-black text-eum-accent mb-6 leading-relaxed keep-all">
                            ✔ 광주·전남 1:1 소개팅, ‘이음로그’는 이렇게 진행돼요!
                        </h5>
                        <p className="text-gray-600 text-base md:text-lg leading-loose keep-all mb-6">
                            “소개팅 해봤지만, 왜 이런 사람이 나왔지…?”<br />
                            이번엔 진짜 <strong className="text-eum-dark bg-eum-bg px-1">나와 잘 맞는 사람</strong>을 만나보세요.
                        </p>
                        <p className="text-gray-600 text-base md:text-lg leading-loose keep-all">
                            이음로그는 단순 조건 매칭이 아닌,<br />
                            <strong className="text-eum-dark">1:1 상담 기반</strong>으로 이상형을 정확히 이해하고,<br />
                            ‘정말 어울리는 인연’을 연결하는 <strong className="text-eum-dark">진중한 소개팅 서비스</strong>입니다.
                        </p>
                    </div>

                    <div className="w-full h-px bg-gray-200 my-12"></div>

                    {/* STEP 1 */}
                    <div className="mb-20">
                        <h3 className="text-xl md:text-2xl font-bold text-eum-dark mb-6">📍 STEP 1. 기본 신청서 작성 — 아주 간단하게 시작!</h3>
                        <img src="https://wordpress-928536-5600374.cloudwaysapps.com/wp-content/uploads/2025/11/002-1-edited.png" alt="STEP 1" className="w-full rounded-2xl shadow-sm mb-6 border border-gray-100" />
                        
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                            <p className="font-medium mb-4">인스타 프로필 링크로 접수합니다.</p>
                            <p className="font-black text-sm text-gray-500 mb-2">[기입 항목 예시]</p>
                            <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-gray-700 ml-2">
                                <li>나이 / 직업 / 거주지</li>
                                <li>키 / 결혼 희망시기 등</li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full h-px bg-gray-200 my-12"></div>

                    {/* STEP 2 */}
                    <div className="mb-20">
                        <h3 className="text-xl md:text-2xl font-bold text-eum-dark mb-6">📍 STEP 2. 2차 설문지 작성</h3>
                        <img src="https://wordpress-928536-5600374.cloudwaysapps.com/wp-content/uploads/2025/07/003-1-1024x1024.png" alt="STEP 2" className="w-full rounded-2xl shadow-sm mb-6 border border-gray-100" />
                        
                        <p className="text-gray-700 leading-relaxed mb-6">
                            카톡 상담 전,<br />
                            더 정밀한 매칭을 위해 <strong className="text-eum-dark bg-yellow-100 px-1">2차 설문지를 링크로 안내드립니다.</strong>
                        </p>

                        <blockquote className="bg-eum-bg/50 border-l-4 border-eum-accent p-6 rounded-r-xl">
                            <p className="font-bold mb-3">✍️ 항목 예시:</p>
                            <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-gray-700">
                                <li>이상형 조건 (키, 나이, 성격, 연봉 등)</li>
                                <li>피하고 싶은 조건</li>
                                <li>사진 4장 (얼굴 3장 + 전신 1장)</li>
                                <li>흡연 여부 / 종교 / 자녀 계획 등</li>
                            </ul>
                        </blockquote>
                        <p className="text-xs text-gray-400 mt-4">※ 이 정보는 상대에게 전달되는 프로필 카드에 일부 반영되며, 매니저가 더 정확한 매칭을 위해 참고합니다.</p>
                    </div>

                    <div className="w-full h-px bg-gray-200 my-12"></div>

                    {/* STEP 3 */}
                    <div className="mb-20">
                        <h3 className="text-xl md:text-2xl font-bold text-eum-dark mb-6">📍 STEP 3. 1:1 온라인 상담 — 진짜 원하는 사람을 파악해요</h3>
                        <img src="https://wordpress-928536-5600374.cloudwaysapps.com/wp-content/uploads/2025/11/004-1-788x1024.png" alt="STEP 3" className="w-full rounded-2xl shadow-sm mb-6 border border-gray-100" />
                        <p className="text-gray-700 text-lg font-medium">
                            작성된 신청서를 바탕으로<br />
                            스마트 매칭 매니저와 조건에 대해 5~10분간 상담합니다.
                        </p>
                    </div>

                    <div className="w-full h-px bg-gray-200 my-12"></div>

                    {/* STEP 4 */}
                    <div className="mb-20">
                        <h3 className="text-xl md:text-2xl font-bold text-eum-dark mb-6">📍 STEP 4. 지인 차단 시스템 진행</h3>
                        <img src="https://wordpress-928536-5600374.cloudwaysapps.com/wp-content/uploads/2025/11/006-3-788x1024.png" alt="STEP 4" className="w-full rounded-2xl shadow-sm mb-6 border border-gray-100 max-w-[500px]" />
                        
                        <div className="space-y-4">
                            <p className="text-gray-700 leading-relaxed">
                                🔹 프로필 제공 전,<br />
                                ‘지인 차단 시스템’을 통해 <strong className="text-eum-dark">지인 여부를 미리 확인</strong>할 수 있어요.
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-gray-700 bg-gray-50 p-5 rounded-xl">
                                <li>총 3명의 <strong>초성 / 나이 / 거주지역</strong>을 안내드리며</li>
                                <li>이 중 1명만 실제 소개 대상입니다 (2명은 랜덤 삽입)</li>
                                <li>지인이라면 <strong>새로이 보내드립니다.</strong></li>
                            </ul>
                            <blockquote className="bg-gray-800 text-white p-4 rounded-xl text-sm font-mono">
                                예시)<br />
                                ㄱㅁㅅ / 92 / 광양 (진짜 상대)<br />
                                ㅈㅇㅎ / 95 / 순천 (랜덤)<br />
                                ㄱㅎㄴ / 93 / 여수 (랜덤)
                            </blockquote>
                        </div>
                    </div>

                    <div className="w-full h-px bg-gray-200 my-12"></div>

                    {/* STEP 5 */}
                    <div className="mb-20">
                        <h3 className="text-xl md:text-2xl font-bold text-eum-dark mb-6">📍 STEP 5. 프로필 카드 제공 → 수락 시 매칭 확정!</h3>
                        <img src="https://wordpress-928536-5600374.cloudwaysapps.com/wp-content/uploads/2025/11/006-2-788x1024.png" alt="STEP 5" className="w-full rounded-2xl shadow-sm mb-6 border border-gray-100 aspect-square object-cover" />
                        
                        <div className="space-y-6">
                            <p className="font-medium text-lg text-gray-800">① 매니저가 꼭 맞는 1명의 프로필 카드를 5~7일마다 제공합니다.</p>
                            <p className="font-medium text-lg text-gray-800">② 프로필 확인 후, 상호 수락 시 → 🎉 매칭 성공!</p>
                            
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-gray-700 bg-blue-50 p-4 rounded-xl">
                                    <span className="text-blue-500 font-bold">✔</span>
                                    <span><span className="text-blue-600 font-bold">[3개월]</span> 동안 <span className="text-blue-600 font-bold">[최소 12회]의 프로필 제공을 보장</span>합니다.</span>
                                </li>
                                <li className="flex items-start gap-2 text-gray-700 bg-blue-50 p-4 rounded-xl">
                                    <span className="text-blue-500 font-bold">✔</span>
                                    <span>매칭이 <span className="text-blue-600 font-bold">성사된 이후에도 3개월 내내 프로필 제공이 계속 진행</span>됩니다.</span>
                                </li>
                            </ul>
                            
                            <p className="text-sm text-gray-500">📌 서로 수락 시 만남이 확정되며, 💏<strong>매칭비는 별도</strong>입니다. (하단 가격안내 확인)</p>
                            <p className="text-sm text-gray-500">📌 효율적인 매칭을 위해 회원님의 프로필이 3명 내외에게 전달 될 수 있으며, 선택을 받을 시 ➕️추가 프로필이 제공됩니다. (지인차단시스템 선 적용)</p>
                        </div>
                    </div>

                    <div className="w-full h-px bg-gray-200 my-12"></div>

                    {/* STEP 6 */}
                    <div className="mb-20">
                        <h3 className="text-xl md:text-2xl font-bold text-eum-dark mb-6">📍 STEP 6. 소개팅 확정 & 진행</h3>
                        <img src="https://wordpress-928536-5600374.cloudwaysapps.com/wp-content/uploads/2025/11/007-788x1024.png" alt="STEP 6" className="w-full rounded-2xl shadow-sm mb-6 border border-gray-100 aspect-square object-cover" />
                        
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center">
                            <p className="text-lg font-bold text-gray-800 mb-2">✔️ 서로 수락되면</p>
                            <p className="text-gray-600">→ 매니저가 시간, 장소 직접 조율</p>
                            <p className="text-gray-600">→ 소개팅 전 매너·대화 팁도 함께 안내</p>
                        </div>
                        <p className="text-sm text-gray-400 mt-4 text-center">※ 이때 매칭비는 나이대별로 별도 결제됩니다.</p>
                    </div>

                    <div className="w-full h-px bg-gray-200 my-12"></div>

                    {/* STEP 7 */}
                    <div className="mb-20">
                        <h3 className="text-xl md:text-2xl font-bold text-eum-dark mb-6">📍 STEP 7. 소개팅 후 피드백 제공</h3>
                        <img src="https://wordpress-928536-5600374.cloudwaysapps.com/wp-content/uploads/2025/07/진행방식_프로필제공권2-008-1024x1024.png" alt="STEP 7" className="w-full rounded-2xl shadow-sm mb-6 border border-gray-100" />
                        
                        <div className="bg-eum-accent/10 p-6 rounded-2xl text-center">
                            <p className="text-gray-700 leading-relaxed mb-4">
                                소개팅 종료 후,<br />
                                상대방 피드백을 바탕으로<br />
                                매니저가 개선 팁이나 조언을 전달드립니다.
                            </p>
                            <p className="font-bold text-eum-dark">
                                💡 피드백은 다음 매칭 때 반영돼<br />
                                <strong>성공률을 높이는 데 큰 도움이 됩니다.</strong>
                            </p>
                        </div>
                    </div>

                    <div className="w-full h-px bg-gray-200 my-16"></div>

                    {/* Pricing */}
                    <div className="mb-20">
                        <h4 className="text-2xl md:text-3xl font-black text-center text-eum-dark mb-10">비용은 어떻게 되나요??</h4>
                        
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            <img src="https://wordpress-928536-5600374.cloudwaysapps.com/wp-content/uploads/2025/11/NEW_가격안내-002-1-788x1024.png" alt="Basic Price" className="w-full rounded-2xl shadow-sm" />
                            <img src="https://wordpress-928536-5600374.cloudwaysapps.com/wp-content/uploads/2025/11/NEW_가격안내-003-788x1024.png" alt="Premium Price" className="w-full rounded-2xl shadow-sm" />
                        </div>

                        <div className="overflow-hidden border border-gray-200 rounded-2xl mb-8">
                            <table className="w-full text-sm md:text-base">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="py-4 px-4 text-center font-bold text-gray-700 w-1/3">플랜</th>
                                        <th className="py-4 px-4 text-center font-bold text-gray-700">혜택 상세</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="py-6 px-4 text-center font-bold bg-gray-50">베이직 플랜</td>
                                        <td className="py-6 px-6 text-gray-700 leading-relaxed">
                                            ✔ 3개월 무제한 소개<br />
                                            ✔ 1명씩 순차 제공 (3~7일 주기)<br />
                                            <strong className="text-blue-600">✔ [조건 2개] 우선 보장</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-6 px-4 text-center font-bold bg-eum-accent/5 text-eum-accent">프리미엄 플랜</td>
                                        <td className="py-6 px-6 text-gray-700 leading-relaxed bg-eum-accent/5">
                                            ✔ 3개월 무제한 소개<br />
                                            ✔ 1명씩 순차 제공 (3~7일 주기)<br />
                                            <strong className="text-blue-600">✔ [조건 5개] 완벽 보장</strong><br />
                                            ✔ 매칭 실패 시, 우반(6:6) 참가권 1회 무료 증정
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <ul className="space-y-3 text-sm text-gray-600 mb-10 bg-gray-50 p-6 rounded-2xl">
                            <li><strong>• 매칭비:</strong> 매칭비는 회원님이 선택하고 상대방도 수락했을 경우에만 나이대별로 후불 결제됩니다.</li>
                            <li><strong>• 서비스 기간:</strong> 모든 플랜은 <strong>3개월(90일)</strong> 동안 유효하며, 매칭 성공 후에도 횟수 제한 없이 서비스가 지속됩니다.</li>
                        </ul>

                        <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 md:p-8 rounded-2xl border border-pink-100 text-center mb-12">
                            <p className="font-black text-pink-600 text-lg mb-2">🎁 우반 참가자 특별 이벤트!</p>
                            <p className="text-gray-700 font-medium mb-2">기존 6:6 소개팅 참가자분들께는 특별가로 진행합니다!!</p>
                            <p className="text-xl font-bold text-gray-900">* 3개월 이용권 : 16만원(남성) / 10만원(여성)</p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center pb-10">
                        <p className="text-xl font-bold mb-6">📌 신청은 여기에서</p>
                        <a 
                            href="https://link.inpock.co.kr/e.um_log" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-eum-dark text-white px-8 py-4 rounded-full font-black text-lg hover:bg-black transition-all shadow-xl hover:-translate-y-1"
                        >
                            <ExternalLink className="w-5 h-5" />
                            신청서 작성하러 가기
                        </a>
                        <p className="mt-4 text-gray-400 font-mono text-sm">https://link.inpock.co.kr/e.um_log</p>
                    </div>

                </div>
            </section>
            
            <div className="bg-[#0f0f0f] text-white">
                <Footer />
            </div>
        </div>
    );
};

export default ServiceDetail;
