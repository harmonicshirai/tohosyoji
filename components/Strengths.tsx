'use client';

import { useEffect, useRef, useState } from 'react';

export default function Strengths() {
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

    const strengths = [
        {
            title: "品質保証とロット管理",
            desc: "ロットIDで追跡し、COA等の証憑を保管。異常時は隔離・再確認のフローを整えています。",
            icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            gradient: 'from-cyan-500 to-blue-500',
        },
        {
            title: "タルクのリスクに配慮した運用",
            desc: "タルクは用途により懸念が変わるため、当社基準に基づく確認項目を設定。必要に応じ第三者分析の手配も可能です。",
            icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ),
            gradient: 'from-blue-500 to-purple-500',
        },
        {
            title: "中国2拠点の現地ネットワーク",
            desc: "上海事務所・青島事務所が現地で連絡・調整。出荷前確認やトラブル時対応の速度を高めます。",
            icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            title: "安定供給設計（代替ソース＋在庫）",
            desc: "供給途絶リスクに備え、調達先の分散や在庫設計を実施。納期・数量の確度を上げます。",
            icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            ),
            gradient: 'from-pink-500 to-orange-500',
        },
        {
            title: "取引条件の標準化",
            desc: "検収条件・再検査・責任範囲などを整理し、双方が納得できる「揉めない取引」を目指します。",
            icon: (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
            ),
            gradient: 'from-orange-500 to-cyan-500',
        },
    ];

    return (
        <section ref={sectionRef} className="relative py-24 bg-[#0a1628] overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-4">
                        WHY CHOOSE US
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        "安さ"だけではなく、<br className="sm:hidden" />
                        <span className="gradient-text">調達の不安を減らす仕組み</span>があります。
                    </h2>
                </div>

                {/* Strengths Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {strengths.map((item, index) => (
                        <div
                            key={index}
                            className={`group relative rounded-2xl p-8 transition-all duration-700 hover-lift ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* Card Background */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 group-hover:border-cyan-500/30 transition-colors" />
                            
                            {/* Gradient Glow on Hover */}
                            <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity`} />

                            {/* Content */}
                            <div className="relative">
                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} p-0.5 mb-6`}>
                                    <div className="w-full h-full rounded-xl bg-slate-900 flex items-center justify-center text-white">
                                        {item.icon}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-400 leading-relaxed">
                                    {item.desc}
                                </p>

                                {/* Decorative Line */}
                                <div className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r ${item.gradient} group-hover:w-full transition-all duration-500`} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Decoration */}
                <div className={`mt-16 flex justify-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex items-center gap-4">
                        <div className="w-20 h-px bg-gradient-to-r from-transparent to-cyan-500/50" />
                        <div className="w-3 h-3 rounded-full bg-cyan-500/50 animate-pulse" />
                        <div className="w-20 h-px bg-gradient-to-l from-transparent to-cyan-500/50" />
                    </div>
                </div>
            </div>
        </section>
    );
}
