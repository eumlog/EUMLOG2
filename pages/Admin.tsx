
import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, FileText, Settings, LayoutGrid, Layers, Workflow, Info, CheckCircle, Trash2, Upload, Database, Image as ImageIcon, AppWindow, Save, RefreshCw, UserCircle, Lock } from 'lucide-react';
import { PageHeader } from '../components/Shared';
import Footer from '../components/Footer';
import { IMAGES, TEXTS, refreshAssets, getImageKeys, getTextKeys } from '../lib/assets';
import { DEFAULT_IMAGES, DEFAULT_TEXTS } from '../constants';
import { ImageAssets, TextAssets } from '../types';

interface Message {
    text: string;
    type: 'success' | 'error' | 'warning';
}

const GROUPS = [
    { id: 'settings', title: '기본 설정 (아이콘, 로고 & 공유)', icon: Settings, keys: ['favicon', 'logo', 'ogImage'] },
    { id: 'main', title: '메인 페이지 섹션별 이미지', icon: LayoutGrid, keys: ['heroBackground', 'philosophy', 'systemFeatures', 'footerTexture'] },
    { id: 'cards', title: '핵심 가치 카드', icon: Layers, keys: ['card1', 'card2', 'card3'] },
    { id: 'process', title: '진행 방식 단계별', icon: Workflow, keys: ['processStep1', 'processStep2', 'processStep3', 'processStep4', 'processStep5', 'processStep6', 'processStep7'] },
];

const IMAGE_META: Record<string, { label: string; location: string; size: string; icon: any }> = {
    favicon: { label: "브라우저 아이콘 (Favicon)", location: "브라우저 탭 상단 & 즐겨찾기", size: "32x32 또는 64x64", icon: ImageIcon },
    logo: { label: "홈페이지 로고", location: "상단 메뉴바 (비워두면 텍스트)", size: "높이 40px (PNG 권장)", icon: ImageIcon },
    ogImage: { label: "웹 공유 썸네일", location: "카카오톡/링크 공유 시", size: "1200 x 630", icon: ImageIcon },
    heroBackground: { label: "메인 히어로", location: "메인 > 최상단 배경", size: "1920 x 1080", icon: LayoutGrid },
    philosophy: { label: "메인 지역 섹션", location: "메인 > 지역기반 만남 섹션", size: "1000 x 1200", icon: AppWindow },
    systemFeatures: { label: "3가지 약속", location: "메인 > 하단 약속 섹션", size: "800 x 1200", icon: AppWindow },
    card1: { label: "철학 카드 01", location: "메인 > 하단 스택형 카드", size: "800 x 1200", icon: Layers },
    card2: { label: "철학 카드 02", location: "메인 > 하단 스택형 카드", size: "800 x 1200", icon: Layers },
    card3: { label: "철학 카드 03", location: "메인 > 하단 스택형 카드", size: "800 x 1200", icon: Layers },
    processStep1: { label: "신청서 작성", location: "진행방식 > 1단계", size: "1200 x 900", icon: Workflow },
    processStep2: { label: "2차 설문", location: "진행방식 > 2단계", size: "1200 x 900", icon: Workflow },
    processStep3: { label: "카톡 상담", location: "진행방식 > 3단계", size: "1200 x 900", icon: Workflow },
    processStep4: { label: "매칭/차단", location: "진행방식 > 4단계", size: "1200 x 900", icon: Workflow },
    processStep5: { label: "프로필 제공", location: "진행방식 > 5단계", size: "1200 x 900", icon: Workflow },
    processStep6: { label: "만남 확정", location: "진행방식 > 6단계", size: "1200 x 900", icon: Workflow },
    processStep7: { label: "피드백", location: "진행방식 > 7단계", size: "1200 x 900", icon: Workflow },
    footerTexture: { label: "푸터 배경", location: "모든 페이지 하단", size: "1920 x 1080", icon: LayoutGrid },
};

const AdminPage = () => {
    const navigate = useNavigate();
    
    // Auth State
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loginId, setLoginId] = useState('');
    const [loginPw, setLoginPw] = useState('');
    const [authError, setAuthError] = useState('');

    const [images, setImages] = useState<Partial<ImageAssets>>({});
    const [texts, setTexts] = useState<Partial<TextAssets>>({});
    const [message, setMessage] = useState<Message | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [storageUsage, setStorageUsage] = useState(0);

    const checkStorageUsage = useCallback(() => {
        try {
            const i = localStorage.getItem('EUM_CUSTOM_IMAGES') || "";
            const t = localStorage.getItem('EUM_CUSTOM_TEXTS') || "";
            const totalBytes = (i.length + t.length) * 2; // UTF-16 characters
            const totalMB = totalBytes / (1024 * 1024);
            setStorageUsage(totalMB);
        } catch (e) { 
            setStorageUsage(0); 
        }
    }, []);

    const loadData = useCallback(() => {
        refreshAssets();
        const currentImages: Partial<ImageAssets> = {};
        getImageKeys().forEach(key => { 
            currentImages[key] = IMAGES[key]; 
        });
        setImages(currentImages);

        const currentTexts: Partial<TextAssets> = {};
        getTextKeys().forEach(key => { 
            currentTexts[key] = TEXTS[key]; 
        });
        setTexts(currentTexts);
    }, []);

    useEffect(() => { 
        loadData(); 
        checkStorageUsage(); 
    }, [loadData, checkStorageUsage]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (loginId === 'admin' && loginPw === '8645686') {
            setIsAuthenticated(true);
            setAuthError('');
        } else {
            setAuthError('아이디 또는 비밀번호가 올바르지 않습니다.');
        }
    };

    const handleSave = () => {
        setIsProcessing(true);
        setMessage(null);
        
        // Use a slight delay to ensure the UI updates before the heavy localStorage operation
        setTimeout(() => {
            try {
                const cleanImages: Partial<ImageAssets> = {};
                Object.keys(images).forEach(key => {
                    const k = key as keyof ImageAssets;
                    // Only save if it differs from default
                    if (images[k] && images[k] !== DEFAULT_IMAGES[k]) {
                        cleanImages[k] = images[k];
                    }
                });
                
                const imgJson = JSON.stringify(cleanImages);
                // Basic check for 5MB limit
                if (imgJson.length > 4.8 * 1024 * 1024) {
                    throw new Error("STORAGE_QUOTA_EXCEEDED");
                }
                
                localStorage.setItem('EUM_CUSTOM_IMAGES', imgJson);

                const cleanTexts: Partial<TextAssets> = {};
                Object.keys(texts).forEach(key => {
                    const k = key as keyof TextAssets;
                    if (texts[k] && texts[k] !== DEFAULT_TEXTS[k]) {
                        cleanTexts[k] = texts[k];
                    }
                });
                localStorage.setItem('EUM_CUSTOM_TEXTS', JSON.stringify(cleanTexts));

                refreshAssets();
                checkStorageUsage();
                setMessage({ text: '성공적으로 저장되었습니다.', type: 'success' });
                
                // Optional: Force a small refresh of the local states to match exactly what's in storage
                loadData();
            } catch (e: any) {
                if (e.message === "STORAGE_QUOTA_EXCEEDED" || e.name === 'QuotaExceededError') {
                    setMessage({ text: '용량 초과! 이미지 파일의 크기가 너무 큽니다. URL 방식을 사용하거나 저해상도 파일을 사용하세요.', type: 'error' });
                } else {
                    setMessage({ text: '저장 중 오류가 발생했습니다.', type: 'error' });
                }
            } finally {
                setIsProcessing(false);
            }
        }, 100);
    };

    const handleFileChange = (key: keyof ImageAssets, e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setIsProcessing(true);
            const reader = new FileReader();
            reader.onload = (evt) => {
                const img = new Image();
                img.src = evt.target?.result as string;
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    let width = img.width;
                    let height = img.height;
                    
                    // Stronger compression and resizing for localStorage limits
                    const MAX_WIDTH = 1000;
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                    
                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');
                    ctx?.drawImage(img, 0, 0, width, height);
                    
                    // 0.6 quality to balance clarity and size
                    const resizedDataUrl = canvas.toDataURL('image/jpeg', 0.6);
                    setImages(prev => ({ ...prev, [key]: resizedDataUrl }));
                    setIsProcessing(false);
                    setMessage({ text: '이미지가 준비되었습니다. [저장하기] 버튼을 눌러주세요.', type: 'warning' });
                };
            };
            reader.readAsDataURL(file);
        }
    };

    const handleReset = () => {
        if (window.confirm('모든 커스텀 설정을 초기화하고 기본값으로 되돌리시겠습니까?')) {
            localStorage.removeItem('EUM_CUSTOM_IMAGES');
            localStorage.removeItem('EUM_CUSTOM_TEXTS');
            refreshAssets();
            loadData();
            checkStorageUsage();
            setMessage({ text: '초기화되었습니다.', type: 'success' });
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="bg-eum-dark min-h-screen flex items-center justify-center p-6">
                <div className="max-w-md w-full bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10 shadow-2xl">
                    <div className="flex flex-col items-center mb-8">
                        <div className="w-16 h-16 bg-eum-accent/20 rounded-2xl flex items-center justify-center mb-4">
                            <Lock className="w-8 h-8 text-eum-accent" />
                        </div>
                        <h2 className="text-2xl font-black text-white uppercase tracking-wider">Admin Login</h2>
                        <p className="text-gray-400 text-xs font-bold mt-2">관리자 권한이 필요합니다</p>
                    </div>
                    
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <input 
                                type="text" 
                                value={loginId} 
                                onChange={(e) => setLoginId(e.target.value)} 
                                placeholder="Admin ID" 
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 font-bold outline-none focus:border-eum-accent transition-all"
                            />
                        </div>
                        <div>
                            <input 
                                type="password" 
                                value={loginPw} 
                                onChange={(e) => setLoginPw(e.target.value)} 
                                placeholder="Password" 
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 font-bold outline-none focus:border-eum-accent transition-all"
                            />
                        </div>
                        
                        {authError && (
                            <div className="text-red-400 text-xs font-bold text-center bg-red-500/10 py-2 rounded-lg">
                                {authError}
                            </div>
                        )}

                        <button 
                            type="submit" 
                            className="w-full bg-eum-accent text-white font-black py-4 rounded-xl hover:bg-white hover:text-eum-dark transition-all mt-4 shadow-lg"
                        >
                            로그인
                        </button>
                    </form>
                    
                    <div className="mt-8 text-center">
                        <button onClick={() => navigate('/')} className="text-gray-500 text-xs font-bold hover:text-white transition-colors">
                            홈으로 돌아가기
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-eum-bg min-h-screen pb-20">
            <PageHeader title="관리자 페이지" subtitle="Admin Panel" />
            
            <div className="py-12 px-6 max-w-[1100px] mx-auto">
                {/* Navigation Quick Links */}
                <div className="mb-12">
                    <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex flex-wrap items-center gap-6">
                        <h3 className="text-sm font-black text-gray-700 flex items-center gap-2 uppercase tracking-widest">
                            <ExternalLink className="w-4 h-4 text-eum-accent" /> 페이지 바로가기
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            <button 
                                onClick={() => navigate('/policy')} 
                                className="flex items-center gap-2 px-4 py-2 bg-eum-bg text-eum-dark rounded-xl hover:bg-gray-200 transition-all font-bold text-xs"
                            >
                                <FileText className="w-3 h-3" /> 운영 규정 수정/확인
                            </button>
                            <button 
                                onClick={() => navigate('/')} 
                                className="flex items-center gap-2 px-4 py-2 bg-eum-bg text-eum-dark rounded-xl hover:bg-gray-200 transition-all font-bold text-xs"
                            >
                                <RefreshCw className="w-3 h-3" /> 홈페이지 메인
                            </button>
                        </div>
                    </div>
                </div>

                {/* Site Text Settings */}
                <div className="mb-12 bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                    <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-50">
                        <div className="w-12 h-12 bg-eum-bg rounded-2xl flex items-center justify-center text-eum-accent">
                            <Settings className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-black text-eum-dark">사이트 정보 설정</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <label className="block text-sm font-black text-gray-700 mb-2">홈페이지 이름 (타이틀)</label>
                            <input 
                                type="text" 
                                value={texts.siteTitle || ''} 
                                onChange={(e) => setTexts(prev => ({ ...prev, siteTitle: e.target.value }))} 
                                className="w-full p-4 bg-gray-50 rounded-2xl border border-gray-200 outline-none focus:border-eum-accent transition-all font-bold" 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-black text-gray-700 mb-2">사이트 설명 (SEO)</label>
                            <input 
                                type="text" 
                                value={texts.siteDescription || ''} 
                                onChange={(e) => setTexts(prev => ({ ...prev, siteDescription: e.target.value }))} 
                                className="w-full p-4 bg-gray-50 rounded-2xl border border-gray-200 outline-none focus:border-eum-accent transition-all font-bold" 
                            />
                        </div>
                    </div>
                </div>

                {/* Action Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 sticky top-[100px] z-30 bg-eum-bg/90 backdrop-blur-md py-4 rounded-xl px-2">
                    <h2 className="text-2xl font-black text-eum-dark flex items-center gap-3">
                        <LayoutGrid className="w-6 h-6 text-eum-accent" /> 리소스 관리
                    </h2>
                    <div className="flex gap-3">
                        <button 
                            onClick={handleReset} 
                            className="px-6 py-3 border border-gray-200 bg-white text-gray-400 font-bold rounded-2xl hover:bg-gray-50 transition-all flex items-center gap-2"
                        >
                            <RefreshCw className="w-4 h-4" /> 초기화
                        </button>
                        <button 
                            onClick={handleSave} 
                            disabled={isProcessing} 
                            className={`px-10 py-3 bg-eum-dark text-white font-black rounded-2xl hover:bg-black transition-all flex items-center gap-2 shadow-lg ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {isProcessing ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                            {isProcessing ? '처리 중...' : '저장하기'}
                        </button>
                    </div>
                </div>

                {message && (
                    <div className={`mb-10 p-5 rounded-2xl font-bold text-center border animate-pulse ${
                        message.type === 'error' ? 'bg-red-50 text-red-600 border-red-100' : 
                        message.type === 'warning' ? 'bg-yellow-50 text-yellow-700 border-yellow-100' :
                        'bg-green-50 text-green-600 border-green-100'
                    }`}>
                        {message.text}
                    </div>
                )}

                {/* Groups */}
                <div className="space-y-16">
                    {GROUPS.map((group) => (
                        <div key={group.id} className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                            <div className="flex items-center gap-4 mb-10 pb-6 border-b border-gray-50">
                                <div className="w-12 h-12 bg-eum-bg rounded-2xl flex items-center justify-center text-eum-accent">
                                    <group.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-black text-eum-dark">{group.title}</h3>
                            </div>
                            <div className="space-y-12">
                                {group.keys.map((k) => {
                                    const key = k as keyof ImageAssets;
                                    const meta = IMAGE_META[key] || { label: key, location: "-", size: "-", icon: Info };
                                    const isDefault = images[key] === DEFAULT_IMAGES[key];
                                    const isDataUrl = images[key]?.startsWith('data:');
                                    
                                    return (
                                        <div key={key} className="grid lg:grid-cols-[220px_1fr_180px] gap-8 items-start">
                                            <div className="space-y-2">
                                                <label className="font-black text-eum-dark text-sm block">{meta.label}</label>
                                                <div className="inline-block bg-eum-bg px-2 py-1 rounded text-[10px] font-black text-eum-accent border border-eum-accent/10 uppercase">{meta.size}</div>
                                                <p className="text-[11px] text-gray-400 font-bold mt-2 leading-relaxed">위치: <span className="text-gray-500">{meta.location}</span></p>
                                            </div>
                                            <div className="space-y-3">
                                                <div className="flex gap-2">
                                                    {isDataUrl ? (
                                                        <div className="flex-1 p-3.5 border border-green-100 bg-green-50/30 rounded-2xl text-xs font-black text-green-700 flex items-center justify-between">
                                                            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> 이미지 파일이 선택됨</span>
                                                            <button 
                                                                onClick={() => setImages(prev => ({ ...prev, [key]: DEFAULT_IMAGES[key] }))} 
                                                                className="p-2 bg-white border border-red-100 text-red-400 rounded-xl hover:text-red-600 transition-all"
                                                                title="기본값으로 복구"
                                                            >
                                                                <Trash2 className="w-4 h-4" />
                                                            </button>
                                                        </div>
                                                    ) : (
                                                        <input 
                                                            type="text" 
                                                            value={images[key] || ''} 
                                                            onChange={(e) => setImages(prev => ({ ...prev, [key]: e.target.value }))} 
                                                            placeholder={key === 'logo' || key === 'favicon' ? "비워두면 텍스트 로고 사용" : "이미지 URL(https://...)을 입력하세요"} 
                                                            className="flex-1 p-3.5 border border-gray-100 bg-gray-50 rounded-2xl text-xs font-mono outline-none focus:border-eum-accent focus:bg-white transition-all shadow-inner" 
                                                        />
                                                    )}
                                                    <label className="cursor-pointer bg-white hover:bg-gray-900 hover:text-white text-gray-400 p-3.5 rounded-2xl border border-gray-100 shadow-sm transition-all flex items-center justify-center w-14 flex-shrink-0" title="파일 직접 업로드">
                                                        <Upload className="w-6 h-6" />
                                                        <input 
                                                            type="file" 
                                                            accept="image/*" 
                                                            className="hidden" 
                                                            onChange={(e) => handleFileChange(key, e)} 
                                                        />
                                                    </label>
                                                </div>
                                                <div className="flex items-center justify-between px-1">
                                                    <p className={`text-[10px] font-black uppercase tracking-widest ${isDefault ? 'text-gray-300' : 'text-eum-accent'}`}>
                                                        {isDefault ? "● 기본 상태 (Default)" : "● 사용자 설정 (Customized)"}
                                                    </p>
                                                    {!isDefault && !isDataUrl && (
                                                        <button 
                                                            onClick={() => setImages(prev => ({ ...prev, [key]: DEFAULT_IMAGES[key] }))}
                                                            className="text-[10px] font-bold text-gray-400 hover:text-red-500 transition-colors"
                                                        >
                                                            기본값 복구
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="h-32 w-full bg-gray-100 rounded-[1.5rem] overflow-hidden border border-gray-100 flex items-center justify-center shadow-inner group relative">
                                                {images[key] ? (
                                                    <>
                                                        <img 
                                                            src={images[key]} 
                                                            alt="Preview" 
                                                            className={`w-full h-full object-cover ${key === 'favicon' ? 'scale-50 object-contain' : ''}`} 
                                                        />
                                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                                                            <span className="text-[10px] text-white font-bold">미리보기</span>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <span className="text-xs text-gray-400 font-bold">이미지 없음</span>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Storage Info */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-gray-100 shadow-sm">
                        <Database className="w-4 h-4 text-eum-accent" />
                        <span className="text-xs font-black text-gray-500 uppercase tracking-widest">
                            Storage: {storageUsage.toFixed(2)}MB / 5.00MB
                        </span>
                        <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div 
                                className={`h-full transition-all duration-500 ${storageUsage > 4 ? 'bg-red-500' : 'bg-eum-accent'}`} 
                                style={{ width: `${Math.min((storageUsage / 5) * 100, 100)}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="bg-[#0f0f0f] text-white">
                <Footer />
            </div>
        </div>
    );
};

export default AdminPage;
