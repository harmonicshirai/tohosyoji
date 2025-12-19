export default function TrustBlock() {
    return (
        <section className="py-16 sm:py-24 bg-white relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                        稟議・審査で確認される項目を、最初から明確に。
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {/* Card 1: Corporate Info */}
                    <div className="bg-slate-50 rounded-lg p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                            <span className="bg-slate-900 text-white rounded-md px-2 py-1 text-xs mr-3">法人情報</span>
                            会社概要・信頼性
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed mb-4">
                            国内メーカー向けに鉱物原料の輸入・卸販売を行っています。
                        </p>
                        <ul className="text-xs text-slate-500 space-y-2 border-t border-slate-200 pt-3">
                            <li><strong>会社名:</strong> 東方商事株式会社</li>
                            <li><strong>所在地:</strong> 東京都千代田区〇〇</li>
                            <li><strong>設立:</strong> 20XX年</li>
                            <li><strong>資本金:</strong> XX,XXX千円</li>
                        </ul>
                    </div>

                    {/* Card 2: Quality & Certificates */}
                    <div className="bg-slate-50 rounded-lg overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-40 relative">
                            {/* Use plain img tag for simplicity within component if no import */}
                            <img src="/images/quality_lab.png" alt="Quality Lab" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-slate-900/10"></div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                                <span className="bg-slate-900 text-white rounded-md px-2 py-1 text-xs mr-3">品質・証憑</span>
                                品質保証体制
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                ロット単位でCOA等の証憑を管理。用途に応じて確認項目を設定し、必要に応じ第三者分析にも対応します。
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="inline-block bg-white border border-slate-200 rounded px-2 py-1 text-xs text-slate-600">COA保管</span>
                                <span className="inline-block bg-white border border-slate-200 rounded px-2 py-1 text-xs text-slate-600">ロット追跡</span>
                                <span className="inline-block bg-white border border-slate-200 rounded px-2 py-1 text-xs text-slate-600">第三者分析(Option)</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: China Local Support */}
                    <div className="bg-slate-50 rounded-lg p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                            <span className="bg-slate-900 text-white rounded-md px-2 py-1 text-xs mr-3">現地対応</span>
                            中国2拠点体制
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed mb-4">
                            中国に2拠点（上海事務所・青島事務所）。現地での連絡・確認・出荷前調整を行い、供給の確度を高めます。
                        </p>
                        <ul className="text-xs text-slate-500 space-y-2 border-t border-slate-200 pt-3">
                            <li className="flex justify-between"><span>上海事務所:</span> <span>連絡・調整</span></li>
                            <li className="flex justify-between"><span>青島事務所:</span> <span>出荷前確認</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
