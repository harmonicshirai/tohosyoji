export default function CompanyShort() {
    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                        会社概要
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto bg-slate-50 rounded-lg overflow-hidden border border-slate-200">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">基本情報</h3>
                            <dl className="space-y-4 text-sm">
                                <div className="flex flex-col sm:flex-row">
                                    <dt className="w-24 font-bold text-slate-700">会社名</dt>
                                    <dd className="text-slate-600 flex-1">〇〇鉱物商事株式会社<br /><span className="text-xs text-slate-400">(XX Minerals Trading Co., Ltd.)</span></dd>
                                </div>
                                <div className="flex flex-col sm:flex-row">
                                    <dt className="w-24 font-bold text-slate-700">所在地</dt>
                                    <dd className="text-slate-600 flex-1">〒100-0000 東京都千代田区〇〇 1-2-3</dd>
                                </div>
                                <div className="flex flex-col sm:flex-row">
                                    <dt className="w-24 font-bold text-slate-700">事業内容</dt>
                                    <dd className="text-slate-600 flex-1">鉱物原料（タルク等）の輸入・卸販売／調達・物流手配／品質確認支援</dd>
                                </div>
                            </dl>
                        </div>

                        <div className="bg-slate-100 p-8 border-t md:border-t-0 md:border-l border-slate-200 relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10">
                                <img src="/images/logistics_ship.png" alt="Logistics" className="w-full h-full object-cover" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">中国拠点</h3>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-bold text-slate-800 mb-1">上海事務所</h4>
                                        <p className="text-sm text-slate-600">上海市浦東新区〇〇路 88号 XXビル 10F</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800 mb-1">青島事務所</h4>
                                        <p className="text-sm text-slate-600">青島市黄島区〇〇大道 123号 XXセンター 5F</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
