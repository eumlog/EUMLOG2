
import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, FileText, Settings, LayoutGrid, Layers, Workflow, Info, CheckCircle, Trash2, Upload, Database, Image as ImageIcon, AppWindow, Save, RefreshCw, UserCircle, Lock, BookOpen, MapPin, Instagram, Calendar, Plus, Link as LinkIcon, AlertCircle, Zap } from 'lucide-react';
import { PageHeader } from '../components/Shared';
import Footer from '../components/Footer';
import { IMAGES, TEXTS, refreshAssets, getImageKeys, getTextKeys } from '../lib/assets';
import { DEFAULT_IMAGES, DEFAULT_TEXTS } from '../constants';
import { ImageAssets, TextAssets } from '../types';

interface Message {
    text: string;
    type: 'success' | 'error' | 'warning';
}

interface WeeklyItem {
    id: string;
    title: string;
    image: string;
    date: string;
    region?: 'gj' | 'jn'; // gj: Gwangju, jn: Jeonnam
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
    processStep3: { label: "1:1 상담", location: "진행방식 > 3단계", size: "1200 x 900", icon: Workflow },
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
    
    // Weekly List State
    const [weeklyLists, setWeeklyLists] = useState<WeeklyItem[]>([]);
    const [newWeekTitle, setNewWeekTitle] = useState('');
    const [newWeekImage, setNewWeekImage] = useState('');
    const [newWeekRegion, setNewWeekRegion] = useState<'gj' | 'jn'>('gj');

    const [message, setMessage] = useState<Message | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [storageUsage, setStorageUsage] = useState(0);
    const [activeTab, setActiveTab] = useState<'assets' | 'weekly'>('assets');

    const checkStorageUsage = useCallback(() => {
        try {
            const i = localStorage.getItem('EUM_CUSTOM_IMAGES') || "";
            const t = localStorage.getItem('EUM_CUSTOM_TEXTS') || "";
            const w = localStorage.getItem('EUM_WEEKLY_LISTS') || "";
            const totalBytes = (i.length + t.length + w.length) * 2; // UTF-16 characters
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

        // Load Weekly Lists
        try {
            const w = localStorage.getItem('EUM_WEEKLY_LISTS');
            if (w) setWeeklyLists(JSON.parse(w));
        } catch (e) {}

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

    const processImage = (file: File, callback: (url: string) => void) => {
        setIsProcessing(true);
        const reader = new FileReader();
        reader.onload = (evt) => {
            const img = new Image();
            img.src = evt.target?.result as string;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                let width = img.width;
                let height = img.height;
                
                // Max Width 800px로 줄여서 용량 최적화 (빠른 등록을 위해)
                const MAX_WIDTH = 800;
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }
                
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx?.drawImage(img, 0, 0, width, height);
                
                // Quality 0.6
                const resizedDataUrl = canvas.toDataURL('image/jpeg', 0.6);
                setIsProcessing(false);
                callback(resizedDataUrl);
            };
            img.onerror = () => {
                setIsProcessing(false);
                alert("이미지 처리 중 오류가 발생했습니다.");
            };
        };
        reader.onerror = () => {
            setIsProcessing(false);
            alert("파일을 읽는 중 오류가 발생했습니다.");
        };
        reader.readAsDataURL(file);
    };

    const handleSave = () => {
        setIsProcessing(true);
        setMessage(null);
        
        setTimeout(() => {
            try {
                const cleanImages: Partial<ImageAssets> = {};
                Object.keys(images).forEach(key => {
                    const k = key as keyof ImageAssets;
                    if (images[k] && images[k] !== DEFAULT_IMAGES[k]) {
                        cleanImages[k] = images[k];
                    }
                });
                
                const imgJson = JSON.stringify(cleanImages);
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
                alert('저장되었습니다.');
                loadData();
            } catch (e: any) {
                if (e.message === "STORAGE_QUOTA_EXCEEDED" || e.name === 'QuotaExceededError') {
                    const errMsg = '용량 초과! 이미지 파일의 크기가 너무 큽니다. URL 방식을 사용하거나 저해상도 파일을 사용하세요.';
                    setMessage({ text: errMsg, type: 'error' });
                    alert(errMsg);
                } else {
                    setMessage({ text: '저장 중 오류가 발생했습니다.', type: 'error' });
                    alert('저장 실패');
                }
            } finally {
                setIsProcessing(false);
            }
        }, 100);
    };

    const handleFileChange = (key: keyof ImageAssets, e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            processImage(file, (resizedDataUrl) => {
                setImages(prev => ({ ...prev, [key]: resizedDataUrl }));
                setMessage({ text: '이미지가 준비되었습니다. [저장하기] 버튼을 눌러주세요.', type: 'warning' });
            });
        }
    };

    // 이미지 업로드 시 즉시 리스트에 등록 (Auto-Register)
    const handleWeeklyImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            processImage(file, (resizedDataUrl) => {
                // 제목이 없으면 자동 생성
                const currentWeekTitle = newWeekTitle.trim() || `${new Date().getMonth() + 1}월 ${Math.ceil(new Date().getDate() / 7)}주차 ${newWeekRegion === 'jn' ? '전남' : '광주'} 선정자`;
                
                const newItem: WeeklyItem = {
                    id: Date.now().toString(),
                    title: currentWeekTitle,
                    image: resizedDataUrl,
                    date: new Date().toLocaleDateString(),
                    region: newWeekRegion
                };

                // 현재 리스트에 추가 (로컬스토리지 저장)
                // Closure 이슈 방지를 위해 함수형 업데이트 대신 직접 접근
                const currentList = JSON.parse(localStorage.getItem('EUM_WEEKLY_LISTS') || '[]');
                const updated = [newItem, ...currentList];

                try {
                    localStorage.setItem('EUM_WEEKLY_LISTS', JSON.stringify(updated));
                    setWeeklyLists(updated);
                    setNewWeekTitle('');
                    setNewWeekImage(''); // 미리보기 필요 없음 (리스트에 바로 뜸)
                    checkStorageUsage();
                    setMessage({ text: '이미지가 업로드되어 즉시 등록되었습니다.', type: 'success' });
                    alert('성공! 리스트에 바로 등록되었습니다.');
                } catch (err) {
                    console.error(err);
                    setMessage({ text: '저장 용량이 부족합니다.', type: 'error' });
                    alert("용량 부족으로 등록 실패. 기존 명단을 삭제해주세요.");
                }
            });
        }
    };

    const addWeeklyItemManual = () => {
        if (!newWeekTitle.trim()) {
            alert("제목을 입력해주세요.");
            return;
        }
        if (!newWeekImage) {
            alert("이미지 URL을 입력하거나 파일을 업로드해주세요.");
            return;
        }

        const newItem: WeeklyItem = {
            id: Date.now().toString(),
            title: newWeekTitle,
            image: newWeekImage,
            date: new Date().toLocaleDateString(),
            region: newWeekRegion
        };

        const updated = [newItem, ...weeklyLists];
        try {
            localStorage.setItem('EUM_WEEKLY_LISTS', JSON.stringify(updated));
            setWeeklyLists(updated);
            setNewWeekTitle('');
            setNewWeekImage('');
            checkStorageUsage();
            setMessage({ text: '명단이 추가되었습니다.', type: 'success' });
            alert("명단이 정상적으로 등록되었습니다.");
        } catch (e) {
            console.error(e);
            setMessage({ text: '저장 용량이 부족합니다.', type: 'error' });
            alert("저장 용량이 부족합니다.");
        }
    };

    const deleteWeeklyItem = (id: string) => {
        if(window.confirm('정말 삭제하시겠습니까?')) {
            const updated = weeklyLists.filter(item => item.id !== id);
            localStorage.setItem('EUM_WEEKLY_LISTS', JSON.stringify(updated));
            setWeeklyLists(updated);
            checkStorageUsage();
            setMessage({ text: '삭제되었습니다.', type: 'success' });
        }
    };

    const handleReset = () => {
        if (window.confirm('모든 커스텀 설정을 초기화하고 기본값으로 되돌리시겠습니까? (주차별 명단은 유지됩니다)')) {
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
                    <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col gap-4">
                        <h3 className="text-sm font-black text-gray-700 flex items-center gap-2 uppercase tracking-widest">
                            <ExternalLink className="w-4 h-4 text-eum-accent" /> 페이지 바로가기
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            <button 
                                onClick={() => navigate('/weekly')} 
                                className="flex items-center gap-2 px-4 py-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-all font-bold text-xs border border-blue-100"
                            >
                                <Calendar className="w-3 h-3" /> [New] 주차별 참가자 명단
                            </button>
                            <button 
                                onClick={() => navigate('/landing')} 
                                className="flex items-center gap-2 px-4 py-3 bg-eum-bg text-eum-dark rounded-xl hover:bg-gray-200 transition-all font-bold text-xs"
                            >
                                <MapPin className="w-3 h-3" /> 광주·전남 랜딩페이지
                            </button>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-4 mb-8">
                    <button 
                        onClick={() => setActiveTab('assets')}
                        className={`flex-1 py-4 rounded-2xl font-black text-lg transition-all ${activeTab === 'assets' ? 'bg-eum-dark text-white shadow-lg' : 'bg-white text-gray-400 hover:bg-gray-50'}`}
                    >
                        이미지/텍스트 자산 관리
                    </button>
                    <button 
                        onClick={() => setActiveTab('weekly')}
                        className={`flex-1 py-4 rounded-2xl font-black text-lg transition-all ${activeTab === 'weekly' ? 'bg-eum-dark text-white shadow-lg' : 'bg-white text-gray-400 hover:bg-gray-50'}`}
                    >
                        주차별 명단 관리
                    </button>
                </div>

                {/* Action Bar (Assets Tab Only) */}
                {activeTab === 'assets' && (
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
                )}

                {message && (
                    <div className={`mb-10 p-5 rounded-2xl font-bold text-center border animate-pulse flex items-center justify-center gap-2 ${
                        message.type === 'error' ? 'bg-red-50 text-red-600 border-red-100' : 
                        message.type === 'warning' ? 'bg-yellow-50 text-yellow-700 border-yellow-100' :
                        'bg-green-50 text-green-600 border-green-100'
                    }`}>
                        <AlertCircle className="w-5 h-5" /> {message.text}
                    </div>
                )}

                {/* --- ASSETS TAB CONTENT --- */}
                {activeTab === 'assets' && (
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
                                        const isDataUrl = images[key]?.startsWith('data:');
                                        
                                        return (
                                            <div key={key} className="grid lg:grid-cols-[220px_1fr_180px] gap-8 items-start">
                                                <div className="space-y-2">
                                                    <label className="font-black text-eum-dark text-sm block">{meta.label}</label>
                                                    <div className="inline-block bg-eum-bg px-2 py-1 rounded text-[10px] font-black text-eum-accent border border-eum-accent/10 uppercase">{meta.size}</div>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="flex gap-2">
                                                        <input 
                                                            type="text" 
                                                            value={images[key] || ''} 
                                                            onChange={(e) => setImages(prev => ({ ...prev, [key]: e.target.value }))} 
                                                            placeholder="이미지 URL을 입력하세요" 
                                                            className="flex-1 p-3.5 border border-gray-100 bg-gray-50 rounded-2xl text-xs font-mono outline-none focus:border-eum-accent focus:bg-white transition-all shadow-inner" 
                                                        />
                                                        <label className="cursor-pointer bg-white hover:bg-gray-900 hover:text-white text-gray-400 p-3.5 rounded-2xl border border-gray-100 shadow-sm transition-all flex items-center justify-center w-14 flex-shrink-0">
                                                            <Upload className="w-6 h-6" />
                                                            <input type="file" accept="image/*" className="hidden" onChange={(e) => handleFileChange(key, e)} />
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="h-32 w-full bg-gray-100 rounded-[1.5rem] overflow-hidden border border-gray-100 flex items-center justify-center shadow-inner relative">
                                                    {images[key] ? (
                                                        <img src={images[key]} alt="Preview" className="w-full h-full object-cover" />
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
                )}

                {/* --- WEEKLY LIST TAB CONTENT --- */}
                {activeTab === 'weekly' && (
                    <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                        <div className="flex items-center gap-4 mb-10 pb-6 border-b border-gray-50">
                            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500">
                                <Calendar className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-eum-dark">주차별 참가자 명단 관리</h3>
                                <p className="text-xs text-gray-400 mt-1">'/weekly' 페이지에 노출되는 명단을 관리합니다.</p>
                            </div>
                        </div>

                        {/* Add New */}
                        <div className="bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-200 mb-8 shadow-sm">
                            <h4 className="font-bold text-gray-800 mb-6 flex items-center gap-2 text-lg">
                                <Plus className="w-5 h-5" /> 간편 등록
                            </h4>
                            <div className="grid gap-6">
                                {/* Region Selector - Enhanced for better clicking */}
                                <div className="bg-white p-4 rounded-xl border border-gray-200 inline-block">
                                    <span className="text-xs font-bold text-gray-400 block mb-2">게시할 지역 선택 (필수)</span>
                                    <div className="flex gap-6">
                                        <div 
                                            onClick={() => setNewWeekRegion('gj')}
                                            className="flex items-center gap-2 cursor-pointer group select-none p-2 hover:bg-gray-50 rounded-lg transition-colors"
                                        >
                                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${newWeekRegion === 'gj' ? 'border-eum-dark' : 'border-gray-300'}`}>
                                                {newWeekRegion === 'gj' && <div className="w-2.5 h-2.5 bg-eum-dark rounded-full" />}
                                            </div>
                                            <span className={`text-base font-bold ${newWeekRegion === 'gj' ? 'text-eum-dark' : 'text-gray-400'}`}>광주 지역</span>
                                        </div>
                                        
                                        <div 
                                            onClick={() => setNewWeekRegion('jn')}
                                            className="flex items-center gap-2 cursor-pointer group select-none p-2 hover:bg-gray-50 rounded-lg transition-colors"
                                        >
                                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${newWeekRegion === 'jn' ? 'border-indigo-600' : 'border-gray-300'}`}>
                                                {newWeekRegion === 'jn' && <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full" />}
                                            </div>
                                            <span className={`text-base font-bold ${newWeekRegion === 'jn' ? 'text-indigo-600' : 'text-gray-400'}`}>전남 (여순광)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <input 
                                        type="text" 
                                        placeholder="제목 입력 (비워두면 'X월 X주차 참가자' 자동 입력)" 
                                        value={newWeekTitle}
                                        onChange={(e) => setNewWeekTitle(e.target.value)}
                                        className="w-full p-4 bg-white rounded-xl border border-gray-200 outline-none focus:border-eum-accent transition-all font-bold text-base"
                                    />
                                    
                                    <div className="flex flex-col md:flex-row gap-2 items-center">
                                        <label 
                                            className={`w-full p-6 rounded-2xl border-2 border-dashed cursor-pointer transition-all flex items-center justify-center gap-3 shadow-sm group ${isProcessing ? 'bg-gray-100 border-gray-300 cursor-not-allowed' : 'bg-white border-eum-dark/20 hover:border-eum-dark hover:bg-eum-dark/5'}`}
                                            title="파일 선택 시 즉시 등록됩니다"
                                        >
                                            <div className="bg-eum-dark text-white p-2 rounded-full group-hover:scale-110 transition-transform">
                                                {isProcessing ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Upload className="w-5 h-5" />}
                                            </div>
                                            <div className="text-left">
                                                <span className="block font-black text-gray-800 text-sm md:text-base">
                                                    {isProcessing ? '처리 중...' : '이미지 업로드하여 바로 등록하기'}
                                                </span>
                                                <span className="block text-xs text-gray-400 font-medium">클릭하여 파일 선택 (자동 저장됨)</span>
                                            </div>
                                            <input 
                                                type="file" 
                                                accept="image/*" 
                                                className="hidden" 
                                                disabled={isProcessing}
                                                onChange={handleWeeklyImageUpload}
                                            />
                                        </label>
                                    </div>
                                    
                                    {/* Manual URL Input (Optional Fallback) */}
                                    <div className="pt-4 border-t border-gray-200">
                                        <p className="text-xs font-bold text-gray-400 mb-2">또는 이미지 주소(URL)로 직접 등록</p>
                                        <div className="flex gap-2">
                                            <input 
                                                type="text"
                                                placeholder="https://..."
                                                value={newWeekImage}
                                                onChange={(e) => setNewWeekImage(e.target.value)}
                                                className="flex-1 p-3 bg-white rounded-xl border border-gray-200 outline-none focus:border-eum-accent transition-all font-bold text-xs font-mono"
                                            />
                                            <button 
                                                onClick={addWeeklyItemManual}
                                                className="px-4 bg-gray-800 text-white rounded-xl font-bold text-xs hover:bg-black whitespace-nowrap"
                                            >
                                                주소로 등록
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* List */}
                        <div className="space-y-4">
                            <h4 className="font-bold text-gray-700 mb-2">등록된 명단 리스트 ({weeklyLists.length})</h4>
                            {weeklyLists.length === 0 ? (
                                <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-100 border-dashed">
                                    <p className="text-gray-400 font-bold">등록된 명단이 없습니다.</p>
                                </div>
                            ) : (
                                weeklyLists.map((item) => (
                                    <div key={item.id} className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:border-gray-300 transition-all">
                                        <div className="w-full md:w-24 h-32 md:h-24 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0 relative border border-gray-200">
                                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                            <div className="absolute top-0 left-0 bg-black/50 text-white text-[9px] px-1.5 py-0.5 rounded-br-lg font-bold">
                                                {item.region === 'jn' ? '전남' : '광주'}
                                            </div>
                                        </div>
                                        <div className="flex-1 w-full">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded text-white flex-shrink-0 ${item.region === 'jn' ? 'bg-indigo-500' : 'bg-eum-dark'}`}>
                                                    {item.region === 'jn' ? '전남(여순광)' : '광주'}
                                                </span>
                                                <h5 className="font-black text-gray-800 text-sm line-clamp-1">{item.title}</h5>
                                            </div>
                                            <p className="text-xs text-gray-400 font-medium mb-3 md:mb-0">{item.date} 등록됨</p>
                                        </div>
                                        <div className="flex items-center gap-2 w-full md:w-auto">
                                            <a 
                                                href={item.image} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex-1 md:flex-none p-3 bg-gray-50 text-gray-500 rounded-xl hover:bg-gray-100 transition-all text-center flex justify-center"
                                                title="이미지 보기"
                                            >
                                                <LinkIcon className="w-4 h-4" />
                                            </a>
                                            <button 
                                                onClick={() => deleteWeeklyItem(item.id)}
                                                className="flex-1 md:flex-none p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all text-center flex justify-center"
                                                title="삭제"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                )}
                
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
