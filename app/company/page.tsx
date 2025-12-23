'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CompanyPage() {
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
                        COMPANY
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                        会社<span className="gradient-text">概要</span>
                    </h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        中国産鉱物原料の専門商社として、品質と供給の安定をお届けします。
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                {/* Company Info */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">基本情報</h2>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-slate-200">
                        <table className="min-w-full">
                            <tbody className="divide-y divide-slate-100">
                                {[
                                    { label: '会社名', value: '東方商事株式会社', sub: 'Tohosyoji Co., Ltd.' },
                                    { label: '所在地', value: '〒100-0000 東京都千代田区〇〇 1-2-3' },
                                    { label: '設立', value: '20XX年' },
                                    { label: '資本金', value: 'XX,XXX千円' },
                                    { label: '代表者', value: '代表取締役 〇〇 〇〇' },
                                    { label: '事業内容', value: '鉱物原料（タルク等）の輸入・卸販売／調達・物流手配／品質確認支援' },
                                    { label: '主要取引銀行', value: '〇〇銀行 △△支店' },
                                ].map((row, index) => (
                                    <tr key={index} className="hover:bg-slate-50 transition-colors">
                                        <th className="px-6 py-5 text-left text-sm font-semibold text-slate-900 bg-slate-50 w-1/4">
                                            {row.label}
                                        </th>
                                        <td className="px-6 py-5 text-sm text-slate-600">
                                            {row.value}
                                            {row.sub && <span className="block text-slate-400 text-xs mt-1">{row.sub}</span>}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* China Offices */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">中国拠点</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                name: '上海事務所',
                                address: '上海市浦東新区〇〇路 88号 XXビル 10F',
                                role: '連絡・調整',
                                desc: '中国国内サプライヤーとの連絡窓口。価格交渉、納期調整、品質情報の収集を担当。',
                            },
                            {
                                name: '青島事務所',
                                address: '青島市黄島区〇〇大道 123号 XXセンター 5F',
                                role: '出荷前確認',
                                desc: '出荷前の現物確認、梱包状態チェック、輸送手配のサポートを担当。',
                            },
                        ].map((office, index) => (
                            <div key={index} className="group relative rounded-2xl overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800" />
                                <div className="absolute inset-0 bg-grid opacity-10" />
                                <div className="relative p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                                        <h3 className="text-xl font-bold text-white">{office.name}</h3>
                                        <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-xs">
                                            {office.role}
                                        </span>
                                    </div>
                                    <p className="text-slate-400 text-sm mb-4">{office.address}</p>
                                    <p className="text-slate-300 text-sm">{office.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Message */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">代表メッセージ</h2>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />
                        <div className="relative p-8 sm:p-12 border border-slate-200 rounded-2xl">
                            <svg className="w-12 h-12 text-cyan-500/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                当社は、中国産鉱物原料の専門商社として、お客様の調達における「不安」を「安心」に変えることを使命としています。
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                海外調達には、品質のばらつき、供給の不安定さ、コミュニケーションの難しさなど、様々なリスクが伴います。
                                私たちは、中国2拠点体制による現地対応力と、ロット管理・証憑管理を軸とした品質保証体制で、これらのリスクを最小化します。
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                「安さ」だけでなく、「調達の不安を減らす仕組み」を提供することで、お客様のビジネスに貢献してまいります。
                            </p>
                            <div className="mt-8 pt-6 border-t border-slate-200">
                                <p className="text-slate-900 font-bold">代表取締役 〇〇 〇〇</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* History */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">沿革</h2>
                    </div>

                    <div className="relative">
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500" />
                        
                        <div className="space-y-8">
                            {[
                                { year: '20XX年', event: '東方商事株式会社 設立' },
                                { year: '20XX年', event: '上海事務所 開設' },
                                { year: '20XX年', event: '青島事務所 開設' },
                                { year: '20XX年', event: '品質管理体制の強化（ロット管理システム導入）' },
                            ].map((item, index) => (
                                <div key={index} className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                    <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                                        <span className="text-cyan-600 font-bold">{item.year}</span>
                                    </div>
                                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 border-4 border-white shadow-lg" />
                                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                                            <span className="md:hidden text-cyan-600 font-bold text-sm">{item.year}</span>
                                            <p className="text-slate-700">{item.event}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg shadow-cyan-500/30"
                    >
                        お問い合わせ
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}
