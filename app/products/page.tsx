export default function ProductsPage() {
    return (
        <div className="bg-white">
            <div className="bg-slate-900 py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">取扱製品</h1>
                    <p className="mt-4 text-slate-300">工業用鉱物を中心に、幅広いラインナップをご用意しています。</p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Product 1: Talc */}
                <section className="mb-24" id="talc">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="lg:w-1/3">
                            <div className="aspect-square bg-slate-200 rounded-lg flex items-center justify-center text-slate-400 text-xl font-bold mb-6">
                                Talc Image
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-2">タルク（滑石）</h2>
                            <p className="text-slate-600 mb-4">
                                層状構造を持つケイ酸塩鉱物。化学的安定性、潤滑性、電気絶縁性に優れます。
                            </p>
                            <div className="bg-slate-50 p-4 rounded border border-slate-200">
                                <h4 className="font-bold text-sm text-slate-700 mb-2">主な用途</h4>
                                <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                                    <li>樹脂（PP/PE）フィラー</li>
                                    <li>塗料・パテ</li>
                                    <li>製紙・パルプ</li>
                                    <li>ゴム製品</li>
                                    <li>セラミック原料</li>
                                </ul>
                            </div>
                        </div>

                        <div className="lg:w-2/3">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">代表グレード・仕様例</h3>
                            <p className="text-sm text-slate-500 mb-4">※ 下記は一例です。お客様の要求仕様に合わせて最適なグレードを選定・提案いたします。</p>

                            <div className="overflow-x-auto">
                                <table className="min-w-full text-sm text-left text-slate-600">
                                    <thead className="bg-slate-50 text-slate-900 font-bold">
                                        <tr>
                                            <th className="px-4 py-2">グレード</th>
                                            <th className="px-4 py-2">平均粒子径 (D50)</th>
                                            <th className="px-4 py-2">白色度</th>
                                            <th className="px-4 py-2">特長・用途</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr>
                                            <td className="px-4 py-3 font-medium">Standard-A</td>
                                            <td className="px-4 py-3">10 - 15 μm</td>
                                            <td className="px-4 py-3">90% min</td>
                                            <td className="px-4 py-3">汎用樹脂・工業用スタンダード</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 font-medium">Fine-2000</td>
                                            <td className="px-4 py-3">4 - 6 μm</td>
                                            <td className="px-4 py-3">93% min</td>
                                            <td className="px-4 py-3">塗料・薄膜フィルム向け微粉</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 font-medium">Ultra-Fine</td>
                                            <td className="px-4 py-3">1.5 - 3 μm</td>
                                            <td className="px-4 py-3">95% min</td>
                                            <td className="px-4 py-3">高精密樹脂・電子材料向け</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 font-medium">Calcined (焼成)</td>
                                            <td className="px-4 py-3">Varies</td>
                                            <td className="px-4 py-3">90% min</td>
                                            <td className="px-4 py-3">セラミック・耐熱用途</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">供給形態</h3>
                                <div className="flex gap-4">
                                    <span className="inline-block bg-white border border-slate-300 rounded px-3 py-1 text-sm text-slate-700">25kg クラフト袋</span>
                                    <span className="inline-block bg-white border border-slate-300 rounded px-3 py-1 text-sm text-slate-700">500kg / 1000kg フレコン</span>
                                    <span className="inline-block bg-white border border-slate-300 rounded px-3 py-1 text-sm text-slate-700">バルク応相談</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Other Products */}
                <section>
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 border-l-4 border-slate-900 pl-4">その他取扱製品</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                            <h3 className="font-bold text-lg text-slate-900 mb-2">炭酸カルシウム</h3>
                            <p className="text-sm text-slate-600 mb-3">重質・軽質各種。ゴム、プラスチック、塗料等の充填剤として。</p>
                            <span className="text-xs font-semibold text-slate-500 bg-white px-2 py-1 rounded">CaCO3</span>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                            <h3 className="font-bold text-lg text-slate-900 mb-2">硫酸バリウム</h3>
                            <p className="text-sm text-slate-600 mb-3">高比重、化学的不活性。塗料、プラスチック、ブレーキ材等に。</p>
                            <span className="text-xs font-semibold text-slate-500 bg-white px-2 py-1 rounded">BaSO4</span>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                            <h3 className="font-bold text-lg text-slate-900 mb-2">マイカ（雲母）</h3>
                            <p className="text-sm text-slate-600 mb-3">湿式・乾式。高アスペクト比による補強効果、絶縁・制振用途。</p>
                            <span className="text-xs font-semibold text-slate-500 bg-white px-2 py-1 rounded">Mica</span>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
