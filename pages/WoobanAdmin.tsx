import React, { useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import { doc, setDoc, onSnapshot } from 'firebase/firestore';
import { Loader2, Save, X, Lock } from 'lucide-react';

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

export default function WoobanAdmin() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [content, setContent] = useState('');
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) return;
    
    // Only load content of firebase when authenticated
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
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '0625') {
      setIsAuthenticated(true);
    } else {
      alert('비밀번호가 일치하지 않습니다.');
    }
  };

  const saveContent = async () => {
    setSaving(true);
    try {
      await setDoc(doc(db, 'wooban', 'status'), {
        content: content,
        updatedAt: new Date().toISOString()
      }, { merge: true });
      alert('저장되었습니다. 현황 페이지에 바로 반영됩니다.');
    } catch (error) {
      console.error("Save failed", error);
      alert("저장에 실패했습니다.");
    }
    setSaving(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="bg-[#F8F6FC] min-h-screen flex flex-col justify-center items-center p-6">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-purple-100 max-w-sm w-full text-center">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-6 h-6 text-purple-600" />
          </div>
          <h1 className="text-xl font-bold text-gray-900 mb-6">관리자 인증</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="비밀번호 4자리"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-center tracking-[0.5em] font-medium"
              autoFocus
            />
            <button
              type="submit"
              className="w-full bg-[#8A6EE5] text-white py-3 rounded-xl font-bold hover:bg-[#775BD1] transition-colors"
            >
              입장하기
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F6FC] min-h-screen flex flex-col pt-16 md:pt-20">
      <div className="flex-1 max-w-2xl w-full mx-auto p-4 md:p-6">
        <div className="flex items-center justify-between bg-white rounded-2xl p-4 shadow-sm mb-6 border border-purple-100">
          <div>
            <h1 className="text-xl font-bold text-gray-900">[우연히반하다] 현황 관리</h1>
            <p className="text-sm text-purple-600 font-medium mt-1">이곳에 작성된 텍스트가 실시간 반영됩니다.</p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setIsAuthenticated(false)}
              className="p-2 text-gray-400 hover:text-gray-600 bg-gray-100 rounded-lg"
              title="로그아웃"
            >
              <X className="w-5 h-5" />
            </button>
            <button 
              onClick={saveContent}
              disabled={saving || loading}
              className="flex items-center gap-2 px-4 py-2 bg-[#8A6EE5] text-white rounded-lg hover:bg-[#775BD1] disabled:opacity-50 transition-colors font-medium text-sm"
            >
              {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
              저장하기
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-purple-100">
          {loading ? (
             <div className="flex justify-center py-20">
               <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
             </div>
          ) : (
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full h-[600px] p-4 border-2 border-purple-100 rounded-xl focus:border-purple-400 focus:ring-0 resize-y text-sm font-mono leading-relaxed bg-gray-50"
              placeholder="여기에 현황을 입력하세요..."
            />
          )}
          <p className="text-xs text-gray-500 mt-4 text-center">
            수정 후 우측 상단의 저장 버튼을 누르면 /wooban/status 에 즉시 반영됩니다.
          </p>
        </div>
      </div>
    </div>
  );
}
