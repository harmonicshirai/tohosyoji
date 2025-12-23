'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function CompanyShort() {
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

    return (
        <section ref={sectionRef} className="relative py-24 bg-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.03) 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 text-sm font-medium mb-4">
                        COMPANY
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                        会社概要
                    </h2>
                </div>

                {/* Company Info Card */}
                <div className={`max-w-5xl mx-auto transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="relative rounded-3xl overflow-hidden">
                        {/* Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
                        <div className="absolute inset-0 bg-grid opacity-10" />
                        
                        {/* Glow Effects */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

                        <div className="relative grid grid-cols-1 lg:grid-cols-2">
                            {/* Left: Basic Info */}
                            <div className="p-8 lg:p-12">
                                <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    基本情報
                                </h3>

                                <dl className="space-y-6">
                                    {[
                                        { label: '会社名', value: '東方商事株式会社', sub: 'Tohosyoji Co., Ltd.' },
                                        { label: '所在地', value: '〒100-0000 東京都千代田区〇〇 1-2-3' },
                                        { label: '事業内容', value: '鉱物原料（タルク等）の輸入・卸販売／調達・物流手配／品質確認支援' },
                                    ].map((item, index) => (
                                        <div key={index} className="flex flex-col sm:flex-row sm:items-start gap-2">
                                            <dt className="w-24 flex-shrink-0 text-cyan-400 text-sm font-medium">{item.label}</dt>
                                            <dd className="text-white">
                                                {item.value}
                                                {item.sub && <span className="block text-slate-400 text-sm mt-1">{item.sub}</span>}
                                            </dd>
                                        </div>
                                    ))}
                                </dl>

                                <Link
                                    href="/company"
                                    className="inline-flex items-center gap-2 mt-8 text-cyan-400 font-medium hover:text-cyan-300 transition-colors group"
                                >
                                    詳細を見る
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>

                            {/* Right: China Offices */}
                            <div className="p-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-slate-700/50">
                                <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    中国拠点
                                </h3>

                                <div className="space-y-6">
                                    {[
                                        { 
                                            name: '上海事務所', 
                                            address: '上海市浦東新区〇〇路 88号 XXビル 10F',
                                            role: '連絡・調整'
                                        },
                                        { 
                                            name: '青島事務所', 
                                            address: '青島市黄島区〇〇大道 123号 XXセンター 5F',
                                            role: '出荷前確認'
                                        },
                                    ].map((office, index) => (
                                        <div key={index} className="relative pl-6">
                                            <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-cyan-400" />
                                            <h4 className="text-white font-semibold mb-1">{office.name}</h4>
                                            <p className="text-slate-400 text-sm mb-2">{office.address}</p>
                                            <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs">
                                                {office.role}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Map Placeholder */}
                                <div className="mt-8 h-32 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center">
                                    <div className="text-center">
                                        <svg className="w-8 h-8 text-slate-600 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="text-slate-500 text-sm">中国2拠点体制</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
