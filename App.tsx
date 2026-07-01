
import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import { FloatingMenu, Preloader } from './components/Shared';
import { IMAGES, TEXTS } from './lib/assets';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Service2 from './pages/Service2';
import CriteriaPage from './pages/Criteria';
import PricingPage from './pages/Pricing';
import PricingPage2 from './pages/Pricing2';
import FaqPage from './pages/Faq';
import ContactPage from './pages/Contact';
import ApplyPage from './pages/Apply';
import AdminPage from './pages/Admin';
import InstagramRegionsPage from './pages/Instagram';
import PolicyPage from './pages/Policy';
import PolicyPage2 from './pages/Policy2';
import PolicyPage3 from './pages/Policy3';
import PolicyPage4 from './pages/Policy4';
import PolicyPage5 from './pages/Policy5';
import PolicyPage6 from './pages/Policy6';
import ProfilePage from './pages/Profile';
import ServiceDetail from './pages/ServiceDetail';
import Landing from './pages/Landing';
import SurveyLinks from './pages/SurveyLinks';
import Landing2 from './pages/Landing2';
import BlockingSystem from './pages/BlockingSystem';
import LinkTree from './pages/LinkTree';
import InstaLinks from './pages/InstaLinks';
import WeeklyList from './pages/WeeklyList';
import Wooban from './pages/Wooban';
import WoobanStatus from './pages/WoobanStatus';
import WoobanAdmin from './pages/WoobanAdmin';

gsap.registerPlugin(ScrollTrigger);

const AppContent = () => {
    const [loading, setLoading] = useState(() => {
        const path = window.location.hash.replace('#', '') || window.location.pathname;
        return path === '/' || path === '';
    });
    const [, setUpdateTick] = useState(0);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const location = useLocation();
    const navigate = useNavigate();
    const isFirstMount = useRef(true);
    const [hashPath, setHashPath] = useState(window.location.hash);

    useEffect(() => {
        const handleHashChange = () => setHashPath(window.location.hash);
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

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
            // 해당 경로로 이동 (BrowserRouter 내부 상태 업데이트)
            // navigate는 자동으로 쿼리 파라미터가 없는 깔끔한 URL로 변경해 줍니다.
            navigate(`/${redirectPath}`, { replace: true });
        }

        // 기존 HashRouter 형식(#/pricing)으로 접근 시 깔끔한 URL(/pricing)로 리다이렉트
        // 단, survey와 policy2, policy3는 해시 URL을 유지하도록 예외 처리
        if (window.location.hash && window.location.hash.startsWith('#/')) {
            const path = window.location.hash.replace('#', '');
            if (path !== '/survey' && path !== '/policy2' && path !== '/policy3' && path !== '/policy4' && path !== '/policy5' && path !== '/policy6' && path !== '/wooban' && path !== '/wooban/status' && path !== '/wooban/admin') {
                navigate(path, { replace: true });
            }
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
        const baseTitle = TEXTS.siteTitle || "이음로그 | 광주·전남 1:1 맞춤 소개팅";
        let pageTitle = baseTitle;

        switch (location.pathname) {
            case '/about': pageTitle = "이음로그 이야기 | 이음로그"; break;
            case '/service': pageTitle = "진행 방식 | 이음로그"; break;
            case '/criteria': pageTitle = "가입 기준 | 이음로그"; break;
            case '/pricing': pageTitle = "멤버십 안내 | 이음로그"; break;
            case '/gallery': pageTitle = "소개팅 갤러리 | 이음로그"; break;
            case '/faq': pageTitle = "FAQ | 이음로그"; break;
            case '/contact': pageTitle = "문의하기 | 이음로그"; break;
            case '/apply': pageTitle = "매칭 신청하기 | 이음로그"; break;
            default: pageTitle = baseTitle;
        }
        
        document.title = pageTitle;
    }, [location.pathname]);

    useEffect(() => {
        const handleAssetUpdate = () => {
            setUpdateTick(prev => prev + 1);
            if (location.pathname === '/') {
                document.title = TEXTS.siteTitle || "이음로그 | 광주·전남 1:1 맞춤 소개팅";
            }
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
    const currentPath = location.pathname === '/' && hashPath.startsWith('#/') 
        ? hashPath.replace('#', '') 
        : location.pathname;

    const showFloatingBanner = currentPath !== '/contact' && currentPath !== '/admin' && currentPath !== '/profile' && currentPath !== '/landing' && currentPath !== '/landing2' && currentPath !== '/links' && currentPath !== '/insta-links' && currentPath !== '/survey' && currentPath !== '/wooban' && currentPath !== '/wooban/status' && currentPath !== '/wooban/admin';
    
    const showNavbar = currentPath !== '/links' && currentPath !== '/insta-links' && currentPath !== '/wooban' && currentPath !== '/wooban/status' && currentPath !== '/wooban/admin' && currentPath !== '/landing' && currentPath !== '/landing2';

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
                        <Route path="/" element={
                            hashPath === '#/wooban/admin' ? <WoobanAdmin /> :
                            hashPath === '#/wooban/status' ? <WoobanStatus /> :
                            hashPath === '#/wooban' ? <Wooban /> :
                            hashPath === '#/survey' ? <SurveyLinks /> :
                            hashPath === '#/policy2' ? <PolicyPage2 /> :
                            hashPath === '#/policy3' ? <PolicyPage3 /> :
                            hashPath === '#/policy4' ? <PolicyPage4 /> :
                            hashPath === '#/policy5' ? <PolicyPage5 /> :
                            hashPath === '#/policy6' ? <PolicyPage6 /> :
                            hashPath === '#/pricing2' ? <PricingPage2 /> :
                            <Home />
                        } />
                        <Route path="/about" element={<About />} />
                        <Route path="/service" element={<Service2 />} />
                        <Route path="/service2" element={<Service />} />
                        <Route path="/criteria" element={<CriteriaPage />} />
                        <Route path="/pricing" element={<PricingPage />} />
                        <Route path="/pricing2" element={<PricingPage2 />} />
                        <Route path="/faq" element={<FaqPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/apply" element={<ApplyPage />} />
                        <Route path="/admin" element={<AdminPage />} />
                        <Route path="/instagram" element={<InstagramRegionsPage />} />
                        <Route path="/policy" element={<PolicyPage />} />
                        <Route path="/policy2" element={<PolicyPage2 />} />
                        <Route path="/policy3" element={<PolicyPage3 />} />
                        <Route path="/policy4" element={<PolicyPage4 />} />
                        <Route path="/policy5" element={<PolicyPage5 />} />
                        <Route path="/policy6" element={<PolicyPage6 />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/survey" element={<SurveyLinks />} />
                        <Route path="/wooban" element={<Wooban />} />
                        <Route path="/wooban/status" element={<WoobanStatus />} />
                        <Route path="/wooban/admin" element={<WoobanAdmin />} />
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
