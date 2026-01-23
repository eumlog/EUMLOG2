
import React, { useEffect, useState, useRef } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Navigate, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import { FloatingMenu, Preloader } from './components/Shared';
import { IMAGES, TEXTS } from './lib/assets';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import CriteriaPage from './pages/Criteria';
import PricingPage from './pages/Pricing';
import FaqPage from './pages/Faq';
import ContactPage from './pages/Contact';
import ApplyPage from './pages/Apply';
import AdminPage from './pages/Admin';
import InstagramRegionsPage from './pages/Instagram';
import PolicyPage from './pages/Policy';
import ProfilePage from './pages/Profile';
import ServiceDetail from './pages/ServiceDetail';

gsap.registerPlugin(ScrollTrigger);

const AppContent = () => {
    const [loading, setLoading] = useState(true);
    const [, setUpdateTick] = useState(0);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const location = useLocation();
    const navigate = useNavigate();
    const isFirstMount = useRef(true);

    // 진입 시 항상 홈으로 강제 이동 (새로고침 포함)
    useEffect(() => {
        if (isFirstMount.current) {
            isFirstMount.current = false;
            // Only redirect if explicitly on a wrong path or refreshed at root
            // Removing strict home force to allow direct deep linking for Profile/Admin
        }
    }, [navigate]);

    // 초기 로딩 후 래퍼 표시 애니메이션
    useEffect(() => {
        if (!loading && wrapperRef.current) {
            gsap.to(wrapperRef.current, { 
                opacity: 1, 
                duration: 0.8, 
                ease: 'power2.out', 
                onComplete: () => {
                    ScrollTrigger.refresh();
                }
            });
        }
    }, [loading]);

    // 자산 업데이트 및 메타데이터 동기화
    useEffect(() => {
        const handleAssetUpdate = () => {
            setUpdateTick(prev => prev + 1);
            
            // Meta Data Sync
            document.title = TEXTS.siteTitle || "E.UM LOG";
            
            // Favicon Sync
            const faviconUrl = IMAGES.favicon;
            if (faviconUrl) {
                let link = document.getElementById("dynamic-favicon") as HTMLLinkElement;
                if (!link) {
                    link = document.createElement('link');
                    link.id = 'dynamic-favicon';
                    link.rel = 'icon';
                    document.head.appendChild(link);
                }
                link.href = faviconUrl;
            }

            // OG Image Sync
            const ogImageUrl = IMAGES.ogImage;
            if (ogImageUrl) {
                let ogMeta = document.getElementById("dynamic-og-image") as HTMLMetaElement;
                if (!ogMeta) {
                    ogMeta = document.createElement('meta');
                    ogMeta.id = 'dynamic-og-image';
                    ogMeta.setAttribute('property', 'og:image');
                    document.head.appendChild(ogMeta);
                }
                ogMeta.content = ogImageUrl;
            }
            
            ScrollTrigger.refresh();
        };

        handleAssetUpdate();
        window.addEventListener('assets-updated', handleAssetUpdate);
        return () => window.removeEventListener('assets-updated', handleAssetUpdate);
    }, []);

    // 경로 변경 시 스크롤 상단 이동
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const showFloatingBanner = location.pathname !== '/contact' && location.pathname !== '/admin' && location.pathname !== '/profile';

    return (
        <>
            {loading && <Preloader onComplete={() => setLoading(false)} />}
            <div 
                ref={wrapperRef} 
                className="min-h-screen flex flex-col justify-between" 
                style={{ opacity: loading ? 0 : 1 }}
            >
                <Navbar />
                {showFloatingBanner && <FloatingMenu />}
                <main className="flex-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/service" element={<Service />} />
                        <Route path="/criteria" element={<CriteriaPage />} />
                        <Route path="/pricing" element={<PricingPage />} />
                        <Route path="/faq" element={<FaqPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/apply" element={<ApplyPage />} />
                        <Route path="/admin" element={<AdminPage />} />
                        <Route path="/instagram" element={<InstagramRegionsPage />} />
                        <Route path="/policy" element={<PolicyPage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/service-detail" element={<ServiceDetail />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </main>
            </div>
        </>
    );
};

const App = () => (
    <Router>
        <AppContent />
    </Router>
);

export default App;
