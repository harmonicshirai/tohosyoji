'use client';

import { useEffect, useRef, useState } from 'react';

export default function StabilityMenu() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const options = [
        {
            title: '円建て提示',
            description: '輸入リスクを当社が吸収し、国内取引として円建てでご提示（条件によります）。',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            highlight: '¥',
        },
        {
            title: '価格レンジ提示',
            description: '為替等の変動幅をあらかじめ共有し、想定内の予算管理をサポートします。',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
            ),
            highlight: '±',
        },
        {
            title: '価格スライド条項',
            description: '原料高騰時などのルールを透明化し、納得感のある価格調整を行います。',
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            highlight: '⟷',
        },
    ];

    return (
        <section ref={sectionRef} className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 text-sm font-medium mb-4">
                        PRICING OPTIONS
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                        価格と供給の<span className="gradient-text">"読みやすさ"</span>が、<br className="hidden sm:block" />
                        調達の安心につながる。
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        為替や物流の変動があっても、取引条件を整理することで"急なブレ"を小さくできます。<br />
                        お客様の調達方針に合わせた提示方法をご相談ください。
                    </p>
                </div>

                {/* Options Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className={`group relative rounded-2xl p-8 bg-white border border-slate-200 hover:border-cyan-300 shadow-lg shadow-slate-100 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 hover-lift ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* Highlight Badge */}
                            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-cyan-500/30">
                                {option.highlight}
                            </div>

                            {/* Icon */}
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 mb-6 group-hover:scale-110 transition-transform">
                                {option.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                                {option.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                {option.description}
                            </p>

                            {/* Bottom Accent */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className={`mt-16 max-w-3xl mx-auto transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="relative rounded-2xl p-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-grid opacity-10" />
                        
                        <div className="relative flex flex-col md:flex-row items-center gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-lg font-bold mb-2">調達方針に合わせた柔軟な対応</h4>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    上記の価格提示方法は一例です。お客様の予算管理方針や社内ルールに合わせて、最適な取引条件をご提案いたします。まずはお気軽にご相談ください。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
