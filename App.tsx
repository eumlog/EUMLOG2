
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
import PolicyPage2 from './pages/Policy2';
import ProfilePage from './pages/Profile';
import ServiceDetail from './pages/ServiceDetail';
import Landing from './pages/Landing';
import SurveyLinks from './pages/SurveyLinks';
import Landing2 from './pages/Landing2';
import BlockingSystem from './pages/BlockingSystem';
import LinkTree from './pages/LinkTree';
import InstaLinks from './pages/InstaLinks';
import WeeklyList from './pages/WeeklyList';

gsap.registerPlugin(ScrollTrigger);

const AppContent = () => {
    const [loading, setLoading] = useState(true);
    const [, setUpdateTick] = useState(0);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const location = useLocation();
    const navigate = useNavigate();
    const isFirstMount = useRef(true);

    useEffect(() => {
        if (isFirstMount.current) {
            isFirstMount.current = false;
        }
    }, [navigate]);

    // [중요] 인스타그램 등 외부 앱 리다이렉트 처리 및 URL 정리
    // ?go=links 등이 있을 때 해당 페이지로 이동 후, 주소창에서 쿼리스트링을 지워
    // 이후 내부 링크 이동이나 새로고침 시 문제가 없도록 함.
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const redirectPath = params.get('go') || params.get('path');
        
        if (redirectPath) {
            // 1. 해당 경로로 이동 (HashRouter 내부 상태 업데이트)
            navigate(`/${redirectPath}`, { replace: true });
            
            // 2. 주소창의 ?go=... 쿼리 파라미터를 제거하여 깔끔한 URL(#/path)로 변경
            // 이를 통해 새로고침 시 다시 리다이렉트되거나 내부 링크 이동 시 쿼리가 따라붙는 문제를 방지
            const cleanUrl = `${window.location.pathname}#/${redirectPath}`;
            window.history.replaceState({}, '', cleanUrl);
        }
    }, [navigate]);

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

    useEffect(() => {
        const handleAssetUpdate = () => {
            setUpdateTick(prev => prev + 1);
            document.title = TEXTS.siteTitle || "E.UM LOG";
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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    // 플로팅 메뉴 표시 조건 (WeeklyList 포함)
    const showFloatingBanner = location.pathname !== '/contact' && location.pathname !== '/admin' && location.pathname !== '/profile' && location.pathname !== '/landing' && location.pathname !== '/landing2' && location.pathname !== '/links' && location.pathname !== '/insta-links' && location.pathname !== '/survey';
    
    const showNavbar = location.pathname !== '/links' && location.pathname !== '/insta-links';

    return (
        <>
            {loading && <Preloader onComplete={() => setLoading(false)} />}
            <div 
                ref={wrapperRef} 
                className="min-h-screen flex flex-col justify-between" 
                style={{ opacity: loading ? 0 : 1 }}
            >
                {showNavbar && <Navbar />}
                
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
                        <Route path="/policy2" element={<PolicyPage2 />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/survey" element={<SurveyLinks />} />
                        <Route path="/service-detail" element={<ServiceDetail />} />
                        <Route path="/blocking-system" element={<BlockingSystem />} />
                        <Route path="/landing" element={<Landing />} />
                        <Route path="/landing2" element={<Landing2 />} />
                        <Route path="/weekly" element={<WeeklyList />} />
                        <Route path="/links" element={<LinkTree />} />
                        <Route path="/insta-links" element={<InstaLinks />} />
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
