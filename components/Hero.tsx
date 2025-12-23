'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a1628]">
            {/* Animated Background */}
            <div className="absolute inset-0">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-grid opacity-50" />
                
                {/* Gradient Orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
                
                {/* Floating Particles */}
                {mounted && [...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400/50 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${3 + Math.random() * 2}s`
                        }}
                    />
                ))}

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="50%" stopColor="#06b6d4" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                    <line x1="0" y1="30%" x2="100%" y2="30%" stroke="url(#lineGradient)" strokeWidth="1" />
                    <line x1="0" y1="70%" x2="100%" y2="70%" stroke="url(#lineGradient)" strokeWidth="1" />
                    <line x1="20%" y1="0" x2="20%" y2="100%" stroke="url(#lineGradient)" strokeWidth="1" />
                    <line x1="80%" y1="0" x2="80%" y2="100%" stroke="url(#lineGradient)" strokeWidth="1" />
                </svg>
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                <div className="max-w-5xl mx-auto">
                    {/* Badge */}
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                        <span className="text-cyan-400 text-sm font-medium">中国産鉱物原料の専門商社</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className={`text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 transition-all duration-700 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        鉱物原料を、<br />
                        <span className="gradient-text">"品質と供給の確かさ"</span>
                        <br />で届ける。
                    </h1>

                    {/* Subheading */}
                    <p className={`text-lg sm:text-xl text-slate-400 max-w-2xl mb-8 leading-relaxed transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        中国調達 × 国内メーカー向け。<br className="sm:hidden" />
                        ロット管理・証憑・安定供給を軸に、<br className="hidden sm:block" />
                        調達の不確実性を減らします。
                    </p>

                    {/* Feature Tags */}
                    <div className={`flex flex-wrap gap-3 mb-10 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        {[
                            { icon: '📋', text: 'ロット管理/証憑管理' },
                            { icon: '🔬', text: '第三者分析に対応' },
                            { icon: '🌐', text: '安定供給体制' },
                        ].map((tag, index) => (
                            <div
                                key={index}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all cursor-default"
                            >
                                <span>{tag.icon}</span>
                                <span className="text-sm text-slate-300">{tag.text}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <Link href="/contact" className="btn-primary inline-flex items-center justify-center gap-2 text-lg">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            見積・在庫を相談する
                        </Link>
                        <Link href="/contact" className="btn-secondary inline-flex items-center justify-center gap-2 text-lg">
                            用途・規格の相談をする
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className={`grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/10 transition-all duration-700 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        {[
                            { value: '2', label: '中国拠点', suffix: '拠点' },
                            { value: '100', label: '取引実績', suffix: '+社' },
                            { value: '24', label: '対応時間', suffix: 'h' },
                            { value: '99', label: '供給安定率', suffix: '%' },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className="stat-value">{stat.value}</span>
                                    <span className="text-cyan-400 text-lg font-medium">{stat.suffix}</span>
                                </div>
                                <p className="text-slate-500 text-sm mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                <span className="text-slate-500 text-xs">Scroll</span>
                <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}
