
import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Settings, LayoutGrid, Layers, Workflow, Info, Trash2, Upload, Database, Image as ImageIcon, AppWindow, Save, RefreshCw, Lock, MapPin, Calendar, Plus, Link as LinkIcon, AlertCircle } from 'lucide-react';
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
    region?: 'gj' | 'jn';
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

    // 스토리지 용량 체크 (MB 단위)
    const checkStorageUsage = useCallback(() => {
        try {
            let total = 0;
            for (let key in localStorage) {
                if (localStorage.hasOwnProperty(key)) {
                    total += ((localStorage[key].length + key.length) * 2);
                }
            }
            const totalMB = total / (1024 * 1024);
            setStorageUsage(totalMB);
        } catch (e) { 
            setStorageUsage(0); 
        }
    }, []);

    // 데이터 로드 (항상 최신 상태 유지)
    const loadData = useCallback(() => {
        refreshAssets();
        // 이미지/텍스트 로드
        const currentImages: Partial<ImageAssets> = {};
        getImageKeys().forEach(key => { currentImages[key] = IMAGES[key]; });
        setImages(currentImages);

        const currentTexts: Partial<TextAssets> = {};
        getTextKeys().forEach(key => { currentTexts[key] = TEXTS[key]; });
        setTexts(currentTexts);

        // 주차별 명단 로드
        try {
            const w = localStorage.getItem('EUM_WEEKLY_LISTS');
            if (w) {
                const parsed = JSON.parse(w);
                // ID 기준 내림차순 정렬 (최신순)
                parsed.sort((a: WeeklyItem, b: WeeklyItem) => Number(b.id) - Number(a.id));
                setWeeklyLists(parsed);
            } else {
                setWeeklyLists([]);
            }
        } catch (e) {
            setWeeklyLists([]);
        }
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

    // 이미지 처리 (강력한 압축 적용)
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
                
                // Max Width 800px (이정도면 모바일/PC 목록에서 충분함)
                // 원본 사진은 4000px이 넘어서 용량이 큼 -> 800px로 줄이면 용량 1/20 토막
                const MAX_WIDTH = 800;
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }
                
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx?.drawImage(img, 0, 0, width, height);
                
                // JPEG Quality 0.6 (약간의 화질 저하, 용량 대폭 감소)
                const resizedDataUrl = canvas.toDataURL('image/jpeg', 0.6);
                setIsProcessing(false);
                callback(resizedDataUrl);
            };
            img.onerror = () => {
                setIsProcessing(false);
                alert("이미지 변환 실패. 다른 이미지를 사용해보세요.");
            };
        };
        reader.readAsDataURL(file);
    };

    // [자산] 저장 핸들러
    const handleSaveAssets = () => {
        setIsProcessing(true);
        setMessage(null);
        setTimeout(() => {
            try {
                const cleanImages: Partial<ImageAssets> = {};
                Object.keys(images).forEach(key => {
                    const k = key as keyof ImageAssets;
                    if (images[k] && images[k] !== DEFAULT_IMAGES[k]) cleanImages[k] = images[k];
                });
                
                const imgJson = JSON.stringify(cleanImages);
                
                // LocalStorage 전체 용량 고려 (약 5MB 한도)
                // 너무 크면 에러 발생
                localStorage.setItem('EUM_CUSTOM_IMAGES', imgJson);
                localStorage.setItem('EUM_CUSTOM_TEXTS', JSON.stringify(texts));

                refreshAssets();
                checkStorageUsage();
                setMessage({ text: '설정이 저장되었습니다.', type: 'success' });
                alert('저장 완료!');
                loadData();
            } catch (e: any) {
                if (e.name === 'QuotaExceededError' || e.message?.includes('quota')) {
                    alert("⚠️ 저장 용량 초과!\n이미지가 너무 많거나 큽니다. \n1. [초기화]를 하거나 \n2. 이미지 URL 방식을 사용해주세요.");
                } else {
                    alert("저장 실패. 브라우저 저장소가 꽉 찼을 수 있습니다.");
                }
            } finally {
                setIsProcessing(false);
            }
        }, 100);
    };

    const handleAssetFileChange = (key: keyof ImageAssets, e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            processImage(file, (resizedDataUrl) => {
                setImages(prev => ({ ...prev, [key]: resizedDataUrl }));
                setMessage({ text: '이미지가 준비되었습니다. [저장하기]를 눌러주세요.', type: 'warning' });
            });
        }
    };

    // [주차별 명단] 이미지 파일 업로드 시 자동 등록
    const handleWeeklyImageAutoRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // 파일 처리 후 자동 등록 호출
        processImage(file, (resizedDataUrl) => {
            registerWeeklyItem(resizedDataUrl);
        });
        
        // 같은 파일 재선택 가능하도록 초기화
        e.target.value = '';
    };

    // [주차별 명단] URL 수동 등록
    const handleWeeklyUrlRegister = () => {
        if (!newWeekImage.trim()) {
            alert("이미지 주소(URL)를 입력해주세요.");
            return;
        }
        registerWeeklyItem(newWeekImage.trim());
    };

    // 공통 등록 로직 (LocalStorage 직접 접근 + 안전장치)
    const registerWeeklyItem = (imgSrc: string) => {
        try {
            // 1. 기존 데이터 읽기
            const currentListJson = localStorage.getItem('EUM_WEEKLY_LISTS');
            const currentList: WeeklyItem[] = currentListJson ? JSON.parse(currentListJson) : [];

            // 2. 제목 자동 생성
            const today = new Date();
            const autoTitle = `${today.getMonth() + 1}월 ${Math.ceil(today.getDate() / 7)}주차 ${newWeekRegion === 'jn' ? '전남' : '광주'} 선정자`;
            const titleToUse = newWeekTitle.trim() || autoTitle;

            const newItem: WeeklyItem = {
                id: Date.now().toString() + Math.random().toString(36).substr(2, 5),
                title: titleToUse,
                image: imgSrc,
                date: new Date().toLocaleDateString(),
                region: newWeekRegion
            };

            const updatedList = [newItem, ...currentList];
            
            // 3. 저장 시도 (여기서 에러 나면 catch로 이동)
            localStorage.setItem('EUM_WEEKLY_LISTS', JSON.stringify(updatedList));
            
            // 4. 성공 시 상태 업데이트
            setWeeklyLists(updatedList);
            setNewWeekTitle('');
            setNewWeekImage('');
            checkStorageUsage();
            
            setMessage({ text: '성공적으로 등록되었습니다.', type: 'success' });
            // alert("등록되었습니다!"); // 자동등록 시 팝업 너무 자주 뜨면 불편할 수 있어 생략 가능 (필요시 주석 해제)
        } catch (e: any) {
            console.error(e);
            if (e.name === 'QuotaExceededError' || e.message?.includes('quota')) {
                 alert("⚠️ 저장 실패: 용량이 가득 찼습니다.\n\n기존 명단을 삭제하거나, 브라우저 캐시를 정리해야 합니다.\n(사진 용량을 줄여서 다시 시도해보세요.)");
            } else {
                alert("저장 중 오류가 발생했습니다.");
            }
        }
    };

    // [주차별 명단] 삭제 로직
    const deleteWeeklyItem = (id: string) => {
        if (!window.confirm('정말 삭제하시겠습니까?')) return;

        try {
            const currentListJson = localStorage.getItem('EUM_WEEKLY_LISTS');
            if (!currentListJson) return;

            const currentList: WeeklyItem[] = JSON.parse(currentListJson);
            const updatedList = currentList.filter(item => item.id !== id);

            localStorage.setItem('EUM_WEEKLY_LISTS', JSON.stringify(updatedList));
            setWeeklyLists(updatedList);
            checkStorageUsage();
            
            setMessage({ text: '삭제되었습니다.', type: 'success' });
        } catch (e) {
            alert("삭제 중 오류가 발생했습니다.");
        }
    };

    const handleReset = () => {
        if (window.confirm('모든 설정(이미지, 텍스트)을 초기화하시겠습니까? (주차별 명단은 유지됩니다)')) {
            localStorage.removeItem('EUM_CUSTOM_IMAGES');
            localStorage.removeItem('EUM_CUSTOM_TEXTS');
            refreshAssets();
            loadData();
            checkStorageUsage();
            alert('초기화되었습니다.');
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
                        <input type="text" value={loginId} onChange={(e) => setLoginId(e.target.value)} placeholder="Admin ID" className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 font-bold outline-none focus:border-eum-accent transition-all" />
                        <input type="password" value={loginPw} onChange={(e) => setLoginPw(e.target.value)} placeholder="Password" className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 font-bold outline-none focus:border-eum-accent transition-all" />
                        {authError && <div className="text-red-400 text-xs font-bold text-center bg-red-500/10 py-2 rounded-lg">{authError}</div>}
                        <button type="submit" className="w-full bg-eum-accent text-white font-black py-4 rounded-xl hover:bg-white hover:text-eum-dark transition-all mt-4 shadow-lg">로그인</button>
                    </form>
                    
                    <div className="mt-8 text-center"><button onClick={() => navigate('/')} className="text-gray-500 text-xs font-bold hover:text-white transition-colors">홈으로 돌아가기</button></div>
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
                            <button onClick={() => navigate('/weekly')} className="flex items-center gap-2 px-4 py-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition-all font-bold text-xs border border-blue-100"><Calendar className="w-3 h-3" /> [New] 주차별 참가자 명단</button>
                            <button onClick={() => navigate('/landing')} className="flex items-center gap-2 px-4 py-3 bg-eum-bg text-eum-dark rounded-xl hover:bg-gray-200 transition-all font-bold text-xs"><MapPin className="w-3 h-3" /> 광주·전남 랜딩페이지</button>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-4 mb-8">
                    <button onClick={() => setActiveTab('assets')} className={`flex-1 py-4 rounded-2xl font-black text-lg transition-all ${activeTab === 'assets' ? 'bg-eum-dark text-white shadow-lg' : 'bg-white text-gray-400 hover:bg-gray-50'}`}>이미지/텍스트 관리</button>
                    <button onClick={() => setActiveTab('weekly')} className={`flex-1 py-4 rounded-2xl font-black text-lg transition-all ${activeTab === 'weekly' ? 'bg-eum-dark text-white shadow-lg' : 'bg-white text-gray-400 hover:bg-gray-50'}`}>주차별 명단 관리</button>
                </div>

                {/* Action Bar (Assets Only) */}
                {activeTab === 'assets' && (
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 sticky top-[100px] z-30 bg-eum-bg/90 backdrop-blur-md py-4 rounded-xl px-2">
                        <h2 className="text-2xl font-black text-eum-dark flex items-center gap-3"><LayoutGrid className="w-6 h-6 text-eum-accent" /> 리소스 관리</h2>
                        <div className="flex gap-3">
                            <button onClick={handleReset} className="px-6 py-3 border border-gray-200 bg-white text-gray-400 font-bold rounded-2xl hover:bg-gray-50 transition-all flex items-center gap-2"><RefreshCw className="w-4 h-4" /> 초기화</button>
                            <button onClick={handleSaveAssets} disabled={isProcessing} className={`px-10 py-3 bg-eum-dark text-white font-black rounded-2xl hover:bg-black transition-all flex items-center gap-2 shadow-lg ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}>{isProcessing ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}{isProcessing ? '처리 중...' : '저장하기'}</button>
                        </div>
                    </div>
                )}

                {message && (
                    <div className={`mb-10 p-5 rounded-2xl font-bold text-center border animate-pulse flex items-center justify-center gap-2 ${message.type === 'error' ? 'bg-red-50 text-red-600 border-red-100' : message.type === 'warning' ? 'bg-yellow-50 text-yellow-700 border-yellow-100' : 'bg-green-50 text-green-600 border-green-100'}`}>
                        <AlertCircle className="w-5 h-5" /> {message.text}
                    </div>
                )}

                {/* --- ASSETS TAB --- */}
                {activeTab === 'assets' && (
                    <div className="space-y-16">
                         {GROUPS.map((group) => (
                            <div key={group.id} className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <div className="flex items-center gap-4 mb-10 pb-6 border-b border-gray-50">
                                    <div className="w-12 h-12 bg-eum-bg rounded-2xl flex items-center justify-center text-eum-accent"><group.icon className="w-6 h-6" /></div>
                                    <h3 className="text-xl font-black text-eum-dark">{group.title}</h3>
                                </div>
                                <div className="space-y-12">
                                    {group.keys.map((k) => {
                                        const key = k as keyof ImageAssets;
                                        const meta = IMAGE_META[key] || { label: key, location: "-", size: "-", icon: Info };
                                        return (
                                            <div key={key} className="grid lg:grid-cols-[220px_1fr_180px] gap-8 items-start">
                                                <div className="space-y-2"><label className="font-black text-eum-dark text-sm block">{meta.label}</label><div className="inline-block bg-eum-bg px-2 py-1 rounded text-[10px] font-black text-eum-accent border border-eum-accent/10 uppercase">{meta.size}</div></div>
                                                <div className="space-y-3">
                                                    <div className="flex gap-2">
                                                        <input type="text" value={images[key] || ''} onChange={(e) => setImages(prev => ({ ...prev, [key]: e.target.value }))} placeholder="이미지 URL을 입력하세요" className="flex-1 p-3.5 border border-gray-100 bg-gray-50 rounded-2xl text-xs font-mono outline-none focus:border-eum-accent focus:bg-white transition-all shadow-inner" />
                                                        <label className="cursor-pointer bg-white hover:bg-gray-900 hover:text-white text-gray-400 p-3.5 rounded-2xl border border-gray-100 shadow-sm transition-all flex items-center justify-center w-14 flex-shrink-0">
                                                            <Upload className="w-6 h-6" /><input type="file" accept="image/*" className="hidden" onChange={(e) => handleAssetFileChange(key, e)} />
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="h-32 w-full bg-gray-100 rounded-[1.5rem] overflow-hidden border border-gray-100 flex items-center justify-center shadow-inner relative">
                                                    {images[key] ? <img src={images[key]} alt="Preview" className="w-full h-full object-cover" /> : <span className="text-xs text-gray-400 font-bold">이미지 없음</span>}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* --- WEEKLY LIST TAB --- */}
                {activeTab === 'weekly' && (
                    <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                        <div className="flex items-center gap-4 mb-10 pb-6 border-b border-gray-50">
                            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500"><Calendar className="w-6 h-6" /></div>
                            <div>
                                <h3 className="text-xl font-black text-eum-dark">주차별 참가자 명단 관리</h3>
                                <p className="text-xs text-gray-400 mt-1">'/weekly' 페이지에 노출되는 명단을 관리합니다.</p>
                            </div>
                        </div>

                        {/* Add New */}
                        <div className="bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-200 mb-8 shadow-sm">
                            <h4 className="font-bold text-gray-800 mb-6 flex items-center gap-2 text-lg"><Plus className="w-5 h-5" /> 간편 등록</h4>
                            <div className="grid gap-6">
                                {/* Region Selector */}
                                <div className="bg-white p-4 rounded-xl border border-gray-200 inline-block">
                                    <span className="text-xs font-bold text-gray-400 block mb-2">게시할 지역 선택 (필수)</span>
                                    <div className="flex gap-6">
                                        <div onClick={() => setNewWeekRegion('gj')} className="flex items-center gap-2 cursor-pointer group select-none p-2 hover:bg-gray-50 rounded-lg transition-colors">
                                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${newWeekRegion === 'gj' ? 'border-eum-dark' : 'border-gray-300'}`}>{newWeekRegion === 'gj' && <div className="w-2.5 h-2.5 bg-eum-dark rounded-full" />}</div>
                                            <span className={`text-base font-bold ${newWeekRegion === 'gj' ? 'text-eum-dark' : 'text-gray-400'}`}>광주 지역</span>
                                        </div>
                                        <div onClick={() => setNewWeekRegion('jn')} className="flex items-center gap-2 cursor-pointer group select-none p-2 hover:bg-gray-50 rounded-lg transition-colors">
                                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${newWeekRegion === 'jn' ? 'border-indigo-600' : 'border-gray-300'}`}>{newWeekRegion === 'jn' && <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full" />}</div>
                                            <span className={`text-base font-bold ${newWeekRegion === 'jn' ? 'text-indigo-600' : 'text-gray-400'}`}>전남 (여순광)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <input type="text" placeholder="제목 입력 (비워두면 'X월 X주차 참가자' 자동 입력)" value={newWeekTitle} onChange={(e) => setNewWeekTitle(e.target.value)} className="w-full p-4 bg-white rounded-xl border border-gray-200 outline-none focus:border-eum-accent transition-all font-bold text-base" />
                                    
                                    <div className="flex flex-col md:flex-row gap-2 items-center">
                                        <label className={`w-full p-6 rounded-2xl border-2 border-dashed cursor-pointer transition-all flex items-center justify-center gap-3 shadow-sm group ${isProcessing ? 'bg-gray-100 border-gray-300 cursor-not-allowed' : 'bg-white border-eum-dark/20 hover:border-eum-dark hover:bg-eum-dark/5'}`} title="파일 선택 시 즉시 등록됩니다">
                                            <div className="bg-eum-dark text-white p-2 rounded-full group-hover:scale-110 transition-transform">{isProcessing ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Upload className="w-5 h-5" />}</div>
                                            <div className="text-left"><span className="block font-black text-gray-800 text-sm md:text-base">{isProcessing ? '처리 중...' : '이미지 업로드하여 바로 등록하기'}</span><span className="block text-xs text-gray-400 font-medium">클릭하여 파일 선택 (자동 등록됨)</span></div>
                                            <input type="file" accept="image/*" className="hidden" disabled={isProcessing} onChange={handleWeeklyImageAutoRegister} />
                                        </label>
                                    </div>
                                    
                                    {/* Manual URL Input */}
                                    <div className="pt-4 border-t border-gray-200">
                                        <p className="text-xs font-bold text-gray-400 mb-2">또는 이미지 주소(URL)로 직접 등록</p>
                                        <div className="flex gap-2">
                                            <input type="text" placeholder="https://..." value={newWeekImage} onChange={(e) => setNewWeekImage(e.target.value)} className="flex-1 p-3 bg-white rounded-xl border border-gray-200 outline-none focus:border-eum-accent transition-all font-bold text-xs font-mono" />
                                            <button onClick={handleWeeklyUrlRegister} className="px-4 bg-gray-800 text-white rounded-xl font-bold text-xs hover:bg-black whitespace-nowrap">주소로 등록</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* List */}
                        <div className="space-y-4">
                            <h4 className="font-bold text-gray-700 mb-2">등록된 명단 리스트 ({weeklyLists.length})</h4>
                            {weeklyLists.length === 0 ? (
                                <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-100 border-dashed"><p className="text-gray-400 font-bold">등록된 명단이 없습니다.</p></div>
                            ) : (
                                weeklyLists.map((item) => (
                                    <div key={item.id} className="flex flex-col md:flex-row items-start md:items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm hover:border-gray-300 transition-all">
                                        <div className="w-full md:w-24 h-32 md:h-24 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0 relative border border-gray-200">
                                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                            <div className="absolute top-0 left-0 bg-black/50 text-white text-[9px] px-1.5 py-0.5 rounded-br-lg font-bold">{item.region === 'jn' ? '전남' : '광주'}</div>
                                        </div>
                                        <div className="flex-1 w-full">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded text-white flex-shrink-0 ${item.region === 'jn' ? 'bg-indigo-500' : 'bg-eum-dark'}`}>{item.region === 'jn' ? '전남(여순광)' : '광주'}</span>
                                                <h5 className="font-black text-gray-800 text-sm line-clamp-1">{item.title}</h5>
                                            </div>
                                            <p className="text-xs text-gray-400 font-medium mb-3 md:mb-0">{item.date} 등록됨</p>
                                        </div>
                                        <div className="flex items-center gap-2 w-full md:w-auto">
                                            <a href={item.image} target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none p-3 bg-gray-50 text-gray-500 rounded-xl hover:bg-gray-100 transition-all text-center flex justify-center" title="이미지 보기"><LinkIcon className="w-4 h-4" /></a>
                                            <button onClick={() => deleteWeeklyItem(item.id)} className="flex-1 md:flex-none p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all text-center flex justify-center cursor-pointer relative z-10" title="삭제"><Trash2 className="w-4 h-4" /></button>
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
                        <span className="text-xs font-black text-gray-500 uppercase tracking-widest">Storage: {storageUsage.toFixed(2)}MB / 5.00MB</span>
                        <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden"><div className={`h-full transition-all duration-500 ${storageUsage > 4.5 ? 'bg-red-500' : 'bg-eum-accent'}`} style={{ width: `${Math.min((storageUsage / 5) * 100, 100)}%` }}></div></div>
                    </div>
                    <p className="text-[10px] text-gray-400 mt-2">* 브라우저 저장소 한도(약 5MB)를 초과하면 등록되지 않습니다. <br/>(사진 자동 압축 기능이 적용되어 있습니다)</p>
                </div>
            </div>
            
            <div className="bg-[#0f0f0f] text-white"><Footer /></div>
        </div>
    );
};

export default AdminPage;
