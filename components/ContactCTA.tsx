'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function ContactCTA() {
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
        <section ref={sectionRef} className="relative py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f2847] to-[#0a1628]" />
            <div className="absolute inset-0 bg-grid opacity-20" />
            
            {/* Animated Gradient Orbs */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 mb-8 shadow-2xl shadow-cyan-500/30">
                        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        調達の不安を、<br className="sm:hidden" />
                        <span className="gradient-text">確かな安心へ。</span>
                    </h2>

                    {/* Description */}
                    <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        用途・規格に合わせた最適な鉱物原料をご提案します。<br />
                        まずはお見積り・在庫状況からお問い合わせください。
                    </p>

                    {/* CTA Button */}
                    <Link
                        href="/contact"
                        className="group relative inline-flex items-center justify-center px-10 py-5 overflow-hidden font-bold text-lg rounded-xl transition-all duration-300"
                    >
                        {/* Button Background */}
                        <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500" />
                        <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        {/* Shine Effect */}
                        <span className="absolute inset-0 overflow-hidden rounded-xl">
                            <span className="absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-700" />
                        </span>
                        
                        {/* Border */}
                        <span className="absolute inset-0 rounded-xl border border-white/20" />
                        
                        {/* Content */}
                        <span className="relative flex items-center gap-3 text-white">
                            お問い合わせフォームへ
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </Link>

                    {/* Sub Text */}
                    <p className="mt-6 text-slate-400 text-sm">
                        お急ぎの方もお気軽にご相談ください。
                    </p>

                    {/* Trust Badges */}
                    <div className={`mt-12 flex flex-wrap justify-center gap-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        {[
                            { icon: '⚡', text: '通常1営業日以内に返信' },
                            { icon: '🔒', text: '情報は厳重に管理' },
                            { icon: '📋', text: '無料でお見積り' },
                        ].map((badge, index) => (
                            <div key={index} className="flex items-center gap-2 text-slate-400 text-sm">
                                <span>{badge.icon}</span>
                                <span>{badge.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
