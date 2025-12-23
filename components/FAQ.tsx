'use client';

import { useEffect, useRef, useState } from 'react';

export default function FAQ() {
    const [isVisible, setIsVisible] = useState(false);
    const [openIndex, setOpenIndex] = useState<number | null>(0);
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

    const faqs = [
        { 
            q: "COA（分析証明書）は提出できますか？", 
            a: "ロット単位で管理しており、提出可能です（内容は品目・条件により異なります）。ご要望に応じて、製造元発行のCOAに加え、当社での受入検査データも併せてご提供できます。" 
        },
        { 
            q: "第三者分析に対応できますか？", 
            a: "ご要望に応じて手配可能です。用途・要求仕様によりご提案します。（要別途費用・期間）国内外の認定試験機関との連携により、客観的な品質データをご提供いたします。" 
        },
        { 
            q: "最小ロット・梱包形態は？", 
            a: "25kg袋／フレコン等。数量条件はご相談ください。初回評価用サンプルは少量から対応可能です。お客様の生産規模や保管条件に合わせて、最適な荷姿をご提案いたします。" 
        },
        { 
            q: "タルクの懸念（不純物等）が心配です。", 
            a: "用途・規格に応じた確認項目を設定し、証憑・確認フローを含めてご提案します。特に食品接触用途や化粧品用途など、規制要件が厳しい分野についても、適切な管理体制でサポートいたします。" 
        },
    ];

    return (
        <section ref={sectionRef} className="relative py-24 bg-slate-50 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 text-sm font-medium mb-4">
                        FAQ
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                        よくあるご質問
                    </h2>
                </div>

                {/* FAQ List */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((item, index) => (
                        <div
                            key={index}
                            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div
                                className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                                    openIndex === index 
                                        ? 'bg-white shadow-xl shadow-cyan-500/10 border-2 border-cyan-500/30' 
                                        : 'bg-white border border-slate-200 hover:border-cyan-300'
                                }`}
                            >
                                {/* Question */}
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <div className="flex items-start gap-4">
                                        <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-colors ${
                                            openIndex === index 
                                                ? 'bg-gradient-to-br from-cyan-500 to-blue-500 text-white' 
                                                : 'bg-slate-100 text-slate-500'
                                        }`}>
                                            Q
                                        </span>
                                        <span className={`text-lg font-semibold transition-colors ${
                                            openIndex === index ? 'text-cyan-600' : 'text-slate-900'
                                        }`}>
                                            {item.q}
                                        </span>
                                    </div>
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                                        openIndex === index 
                                            ? 'bg-cyan-500 text-white rotate-180' 
                                            : 'bg-slate-100 text-slate-500'
                                    }`}>
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>

                                {/* Answer */}
                                <div className={`overflow-hidden transition-all duration-300 ${
                                    openIndex === index ? 'max-h-96' : 'max-h-0'
                                }`}>
                                    <div className="px-6 pb-6">
                                        <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                                            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-sm text-slate-500">
                                                A
                                            </span>
                                            <p className="text-slate-600 leading-relaxed">
                                                {item.a}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className={`mt-12 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <p className="text-slate-600 mb-4">
                        その他のご質問がございましたら、お気軽にお問い合わせください。
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:text-cyan-700 transition-colors"
                    >
                        お問い合わせフォームへ
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
