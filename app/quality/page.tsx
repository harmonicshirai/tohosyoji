export default function QualityPage() {
    return (
        <div className="bg-white">
            <div className="bg-slate-900 py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">品質保証・コンプライアンス</h1>
                    <p className="mt-4 text-slate-300">お客様の「安心」を支える、当社の品質管理体制について。</p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Quality Policy */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-slate-900 pl-4 mb-6">品質方針</h2>
                    <p className="text-slate-600 leading-relaxed">
                        当社は、鉱物原料の供給において「ロット管理」と「トレーサビリティ」を最重要視しています。<br />
                        お客様の用途（樹脂・塗料・食品包装など）に応じた基準を設定し、製造元と連携して品質の安定化に努めます。<br />
                        また、万が一の品質異常時には、迅速な隔離・原因究明・報告を行う体制を整備しています。
                    </p>
                </section>

                {/* Lot Management */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-slate-900 pl-4 mb-6">ロット管理の考え方</h2>
                    <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="text-4xl mb-4">🏷️</div>
                                <h3 className="font-bold text-lg text-slate-900 mb-2">ロットID付与</h3>
                                <p className="text-sm text-slate-600">製造・出荷単位ごとに固有IDを発行し、紐付けを行っています。</p>
                            </div>
                            <div>
                                <div className="text-4xl mb-4">📄</div>
                                <h3 className="font-bold text-lg text-slate-900 mb-2">証憑保管</h3>
                                <p className="text-sm text-slate-600">COA（分析証明書）や製造記録をロットごとにデジタル保管しています。</p>
                            </div>
                            <div>
                                <div className="text-4xl mb-4">🔍</div>
                                <h3 className="font-bold text-lg text-slate-900 mb-2">第三者分析</h3>
                                <p className="text-sm text-slate-600">必要に応じて外部機関による分析を実施し、客観性を担保します。</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Check Items Examples */}
                <section className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-slate-900 pl-4 mb-6">確認項目例（用途別）</h2>
                    <div className="overflow-hidden border border-slate-200 rounded-lg">
                        <table className="min-w-full divide-y divide-slate-200">
                            <thead className="bg-slate-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">用途</th>
                                    <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">主な確認項目</th>
                                    <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">留意点</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-slate-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-900">樹脂コンパウンド</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">粒度分布、水分、白色度、重金属</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">分散性への影響、RoHS/REACH対応</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-900">塗料・コーティング</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">吸油量、隠ぺい力、粗粒</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">塗膜の平滑性、光沢への影響</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-slate-900">製紙・セラミック</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">焼成色、化学組成（SiO2, MgO等）</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">焼成後の発色、熱収縮率</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Exception Flow */}
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-slate-900 pl-4 mb-6">異常発生時の対応フロー</h2>
                    <div className="space-y-4 max-w-2xl">
                        <div className="flex items-start">
                            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-red-100 text-red-600 font-bold text-sm mr-4">1</span>
                            <div>
                                <h3 className="font-bold text-slate-900">隔離・出荷停止</h3>
                                <p className="text-sm text-slate-600">該当ロットおよび前後ロットを物理的・システム的に隔離します。</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-red-100 text-red-600 font-bold text-sm mr-4">2</span>
                            <div>
                                <h3 className="font-bold text-slate-900">事実確認・原因調査</h3>
                                <p className="text-sm text-slate-600">在庫品の再検査および製造元への調査依頼を実施します。</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-red-100 text-red-600 font-bold text-sm mr-4">3</span>
                            <div>
                                <h3 className="font-bold text-slate-900">ご報告・対策提示</h3>
                                <p className="text-sm text-slate-600">調査結果と今後の未然防止策を報告書（8Dレポート等）にて提出します。</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
