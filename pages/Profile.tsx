
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2, Lock, Sparkles, AlertCircle, Heart, Coffee, Star } from 'lucide-react';
import { PageHeader } from '../components/Shared';
import Footer from '../components/Footer';

// GAS 웹앱 URL
const GAS_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbz5bsG9Rl1XoiudC7gK-Rhw5gm-n3uYY8lYrQtttXhhGOEoI-L26hl1xD5zU79BML292w/exec"; 

interface ProfileData {
  name: string; nameInfo: string; catchphrase: string; intro: string;
  personalityTags: string[]; hobbyTags: string[]; dateTags: string[];
}

const ProfilePage = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginName, setLoginName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [profile, setProfile] = useState<ProfileData>({
    name: '', nameInfo: '', catchphrase: '', intro: '',
    personalityTags: [], hobbyTags: [], dateTags: []
  });

  const badges = useMemo(() => {
    if (!profile.nameInfo) return [];
    return profile.nameInfo.split('/').map(s => s.trim()).filter(s => s !== "" && !profile.name.includes(s));
  }, [profile.nameInfo, profile.name]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setErrorMessage(null);
    setLoading(true);
    try {
      const targetUrl = `${GAS_WEBAPP_URL}?mode=profile&name=${encodeURIComponent(loginName.trim())}&pass=${encodeURIComponent(password.trim())}`;
      const response = await fetch(targetUrl);
      const result = await response.json();
      if (result.success && result.savedProfile) {
        const s = result.savedProfile;
        const parseTags = (str: any) => {
          if (!str || str === "undefined" || str === "") return [];
          return str.toString().replace(/#/g, '').split(' ').map((t:any) => t.trim()).filter((t:any) => t !== '');
        };
        
        setProfile({
          name: s.name || loginName.trim(), 
          nameInfo: s.nameInfo || '', 
          catchphrase: s.catchphrase || '', 
          intro: s.intro || '',
          personalityTags: parseTags(s.personalityTags), 
          hobbyTags: parseTags(s.hobbyTags), 
          dateTags: parseTags(s.dateTags)
        });
        setIsLoggedIn(true);
      } else { setErrorMessage(result.error || "정보가 일치하지 않습니다."); }
    } catch (err) { setErrorMessage("서버 통신 실패"); } finally { setLoading(false); }
  };

  if (!isLoggedIn) {
    return (
      <div className="bg-eum-dark min-h-screen flex items-center justify-center p-6 text-white font-sans">
        <div className="w-full max-w-md bg-white/5 backdrop-blur-3xl p-10 rounded-[2.5rem] border border-white/10 shadow-2xl text-center">
          <div className="w-14 h-14 bg-eum-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6"><Lock className="w-6 h-6 text-eum-accent" /></div>
          <h2 className="text-xl font-black mb-1 uppercase tracking-tighter italic">E.UM LOG View</h2>
          <p className="text-gray-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-10">본인 확인이 필요합니다</p>
          {errorMessage && <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs font-bold text-left flex gap-2"><AlertCircle className="w-4 h-4" /> {errorMessage}</div>}
          <form onSubmit={handleLogin} className="space-y-4">
            <input type="text" placeholder="성함" value={loginName} onChange={e => setLoginName(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white outline-none focus:border-eum-accent font-bold" />
            <input type="password" placeholder="비밀번호" value={password} onChange={e => setPassword(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white outline-none focus:border-eum-accent font-bold" />
            <button type="submit" disabled={loading} className="w-full bg-eum-accent text-white py-4 rounded-xl font-black text-sm shadow-xl hover:bg-white hover:text-eum-dark transition-all active:scale-95 disabled:opacity-50">
              {loading ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : "입장하기"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F8F8] min-h-screen relative font-sans text-[#1A1A1A]">
      <div className="bg-eum-dark pb-32">
        <PageHeader title={`${profile.name}님의 프로필`} subtitle="Profile Viewer" />
      </div>

      <div className="max-w-[650px] w-[90%] mx-auto -mt-20 pb-40 relative z-10">
        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-1.5 rounded-full bg-eum-accent/10 text-eum-accent text-xs font-black tracking-widest uppercase mb-4">
              Authorized Access
            </div>
            <h1 className="text-3xl md:text-4xl font-black mb-3 text-eum-dark tracking-tight">{profile.name}</h1>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
               {badges.map((badge, idx) => (
                 <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-bold">
                   {badge}
                 </span>
               ))}
            </div>
            <div className="relative py-6">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 text-4xl text-eum-accent/20 font-serif">"</div>
               <p className="text-lg md:text-xl font-bold text-gray-700 italic leading-relaxed px-6">
                 {profile.catchphrase}
               </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-eum-accent" />
                <h3 className="font-bold text-gray-400 text-sm uppercase tracking-wider">Introduction</h3>
              </div>
              <p className="text-gray-600 leading-loose whitespace-pre-wrap font-medium text-sm md:text-base bg-gray-50 p-6 rounded-2xl">
                {profile.intro}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-5 h-5 text-rose-400" />
                <h3 className="font-bold text-gray-400 text-sm uppercase tracking-wider">Personality</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {profile.personalityTags.map((tag, idx) => (
                  <span key={idx} className="px-4 py-2 rounded-xl bg-rose-50 text-rose-500 font-bold text-sm border border-rose-100">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <Coffee className="w-5 h-5 text-amber-500" />
                <h3 className="font-bold text-gray-400 text-sm uppercase tracking-wider">Lifestyle & Hobbies</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {profile.hobbyTags.map((tag, idx) => (
                  <span key={idx} className="px-4 py-2 rounded-xl bg-amber-50 text-amber-600 font-bold text-sm border border-amber-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
               <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-purple-500" />
                <h3 className="font-bold text-gray-400 text-sm uppercase tracking-wider">Ideal Date</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {profile.dateTags.map((tag, idx) => (
                  <span key={idx} className="px-4 py-2 rounded-xl bg-purple-50 text-purple-600 font-bold text-sm border border-purple-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 text-center">
             <button onClick={() => setIsLoggedIn(false)} className="text-gray-400 font-bold text-xs hover:text-eum-dark transition-colors">
               로그아웃
             </button>
          </div>
        </div>
      </div>
      <div className="bg-[#0f0f0f] text-white">
        <Footer />
      </div>
    </div>
  );
};

export default ProfilePage;
