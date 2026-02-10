
import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings, LayoutGrid, Layers, Workflow, Download, Upload, Database, Image as ImageIcon, AppWindow, Lock } from 'lucide-react';
import { PageHeader } from '../components/Shared';
import Footer from '../components/Footer';
import { IMAGES, TEXTS, refreshAssets, getImageKeys, getTextKeys } from '../lib/assets';
import { DEFAULT_IMAGES } from '../constants';
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
    const backupFileInput = useRef<HTMLInputElement>(null);

    const [isProcessing, setIsProcessing] = useState(false);
    const [storageUsage, setStorageUsage] = useState(0);

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

    // [백업] JSON 다운로드
    const handleDownloadBackup = () => {
        const backupData = {
            images: localStorage.getItem('EUM_CUSTOM_IMAGES'),
            texts: localStorage.getItem('EUM_CUSTOM_TEXTS'),
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
                
                alert('복구되었습니다! 페이지를 새로고침합니다.');
                window.location.reload();
            } catch (err) {
                alert('잘못된 백업 파일입니다.');
            }
        };
        reader.readAsText(file);
        e.target.value = ''; 
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
            </div>
            
            <div className="bg-[#0f0f0f] text-white"><Footer /></div>
        </div>
    );
};

export default AdminPage;
