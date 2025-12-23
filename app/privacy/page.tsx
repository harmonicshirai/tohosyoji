'use client';

import { useEffect, useState } from 'react';

export default function PrivacyPage() {
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
                        PRIVACY POLICY
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                        プライバシー<span className="gradient-text">ポリシー</span>
                    </h1>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="max-w-3xl mx-auto">
                    <div className="prose prose-slate max-w-none">
                        {[
                            {
                                title: '1. 個人情報の取得',
                                content: '当社は、お問い合わせフォーム等を通じて、お名前、会社名、メールアドレス等の個人情報を取得することがあります。取得にあたっては、利用目的を明示し、適正な方法で行います。',
                            },
                            {
                                title: '2. 利用目的',
                                content: '取得した個人情報は、以下の目的で利用いたします。',
                                list: [
                                    'お問い合わせへの回答、ご連絡',
                                    '製品・サービスに関する情報提供',
                                    '契約の履行、アフターサービス',
                                    '当社サービス改善のための分析',
                                ],
                            },
                            {
                                title: '3. 第三者提供',
                                content: '当社は、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。',
                            },
                            {
                                title: '4. 安全管理措置',
                                content: '当社は、個人情報の漏えい、滅失、毀損を防止するため、適切な安全管理措置を講じます。',
                            },
                            {
                                title: '5. 開示・訂正・削除',
                                content: 'ご本人からの個人情報の開示、訂正、削除等のご請求には、合理的な範囲で速やかに対応いたします。',
                            },
                            {
                                title: '6. お問い合わせ窓口',
                                content: '個人情報の取扱いに関するお問い合わせは、当社お問い合わせフォームよりご連絡ください。',
                            },
                            {
                                title: '7. 改定',
                                content: '本ポリシーは、法令の改正や当社事業内容の変更等に応じて、予告なく改定することがあります。',
                            },
                        ].map((section, index) => (
                            <div key={index} className="mb-12">
                                <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">
                                        {index + 1}
                                    </span>
                                    {section.title.replace(/^\d+\.\s*/, '')}
                                </h2>
                                <p className="text-slate-600 leading-relaxed mb-4">{section.content}</p>
                                {section.list && (
                                    <ul className="space-y-2 ml-4">
                                        {section.list.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-600">
                                                <svg className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}

                        <div className="mt-16 p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200">
                            <p className="text-sm text-slate-500 text-center">
                                制定日：20XX年X月X日<br />
                                東方商事株式会社
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
