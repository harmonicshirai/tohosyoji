'use client';

import { useEffect, useRef, useState } from 'react';

export default function TrustBlock() {
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

    const cards = [
        {
            tag: '法人情報',
            title: '会社概要・信頼性',
            description: '国内メーカー向けに鉱物原料の輸入・卸販売を行っています。',
            details: [
                { label: '会社名', value: '東方商事株式会社' },
                { label: '所在地', value: '東京都千代田区' },
                { label: '設立', value: '20XX年' },
                { label: '資本金', value: 'XX,XXX千円' },
            ],
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
        },
        {
            tag: '品質・証憑',
            title: '品質保証体制',
            description: 'ロット単位でCOA等の証憑を管理。用途に応じて確認項目を設定し、必要に応じ第三者分析にも対応します。',
            badges: ['COA保管', 'ロット追跡', '第三者分析'],
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
        },
        {
            tag: '現地対応',
            title: '中国2拠点体制',
            description: '中国に2拠点（上海事務所・青島事務所）。現地での連絡・確認・出荷前調整を行い、供給の確度を高めます。',
            locations: [
                { name: '上海事務所', role: '連絡・調整' },
                { name: '青島事務所', role: '出荷前確認' },
            ],
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
    ];

    return (
        <section ref={sectionRef} className="relative py-24 bg-gradient-to-b from-[#0a1628] to-[#0f1e36]">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-4">
                        TRUST & RELIABILITY
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        稟議・審査で確認される項目を、<br className="hidden sm:block" />
                        <span className="gradient-text">最初から明確に。</span>
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`group relative rounded-2xl overflow-hidden transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* Card Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm" />
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80" />
                            
                            {/* Border Gradient */}
                            <div className="absolute inset-0 rounded-2xl border border-slate-700/50 group-hover:border-cyan-500/30 transition-colors" />
                            
                            {/* Content */}
                            <div className="relative p-6 lg:p-8">
                                {/* Tag & Icon */}
                                <div className="flex items-center justify-between mb-6">
                                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-medium">
                                        {card.tag}
                                    </span>
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                                        {card.icon}
                                    </div>
                                </div>

                                {/* Title & Description */}
                                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6">{card.description}</p>

                                {/* Details */}
                                {card.details && (
                                    <div className="space-y-2 pt-4 border-t border-slate-700/50">
                                        {card.details.map((detail, i) => (
                                            <div key={i} className="flex justify-between text-sm">
                                                <span className="text-slate-500">{detail.label}</span>
                                                <span className="text-slate-300">{detail.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Badges */}
                                {card.badges && (
                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/50">
                                        {card.badges.map((badge, i) => (
                                            <span key={i} className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs">
                                                {badge}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Locations */}
                                {card.locations && (
                                    <div className="space-y-3 pt-4 border-t border-slate-700/50">
                                        {card.locations.map((loc, i) => (
                                            <div key={i} className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                                                    <span className="text-slate-300 text-sm">{loc.name}</span>
                                                </div>
                                                <span className="text-slate-500 text-xs">{loc.role}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Hover Glow */}
                            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity -z-10" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
