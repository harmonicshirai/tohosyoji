'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductsPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative bg-[#0a1628] py-24 sm:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-20" />
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
                
                <div className={`container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
                        PRODUCTS
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                        取扱<span className="gradient-text">製品</span>
                    </h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        工業用鉱物を中心に、幅広いラインナップをご用意しています。
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                {/* Main Product: Talc */}
                <section className="mb-24" id="talc">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Left: Image & Basic Info */}
                        <div className="lg:w-1/3">
                            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 mb-6">
                                <Image
                                    src="/tohosyoji/images/talc_sample.png"
                                    alt="Talc Powder"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-medium">
                                        主力製品
                                    </span>
                                </div>
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-2">タルク（滑石）</h2>
                            <p className="text-cyan-600 font-medium mb-4">Talc / Mg₃Si₄O₁₀(OH)₂</p>
                            <p className="text-slate-600 mb-6">
                                層状構造を持つケイ酸塩鉱物。化学的安定性、潤滑性、電気絶縁性に優れます。
                            </p>
                            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200">
                                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                                    主な用途
                                </h4>
                                <ul className="space-y-2">
                                    {['樹脂（PP/PE）フィラー', '塗料・パテ', '製紙・パルプ', 'ゴム製品', 'セラミック原料'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                                            <svg className="w-4 h-4 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right: Specs */}
                        <div className="lg:w-2/3">
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                        </svg>
                                    </div>
                                    代表グレード・仕様例
                                </h3>
                                <p className="text-sm text-slate-500 ml-11">※ 下記は一例です。お客様の要求仕様に合わせて最適なグレードを選定・提案いたします。</p>
                            </div>

                            <div className="overflow-hidden rounded-2xl border border-slate-200 mb-8">
                                <table className="min-w-full text-sm">
                                    <thead className="bg-gradient-to-r from-slate-900 to-slate-800">
                                        <tr>
                                            <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase">グレード</th>
                                            <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase">平均粒子径 (D50)</th>
                                            <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase">白色度</th>
                                            <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase">特長・用途</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 bg-white">
                                        {[
                                            { grade: 'Standard-A', size: '10 - 15 μm', white: '90% min', use: '汎用樹脂・工業用スタンダード' },
                                            { grade: 'Fine-2000', size: '4 - 6 μm', white: '93% min', use: '塗料・薄膜フィルム向け微粉' },
                                            { grade: 'Ultra-Fine', size: '1.5 - 3 μm', white: '95% min', use: '高精密樹脂・電子材料向け' },
                                            { grade: 'Calcined', size: 'Varies', white: '90% min', use: 'セラミック・耐熱用途' },
                                        ].map((row, index) => (
                                            <tr key={index} className="hover:bg-slate-50 transition-colors">
                                                <td className="px-6 py-4 font-medium text-slate-900">{row.grade}</td>
                                                <td className="px-6 py-4 text-slate-600">{row.size}</td>
                                                <td className="px-6 py-4 text-slate-600">{row.white}</td>
                                                <td className="px-6 py-4 text-slate-600">{row.use}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                        </svg>
                                    </div>
                                    供給形態
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {['25kg クラフト袋', '500kg / 1000kg フレコン', 'バルク応相談'].map((item, i) => (
                                        <span key={i} className="px-4 py-2 rounded-xl bg-cyan-50 text-cyan-700 text-sm font-medium border border-cyan-200">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Other Products */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">その他取扱製品</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                name: '炭酸カルシウム',
                                nameEn: 'Calcium Carbonate',
                                formula: 'CaCO₃',
                                desc: '重質・軽質各種。ゴム、プラスチック、塗料等の充填剤として。',
                                image: '/tohosyoji/images/calcium_carbonate.png',
                            },
                            {
                                name: '硫酸バリウム',
                                nameEn: 'Barium Sulfate',
                                formula: 'BaSO₄',
                                desc: '高比重、化学的不活性。塗料、プラスチック、ブレーキ材等に。',
                                image: '/tohosyoji/images/barium_sulfate.png',
                            },
                            {
                                name: 'マイカ（雲母）',
                                nameEn: 'Mica',
                                formula: 'Mica',
                                desc: '湿式・乾式。高アスペクト比による補強効果、絶縁・制振用途。',
                                image: '/tohosyoji/images/mica_mineral.png',
                            },
                        ].map((product, index) => (
                            <div key={index} className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/10 transition-all">
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <div>
                                            <h3 className="font-bold text-lg text-slate-900">{product.name}</h3>
                                            <p className="text-cyan-600 text-xs">{product.nameEn}</p>
                                        </div>
                                        <span className="px-2 py-1 rounded bg-slate-100 text-slate-600 text-xs font-mono">
                                            {product.formula}
                                        </span>
                                    </div>
                                    <p className="text-slate-600 text-sm">{product.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg shadow-cyan-500/30"
                    >
                        製品についてご相談
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}
