export default function CompanyPage() {
    return (
        <div className="bg-white">
            <div className="bg-slate-900 py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">会社概要</h1>
                    <p className="mt-4 text-slate-300">東方商事株式会社の企業情報をご案内します。</p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-4xl mx-auto">
                    {/* Corporate Profile Table */}
                    <section className="mb-20">
                        <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-slate-900 pl-4 mb-8">基本情報</h2>
                        <div className="border border-slate-200 rounded-lg overflow-hidden">
                            <dl className="divide-y divide-slate-200 bg-white">
                                <div className="flex flex-col sm:flex-row p-4">
                                    <dt className="w-40 font-bold text-slate-700 flex-shrink-0">会社名</dt>
                                    <dd className="mt-1 sm:mt-0 sm:col-span-2 text-slate-900">
                                        東方商事株式会社 <span className="text-slate-500 text-sm ml-2">(英文名: XX Minerals Trading Co., Ltd.)</span>
                                    </dd>
                                </div>
                                <div className="flex flex-col sm:flex-row p-4">
                                    <dt className="w-40 font-bold text-slate-700 flex-shrink-0">設立</dt>
                                    <dd className="mt-1 sm:mt-0 sm:col-span-2 text-slate-900">20XX年X月X日</dd>
                                </div>
                                <div className="flex flex-col sm:flex-row p-4">
                                    <dt className="w-40 font-bold text-slate-700 flex-shrink-0">代表者</dt>
                                    <dd className="mt-1 sm:mt-0 sm:col-span-2 text-slate-900">代表取締役 〇〇 〇〇</dd>
                                </div>
                                <div className="flex flex-col sm:flex-row p-4">
                                    <dt className="w-40 font-bold text-slate-700 flex-shrink-0">資本金</dt>
                                    <dd className="mt-1 sm:mt-0 sm:col-span-2 text-slate-900">XX,XXX千円</dd>
                                </div>
                                <div className="flex flex-col sm:flex-row p-4">
                                    <dt className="w-40 font-bold text-slate-700 flex-shrink-0">事業内容</dt>
                                    <dd className="mt-1 sm:mt-0 sm:col-span-2 text-slate-900">
                                        <ul className="list-disc list-inside space-y-1">
                                            <li>鉱物原料（タルク、炭酸カルシウム等）の輸入・販売</li>
                                            <li>化学工業薬品の販売</li>
                                            <li>物流手配・倉庫保管業務</li>
                                            <li>品質管理支援・コンサルティング</li>
                                        </ul>
                                    </dd>
                                </div>
                                <div className="flex flex-col sm:flex-row p-4">
                                    <dt className="w-40 font-bold text-slate-700 flex-shrink-0">主要取引銀行</dt>
                                    <dd className="mt-1 sm:mt-0 sm:col-span-2 text-slate-900">〇〇銀行、〇〇銀行</dd>
                                </div>
                            </dl>
                        </div>
                    </section>

                    {/* Locations */}
                    <section className="mb-20">
                        <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-slate-900 pl-4 mb-8">事業所一覧</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* HQ */}
                            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                                <h3 className="font-bold text-lg text-slate-900 mb-2">本社</h3>
                                <p className="text-slate-600 mb-4">〒100-0000 東京都千代田区〇〇 1-2-3</p>
                                {/* Placeholder Map */}
                                <div className="h-48 bg-slate-200 rounded flex items-center justify-center text-slate-500 text-sm">Target Map Area</div>
                            </div>

                            {/* China Setup */}
                            <div className="space-y-6">
                                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                                    <h3 className="font-bold text-lg text-slate-900 mb-2">上海事務所</h3>
                                    <p className="text-slate-600">上海市浦東新区〇〇路 88号 XXビル 10F</p>
                                    <p className="text-xs text-slate-500 mt-2">（現地調達・物流調整）</p>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                                    <h3 className="font-bold text-lg text-slate-900 mb-2">青島事務所</h3>
                                    <p className="text-slate-600">青島市黄島区〇〇大道 123号 XXセンター 5F</p>
                                    <p className="text-xs text-slate-500 mt-2">（品質確認・船積管理）</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Compliance / Message */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-slate-900 pl-4 mb-6">コンプライアンス方針</h2>
                        <div className="bg-white p-6 rounded-lg border border-slate-200">
                            <p className="text-slate-600 leading-relaxed">
                                当社は、法令遵守はもちろんのこと、社会倫理に適合した企業活動を行います。<br />
                                サプライチェーン全体での人権尊重・環境配慮に取り組み、持続可能な調達を目指します。<br />
                                取引先の選定においては、品質・コストだけでなく、コンプライアンス体制も重要な評価項目としています。
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
