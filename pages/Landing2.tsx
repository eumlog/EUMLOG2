import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../lib/assets';
import { ArrowRight } from 'lucide-react';

const Landing2 = () => {
    return (
        <div className="bg-white min-h-screen pb-24">
            {/* Top Hero Image */}
            <div className="w-full max-w-[800px] mx-auto">
                <img 
                    src={IMAGES.landing2Hero} 
                    alt="Emotional Hero" 
                    className="w-full h-auto object-cover block"
                />
            </div>

            {/* Detail Image */}
            <div className="w-full max-w-[800px] mx-auto">
                <img 
                    src={IMAGES.landing2Detail} 
                    alt="Service Detail" 
                    className="w-full h-auto block"
                />
            </div>

            {/* Fixed Bottom CTA */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-gray-200 z-50">
                <div className="max-w-[800px] mx-auto flex gap-3">
                    <Link 
                        to="/contact" 
                        className="flex-1 bg-eum-dark text-white font-black text-lg py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:bg-black transition-all"
                    >
                        상담 신청하기 <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Landing2;
