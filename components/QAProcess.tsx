'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function QAProcess() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
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

    useEffect(() => {
        if (isVisible) {
            const interval = setInterval(() => {
                setActiveStep((prev) => (prev + 1) % 5);
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [isVisible]);

    const steps = [
        { name: "調達", sub: "サプライヤー選定", desc: "適格性確認", icon: "📋" },
        { name: "出荷前", sub: "証憑・確認", desc: "現地確認", icon: "🔍" },
        { name: "受入", sub: "ロット登録", desc: "必要に応じ検査", icon: "📦" },
        { name: "保管", sub: "混載防止", desc: "ロット区分管理", icon: "🏭" },
        { name: "出荷", sub: "ロット紐づけ", desc: "証憑提示", icon: "🚚" },
    ];

    return (
        <section ref={sectionRef} id="quality" className="relative py-24 bg-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.05) 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 text-sm font-medium mb-4">
                        QUALITY ASSURANCE
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                        品質を<span className="gradient-text">"説明できる形"</span>で届ける。
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        用途・規格に応じて確認項目は変化します。<br />
                        要求仕様に合わせて最適な確認方法をご提案します。
                    </p>
                </div>

                {/* Process Flow */}
                <div className={`relative max-w-5xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {/* Connection Line - Desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2">
                        <div className="absolute inset-0 bg-slate-200 rounded-full" />
                        <div 
                            className="absolute left-0 top-0 h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500"
                            style={{ width: `${(activeStep / 4) * 100}%` }}
                        />
                    </div>

                    {/* Steps */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-4">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`relative group cursor-pointer transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                                onClick={() => setActiveStep(index)}
                            >
                                {/* Card */}
                                <div className={`relative rounded-2xl p-6 transition-all duration-300 ${
                                    activeStep === index 
                                        ? 'bg-gradient-to-br from-cyan-500 to-blue-500 shadow-xl shadow-cyan-500/30 scale-105' 
                                        : 'bg-white border border-slate-200 hover:border-cyan-300 hover:shadow-lg'
                                }`}>
                                    {/* Step Number */}
                                    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                                        activeStep === index 
                                            ? 'bg-white text-cyan-600 shadow-lg' 
                                            : activeStep > index 
                                                ? 'bg-cyan-500 text-white' 
                                                : 'bg-slate-200 text-slate-600'
                                    }`}>
                                        {activeStep > index ? '✓' : index + 1}
                                    </div>

                                    {/* Icon */}
                                    <div className={`text-3xl mb-4 transition-transform duration-300 ${activeStep === index ? 'scale-110' : ''}`}>
                                        {step.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className={`text-lg font-bold mb-1 transition-colors ${
                                        activeStep === index ? 'text-white' : 'text-slate-900'
                                    }`}>
                                        {step.name}
                                    </h3>
                                    <p className={`text-sm font-medium mb-2 transition-colors ${
                                        activeStep === index ? 'text-cyan-100' : 'text-cyan-600'
                                    }`}>
                                        ({step.sub})
                                    </p>
                                    <p className={`text-xs transition-colors ${
                                        activeStep === index ? 'text-white/80' : 'text-slate-500'
                                    }`}>
                                        {step.desc}
                                    </p>

                                    {/* Active Indicator */}
                                    {activeStep === index && (
                                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-lg flex items-center justify-center">
                                            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                                        </div>
                                    )}
                                </div>

                                {/* Mobile Arrow */}
                                {index < steps.length - 1 && (
                                    <div className="lg:hidden flex justify-center my-4">
                                        <svg className="w-6 h-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Progress Indicator */}
                <div className={`flex justify-center gap-2 mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    {steps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveStep(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                activeStep === index 
                                    ? 'w-8 bg-cyan-500' 
                                    : 'bg-slate-300 hover:bg-slate-400'
                            }`}
                        />
                    ))}
                </div>

                {/* CTA */}
                <div className={`mt-12 text-center transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <Link
                        href="/quality"
                        className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:text-cyan-700 transition-colors group"
                    >
                        品質保証の詳細を見る（確認項目例・フロー・証憑サンプル）
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
