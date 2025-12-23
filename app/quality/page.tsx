'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function QualityPage() {
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
                        QUALITY ASSURANCE
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                        品質保証・<span className="gradient-text">コンプライアンス</span>
                    </h1>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        お客様の「安心」を支える、当社の品質管理体制について。
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                {/* Quality Policy */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">品質方針</h2>
                    </div>
                    <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200">
                        <p className="text-slate-600 leading-relaxed">
                            当社は、鉱物原料の供給において「ロット管理」と「トレーサビリティ」を最重要視しています。
                            お客様の用途（樹脂・塗料・食品包装など）に応じた基準を設定し、製造元と連携して品質の安定化に努めます。
                            また、万が一の品質異常時には、迅速な隔離・原因究明・報告を行う体制を整備しています。
                        </p>
                    </div>
                </section>

                {/* Lot Management */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">ロット管理の考え方</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                    </svg>
                                ),
                                title: 'ロットID付与',
                                desc: '製造・出荷単位ごとに固有IDを発行し、紐付けを行っています。',
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                ),
                                title: '証憑保管',
                                desc: 'COA（分析証明書）や製造記録をロットごとにデジタル保管しています。',
                            },
                            {
                                icon: (
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                ),
                                title: '第三者分析',
                                desc: '必要に応じて外部機関による分析を実施し、客観性を担保します。',
                            },
                        ].map((item, index) => (
                            <div key={index} className="group relative rounded-2xl p-8 bg-white border border-slate-200 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/10 transition-all">
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 mb-6 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Check Items */}
                <section className="mb-24">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">確認項目例（用途別）</h2>
                    </div>
                    <div className="overflow-hidden rounded-2xl border border-slate-200">
                        <table className="min-w-full divide-y divide-slate-200">
                            <thead className="bg-gradient-to-r from-slate-900 to-slate-800">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">用途</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">主な確認項目</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">留意点</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-slate-100">
                                {[
                                    { use: '樹脂コンパウンド', items: '粒度分布、水分、白色度、重金属', notes: '分散性への影響、RoHS/REACH対応' },
                                    { use: '塗料・コーティング', items: '吸油量、隠ぺい力、粗粒', notes: '塗膜の平滑性、光沢への影響' },
                                    { use: '製紙・セラミック', items: '焼成色、化学組成（SiO2, MgO等）', notes: '焼成後の発色、熱収縮率' },
                                ].map((row, index) => (
                                    <tr key={index} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium">
                                                {row.use}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-slate-600">{row.items}</td>
                                        <td className="px-6 py-4 text-sm text-slate-600">{row.notes}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Exception Flow */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">異常発生時の対応フロー</h2>
                    </div>
                    <div className="space-y-6 max-w-2xl">
                        {[
                            { step: 1, title: '隔離・出荷停止', desc: '該当ロットおよび前後ロットを物理的・システム的に隔離します。' },
                            { step: 2, title: '事実確認・原因調査', desc: '在庫品の再検査および製造元への調査依頼を実施します。' },
                            { step: 3, title: 'ご報告・対策提示', desc: '調査結果と今後の未然防止策を報告書（8Dレポート等）にて提出します。' },
                        ].map((item, index) => (
                            <div key={index} className="flex items-start gap-6 p-6 rounded-xl bg-gradient-to-r from-red-50 to-orange-50 border border-red-100">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white font-bold">
                                    {item.step}
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                                    <p className="text-slate-600 text-sm">{item.desc}</p>
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
                        品質管理についてご相談
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}
