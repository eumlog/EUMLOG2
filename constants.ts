
import { ImageAssets, TextAssets } from './types';

// =================================================================
// ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
// [여기만 수정하세요] 
// 날짜와 이미지 주소만 넣으면 제목(몇월 몇주차)은 알아서 만들어집니다.
// =================================================================

export const WEEKLY_PARTICIPANTS = [
    // -------------------------------------------------------------
    // [작성 방법]
    // 1. 아래 덩어리를 복사해서 추가하세요.
    // 2. "date": 날짜를 적으세요 (예: "2025-01-26")
    // 3. "image": 이미지 주소를 넣으세요.
    // 4. "region": 광주면 "gj", 전남이면 "jn"
    // -------------------------------------------------------------

    {
       date: "2026-07-15",
       image: "/weekly/광주.png", 
       region: "gj"
    },
    {
       date: "2026-07-15",
       image: "/weekly/전남.png", 
       region: "jn"
    },

    {
       date: "2026-03-04",
       image: "https://wooban.co.kr/wp-content/uploads/2026/03/002.png", 
       region: "gj"
    },

    {
       date: "2026-03-04",
       image: "https://wooban.co.kr/wp-content/uploads/2026/02/005.png", 
       region: "jn"
    },

    // ⬇️ 여기에 계속 추가하면 됩니다 ⬇️
    
];

// =================================================================
// ▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
// =================================================================


export const DEFAULT_IMAGES: ImageAssets = {
    favicon: "https://wooban.co.kr/wp-content/uploads/2026/01/%EB%A1%9C%EA%B3%A0-001-3.png",
    logo: "",
    ogImage: "https://wooban.co.kr/wp-content/uploads/2026/01/%EC%9D%B4%EC%9D%8C%EB%A1%9C%EA%B7%B8%EB%9E%80v2_%EB%B3%B5%EC%82%AC%EB%B3%B8-001.png",
    heroBackground: "https://wooban.co.kr/wp-content/uploads/2026/01/sss-1536x652.png",
    philosophy: "https://wooban.co.kr/wp-content/uploads/2026/01/unnamed.jpg",
    systemFeatures: "https://wooban.co.kr/wp-content/uploads/2026/01/%EA%B0%80%EA%B2%A9%EC%95%88%EB%82%B42_%EB%B3%B5%EC%82%AC%EB%B3%B8-_8_-004.png",
    card1: "https://images.unsplash.com/photo-1501901609772-df0848060b33?q=80&w=2070&auto=format&fit=crop", 
    card2: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2000&auto=format&fit=crop", 
    card3: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop",
    processStep1: "https://wooban.co.kr/wp-content/uploads/2026/06/001.png",
    processStep2: "https://wooban.co.kr/wp-content/uploads/2026/01/002-1.png",
    processStep3: "https://wooban.co.kr/wp-content/uploads/2026/01/%EC%A7%84%ED%96%89%EB%B0%A9%EC%8B%9Dv2_%EB%B3%B5%EC%82%AC%EB%B3%B8-_1_-003-1024x683.png",
    processStep4: "https://wooban.co.kr/wp-content/uploads/2026/01/004-1.png",
    processStep5: "https://wooban.co.kr/wp-content/uploads/2026/01/005-1.png",
    processStep6: "https://wooban.co.kr/wp-content/uploads/2026/06/006-1.png",
    processStep7: "https://wooban.co.kr/wp-content/uploads/2026/01/007-1.png",
    footerTexture: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp",
    landing2Hero: "https://picsum.photos/800/600",
    landing2Detail: "https://picsum.photos/800/2000",
};

export const DEFAULT_TEXTS: TextAssets = {
    siteTitle: "이음로그 | 광주·전남 1:1 맞춤 소개팅",
    siteDescription: "광주·전남 지역 기반 1:1 맞춤 프리미엄 소개팅. 지인 차단과 맞춤 매칭으로 가볍지 않은 진짜 인연을 연결합니다. 이음로그와 함께 새로운 만남을 시작하세요.",
};
