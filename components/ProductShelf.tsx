'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function ProductShelf() {
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

    const products = [
        {
            name: 'タルク（工業用）',
            nameEn: 'Talc',
            description: '粒度・白色度・不純物管理など、用途別に選定',
            applications: ['樹脂（PP/PEコンパウンド）', '塗料', '紙', 'セラミック'],
            packaging: ['25kg袋', 'フレコン', 'バルク'],
            featured: true,
            image: '/tohosyoji/images/talc_sample.png',
        },
        {
            name: '炭酸カルシウム',
            nameEn: 'Calcium Carbonate',
            description: '重質・軽質、各種グレードをご提案',
            applications: ['ゴム', 'プラスチック', '塗料'],
            image: '/tohosyoji/images/calcium_carbonate.png',
        },
        {
            name: '硫酸バリウム',
            nameEn: 'Barium Sulfate',
            description: '塗料・プラスチック充填材として',
            applications: ['塗料', 'プラスチック', 'ブレーキ材'],
            image: '/tohosyoji/images/barium_sulfate.png',
        },
        {
            name: 'マイカ',
            nameEn: 'Mica',
            description: '絶縁性・耐熱性フィラー',
            applications: ['電子材料', '塗料', '樹脂'],
            image: '/tohosyoji/images/mica_mineral.png',
        },
    ];

    return (
        <section ref={sectionRef} id="products" className="relative py-24 bg-slate-50">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-50">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.1) 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 text-sm font-medium mb-4">
                        PRODUCTS
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                        取扱製品・用途
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        工業用途を中心に、用途・規格・供給形態に合わせてご提案します。
                    </p>
                </div>

                {/* Featured Product */}
                <div className={`mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="relative group rounded-2xl overflow-hidden bg-white shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        
                        <div className="flex flex-col lg:flex-row">
                            {/* Image */}
                            <div className="lg:w-2/5 relative h-64 lg:h-auto overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] to-[#1e3a5f]" />
                                <Image
                                    src={products[0].image}
                                    alt={products[0].name}
                                    fill
                                    className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 to-transparent" />
                                <div className="absolute bottom-6 left-6">
                                    <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 text-xs font-medium">
                                        主力製品
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="lg:w-3/5 p-8 lg:p-10">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900">{products[0].name}</h3>
                                        <p className="text-cyan-600 text-sm font-medium">{products[0].nameEn}</p>
                                    </div>
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                        </svg>
                                    </div>
                                </div>

                                <p className="text-slate-600 mb-6">{products[0].description}</p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                                            用途例
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {products[0].applications.map((app, i) => (
                                                <span key={i} className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs">
                                                    {app}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                                            荷姿
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {products[0].packaging?.map((pkg, i) => (
                                                <span key={i} className="px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs border border-cyan-200">
                                                    {pkg}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <Link href="/products" className="inline-flex items-center gap-2 text-cyan-600 font-medium hover:text-cyan-700 transition-colors group/link">
                                    詳細を見る
                                    <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.slice(1).map((product, index) => (
                        <div
                            key={index}
                            className={`group relative rounded-xl overflow-hidden bg-white shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200" />
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="mb-3">
                                    <h3 className="text-lg font-bold text-slate-900">{product.name}</h3>
                                    <p className="text-cyan-600 text-xs font-medium">{product.nameEn}</p>
                                </div>
                                <p className="text-slate-600 text-sm mb-4">{product.description}</p>
                                <div className="flex flex-wrap gap-1">
                                    {product.applications.slice(0, 3).map((app, i) => (
                                        <span key={i} className="px-2 py-0.5 rounded bg-slate-100 text-slate-500 text-xs">
                                            {app}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Hover Border */}
                            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-cyan-500/30 transition-colors pointer-events-none" />
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className={`mt-12 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        製品仕様（粒度・白色度・梱包形態）を相談する
                    </Link>
                </div>
            </div>
        </section>
    );
}
