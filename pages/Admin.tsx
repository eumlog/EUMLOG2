
import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Settings, LayoutGrid, Layers, Workflow, Info, Trash2, Upload, Database, Image as ImageIcon, AppWindow, Save, RefreshCw, Lock, MapPin, Calendar, Plus, Link as LinkIcon, AlertCircle, Download, FileJson, XCircle } from 'lucide-react';
import { PageHeader } from '../components/Shared';
import Footer from '../components/Footer';
import { IMAGES, TEXTS, refreshAssets, getImageKeys, getTextKeys } from '../lib/assets';
import { DEFAULT_IMAGES } from '../constants';
import { ImageAssets, TextAssets } from '../types';

interface Message {
    text: string;
    type: 'success' | 'error' | 'warning';
}

interface WeeklyItem {
    id: string | number; // 호환성을 위해 유연한 타입 적용
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
    const backupFileInput = useRef<HTMLInputElement>(null);

    const [message, setMessage] = useState<Message | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [storageUsage, setStorageUsage] = useState(0);
    const [activeTab, setActiveTab] = useState<'assets' | 'weekly'>('weekly'); // 주차별 명단 탭을 기본으로

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

    // 데이터 로드
    const loadData = useCallback(() => {
        refreshAssets();
        
        // 이미지/텍스트
        const currentImages: Partial<ImageAssets> = {};
        getImageKeys().forEach(key => { currentImages[key] = IMAGES[key]; });
        setImages(currentImages);

        const currentTexts: Partial<TextAssets> = {};
        getTextKeys().forEach(key => { currentTexts[key] = TEXTS[key]; });
        setTexts(currentTexts);

        // 주차별 명단
        try {
            const w = localStorage.getItem('EUM_WEEKLY_LISTS');
            if (w) {
                const parsed = JSON.parse(w);
                // Safe sorting: Handle potential non-numeric IDs gracefully
                parsed.sort((a: WeeklyItem, b: WeeklyItem) => {
                    const idA = Number(a.id) || 0;
                    const idB = Number(b.id) || 0;
                    return idB - idA;
                });
                setWeeklyLists(parsed);
            } else {
                setWeeklyLists([]);
            }
        } catch (e) {
            setWeeklyLists([]);
        }
        checkStorageUsage();
    }, [checkStorageUsage]);

    useEffect(() => { 
        loadData(); 
    }, [loadData]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (loginId === 'admin' && loginPw === '8645686') {
            setIsAuthenticated(true);
            setAuthError('');
        } else {
            setAuthError('아이디 또는 비밀번호가 올바르지 않습니다.');
        }
    };

    // 이미지 처리 (강력한 압축)
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
                
                // Max Width 800px
                const MAX_WIDTH = 800;
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }
                
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx?.drawImage(img, 0, 0, width, height);
                
                // JPEG Quality 0.6
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
        setTimeout(() => {
            try {
                const cleanImages: Partial<ImageAssets> = {};
                Object.keys(images).forEach(key => {
                    const k = key as keyof ImageAssets;
                    if (images[k] && images[k] !== DEFAULT_IMAGES[k]) cleanImages[k] = images[k];
                });
                
                localStorage.setItem('EUM_CUSTOM_IMAGES', JSON.stringify(cleanImages));
                localStorage.setItem('EUM_CUSTOM_TEXTS', JSON.stringify(texts));

                refreshAssets();
                checkStorageUsage();
                alert('자산 설정이 저장되었습니다!');
                loadData();
            } catch (e: any) {
                alert("저장 용량 초과! '초기화'를 하거나 이미지 URL을 사용하세요.");
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
            });
        }
    };

    // [주차별 명단] 등록 (공통)
    const registerWeeklyItem = (imgSrc: string) => {
        try {
            const currentListJson = localStorage.getItem('EUM_WEEKLY_LISTS');
            const currentList: WeeklyItem[] = currentListJson ? JSON.parse(currentListJson) : [];

            // 제목 자동 생성
            const today = new Date();
            const autoTitle = `${today.getMonth() + 1}월 ${Math.ceil(today.getDate() / 7)}주차 ${newWeekRegion === 'jn' ? '전남' : '광주'} 선정자`;
            const titleToUse = newWeekTitle.trim() || autoTitle;

            const newItem: WeeklyItem = {
                id: Date.now(), // 고유 ID
                title: titleToUse,
                image: imgSrc,
                date: new Date().toLocaleDateString(),
                region: newWeekRegion
            };

            const updatedList = [newItem, ...currentList];
            
            localStorage.setItem('EUM_WEEKLY_LISTS', JSON.stringify(updatedList));
            setWeeklyLists(updatedList);
            
            // 입력창 초기화
            setNewWeekTitle('');
            setNewWeekImage('');
            checkStorageUsage();
            
            alert("등록되었습니다!");
        } catch (e: any) {
             alert("저장 용량이 부족합니다. '명단 전체 삭제' 후 다시 시도하거나, 이미지 파일 대신 URL을 사용해주세요.");
        }
    };

    // [주차별 명단] 이미지 파일 자동 등록
    const handleWeeklyImageAutoRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        processImage(file, (resizedDataUrl) => {
            registerWeeklyItem(resizedDataUrl);
        });
        e.target.value = ''; // 재선택 가능하게
    };

    // [주차별 명단] URL 수동 등록
    const handleWeeklyUrlRegister = () => {
        if (!newWeekImage.trim()) {
            alert("이미지 주소(URL)를 입력해주세요.");
            return;
        }
        registerWeeklyItem(newWeekImage.trim());
    };

    // [주차별 명단] 삭제 로직 (타입 안전성 확보)
    const deleteWeeklyItem = (targetId: string | number) => {
        if (!window.confirm('정말 삭제하시겠습니까?')) return;

        try {
            const currentListJson = localStorage.getItem('EUM_WEEKLY_LISTS');
            if (!currentListJson) return;

            const currentList: WeeklyItem[] = JSON.parse(currentListJson);
            // ID를 문자열로 변환하여 비교 (타입 불일치 방지)
            const updatedList = currentList.filter(item => String(item.id) !== String(targetId));

            localStorage.setItem('EUM_WEEKLY_LISTS', JSON.stringify(updatedList));
            setWeeklyLists(updatedList);
            checkStorageUsage();
        } catch (e) {
            alert("삭제 중 오류가 발생했습니다.");
        }
    };

    // [주차별 명단] 전체 삭제
    const clearAllWeeklyItems = () => {
        if (window.confirm('⚠️ 정말 모든 명단을 삭제하시겠습니까?\n이 작업은 되돌릴 수 없습니다.')) {
            localStorage.removeItem('EUM_WEEKLY_LISTS');
            setWeeklyLists([]);
            checkStorageUsage();
            alert('모든 명단이 삭제되었습니다.');
        }
    };

    // [백업] JSON 다운로드
    const handleDownloadBackup = () => {
        const backupData = {
            images: localStorage.getItem('EUM_CUSTOM_IMAGES'),
            texts: localStorage.getItem('EUM_CUSTOM_TEXTS'),
            weekly: localStorage.getItem('EUM_WEEKLY_LISTS'),
            timestamp: new Date().toLocaleString()
        };
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", `eumlog_backup_${new Date().toISOString().slice(0,10)}.json`);
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    };

    // [백업] JSON 복구
    const handleRestoreBackup = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const json = JSON.parse(event.target?.result as string);
                if (json.images) localStorage.setItem('EUM_CUSTOM_IMAGES', json.images);
                if (json.texts) localStorage.setItem('EUM_CUSTOM_TEXTS', json.texts);
                if (json.weekly) localStorage.setItem('EUM_WEEKLY_LISTS', json.weekly);
                
                alert('복구되었습니다! 페이지를 새로고침합니다.');
                window.location.reload();
            } catch (err) {
                alert('잘못된 백업 파일입니다.');
            }
        };
        reader.readAsText(file);
        e.target.value = ''; // 초기화
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
                    </div>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <input type="text" value={loginId} onChange={(e) => setLoginId(e.target.value)} placeholder="Admin ID" className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 font-bold outline-none focus:border-eum-accent" />
                        <input type="password" value={loginPw} onChange={(e) => setLoginPw(e.target.value)} placeholder="Password" className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 font-bold outline-none focus:border-eum-accent" />
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
                {/* 데이터 백업/복구 */}
                <div className="mb-12 bg-white p-6 rounded-[2rem] border border-eum-accent/20 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-lg font-black text-eum-dark flex items-center gap-2"><Database className="w-5 h-5 text-eum-accent" /> 데이터 백업 및 복구</h3>
                        <p className="text-xs text-gray-500 mt-1">프로그램 수정이나 브라우저 변경 시 데이터가 사라질 수 있으니 꼭 백업하세요.</p>
                        <p className="text-[10px] text-red-400 mt-1 font-bold">Storage Usage: {storageUsage.toFixed(2)}MB / 5.0MB</p>
                    </div>
                    <div className="flex gap-3">
                        <button onClick={handleDownloadBackup} className="flex items-center gap-2 px-5 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold text-xs hover:bg-gray-200 transition-all">
                            <Download className="w-4 h-4" /> 데이터 백업(다운로드)
                        </button>
                        <label className="flex items-center gap-2 px-5 py-3 bg-eum-dark text-white rounded-xl font-bold text-xs hover:bg-black transition-all cursor-pointer">
                            <Upload className="w-4 h-4" /> 백업 파일 불러오기
                            <input type="file" ref={backupFileInput} onChange={handleRestoreBackup} accept=".json" className="hidden" />
                        </label>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-4 mb-8">
                    <button onClick={() => setActiveTab('weekly')} className={`flex-1 py-4 rounded-2xl font-black text-lg transition-all ${activeTab === 'weekly' ? 'bg-eum-dark text-white shadow-lg' : 'bg-white text-gray-400 hover:bg-gray-50'}`}>주차별 명단 관리</button>
                    <button onClick={() => setActiveTab('assets')} className={`flex-1 py-4 rounded-2xl font-black text-lg transition-all ${activeTab === 'assets' ? 'bg-eum-dark text-white shadow-lg' : 'bg-white text-gray-400 hover:bg-gray-50'}`}>이미지/텍스트 관리</button>
                </div>

                {/* --- WEEKLY LIST TAB --- */}
                {activeTab === 'weekly' && (
                    <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between mb-10 pb-6 border-b border-gray-50">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500"><Calendar className="w-6 h-6" /></div>
                                <div>
                                    <h3 className="text-xl font-black text-eum-dark">주차별 참가자 명단 관리</h3>
                                    <p className="text-xs text-gray-400 mt-1">삭제가 안 될 경우 [명단 전체 삭제] 후 다시 등록하세요.</p>
                                </div>
                            </div>
                            <button onClick={clearAllWeeklyItems} className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-500 rounded-xl font-bold text-xs hover:bg-red-500 hover:text-white transition-all">
                                <XCircle className="w-4 h-4" /> 명단 전체 삭제
                            </button>
                        </div>

                        {/* Add New */}
                        <div className="bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-200 mb-8 shadow-sm">
                            <h4 className="font-bold text-gray-800 mb-6 flex items-center gap-2 text-lg"><Plus className="w-5 h-5" /> 명단 등록</h4>
                            <div className="grid gap-6">
                                {/* Region Selector */}
                                <div className="bg-white p-4 rounded-xl border border-gray-200 inline-block">
                                    <span className="text-xs font-bold text-gray-400 block mb-2">게시할 지역 선택 (필수)</span>
                                    <div className="flex gap-6">
                                        <div onClick={() => setNewWeekRegion('gj')} className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-50 rounded-lg">
                                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${newWeekRegion === 'gj' ? 'border-eum-dark' : 'border-gray-300'}`}>{newWeekRegion === 'gj' && <div className="w-2.5 h-2.5 bg-eum-dark rounded-full" />}</div>
                                            <span className={`text-base font-bold ${newWeekRegion === 'gj' ? 'text-eum-dark' : 'text-gray-400'}`}>광주 지역</span>
                                        </div>
                                        <div onClick={() => setNewWeekRegion('jn')} className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-50 rounded-lg">
                                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${newWeekRegion === 'jn' ? 'border-indigo-600' : 'border-gray-300'}`}>{newWeekRegion === 'jn' && <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full" />}</div>
                                            <span className={`text-base font-bold ${newWeekRegion === 'jn' ? 'text-indigo-600' : 'text-gray-400'}`}>전남 (여순광)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <input type="text" placeholder="제목 입력 (비워두면 자동 생성)" value={newWeekTitle} onChange={(e) => setNewWeekTitle(e.target.value)} className="w-full p-4 bg-white rounded-xl border border-gray-200 outline-none focus:border-eum-accent font-bold" />
                                    
                                    {/* URL Input (Preferred) */}
                                    <div className="p-5 bg-blue-50 rounded-xl border border-blue-100">
                                        <div className="flex justify-between items-center mb-2">
                                            <p className="text-sm font-bold text-blue-600 flex items-center gap-2"><LinkIcon className="w-4 h-4"/> 이미지 주소(URL)로 등록</p>
                                            <span className="text-[10px] bg-white px-2 py-0.5 rounded text-blue-400 font-bold border border-blue-100">추천 방식</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <input type="text" placeholder="https://..." value={newWeekImage} onChange={(e) => setNewWeekImage(e.target.value)} className="flex-1 p-3 bg-white rounded-lg border border-blue-200 outline-none focus:border-blue-500 text-xs font-mono" />
                                            <button onClick={handleWeeklyUrlRegister} className="px-5 bg-blue-600 text-white rounded-lg font-bold text-xs hover:bg-blue-700 whitespace-nowrap shadow-md">URL 등록</button>
                                        </div>
                                        <p className="text-[10px] text-blue-400 mt-2">* 이미지가 서버에 저장되어 사라지지 않고 용량을 차지하지 않습니다.</p>
                                    </div>

                                    <div className="text-center text-xs font-bold text-gray-400 my-2">- 또는 -</div>

                                    {/* File Input */}
                                    <label className={`w-full p-4 rounded-xl border-2 border-dashed flex items-center justify-center gap-3 cursor-pointer hover:bg-white transition-colors ${isProcessing ? 'bg-gray-100' : 'bg-gray-50 border-gray-300'}`}>
                                        <Upload className="w-5 h-5 text-gray-400" />
                                        <span className="text-sm font-bold text-gray-500">{isProcessing ? '처리 중...' : '이미지 파일 업로드 (자동 압축됨)'}</span>
                                        <input type="file" accept="image/*" className="hidden" disabled={isProcessing} onChange={handleWeeklyImageAutoRegister} />
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* List */}
                        <div className="space-y-4">
                            <h4 className="font-bold text-gray-700 mb-2">등록된 명단 리스트 ({weeklyLists.length})</h4>
                            {weeklyLists.map((item) => (
                                <div key={item.id} className="flex flex-col md:flex-row items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                                    <div className="w-full md:w-24 h-32 md:h-24 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0 relative">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                        <div className="absolute top-0 left-0 bg-black/60 text-white text-[9px] px-1.5 py-0.5 rounded-br-lg font-bold">{item.region === 'jn' ? '전남' : '광주'}</div>
                                    </div>
                                    <div className="flex-1 w-full text-center md:text-left">
                                        <h5 className="font-black text-gray-800 text-sm mb-1">{item.title}</h5>
                                        <p className="text-xs text-gray-400">{item.date} 등록</p>
                                    </div>
                                    <div className="flex gap-2 w-full md:w-auto">
                                        <a href={item.image} target="_blank" rel="noopener noreferrer" className="flex-1 p-3 bg-gray-50 rounded-xl text-center"><LinkIcon className="w-4 h-4 mx-auto text-gray-400" /></a>
                                        <button onClick={() => deleteWeeklyItem(item.id)} className="flex-1 p-3 bg-red-50 text-red-500 rounded-xl font-bold hover:bg-red-500 hover:text-white transition-colors"><Trash2 className="w-4 h-4 mx-auto" /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* --- ASSETS TAB --- */}
                {activeTab === 'assets' && (
                    <div className="space-y-8">
                        {GROUPS.map((group) => (
                            <div key={group.id} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-lg font-black text-eum-dark mb-6 flex items-center gap-2"><group.icon className="w-5 h-5" /> {group.title}</h3>
                                <div className="space-y-8">
                                    {group.keys.map((k) => {
                                        const key = k as keyof ImageAssets;
                                        const meta = IMAGE_META[key];
                                        return (
                                            <div key={key} className="grid md:grid-cols-[1fr_2fr] gap-6 items-start">
                                                <div>
                                                    <label className="font-black text-gray-700 text-sm block mb-1">{meta.label}</label>
                                                    <span className="text-[10px] text-gray-400">{meta.size}</span>
                                                </div>
                                                <div className="space-y-3">
                                                    <input type="text" value={images[key] || ''} onChange={(e) => setImages(prev => ({ ...prev, [key]: e.target.value }))} className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 text-xs font-mono" placeholder="이미지 URL" />
                                                    <input type="file" accept="image/*" onChange={(e) => handleAssetFileChange(key, e)} className="text-xs text-gray-500" />
                                                    {images[key] && <img src={images[key]} alt="Preview" className="h-24 rounded-lg border border-gray-200 object-cover" />}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                        <button onClick={handleSaveAssets} className="w-full py-4 bg-eum-dark text-white font-black rounded-2xl shadow-lg hover:bg-black">자산 설정 저장하기</button>
                    </div>
                )}
            </div>
            
            <div className="bg-[#0f0f0f] text-white"><Footer /></div>
        </div>
    );
};

export default AdminPage;
